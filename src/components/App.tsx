import { useEffect, useState } from 'react'




import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Home from '../page/homepage';
import Feed from '../page/articles';



function App() {



  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/articles">
        <Feed />
      </Route>
    </Router>
  )
}

export default App
