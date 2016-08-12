var React = require( 'react' );
var connect = require( 'react-redux' ).connect;
var actions = require( './actions' );

var MailingList = React.createClass ({

  	onFormSubmit: function(event) {
    	event.preventDefault();
      var userObj = {};
    	userObj.email = this.refs.email.value;
    	userObj.firstName = this.refs.firstName.value;
    	userObj.lastName = this.refs.lastName.value;
    	userObj.occupation = this.refs.occupation.value;
    	this.props.dispatch(actions.fetchAddToList(userObj));
  	},

  	render: function() {
      var classes = 'form' + (this.props.form ? '' : ' hidden');

    	return (
      		<div className='mailing-list content'>
    				<h2>Mailing list</h2>
    					<form className={classes} onSubmit={this.onFormSubmit}>
    						<input type='text' placeholder='Email Address (required)' ref='emailInput' required/>
    						<input type='text' placeholder='First Name (required)' ref='firstNameInput' required/>
    						<input type='text' placeholder='Last Name' ref='lastNameInput'/>
    						<input type='text' placeholder='Occupation' ref='occupationInput'/>
                <br/>
    					  <button type="submit">Submit</button>
    					</form>
    				<h4>{status}</h4>
    			</div>
      );
    }
});

var mapStateToProps = function(state, props) {
  return {
    status: state.status,
    form: state.form
  }
}

var Container = connect(mapStateToProps)(MailingList);

exports.MailingList = MailingList;
exports.Container = Container;