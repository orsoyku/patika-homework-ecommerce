import React from 'react'
import {Route,Switch} from 'react-router-dom'
import HomePage from './pages/HomePage/index'
import ShopPage from "./pages/Shop/index";
import Header from './components/header'
const App = () => {
  return (<div>
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path="/shop" component={ShopPage}></Route>
    </Switch>

  </div>)

}
export default App;
