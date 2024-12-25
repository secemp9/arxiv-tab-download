
(function() {
  const isAbstractPage = window.location.href.includes('/abs/');
  let pdfUrl;

  if (isAbstractPage) {
    const absUrl = window.location.href;
    pdfUrl = absUrl.replace('/abs/', '/pdf/') + ".pdf";
  } else {
    const pdfLink = document.querySelector('a[title="Download All PDF"]');
    if (pdfLink) {
      pdfUrl = pdfLink.href;
    } else {
      pdfUrl = window.location.href;
    }
  }

  if (pdfUrl) {
    chrome.runtime.sendMessage({ pdfUrl }, (response) => {
      if (response && response.status === 'success') {
        window.close();
      }
    });
  }
})();
