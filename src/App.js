import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About';
import Events from './components/pages/Events';
import Resources from './components/pages/Resources';
import Members from './components/pages/Members';
import Alumni from './components/pages/Alumni';
import Contact from './components/pages/Contact';
function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' exact component={About} />
          <Route path='/Events' exact component={Events} />
          <Route path='/Resources' exact component={Resources} />
          <Route path='/Members' exact component={Members} />
          <Route path='/Alumni' exact component={Alumni} />
          <Route path='/Contact' exact component={Contact}/>
        </Switch>
        <Footer/>
      </Router>
      </>
  );
}

export default App;
