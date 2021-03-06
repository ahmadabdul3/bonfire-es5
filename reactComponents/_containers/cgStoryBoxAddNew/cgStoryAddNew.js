
var React = require('react');
var ReactDom = require('react-dom');
var FormBox = require('../../formBox/formBox.js');
var FluxActions = require('./fluxActions/fluxActions.js');

var CgAddStory = React.createClass({
	getInitialState: function() {
		return {
			inputData: [
				{
					type: 'text',
					getValue: this.getHeaderValue,
					placeholder: '',
					id: '',
					class: 'cg-story-add-item-form-input',
					handleOnChange: this.updateNewItemHeader
					
				},
				{
					type: 'text',
					getValue: this.getBodyValue,
					placeholder: '',
					id: '',
					class: 'cg-story-add-item-form-input',
					handleOnChange: this.updateNewItemBody
					
				}
			],
			newItemHeader: '',
			newItemBody: ''
		};
	},
	isAnEmptyString: function(string) {
		if (string && string.trim().length > 0) return false;
		return true;
	},
	handleSubmit: function() {
		if(!this.isAnEmptyString(this.state.newItemHeader) && !this.isAnEmptyString(this.state.newItemBody)) {
			FluxActions.addItem({
				title: this.state.newItemHeader,
				body: this.state.newItemBody
			});
		}
		this.handleClear();
	},
	handleClear: function() {
		this.setState({
			newItemBody: '',
			newItemHeader: ''
		});
	},
	updateNewItemHeader: function(title) {
		this.setState({
			newItemHeader: title
		});
	},
	updateNewItemBody: function(body) {
		this.setState({
			newItemBody: body
		});
	},
	getHeaderValue: function() {
		return this.state.newItemHeader;
	},
	getBodyValue: function() {
		return this.state.newItemBody;
	},
	render: function() {
		return(
			<div>
				<FormBox 
					inputData={this.state.inputData} 
					includeSubmitButton={true} 
					includeClearButton={true} 
					handleSubmit={this.handleSubmit} 
					handleClear={this.handleClear}
				/>
			</div>
		);
	}
});
if(typeof window !== 'undefined') {
  
    ReactDom.render(<CgAddStory/>, document.getElementById('the-form'));
  
}

module.exports = CgAddStory;



