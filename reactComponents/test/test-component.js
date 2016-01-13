var React = require('react');

var box = React.createClass({
	render: function() {
		return (
			<div style={{padding: 10 + 'px'}}>
				{this.props.text}
			</div>
		);
	}
});

module.exports = box;



