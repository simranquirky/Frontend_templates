import './App.css';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './components/login/Login.jsx'
import Home from './components/Home/Home.jsx'

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
      

    </>
  );
}

export default App;
