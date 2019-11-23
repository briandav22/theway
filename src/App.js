import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom'
import Header from './components/header/header.component'
import HeaderImage from './components/header-image/header-image.component'
import TravelHome from './components/home-page/home-page.component'
import TheFourtyEight from './components/the-fourty-eight/the-foutry-eight.component'
import AboutUs from './components/about-us/about-us.component'
import SearchMountain from './components/search-mountain/search-mountain.component'
import Vacation from './components/vacations/vacation-component'
import ExpandedMountain from './components/mountain-expanded/mountain-expanded.component'

import './App.css';



function App() {
 
  return (
    <div >
      <HeaderImage/>
      <Header/>
      <div className="padme">
        <Switch >
          <Route path="/" component={TravelHome} exact={true} />
          <Route path="/expandedMountain" component={ExpandedMountain} exact={true} />
          <Route path="/fourtyeight" component={TheFourtyEight} exact={true} />
          <Route path="/about" component={AboutUs} exact={true} />
          <Route path="/search" component={SearchMountain} exact={true} />
          <Route path="/switzerland" component={Vacation} exact={true} />
          <Route path="/iceland" component={Vacation} exact={true} />
          <Route path="/croatia" component={Vacation} exact={true} />

          
        </Switch>
      </div>
      
 

    </div>
    

  )
}

export default App;
