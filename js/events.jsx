var React = require('react');
var Header = require('./header');

var Events = React.createClass ({
	render: function() {
		return (
			<div>
				<Header header='link-header'/>
				<div className='main'>
					<div className='events content'>
						<h2>Events</h2>
						<h3>Upcoming lecture @ University of Houston; August 25, 2016</h3>
						<p>Topic: Intro to the OpenICS™ Project</p>
						<p>Speaker: Brett Young, Lockheed Martin</p>
						<div className='attendees'>
							<h4>Attendees of this topic will receive:</h4>
							<ul>
								<li>An overview of the project.</li>
								<li>Reference architecture drawings.</li>
								<li>Insight into the OpenStack components</li>
								<li>Design and transformation tools (spreadsheets and diagrams).</li>
								<li>Case studies of industrial uses for Hybrid cloud architectures.</li>
								<li>Where to go for more help.</li>
							</ul>
							<p>Contact <a href='mailto:brett@openicsproject.org'>brett@openicsproject.org</a> for more info</p>
						</div>
					</div>
				</div>
			</div>
		);
  	}
});

module.exports = Events;