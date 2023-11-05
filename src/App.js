import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsCont from './components/NewsCont';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/'  element={<NewsCont key={'general'} pageSize={8} category={'general'} country={'in'} />}></Route>
            <Route path='/health'  element={<NewsCont key={'health'} pageSize={8} category={'health'} country={'in'} />}></Route>
            <Route path='/science'  element={<NewsCont key={'science'} pageSize={8} category={'science'} country={'in'} />}></Route>
            <Route path='/technology' element={<NewsCont key={'technology'} pageSize={8} category={'technology'} country={'in'} />}></Route>
            <Route path='/entertainment' element={<NewsCont key={'entertainment'} pageSize={8} category={'entertainment'} country={'in'} />}></Route>
            <Route path='/sports' element={<NewsCont key={'sports'} pageSize={8} category={'sports'} country={'in'} />}></Route>
            <Route path='/business' element={<NewsCont key={'business'} pageSize={8} category={'business'} country={'in'} />}></Route>
          </Routes>


        </div>
      </Router>
    )
  }
}

export default App

