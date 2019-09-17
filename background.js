function logURL(request) {
  console.log("Chargement : " + request);
}

// browser.webRequest.onCompleted.addListener(logURL, {});

function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();

  filter.ondata = async event => {
    let str = decoder.decode(event.data, { stream: true });
    const match = str.match(/token=(\w+)/);
    if (match) {
      token = match[1];
      console.log("Found token: ", token);
      await navigator.clipboard.writeText(token);
    }
    filter.disconnect();
  };

  return {};
}
browser.webRequest.onBeforeRequest.addListener(
  listener,
  {
    urls: ["https://www.facebook.com/v2.10/dialog/oauth/confirm/"]
  },
  ["blocking"]
);
