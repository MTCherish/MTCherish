import logo from './logo.svg';
import {Link,Route} from 'react-router-dom'
import Home from './views/home'

function App() {
  return (
    <div>
        111
        <Link to="/home">首页</Link>

        <Route path="/home" exact component={Home}></Route>
    </div>
  );
}

export default App;
