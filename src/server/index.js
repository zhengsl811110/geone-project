import $ from 'jquery'
export default class Server {
    static get(opt) {
        return new Promise(function (resolve, reject) {
            $.getJSON(opt.url, opt.data || {}, function (res) {
                if (res.status === 1)
                    resolve(res);
                else
                    reject(res.message);
            });
        });
    }

    static post(opt) {
        return new Promise(function (resolve, reject) {
            $.post(opt.url, opt.data || {}, function (res) {
                if (res.status === 1)
                    resolve(res);
                else
                    reject(res.message);
            });
        });
    }
}