import React, { createContext, useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotMatch from './components/NotMatch/NotMatch';
import Home from './components/Home/Home';
import TravelDetail from './components/TravelDetail/TravelDetail';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Hotel from './components/Hotel/Hotel';

export const BookContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <>
      <BookContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/Card/:id">
              <TravelDetail></TravelDetail>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/hotel">
              <Hotel></Hotel>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotMatch></NotMatch>
            </Route>
          </Switch>
        </Router>
      </BookContext.Provider>
    </>
  );
}

export default App;
