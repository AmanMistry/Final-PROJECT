import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function LinkDemo() {
    return (
        <>
            <div className="container">
                {/* Render Using Href */}
                <div className="mt-5">
                    <h4>Render using Href ( reload whole page )</h4>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                    </ul>
                </div>
                {/* Render Using Link */}
                {/* use of Link for render one page to another*/}
                {/* You can render page without reloading whole page  by using Link or Navlink*/}
                <div className="mt-5">
                    <h4>Render using Link</h4>
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to={(temp) => ({ ...temp, pathname: "/dashboard" })}>Dashboard</Link></li>
                        <li><Link to={{ pathname: "/about" }}>About</Link></li>
                        <li><Link to="/dashboard" replace >Dashboard</Link></li> {/* replace the current entry in the history stack instead of adding a new one */}
                    </ul>
                </div>

                {/* use of Navlink for render one page to another but it is specialized for active class */}
                {/* You can render page without reloading whole page */}
                <div className="mt-5">
                    <h4>Render using Nav Link</h4>
                    <ul>
                        <li><NavLink to="/" activeStyle={{ color: 'green' }}>Home</NavLink></li>
                        <li><NavLink to={(temp) => ({ ...temp, pathname: "/dashboard" })}>Dashboard</NavLink></li>
                        <li><NavLink to={{ pathname: "/about" }}>About</NavLink></li>
                        <li><NavLink to="/dashboard" >Dashboard</NavLink></li> {/* replace the current entry in the history stack instead of adding a new one */}
                        <li><NavLink strict to="/temp/">Temp</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
