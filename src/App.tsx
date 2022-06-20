import { useEffect, useState, FC } from 'react'


import Header from './UI/organisms/Header';
import { Data } from './models/data';
import Footer from './UI/organisms/Footer';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { getRoutes } from 'vite-plugin-ssr-ssg'
import Home from './UI/pages/Homepage';
import Articles from './UI/pages/Articles';
import About from './pages/About';
import NotFound from './UI/pages/NotFound';

const pages = import.meta.globEager('./pages/**/*.tsx')
const routes = getRoutes<'react'>(pages)



const dir = '../../public/content/post/';




const App: FC = () => {


    const [data, setData] = useState<Data>();

    useEffect(() => {
        axios.get<Data>('/data.json')
            .then((response: { data: any; }) => {
                setData(response.data);
            });
    }, []);


    return (

        <>
            <Header titleSite={data?.site.name!} urlSite={data?.site.baseUri!} iconLogo={data?.site.icon} navItem={data?.navitems} />
            <Switch>


                <Route exact path="/">
                    <Home />
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
            <Footer copyright={data?.site.copyright!} socials={data?.social!} />
        </>

    )
}

export default App
