var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Nav = React.createClass({
	render: function() {
		return (
			<nav>
        <ul className='links content'>
          <li><Link to={'/about'}>About</Link></li>
          <br/>
          <li><Link to={'/events'}>Events</Link></li>
          <br/>
          <li><Link to={'/projects'}>Projects</Link></li>
          <br/>
          <li><Link to={'/toolkit'}>Toolkit</Link></li>
          <br/>
          <li><Link to={'/partners'}>Partners</Link></li>
        </ul>
      </nav>
		);
	}
});

module.exports = Nav;