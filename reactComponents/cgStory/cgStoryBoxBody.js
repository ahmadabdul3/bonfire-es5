var React = require('react');


var CgStoryBoxBody = React.createClass({
	render: function() {
		return (
			<article>
				<div className='content'>
					{this.props.text}
				</div>
          	</article>		
		);
	}
});

module.exports = CgStoryBoxBody;

