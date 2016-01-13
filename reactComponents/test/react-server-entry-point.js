var React = require('react');
var ReactDom = require('react-dom');
var Box = require('./test-component.js');

var Component = React.createClass({
	render: function() {
		return (
			<div>
	        	<Box text='testing react server side'/>
	      		<script src="/javascripts/bundle.js"></script>
          	</div>		
		);
	}
});

if(typeof window !== 'undefined') {
  window.onload = function() {
    ReactDom.render(<Component/>, document.getElementById('react-test-component-box'));
  }
}

module.exports = Component;

