import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import User from "./components/User";


function App() {
  return (
    <Router>
      <div className='container mt-5'>
        <div className='btn-group'>
          <Link to='/' className='btn btn-dark'>
            Inicio
          </Link>
          <Link to='/nosotros' className='btn btn-dark'>
            Nosotros
          </Link>
          <NavLink to='/contacto' className='btn btn-dark' activeClassName='active'>
            Contacto
          </NavLink>
        </div>
        <hr/>
        <Switch>
          {/* Estableciendo la ruta dinamica */}
          <Route path='/nosotros/:id'>
            <User/>
          </Route>
          <Route path='/contacto'>
            <Contacto/>
          </Route>
          <Route path="/nosotros">
            <Nosotros/>
          </Route>
          <Route path='/'>
            <Inicio/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
