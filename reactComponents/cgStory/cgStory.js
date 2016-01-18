var React = require('react');
var StoryBoxHeader = require('./cgStoryBoxHeader.js');
var StoryBoxBody = require('./cgStoryBoxBody.js');
var StoryBoxFooter = require('./cgStoryBoxFooter.js');

/*
	props {
		_id : string? int?
		header : string,
		body : string,
		deleteAction : function,
		listKey : int
	}
*/

var CgStory = React.createClass({
	deleteSelf: function() {
		this.props.deleteAction(this.props.entityId, this.props.listKey);
	},
	render: function() {
		return (
			<div className='story-box'>
				<div onClick={this.deleteSelf}>delete</div>
				<StoryBoxHeader text={this.props.header} />
				<StoryBoxBody text={this.props.body} />
				<StoryBoxFooter/>
          	</div>		
		);
	}
});

module.exports = CgStory;






