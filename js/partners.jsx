var React = require('react');

var Partners = React.createClass ({
	render: function() {
		return (
			<div className='partners content'>
				<h2>Toolkit</h2>
				<ul>
					<li><a href='https://www.rackspace.com/en-us'><img src='rackspace-logo.png' alt='rackspace'/></a></li>
					<li><a href='https:www/arista.com/en/'><img src='arista-logo.png' alt='arista'/></a></li>
				</ul>
			</div>
		);
  	}
});

module.exports = Partners;