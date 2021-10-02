import React from 'react'
import { HashRouter, NavLink, Route } from 'react-router-dom'
import About from '../Components/About'
import Random from '../Components/Random'

export default function HashRouterDemo() {
    return (
        <>
            <div className="mt-5">
                <h4>Use of NavLink with Hash Router</h4>
                {/* Whenever you have used hash router then it will automatically re write your URL start with # */}
                <HashRouter basename="/data" hashType="hashbang">                   {/* slash = creact #/data/about */}
                    <Route path="/about" component={About} />                         {/* no slash = creact #data/about */}
                    <Route path="/random" component={Random} />                       {/* hashbang = creact #!/data/about */}
                    <ul>
                        <li><NavLink to={{ pathname: "/about" }}>About</NavLink></li>
                        <li><NavLink to="/random">Random</NavLink></li>
                    </ul>
                </HashRouter>
            </div>

        </>
    )
}
