import React, { useState,useEffect, createContext, useReducer, useContext} from 'react';
import { BrowserRouter as Router,Route,Switch, useHistory } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen'
import ProductScreen from './screen/ProductScreen'
import CartScreen from './screen/CartScreen'
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import signup from './screen/signup';
import login from './screen/login';
import { reducer, initialState } from "./redux/reducers/userReducer";
import './App.css';

export const UserContext = createContext()

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch({ type: "USER", payload: user })
      // history.push('/')
    } else {
      // if (!history.location.pathname.startsWith('/reset'))
      //   history.push('/signin')
      history.push('/login');
    }
  }, [])
  return (
    <main>
      <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/product/:id' component={ProductScreen} />
        <Route exact path='/cart' component={CartScreen} />
        <Route exact path='/signup' component={signup} />
        <Route exact path='/login' component={login} />
      </Switch>
    </main>
  )
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
    <Router>
      <Navbar click={()=>setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={()=>setSideToggle(false)} />
      <Routing />
    </Router>
     </UserContext.Provider>
  )
};

export default App;