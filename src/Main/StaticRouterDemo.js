import React from 'react'
import { Route, StaticRouter } from 'react-router'
import { Link } from 'react-router-dom'
import Temp from '../Components/Temp'

export default function StaticRouterDemo() {
    return (
        <>
            <div className="mt-5">
                <h4>base name using Static Router</h4>
                {/* Browser Router with base name (string) */}
                <StaticRouter basename="/data">
                    <Route path="/temp" component={Temp} />
                    <ul>
                        <li><Link to="/temp">Temp</Link></li>
                    </ul>
                </StaticRouter>

                <StaticRouter location={{ pathname: "/temp" }}>
                    <Temp />
                </StaticRouter>
            </div>
        </>
    )
}
