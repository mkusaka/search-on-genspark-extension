chrome.omnibox.onInputEntered.addListener((text) => {
  const queryUrl = `https://www.genspark.ai/search?query=${encodeURIComponent(text)}`;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.update(tabs[0].id, { url: queryUrl });
  });
});
