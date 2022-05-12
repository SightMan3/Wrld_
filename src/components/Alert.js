import "../css/alert.css"
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OkHand from "./okhand3d";

function Alert(props)
{
    

    const navigate = useNavigate();

    let { state } = useLocation();
    let { type } = state;

    const [render, setRender] = useState(false);

    async function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    useEffect(() => {
        
    }, []);

    function cont()
    {
        if (type == 'login')
        {
            navigate('/company');
        }
        else
        {
            navigate('/company-login');
        }
    }

    return (
        <div className="wrap_alert">
            <section className="d3">
                <OkHand />
            </section>

            <section className="cont">
                <h1>Successful</h1>
                <p>{type}</p>
                <button className='proceed-btn' onClick={cont}>proceed</button>
            </section>
        </div>


    )


}

export default Alert;