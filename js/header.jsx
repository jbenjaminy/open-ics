var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Header = React.createClass({
	render: function() {
		return (
			<header>
				<div className='header-text content'>
					<Link to={'/'}>
				    	<h1>The OpenICS&#8482; Project</h1>
				    	<h3>Open Source Technology for Industrial Control Systems</h3>
				    </Link>
				</div>
			</header>
		);
	}
});

module.exports = Header;
