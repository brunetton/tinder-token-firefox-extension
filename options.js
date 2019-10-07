function saveOptions(e) {
  e.preventDefault()
  browser.storage.sync.set({
    custom_url: document.querySelector("#custom_url").value,
  })
}

function restoreOptions() {
  function setCurrentChoice(result) {
    document.querySelector("#custom_url").value = result.custom_url || ""
  }

  function onError(error) {
    console.log(`Error: ${error}`)
  }

  var getting = browser.storage.sync.get("custom_url")
  getting.then(setCurrentChoice, onError)
}

document.addEventListener("DOMContentLoaded", restoreOptions)
document.querySelector("form").addEventListener("submit", saveOptions)
