import { Redirect, Route, Switch, withRouter } from 'react-router';
import './App.scss'
import ErrorC from './components/Error/Error';
import Header from './components/Header/Header';
import ListMoreDetails from './components/Main/ListMoreDetails/ListMoreDetails';
import Main from './components/Main/Main';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<div>
				<Switch>
					<Route path="/" exact><Redirect to="/main" /></Route>
					<Route path="/chess24" exact><Redirect to="/main" /></Route>
					<Route path="/main" render={() => <Main />}></Route>
					<Route path="/details/:id?" render={() => <ListMoreDetails />}></Route>
					<Route path="/*" render={() => <ErrorC />} />

				</Switch>
			</div>
		</div>
	);
}

export default withRouter(App);
