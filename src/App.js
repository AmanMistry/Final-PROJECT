import { BrowserRouter, Route, Redirect} from 'react-router-dom';
import './App.css';
import { Switch } from 'react-router-dom';
import Home from './Components/Home'
import Hooks from './Main/Hooks';
import BrowserRouterDemo from './Main/BrowserRouterDemo';
import HashRouterDemo from './Main/HashRouterDemo';
import LinkDemo from './Main/LinkDemo';
import MemoryRouterDemo from './Main/MemoryRouterDemo';
import Service from './Components/Service';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import StaticRouterDemo from './Main/StaticRouterDemo';
import Temp from './Components/Temp';
import Admin from './Components/Admin';
import Login from './Components/Login';

function App() {

  return (
    <>
      {/* here forcerefresh is true then whenever you nevigate page must be refresh */}
      <BrowserRouter >
        {/* Use exact to render home page exact to (/) */}
        <Route path="/" exact component={Home} />

        {/* Mainly usefull for render page like route*/}
        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL.*/}
        <Switch>
          <Route path="/brdemo"><BrowserRouterDemo /></Route>
          <Route path="/hrdemo"><HashRouterDemo /></Route>
          <Route path="/mrdemo"><MemoryRouterDemo /></Route>
          <Route path="/linkdemo"><LinkDemo /></Route>
          <Route path="/srdemo"><StaticRouterDemo /></Route>

          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
          <Route path="/dashboard" component={Dashboard} />
          <Route strict path="/temp/" component={Temp} />
          <Route path="/login" component={Login} />
          <Route path="/admin" render ={()=> (localStorage.getItem("isloggedIn") !=null)?<Admin />:<Redirect to="/login"/>}></Route>
        </Switch>
      </BrowserRouter>

      <BrowserRouter >
        <Route path="/hooks/:slug" component={Hooks} />  {/* route with params */}
        {/* You can also pass props with route 
        <Route path="/service" render={(props) => <Service {...props} name={"Dhaval"} />} /> 
        */}
      </BrowserRouter>

      {/* Redirect from and to */}
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/service" to="/dashboard" />
        </Switch>
      </BrowserRouter>

      {/* You can redirect on condition by redirect route  */}
      {/* <BrowserRouter>
        <Route exact path="/">
          {<Redirect to="/dashboard" />}
          //<Redirect to={{pathname:"/dashboard"}} />
          //<Redirect push to="/dashboard"/>
        </Route>
      </BrowserRouter> */}
    </>
  );
}

export default App;