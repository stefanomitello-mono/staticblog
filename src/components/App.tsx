import axios from 'axios';
import { useEffect, useState } from 'react'

import svgIcon from '../assets/icons.svg';
import { Articles } from '../models/articles';


import Button from './Button'
import Hero from './Hero'
import Navbar from './Navbar'
import Project from './ProjectCard';

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Home from '../page/homepage';
import Feed from '../page/articles';



function App() {

  const [articles, setArticles] = useState<Articles>();

  useEffect(() => {
    axios.get<Articles>('/src/public/articles.json')
      .then((response) => {
        console.log(response.data);
        setArticles(response.data);
      });
  }, []);

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
