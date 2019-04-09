# Responsive-YT-Video
This JS script helps to make YouTube IFrames responsive.
> For the functionality of this script JQuery is required.

## Usage HTML Attribute Script (JQuery Required)
```html
<iframe src="..." ytv ytv-size="16:9"></iframe>
```
You only need to define the ***ytv*** tag on your html iframe element. The ***ytv-size*** element is optional but not required. If the ***ytv-size*** element is not defined the default video size is **16:9**.

----

Video Sizes:
> 16:9 (16/9)

> 21:9 (21/9)

> 4:3 (4/3)

> 1:1 (1/1)

## Usage JQuery Plugin
```js
$('iframe#your-youtube-iframe').rytv({size:'19:9'});
```
[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Q98R2QXXMTUF6&source=url)
