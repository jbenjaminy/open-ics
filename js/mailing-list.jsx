var React = require( 'react' );
var connect = require( 'react-redux' ).connect;
var actions = require( './actions' );
var Header = require('./header');

var MailingList = React.createClass ({

  	onFormSubmit: function(event) {
    	event.preventDefault();
      var userObj = {};
    	userObj.email = this.refs.emailInput.value;
    	userObj.firstName = this.refs.firstNameInput.value;
    	userObj.lastName = this.refs.lastNameInput.value;
    	userObj.occupation = this.refs.occupationInput.value;
    	this.props.dispatch(actions.fetchAddToList(userObj));
  	},

  	render: function() {
      var classes = 'form' + (this.props.form ? '' : ' hidden');

    	return (
          <div>
              <Header header='link-header'/>
              <div className='main'>
              		<div className='mailing-list content'>
              				<h2>Mailing list</h2>
                					<form className={classes} onSubmit={this.onFormSubmit}>
                  						<input type='email' placeholder='Email Address (required)' ref='emailInput' required/>
                              <br/>
                  						<input type='text' placeholder='First Name (required)' ref='firstNameInput' required/>
                              <br/>
                  						<input type='text' placeholder='Last Name' ref='lastNameInput'/>
                              <br/>
                  						<input type='text' placeholder='Occupation' ref='occupationInput'/>
                              <br/>
                  					  <button type="submit">Submit</button>
                					</form>
              				<h4>{this.props.status}</h4>
            			</div>
              </div>
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