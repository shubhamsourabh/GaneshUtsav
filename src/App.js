import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Contact from "./components/Contact";
import About from "./components/About";
import Form from "./components/Form";
import { Provider } from "react-redux";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<React.Fragment>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/aboutus" component={About} />
						<Route exact path="/form" component={Form} />
					</Switch>
				</React.Fragment>
			</Router>
		</Provider>
	);
}

export default App;
