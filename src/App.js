import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} exact component={About} />
          <Route path={'/gallery'} exact component={Gallery} />
          <Route path={'/contacts'} exact component={Contacts} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
