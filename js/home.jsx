var React = require('react');
var router = require('react-router');
var Link = router.Link;
var Header = require('./header');

var Home = React.createClass ({
	render: function() {
		return (
			<div>
				<Header header='header'/>
				<div className='main'>
					<div className='news content'>
						<div className='open-ics-news'>
							<h2>News</h2>
							<h3>Stay up-to-date with The OpenICS&#8482; Project &#8213;<a href='http://eepurl.com/celXwf'>Join our mailing list!</a></h3>
						</div>
						<hr/>
						<div className='related-news'>
							<h3>Related Stories:</h3>
							<ul>
								<li className='rectangle'>
									<a href='http://www.cbronline.com/news/cloud/hybrid/google-reveals-hybrid-cloud-plans-with-openstack-4863087'>
										<img src='http://www.cbronline.com/BRHome/ResizeImage/_Uploads_NewsArticle_4863087_main.jpg/1218/655/Details/0/0' alt='Hybrid Cloud' height='100' width='150'></img>
										<h4>"Google reveals hybrid cloud plans with OpenStack"</h4>
									</a>
								</li>
								<li className='rectangle'>
									<a href='http://www.cbronline.com/news/internet-of-things/smart-technology/smart-grid-startup-gets-funding-boost-from-3m-ventures-bill-gates-khosla-ventures-4978237'>
										<img src='http://www.cbronline.com/BRHome/ResizeImage/_Uploads_NewsArticle_4978237_main.jpg/1218/655/Details/0/0' alt='Varentec' height='100' width='150'></img>
										<h4>"Smart grid startup gets funding boost..."</h4>
									</a>
								</li>
								<li className='rectangle'>
									<a href='https://insights.ubuntu.com/2015/11/17/canonicals-openstack-autopilot-dramatically-reduces-cost-of-private/'>
										<img src='http://cdn4.computerworlduk.com/cmsdata/features/3628191/openstack_logo_thumb800.jpg' alt='Openstack' height='100' width='150'></img>
										<h4>"Canonical’s Openstack Autopilot dramatically reduces cloud costs"</h4>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
  	}
});

module.exports = Home;