var React = require('react');
var UserIconWithNameSmall = require('../userIconWithNameSmall/UserIconWithNameSmall.js');


var CgStoryBoxHeader = React.createClass({
	render: function() {
		return (
			<header>
				<div className='content'>
					<UserIconWithNameSmall image={this.props.userImage} name={this.props.userName}/>
		        	<h4>
		        		{this.props.text}
		        	</h4>
	          	</div>
          	</header>		
		);
	}
});

module.exports = CgStoryBoxHeader;