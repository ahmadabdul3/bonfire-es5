var React = require('react');
var StoryBoxHeader = require('./cgStoryBoxHeader.js');
var StoryBoxBody = require('./cgStoryBoxBody.js');
var StoryBoxFooter = require('./cgStoryBoxFooter.js');


var CgStory = React.createClass({
	render: function() {
		return (
			<div className='story-box'>
				<StoryBoxHeader text={this.props.header} />
				<StoryBoxBody text={this.props.body} />
				<StoryBoxFooter/>
          	</div>		
		);
	}
});

module.exports = CgStory;






