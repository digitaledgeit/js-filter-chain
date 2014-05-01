/**
 * A collection of filters
 * @constructor
 */
function FilterCollection(filters) {
  this.filters = [];
  if (filters) {
    for (var i=0; i<filters.length; ++i) {
      this.add(filters[i]);
    }
  }
}

/**
 * Adds a filter to the collection
 * @param   {function}  filter
 * @returns {FilterCollection}
 */
FilterCollection.prototype.add = function(filter) {
  this.filters.push(filter);
  return this;
}

/**
 * Run all the filters on the value
 * @param   {*} value
 * @returns {*}
 */
FilterCollection.prototype.filter = function(value) {
  for (var i=0; i<this.filters.length; ++i) {
    value = this.filters[i](value);
  }
  return value;
}

module.exports = FilterCollection;


