import React from 'react';
import ReactDOM from 'react-dom';
import HomeOne from './HomeOne';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Root extends React.Component {
  render() {
  	return(
  		<BrowserRouter basename={'/'} >
		  	<Switch>
			  <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeOne}/>
			</Switch>
		</BrowserRouter>
  	);
  }
 }

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
