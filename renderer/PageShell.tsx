import React, { useEffect, useState } from 'react'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import { Link } from './Link'


import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Articles from '../src/UI/pages/Articles';
import Home from '../src/UI/pages/Homepage';
import Header from '../src/UI/organisms/Header';
import { Data } from '../src/models/data';
import About from '../src/UI/pages/About';
import Footer from '../src/UI/organisms/Footer';
import NotFound from '../src/UI/pages/NotFound';
import axios from 'axios';

import '../src/global.scss'
import ReactDOM from 'react-dom/client'
import App from '../src/App'



export { PageShell }

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {

  const [data, setData] = useState<Data>();

  useEffect(() => {
    axios.get<Data>('/data.json')
      .then((response) => {
        setData(response.data);
      });
  }, []);




  return (
    <PageContextProvider pageContext={pageContext}>
      <Layout>

        {/* <Sidebar>
            <Link className="navitem" href="/">
              Home
            </Link>
            <Link className="navitem" href="/about">
              About
            </Link>
          </Sidebar> */}



        {/* 
          <Router>
            <Switch>
              <Route exact path="/">
                <div>Ciao</div>
              </Route>
              <Route path="/articles">
                <Articles />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Router> */}





        <Content>{children}</Content>
      </Layout>
    </PageContextProvider>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto',
      }}
    >
      {children}
    </div>
  )
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: '1.8em',
      }}
    >
      {children}
    </div>
  )
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: '2px solid #eee',
        minHeight: '100vh',
      }}
    >
      {children}
    </div>
  )
}


