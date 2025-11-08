chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "capture") {
    const selection = window.getSelection().toString();
    sendResponse({ selection, url: window.location.href, html: document.body.innerHTML });
  }
});
