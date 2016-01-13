var React = require('react');


var CgStoryBoxHeader = React.createClass({
	render: function() {
		return (
			<header>
				<div className='content'>
		        	<h4>
		        		{this.props.text}
		        	</h4>
	          	</div>
          	</header>		
		);
	}
});

module.exports = CgStoryBoxHeader;