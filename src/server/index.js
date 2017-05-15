import $ from 'jquery'
export default class Server {
  static get(opt) {
    return new Promise(function (resolve, reject) {
      $.getJSON(encodeURI(opt.url), opt.data || {}, function (res) {
        if(typeof(res)==='string') {
          resolve(res);
          return false;
        }

        if (res.status === 1) {
          resolve(res);
        }
        else {
          reject(res.message);
        }
      });
    });
  }



  static post(opt) {
    return new Promise(function (resolve, reject) {
      $.post(encodeURI(opt.url), opt.data || {}, function (res) {
        if(typeof(res)==='string') {
          resolve(res);
          return false;
        }

        if (res.status === 1) {
          resolve(res);
        }
        else {
          reject(res.message);
        }
      });
    });
  }

  static postText(opt) {
    return new Promise(function (resolve, reject) {
      $.post(encodeURI(opt.url), opt.data || {}, function (res) {
        if(typeof(res)==='string') {
          resolve(res);
          return false;
        }

        if (res.status === 1) {
          resolve(res);
        }
        else {
          reject(res.message);
        }
      });
    });
  }
}
