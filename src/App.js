import { Redirect, Route, Switch, withRouter } from 'react-router';
import './App.scss'
import Header from './components/Header/Header';
import ListMoreDetails from './components/Main/ListMoreDetails/ListMoreDetails';
import Main from './components/Main/Main';

function App() {
	return (
		<>
			<Header />
			<div>
				<Switch>
					<Route path="/" exact><Redirect to="/main" /></Route>
					<Route path="/chess24" exact><Redirect to="/main" /></Route>
					<Route path="/main" render={() => <Main />}></Route>
					<Route path="/details/:id?" render={() => <ListMoreDetails />}></Route>
				</Switch>
			</div>
		</>
	);
}

export default withRouter(App);
