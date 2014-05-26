# digitaledgeit-filter-chain

A simple filter chain for running multiple filters on an input value.

## Methods

### FilterChain(filters)

Create a new filter chain from an array of filter functions.

### add(filter)

Add a filter function.

Synchronous `function(value) { return value; }`,  or asynchronous `function(value, cb) { cb(value); }`.


### filter(value, callback)

Run each filter on the value and then call the callback with the filtered value.

## Example

See test/test.json