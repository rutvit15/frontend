
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/layout/Footer';
import Login from './components/login/Login';
import HomePage from './components/pages/HomePage';
import Sync from './components/pages/Sync';
import Navbar from './components/layout/Navbar';
import SelectiveSync from './components/pages/SelectiveSync';
import Mapping from './components/pages/Mapping';
import History from './components/pages/History';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route exact path="/home" component={HomePage}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route exact path="/sync" component={Sync}></Route>
            <Route exact path="/mapping" component={Mapping}></Route>
            <Route exact path="/history" component={History}></Route>
            <Route exact path="/selectivesync" component={SelectiveSync}></Route>
        </Switch>
      </div>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
