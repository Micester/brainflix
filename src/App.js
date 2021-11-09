import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import VideoApi from './pages/VideoApi';
import Header from './components/Header/Header';

function App (){
    return (

      <Router>
        <div className="App">
          {/* Header */}
          <Header/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home"  component={Home} /> 
            <Route path="/videos/" component={VideoApi} />
            <Route path="/videos/:id" component={Home} />
          </Switch>
        </div>
      </Router>

    );
}
export default App;
