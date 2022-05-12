import "../css/findINzer.css"
import { useState } from "react";
import { JSONLoader } from "three";

function FindInzer()
{
    const [data, setData] = useState([]);

    function getInzer(event) 
    {
        event.preventDefault();

        fetch(
            "http://localhost:4554/wrld_api.php/get_inzerat"
        )
        .then((res) => res.json())
        .then((json) => setData(json))
        
        
    }

    /*function postInzer(event) 
    {
        event.preventDefault();

        fetch('http://localhost:4554/wrld_api.php/set_inzerat', {
            method: "POST",
            mode: "cors",
            // headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"title": "dddd"})
        })
        .then((res) => res.json())
        .then((json) => { console.log(json) })
    } */

    return(
        <div className="wrap">
            <form>
                <input></input>
                <button onClick={getInzer}>send</button>
                <button onClick={(e) => {
                    e.preventDefault();
                    console.log(data);
                }}>show</button>
                
            </form>
        </div>
    )
}

export default FindInzer;