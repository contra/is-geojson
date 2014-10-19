var types = [
    // geometries
    'Polygon',
    'Point',
    'MultiPoint',
    'MultiLineString',
    'MultiPolygon',
    'GeometryCollection',

    'Feature',
    'FeatureCollection']
    .reduce(function(memo, t) {
        memo[t] = true;
        return memo;
    }, {});

module.exports = function(obj) {
  if (typeof obj !== 'object') return false;
  if (!obj.type) return false;
  if (!types[obj.type]) return false;
  return true;
};
