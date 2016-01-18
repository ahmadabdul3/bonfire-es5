'use strict'
//var isClientside = require('../isClientSide/isClientside.js');

var ajax = {
	request: function (url, method, data, success, error) {

		//isClientside.runClientside(ajax(url, method, data, success, error));

		//function ajax(aurl, amethod, adata, asuccess, aerror) {
			$.ajax({
			  url: url,
			  method: method,
			  data: data
			})
			.done(function(data) {
				if(success && success.length > 0) {
					success(data);
				} else {
					ajaxSuccess(data);
				}
			})
			.fail(function(jqXHR, errorString, exception) {
				if(error && error.length > 0) {
					error(jqXHR, errorString, exception)
				} else {
					ajaxError(jqXHR, errorString, exception);
				}
			});
			function ajaxSuccess(data) {
				console.log('success: ' + data);
			}
			function ajaxError(jqXHR, errorString, exception) {
				console.error('error: ' + errorString);
			}
		//}
	},
	methods: {
		get: 'GET',
		post: 'POST',
		put: 'PUT',
		delete: 'DELETE'
	}
}

module.exports = ajax;

