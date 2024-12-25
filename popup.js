
document.getElementById('downloadPdfs').addEventListener('click', () => {
  chrome.tabs.query({ url: "*://arxiv.org/*" }, (tabs) => {
    tabs.forEach((tab) => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"]
      });
    });
  });
});
