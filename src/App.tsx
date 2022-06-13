import { useEffect, useState } from 'react'




import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";

import Articles from './UI/pages/Articles';
import Home from './UI/pages/Homepage';
import Header from './UI/organisms/Header';
import { Data } from './models/data';
import axios from 'axios';
import About from './UI/pages/About';
import Footer from './UI/organisms/Footer';
import NotFound from './UI/pages/NotFound';



function App() {


    const [data, setData] = useState<Data>();

    useEffect(() => {
        axios.get<Data>('/src/public/data.json')
            .then((response) => {
                setData(response.data);
            });
    }, []);

    return (
        <>
            <Router>
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

            </Router>

        </>
    )
}

export default App