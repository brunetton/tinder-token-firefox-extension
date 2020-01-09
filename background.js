let customUrl

// Preferences reading

debugger
var getting = browser.storage.sync.get("custom_url")

getting.then(
  function(item) {
    if (item.custom_url) {
      customUrl = item.custom_url
      console.log(`Read custom from preferences: ${customUrl}`)
    }
  },
  function(e) {
    console.log(`Error: ${e}`)
  }
)

function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId)
  let decoder = new TextDecoder("utf-8")
  let encoder = new TextEncoder()

  filter.ondata = async event => {
    let str = decoder.decode(event.data, { stream: true })
    const match = str.match(/token=(\w+)/)
    if (match) {
      token = match[1]
      await navigator.clipboard.writeText(token)
      // POST token to custom app, if defined
      if (customUrl) {
        const completeCustomUrl = customUrl.replace("${token}", token)
        console.log(`POST token on "${completeCustomUrl}"`)
        fetch(completeCustomUrl, { method: "POST" })
      }
      // Reply the token to user
      filter.write(encoder.encode(token))
    } else {
      alert("Error: didn't found token !")
    }
    filter.disconnect()
  }

  return {}
}
browser.webRequest.onBeforeRequest.addListener(
  listener,
  {
    urls: ["https://*.facebook.com/*/dialog/oauth/confirm/"],
  },
  ["blocking"]
)
