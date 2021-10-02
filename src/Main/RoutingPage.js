import React from 'react'
import { BrowserRouter, Link ,Route} from 'react-router-dom'
import Temp from '../Components/Temp'

export default function RoutingPage() {
    return (
        <>
            <BrowserRouter>
            <Route path="/tempo" component={Temp}/>
                <Link to="/tempo"> Tempo </Link>
            </BrowserRouter>
        </>
    )
}
