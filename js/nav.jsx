var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Nav = React.createClass({
	render: function() {
		return (
			<nav>
        <ul className='content'>
          <li><Link to={'/partners'} className='links'>Partners</Link></li>
          <li><Link to={'/toolkit'} className='links'>Toolkit</Link></li>
          <li><Link to={'/projects'} className='links'>Projects</Link></li>
          <li><Link to={'/events'} className='links'>Events</Link></li>
          <li><Link to={'/about'} className='links'>About</Link></li>
        </ul>
      </nav>
		);
	}
});

module.exports = Nav;