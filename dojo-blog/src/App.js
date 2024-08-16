import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route ,  Switch } from 'react-router-dom';

function App() {
  const title = 'New blog';
  const likes = 50;
  const link ="https://www.google.com/";
  // we can output anything except booleans and objects ex= person={xx:yy, aa:bb}

  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path='/'>
              <Switch>
                <Home/>
              </Switch>
          </Route>
        </Switch>
        {/* <h1>{title}</h1>
        <p>This has been liked {likes} times </p>
        <p>We can output anything except booleans and objects. Example: person = {JSON.stringify({xx: "yy", aa: "bb"})} To display an object like person, you would use JSON.stringify(person)</p>
        <a href="{link}">gooooooogle</a>   */}
      </div>
    </div>
    </Router>
  );
}

export default App;
