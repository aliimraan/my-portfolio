import Home from './pages/Home';
import {Route,Switch} from 'react-router-dom';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/project/:projectId" component={Projects}/>
    </Switch>
    </div>
  );
}

export default App;
