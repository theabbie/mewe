var axios = require("axios");
var fd = require("form-data");
var fs = require("fs");

module.exports = class Mewe {
  constructor() {
    this.root = 'https://mewe.com/api/v2';
  }

  addToken(token) {
    this.token = token; 
  }

  async post(text) {
    var res = await axios({
      url: this.root + '/home/post',
      method: 'POST',
      data: {
        "text": text,
        "existingFileIds": [],
        "mediaIds": [],
        "public": true,
        "closeFriends": false
      },
      headers: {
        authorization: 'Sgrouples accessToken= ' + this.token 
      }
    });
    return res.data;
  }

  async upload(path) {
     var data = new fd();
     data.append("file",fs.createReadStream(path));
     var id = await axios({
       url: this.root + '/photo/pt',
       method: 'POST',
       data: data,
       headers: {
         authorization: 'Sgrouples accessToken= ' + this.token,
	 ...data.getHeaders()
       }
     });
     return id.data.id;
  }
}
