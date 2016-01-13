var React = require('react');
var ReactDom = require('react-dom');
var StoryComponent = require('../cgStory.js');
var store = require('../fluxStores/fluxStores.js');
var actions = require('../fluxActions/fluxActions.js');

var CgStoryBox = React.createClass({
	getInitialState: function(){
		return {
		  stories: store.getList(),
		  inputVal: ''
		}
	},
	componentDidMount: function(){
		store.addChangeListener(this._onChange);
	},
	componentWillUnmount: function(){
		store.removeChangeListener(this._onChange);
	},
	exposeInput: function(element) {
		this.updateInputs = function() {
			console.log(element);
		}
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
	/*handleAddItem: function(newItem){
		actions.addItem(newItem);
	},
	handleRemoveItem: function(index){
		actions.removeItem(index);
	},*/
	_onChange: function(){
		this.setState({
		  stories: store.getList()
		})
	},
	render: function() {
		var storyElements = this.state.stories.map(function(data, index) {
	      return (
	        <StoryComponent header={data.header} body={data.body} key={index}/>
	      );
	    });
		return (
			<div>
				<link rel='stylesheet' href='/stylesheets/cg-story-main.css'/>
				{storyElements}
          	</div>		
		);
	}
});
if(typeof window !== 'undefined') {
  
    ReactDom.render(<CgStoryBox/>, document.getElementById('react-test-component-box'));
  
}
module.exports = CgStoryBox;





				//<input type='text' value={this.state.inputVal} onChange={this.updateInput} onKeyUp={this.sayInputVal}/>
				//<button onClick={this.clearInput}>clear</button>