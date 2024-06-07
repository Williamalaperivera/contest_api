import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { Home } from '../components/Home'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Login} from '../components/Login'
import { Articles} from '../components/Articles'
import { ErrorPages} from '../components/ErrorPages'


export const AppRouter = () => {
  return (
    <Router>
    {/* Menú de navegación */}
    <header className='header-nav'>
    <nav>
      <ul>
        <div className='logo'>
          <h2>logo</h2>
        </div>
        <li>
          <NavLink to='/'>Inicio</NavLink>
        </li>
        <li>
          <NavLink to='/articulos'>Articulos</NavLink>
        </li>
        <li>
          <NavLink to='/acerca-de'>Acerca de</NavLink>
        </li>
        <li>
          <NavLink to='/contacto'>Contacto</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Identifícate</NavLink>
        </li>
      </ul>
    </nav>
    </header>
    <section className='content'>
      {/* Configurar las rutas */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/inicio' element={<Home />}></Route>
       
        <Route path='/acerca-de' element={<About />}></Route>
        <Route path='/contacto' element={<Contact />}></Route>
        <Route path='/contacto' element={<Login />}></Route>
        <Route path='/contacto' element={<Articles />}></Route>
       
        <Route path='*' element={<ErrorPages />}></Route>
      </Routes>
      </section>
    </Router>
  )
}
