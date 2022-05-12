import "../css/comp_login.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Companies()
{
    const [name, SetName] = useState("");
    const [password, SetPassword] = useState("");

    const navigate = useNavigate();

    function handleIn(e, type)
    {
        e.preventDefault();

        switch (type) {

            case "name":
                SetName(e.target.value);
                break;
        
            case "pass":
                SetPassword(e.target.value);
                break;
            default:
                break;
        }

    }

    function send_login_req(e)
    {
        e.preventDefault();

        fetch('http://localhost:4554/wrld_api.php/set_login', {
            method: "POST",
            mode: "cors",
            // headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    'key': 'login_name',
                    'dato': name,
                    'password': password,
                    'type': 'verify'
                }
            )
        })
        .then((res) => res.json())
        .then((json) => { 
            console.log(json['verify']) 

            if (json['verify'] == true)
            {
                navigate('/alert', {state: {type: 'login'}});
            }
            else
            {
                alert('username or password is incorrect');
            }
        })
        
    }



    return (
        <div className="wrap_company">
            <form>
                <p>name</p>
                <input placeholder="name" onChange={
                    (e) => { handleIn(e, "name") }
                }/>
                <p>password</p>
                <input placeholder="password" onChange={
                    (e) => { handleIn(e, "pass"); }
                }/>

                <button onClick={e => send_login_req(e)}>login</button>
            </form>

            <a href="http://localhost:3000/company-register">Dont have account ?</a>

        </div>


    )


}

export default Companies;