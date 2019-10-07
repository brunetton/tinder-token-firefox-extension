# Get Facebook API token firefox extension

This extension allows to get (and optionnaly POST to a custom url) a Facebook token for Tinder API by a simple & quick way (using browser and **manual** action)

## How to use:

- install extension (`web-ext-artifacts/tinder_token_extension-[...].xpi`)
- goto [this url](https://www.facebook.com/v2.6/dialog/oauth?redirect_uri=fb464891386855067%3A%2F%2Fauthorize%2F&state=%7B%22challenge%22%3A%22q1WMwhvSfbWHvd8xz5PT6lk6eoA%253D%22%2C%220_auth_logger_id%22%3A%2254783C22-558A-4E54-A1EE-BB9E357CC11F%22%2C%22com.facebook.sdk_client_state%22%3Atrue%2C%223_method%22%3A%22sfvc_auth%22%7D&scope=user_birthday%2Cuser_photos%2Cuser_education_history%2Cemail%2Cuser_relationship_details%2Cuser_friends%2Cuser_work_history%2Cuser_likes&response_type=token%2Csigned_request&default_audience=friends&return_scopes=true&auth_type=rerequest&client_id=464891386855067&ret=login&sdk=ios&logger_id=54783C22-558A-4E54-A1EE-BB9E357CC11F&source=post_page)
- click on "OK" button in Facebook OAuth dialog

![OAuth dialog](auth.jpg)

- the extension intercepts Facebook answer and
  - get Facebook token
  - copy it to clipboard
  - display it in the answer page
  - POST it to custom API if defined in extension preferences (ex: `http://localhost:3000/set_token?token=${token}`)
