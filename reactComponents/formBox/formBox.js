var React = require('react');
var FormInput = require('./formInput.js');

/*
	{ 
		props {
			inputData: {type/string, value/string, placeholder/string, id/string, class/string},
			includeSubmitButton: boolean,
			includeClearButton: boolean,
			handleSubmit: function,
			handleClear: function,
		}
	}
*/
var FormBox = React.createClass({
	render: function() {
		var inputs = this.props.inputData.map(function(data, index) {
	      return (
	        <FormInput handleOnChange={data.handleOnChange} inputType={data.type} getValue={data.getValue} inputPlaceholder={data.placeholder} inputId={data.id} inputClass={data.class} key={index}/>
	      );
	    });
		return (
			<div className='form-box'>
				{inputs}
				<button onClick={this.props.handleSubmit}>
					Tell story
				</button>
				<button onClick={this.props.handleClear}>
					Nevermind
				</button>
          	</div>		
		);
	}
});

module.exports = FormBox;





/*
if(this.props.includeSubmitButton) {
					<button>
						Tell story
					</button>
				}
				if(this.props.includeClearButton) {
					<div>
						Nevermind
					</div>
				}
*/
