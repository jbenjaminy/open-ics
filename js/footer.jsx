var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Footer = React.createClass({

	render: function() {
		return (
			<footer>
				<div className='social content'>
					<ul>
						<li className='github'><a href='https://github.com/OpenICSProject/Documentation/wiki'><i className='fa fa-github'></i></a></li>
						<li className='google-plus'><a href='https://plus.google.com/u/0/communities/109016780045029597935'><i className='fa fa-google-plus'></i></a></li>
						<li className='linkedin'><a href='https://www.linkedin.com/groups/8447868/profile'><i className='fa fa-linkedin'></i></a></li>
					</ul>
					<h5><a href='http://eepurl.com/celXwf'>Join our mailing list!</a></h5>
					<hr/>
				</div>
				<div className='attribution content'>
					<h5>ICS Security Zones and Conduits by <a href='www.openicsproject.com'>The OpenICS&#8482; Project</a> is licensed under a <a rel='license' href='http://creativecommons.org/licenses/by/4.0/'>Creative Commons Attribution 4.0 International License</a></h5>
					<a rel='license' href='http://creativecommons.org/licenses/by/4.0/'><img alt='Creative Commons License' src='https://i.creativecommons.org/l/by/4.0/88x31.png'/></a>
				</div>
			</footer>
		);
	}
});

module.exports = Footer;


