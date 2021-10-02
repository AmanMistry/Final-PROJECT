import React from 'react'
import { MemoryRouter ,Route} from 'react-router'
import { Link } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import Random from '../Components/Random'

export default function MemoryRouterDemo() {
    return (
        <>
            {/* it will render without showing in URL */}
            <div className="mt-5">
                <h4> Use of Memory Router</h4>
                <MemoryRouter>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/random" component={Random} />

                    <ul>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/random">Random</Link></li>
                    </ul>
                </MemoryRouter>
            </div>
        </>
    )
}
