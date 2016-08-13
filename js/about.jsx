var React = require('react');
var Header = require('./header');

var About = React.createClass ({
	render: function() {
		return (
			<div>
				<Header header='link-header'/>
				<div className='main'>
					<div className='about content'>
						<h2>About</h2>
						<h3>Intro to the OpenICS&#8482; Project</h3>
						<p>Process control operators have the tough job of maintaining production while struggling with rising labor costs and aging infrastructure. At the same time, the worsening threat landscape for these industries won’t let up.  The OpenICS Project directly addresses the challenges facing critical industries with an open-sourced hybrid cloud solution that offers improved services and better security at lowered costs.</p>
						<p>OpenICS is an Infrastructure-as-a-Service design based on well-proven reference architectures, such as the Purdue model. All of the OpenICS components are freely available and ready to integrate into existing networks. Because of the flexibility of OpenStack, your company can set up a pilot utilizing second hand or spare equipment. This is a technology upgrade that reduces manpower and training costs while improving security.</p>
						<div className='benefits'>
							<h4>The benefits of OpenICS include:</h4>
							<ul>
								<li>The PCN operator can move from a capital-intensive infrastructure to an operational model.</li>
								<li>OpenICS can be implemented incrementally, allowing you to transform at your own pace.</li>
								<li>Third-party support is abundant in the OpenStack world. It’s easy to get help.</li>
								<li>Hybrid cloud improves resiliency, and simplifies computing services at the field level.</li>
								<li>Automation companies like Rockwell, Siemens and Schneider already offer their software in cloud versions on AWS, Rackspace and Azure.</li>
								<li>The Security Toolkit module is a comprehensive set of tools, built for a driving situational awareness to the facility level.</li>
							</ul>
						</div>
						<p>The OpenICS Project has focused on Electrical Energy and Oil and Gas initially, because of early adopters in those industries. In planning are models for water treatment and health. We are associated with the Open Automation project. Our current partners are Arista and Rackspace.</p>
					</div>
				</div>
			</div>
		);
  	}
});

module.exports = About;