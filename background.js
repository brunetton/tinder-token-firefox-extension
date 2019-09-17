function logURL(requestDetails) {
  console.log("Chargement : " + requestDetails.url);
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["https://www.facebook.com/v2.10/dialog/oauth/confirm/"]
});
