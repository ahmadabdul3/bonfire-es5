var React = require('react');
var ReactDom = require('react-dom');

var Component = React.createClass({
	render: function() {
		return (
			<div>
	        	<div className='story-box'>
	        		test cg story
	        	</div>
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

