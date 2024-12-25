
chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({ url: "*://arxiv.org/*" }, (tabs) => {
    tabs.forEach((tab) => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"]
      });
    });
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.pdfUrl) {
    chrome.downloads.download({ url: message.pdfUrl }, (downloadId) => {
      chrome.tabs.remove(sender.tab.id);
      sendResponse({ status: 'success' });
    });
  }
  return true;
});
