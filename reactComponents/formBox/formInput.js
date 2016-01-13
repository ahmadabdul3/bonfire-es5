var React = require('react');

var FormInput = React.createClass({
	exposeElement: function(element) {
		this.getElement = function() {
			return element;
		}
	},
	getValue: function() {
		var thisVal = this.getElement().value;
		this.getElement().value = "getting value";
		//this.props.getValue(thisVal);
	},
	idIsEmpty: function() {
		return (this.props.id === '' || this.props.id === ' ');
	},
	inputIsTextarea: function() {
		return this.props.type === 'textarea';
	},
	handleOnChange: function(e) {
		var value = e.target.value;
		this.props.handleOnChange(value);
	},
	render: function() {
		return (
			<div className='form-input-box'>
				
					<input onChange={this.handleOnChange} type={this.props.inputType} value={this.props.getValue()} placeholder={this.props.inputPlaceholder} className={this.props.inputClass} />
          		
          	</div>		
		);
	}
});

module.exports = FormInput;


/*

if(this.inputIsTextarea) {
					<textarea if(!this.idIsEmpty()) { id={this.props.inputId} } className={this.props.inputClass} placeholder={this.props.inputPlaceholder}>
						{this.props.inputValue}
					</textarea>
				} else {

					if(!this.idIsEmpty()) { id={this.props.inputId} }

*/