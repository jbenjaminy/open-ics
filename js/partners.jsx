var React = require('react');
var Header = require('./header');

var Partners = React.createClass ({
	render: function() {
		return (
			<div>
				<Header header='link-header'/>
				<div className='main'>
					<div className='partners content'>
						<h2>Partners</h2>
						<ul>
							<li className='rackspace'><a href='https://www.rackspace.com/en-us'><img src='http://i.imgur.com/VTjolVe.png' alt='rackspace'/></a></li>
							<li className='arista'><a href='https://www.arista.com/en/'><img src='http://i.imgur.com/5laCrw7.png' alt='arista'/></a></li>
						</ul>
					</div>
				</div>
			</div>
		);
  	}
});

module.exports = Partners;