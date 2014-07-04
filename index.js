/**
 * A filter chain
 * @constructor
 * @params  {Array.<Function(*):Boolean>} filters
 */
function FilterChain(filters) {

	//create a new instance of the chain
	if (!(this instanceof FilterChain)) {
		return new FilterChain(filters);
	}

	//initialise the chain with the provided filters
	this.filters = filters || [];
	if (filters) {
		for (var i = 0; i < filters.length; ++i) {
			this.add(filters[i]);
		}
	}

}

/**
 * Adds a filter
 * @param   {function}      filter
 * @returns {FilterChain}
 */
FilterChain.prototype.add = function (filter) {
	this.filters.push(filter);
	return this;
}

/**
 * Filters a value
 * @param   {*}             value       The value to filter
 * @param   {function}      callback    The callback to call when filtering is complete
 * @returns {FilterChain}
 */
FilterChain.prototype.filter = function (value, callback) {
	var self = this, count = 0;

	/**
	 * Checks whether the last callback has been called
	 * @param   {*} val
	 */
	function finish(val) {
		value = val;
		if (++count >= self.filters.length) {
			callback(value);
		}
	}

	//run each filter on the value
	for (var i = 0; i < this.filters.length; ++i) {

		var filter = this.filters[i];

		if (filter.length > 1) {
			filter(value, finish); //async
		} else {
			finish(filter(value)); //sync
		}

	}

	return this;
}

module.exports = FilterChain;
