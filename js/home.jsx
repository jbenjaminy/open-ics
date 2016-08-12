var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Home = React.createClass ({
	render: function() {
		return (
			<div className='news content'>
				<h2>News</h2>
				<h3>Stay up-to-date with The OpenICS&#8482; Project:</h3>
				<h4><Link to={'/mailinglist'}>Join our mailing list!</Link></h4>
				<ul>
					<li>
						<img src='' alt='' height='127' width='127'></img>
						<h3></h3>
					</li>
					<li>
						<img src='' alt='' height='127' width='127'></img>
						<h3></h3>
					</li>
					<li>
						<img src='' alt='' height='127' width='127'></img>
						<h3></h3>
					</li>
				</ul>
			</div>
		);
  	}
});

module.exports = Home;