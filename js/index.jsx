var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');

var Route = router.Route;
var IndexRoute = router.IndexRoute;

import { applyRouterMiddleware, browserHistory, Router }  from 'react-router';
import { useScroll } from 'react-router-scroll';

var Nav = require('./nav');
var Header = require('./header');
var Footer = require('./footer');
var Home = require('./home');
var About = require('./about');
var Events = require('./events');
var Projects = require('./projects');
var Toolkit = require('./toolkit');
var Partners = require('./partners');


var App = function(props) {
    return (
        <div className='app'>
            <Nav/>
            <div>
                {props.children}
            </div>
            <Footer/>
        </div>
    );
};
var routes = (
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='about' component={About}/>
      <Route path='events' component={Events}/>
      <Route path='projects' component={Projects}/>
      <Route path='toolkit' component={Toolkit}/>
      <Route path='partners' component={Partners}/>
    </Route>
);

document.addEventListener('DOMContentLoaded', function() {

    ReactDOM.render(
      <Router 
        history={browserHistory}
        routes={routes}
        render={applyRouterMiddleware(useScroll())}
      />, document.getElementById('app'));
});