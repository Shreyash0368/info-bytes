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
  apiKey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/'  element={<NewsCont key={'general'} pageSize={8} category={'general'} country={'in'} apiKey={process.env.REACT_APP_NEWS_API} />}></Route>
            <Route path='/health'  element={<NewsCont key={'health'} pageSize={8} category={'health'} country={'in'} apiKey={process.env.REACT_APP_NEWS_API} />}></Route>
            <Route path='/science'  element={<NewsCont key={'science'} pageSize={8} category={'science'} country={'in'} apiKey={process.env.REACT_APP_NEWS_API} />}></Route>
            <Route path='/technology' element={<NewsCont key={'technology'} pageSize={8} category={'technology'} country={'in'} apiKey={process.env.REACT_APP_NEWS_API} />}></Route>
            <Route path='/entertainment' element={<NewsCont key={'entertainment'} pageSize={8} category={'entertainment'} country={'in'} apiKey={process.env.REACT_APP_NEWS_API} />}></Route>
            <Route path='/sports' element={<NewsCont key={'sports'} pageSize={8} category={'sports'} country={'in'} apiKey={process.env.REACT_APP_NEWS_API} />}></Route>
            <Route path='/business' element={<NewsCont key={'business'} pageSize={8} category={'business'} country={'in'} apiKey={process.env.REACT_APP_NEWS_API} />}></Route>
          </Routes>


        </div>
      </Router>
    )
  }
}

export default App

