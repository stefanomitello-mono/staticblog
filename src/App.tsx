import { useEffect, useState } from 'react'




import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

import Home from './UI/pages/Homepage';
import Feed from './UI/pages/articles';



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