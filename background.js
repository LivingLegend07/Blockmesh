chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ key: "Hello, World!" }, () => {
      console.log("Value is set to 'Hello, World!'");
    });
  });
  