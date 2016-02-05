var React = require('react');
var ReactDom = require('react-dom');
var StoryComponent = require('../../cgStory/cgStory.js');
var store = require('./fluxStores/fluxStores.js');
var actions = require('./fluxActions/fluxActions.js');

var CgStoryBox = React.createClass({
	getInitialState: function(){
		return {
		  stories: store.getList(),
		  inputVal: '',
		};
	},
	componentDidMount: function(){
		store.addChangeListener(this._onChange);
		actions.requestItems();
	},
	componentWillUnmount: function(){
		store.removeChangeListener(this._onChange);
	},
	updateInput: function(e) {
		this.setState({
			inputVal: e.target.value
		});
	},
	sayInputVal: function(e) {
		console.log(this.state.inputVal);
	},
	clearInput: function(e) {
		this.setState({
			inputVal: ''
		});
	},
	_onChange: function(){
		this.setState({
		  stories: store.getList()
		});
	},
	render: function() {
		var storyElements = this.state.stories.map(function(data, index) {
	      return (
	        <StoryComponent header={data.title} body={data.body} entityId={data._id} listKey={index} key={index}/>
	      );
	    }, this);
		return (
			<div>
				<link rel='stylesheet' href='/stylesheets/cgStoryMain.css'/>
				{storyElements}
          	</div>		
		);
	}
});
if(typeof window !== 'undefined') {
  
    ReactDom.render(<CgStoryBox/>, document.getElementById('react-test-component-box'));
  
}
module.exports = CgStoryBox;


