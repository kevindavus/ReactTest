// let's go!
import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Match, Miss } from 'react-router'

import App from './components/app'
import NotFound from './components/NotFound'
import StorePicker from './components/StorePicker'
import './css/style.css'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeID" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}


render (<Root/>, document.querySelector('#main'))