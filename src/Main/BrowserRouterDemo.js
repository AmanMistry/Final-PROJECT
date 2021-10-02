import React from 'react'
import { BrowserRouter, Link, NavLink, Route ,Prompt } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import Service from '../Components/Service'

export default function BrowserRouterDemo() {
    return (
        <>
        <Prompt message="Are you sure you want to leave?" />
            <div className="mt-5">
                <h4>base name using Browser Router</h4>
                {/* Browser Router with base name (string) */}
                <BrowserRouter basename="/data">
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/service" component={Service} />
                    <ul>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><NavLink to="/service" activeStyle={{ color: 'green' }}>Service</NavLink></li>
                    </ul>
                </BrowserRouter>
            </div>
        </>
    )
}
