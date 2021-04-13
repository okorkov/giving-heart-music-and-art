import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <Router>
        <Logo />
        <Navbar />

        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} component={About} />
          <Route path={'/gallery'} component={Gallery} />
          <Route path={'/contacts'} component={Contacts} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
