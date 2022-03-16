# WebHook-sender
A simple script to send discord messages VIA a webhook.

## Usage

```js
let whData = {
    "usr": "",
    "avd": "",
    "cnt": ""
}

sendMessage(webHookURL, {
	"username":   whData.usr, /* webhook username    */
	"avatar_url": whData.avd, /* webhook avatar URL  */
	"content":    whData.cnt  /* webhook content/msg */
});
```
