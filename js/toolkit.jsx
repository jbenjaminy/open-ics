var React = require('react');
var Header = require('./header');


var Toolkit = React.createClass ({
	render: function() {
		return (
			<div>
				<Header header='link-header'/>
				<div className='main'>
					<div className='toolkit content'>
						<h2>Toolkit</h2>
						<h3>Coming Soon!</h3>
					</div>
				</div>
			</div>
		);
  	}
});

module.exports = Toolkit;