'use strict'

var isClientside = {
	runClientside: function(funcToRun) {
		if(typeof window !== 'undefined') {
  			return funcToRun();
  		}
	}
}

module.exports = isClientside;