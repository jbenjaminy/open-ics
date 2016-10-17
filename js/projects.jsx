var React = require('react');
var Header = require('./header');

var Projects = React.createClass ({
	render: function() {
		return (
			<div>
				<Header header='link-header'/>
				<div className='main'>
					<div className='projects content'>
						<h2>Projects</h2>
						<img src='http://i.imgur.com/fzVXBls.png' alt='zones & conduits'/>
					</div>
				</div>
			</div>
		);
  	}
});

module.exports = Projects;