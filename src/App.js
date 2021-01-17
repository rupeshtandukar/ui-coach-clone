import Home from './Home';
import Generate from './Generate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Generate' component={Generate}/>
      </Switch>
      <Footer />
    </Router>
  )
}
export default App;
