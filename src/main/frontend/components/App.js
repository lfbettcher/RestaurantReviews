import React from "react"
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom"
import "regenerator-runtime/runtime"

import NavBar from "./NavBar.js"
import RestaurantList from "./RestaurantList.js"
import RestaurantShow from "./RestaurantShow.js"
import RestaurantForm from "./RestaurantForm.js"
import NotFound from "./NotFound.js"

const app = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Redirect to='/restaurants' />
        </Route>
      </Switch>
      <Route exact path='/restaurants' component={RestaurantList} />
      <Route exact path='/restaurants/new' component={RestaurantForm} />
      <Route exact path='/restaurants/:id' component={RestaurantShow} />
      <Route exact path='/not_found' component={NotFound} />
    </BrowserRouter>
  )
}

export default app
