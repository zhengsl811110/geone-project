/**
 * Created by zhengsl on 2017/5/6.
 */


Array.prototype.remove= function (id) {
  if (this.length > 0)
    this.splice(this.indexOf(id), 1);
};
Array.prototype.clear= function () {
  this.length = 0;
};
Array.prototype.findByName= function (name) {
  var object=null;
  this.forEach(function (item) {
    if (item.name == name){
      object = item;
      return false;
    }
  });
  return object;
};
Array.prototype.filterByPageIndex= function (page) {
  var array = [];
  for (var i = 10 * (page - 1), len = this.length; i < len; i++) {
    if (len <= page * 10)
      array.push(this[i]);
    else if (i < page * 10) {
      array.push(this[i]);
    }
  }
  return array;
};
/*String原型扩展*/
String.prototype.clear= function () {
  return this.replace(/[\r\n]/g, "");
};




