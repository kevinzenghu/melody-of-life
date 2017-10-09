import React from 'react';
import ReactDOM from 'react-dom';
import { 
	HashRouter,
	Switch,
	Route,
	Link
} from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
      </ul>
    </nav>
  </header>
)

const Main = () => (
	<main>
    <Switch>
      <Route exact path='/' component={ Home }/>
    </Switch>
	</main>
)

const Home = () => (
	<div>
		Home
	</div>
)

const App = () => (
	<div>
		<Header />
		<Main />
	</div>
)
ReactDOM.render((
	<HashRouter>
		<App />
	</HashRouter>
), document.getElementById('content'))