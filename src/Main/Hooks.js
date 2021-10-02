import React, { useState } from 'react'
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";

export default function Hooks() {

    const [text, settext] = useState("")
    let history = useHistory();
    let location = useLocation();
    let {slug}  = useParams();


    let match = useRouteMatch("/hooks/:slug");
    console.log(match)
    const handleView = () => {
        settext(location.pathname);
    }

    return (
        <div className="container mt-5">
            {/* Used to render another page  */}
            <div>
                <h4>Use of history hook to render page</h4>
                <ul>
                    <button onClick={() => history.push("/about")}>About Page</button>
                </ul>
            </div>

            {/* used to get current location of your page */}
            <div>
                <h4>Use of location hook </h4>
                <ul>
                    <button onClick={handleView}>Location</button><br />
                    {text}
                </ul>
            </div>

            {/* Use Params by using hooks */}
            {/* You can pass value with route  by using react use params hook */}
            <div>
                <h4>React use params hook </h4>
                <ul>
                    {slug}
                </ul>
            </div>

            {/* useRouteMatch usefull to get path , url , params */}
            <div>
                <h4>React useRouteMatch </h4>
                <ul>
                    <li>Path : {match.path}</li>
                    <li>URL : {match.url}</li>
                    <li>Slug ( Parameter ) : {match.params.slug}</li>
                </ul>
            </div>
        </div>
    )
}
