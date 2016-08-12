var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Provider = require( 'react-redux' ).Provider;

var Router = router.Router;
var hashHistory = router.hashHistory;
var Route = router.Route;
var IndexRoute = router.IndexRoute;

var actions = require('./actions');
var store = require( './store' );
var Nav = require('./nav');
var Header = require('./header');
var Footer = require('./footer');
var Home = require('./home');
var MailingList = require('./mailing-list').Container;
var About = require('./about');
var Events = require('./events');
var Projects = require('./projects');
var Toolkit = require('./toolkit');
var Partners = require('./partners');


var App = function(props) {
    return (
        <div className='app'>
            <Nav/>
            <Header/>
            <div className='main'>
                {props.children}
            </div>
            <Footer/>
        </div>
    );
};
// TODO: UPDATE LINKS - <Link to={`/messages/${this.props.message.uid}`}
var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='mailinglist' component={MailingList}/>
      <Route path='about' component={About}/>
      <Route path='events' component={Events}/>
      <Route path='projects' component={Projects}/>
      <Route path='toolkit' component={Toolkit}/>
      <Route path='partners' component={Partners}/>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    store.dispatch(actions.pageLoad());

    ReactDOM.render(
      <Provider store={store}>
        {routes}
      </Provider>, document.getElementById('app'));
});