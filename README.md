# Mewe API

![Mewe](https://user-images.githubusercontent.com/17960677/102456756-b0fb4b00-4067-11eb-895d-fbf1305a9aee.png)

>**Unofficial Mewe API**

## Example

The Following Code snipet will help you understand how to use this.

```js
var Mewe = require("mewe");
var mewe = new Mewe();

(async function() {
  mewe.addToken(token); 
  // unfortunately, Mewe uses hcaptcha while logging in, so, it can't be logged in through script, you need to find out your access token
  await mewe.getProfile(); // Get your profile
  await mewe.post("hello world",media_id); // Post Text
  var media_id = await mewe.upload("path"); // upload image
});
```

## Contributing

Thank you for your interest in contributing, If you feel like there's something missing or any new feature can be added, just create a PR and I will see the rest.

## Help

You can contact me on social media, Everything about me can be found [here](https://theabbie.github.io)

## Installation

### Requirements

* Node.Js installed

### Dev Dependencies

* Axios
* Form-Data

## Credits

* [Mewe](https://play.google.com/store/apps/details?id=com.mewe) For Creating an excellent platform.

## Contact

Contact me anywhere, just visit [my portfolio](https://theabbie.github.io)

## License

This project is licensed under MIT License, See [LICENSE](/LICENSE) for more information

