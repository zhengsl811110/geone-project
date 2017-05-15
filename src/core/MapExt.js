/**
 * Created by zhengsl on 2017/5/6.
 */
export function mapExt(map) {
  map.initExtent = map.extent;
  map.extLayer = [];
  map.getExtLayer = function (layerId) {
    if (this.extLayer.length == 0)return null;
    var layer = null;
    this.extLayer.forEach(function (c) {
      if (c.id.toLowerCase() === layerId.toLowerCase()) {
        layer = c.layer;
        return false;
      }
    });
    return layer;
  };
  map.removeExtLayer = function (layer) {
    if (layer)
      layer.clean();
  };
};
