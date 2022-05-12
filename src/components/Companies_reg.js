import "../css/comp_register.css"
import { useState } from "react";
import validator from 'validator';
import { EdgesHelper } from "three";
import { Navigate, useNavigate } from "react-router-dom";

function CompaniesReg()
{
    const navigate = useNavigate();


    const [company_name, SetCompany_name] = useState("");
    const [business_id, Setbusiness_id] = useState("");
    const [tax_id, Settax_id] = useState("");

    const [street, Setstreet] = useState("");
    const [st_num, Setst_num] = useState("");
    const [zip_code, Setzip_code] = useState("");
    const [city, Setcity] = useState("");
    const [state, Setstate] = useState("");
    const [webpage_url, Setwebpage_url] = useState("");
    const [comp_phone_num, Setcomp_phone_num] = useState("");

    const [person_name, Setperson_name] = useState("");
    const [surname, Setsurname] = useState("");
    const [academic_titul, Setacademic_titul] = useState("");
    const [email, Setemail] = useState("");
    const [phone_num, Setphone_num] = useState("");

    const [company_chars, Setcompany_chars] = useState("");
    const [employee_count, Setemployee_count] = useState("");
    const [work_area, Setwork_area] = useState("");

    
    const [login_name, Setlogin_name] = useState("");
    const [pass, Setpass] = useState("");
    const [rep_pass, Setrep_pass] = useState("");

    const inputs_vals = {
        0: company_name,    1: business_id,     2: tax_id,

        3: street,          4: st_num,          5: zip_code,        

        6: city,            7: state,           8: webpage_url, 

        9: comp_phone_num,  10: person_name,    11: surname,    

        12: academic_titul, 13: email,          14: phone_num, 

        15: company_chars,  16: employee_count, 17: work_area, 

        18: login_name,     19: pass,           20: rep_pass
        
    };


    function handleIn(e, type)
    {
        e.preventDefault();

        let result = e.target.value.trim();

        switch (type) {

            case "company_name": SetCompany_name(result); break;
            case "business_id": Setbusiness_id(result); break;
            case "tax_id": Settax_id(result); break;

            case "street": Setstreet(result); break;
            case "st_num": Setst_num(result); break;
            case "zip_code": Setzip_code(result); break;
            case "city": Setcity(result); break;
            case "state": Setstate(result); break;
            case "webpage_url": Setwebpage_url(result); break;
            case "comp_phone_num": Setcomp_phone_num(result); break;

            case "person_name": Setperson_name(result); break;
            case "surname": Setsurname(result); break;
            case "academic_titul": Setacademic_titul(result); break;
            case "email": Setemail(result); break;
            case "phone_num": Setphone_num(result); break;

            case "company_chars": Setcompany_chars(result); break;
            case "employee_count": Setemployee_count(result); break;
            case "work_area": Setwork_area(result); break;

            case "login_name": Setlogin_name(result); break;
            case "pass": Setpass(result); break;
            case "rep_pass": Setrep_pass(result); break;
            

            default:
                break;
        }

        
        

    }

    function handleRegisterFetch(e)
        {
            e.preventDefault();

            let isempty = false;

            for (const key in inputs_vals)
            {
                if (inputs_vals[key] == "")
                {
                    alert(parseInt(key) + 1 + ". row is empty, to continue, fill it in please");
                    isempty = true;
                    break;
                }
                else
                {
                    isempty = false;
                }
            }

            console.log(inputs_vals);
            if (isempty !== true)
            {
                if (validator.isEmail(email))
                {
                    fetch('http://localhost:4554/wrld_api.php/set_register', {
                        method: "POST",
                        mode: "cors",
                        // headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(inputs_vals)
                    })
                    .then((res) => res.json())
                    .then((json) => { console.log(json) })

                    navigate('/alert', {state: {type: 'register'}});
                }
                else
                {
                    alert('bad email format');
                }

            }
            else
            {
                alert("problem while registering, try again later");
            }

        }




    return (
        <div className="wrap_company">
            <form>
                <p>udaje o spolocnosti</p>
                <div>
                    <input placeholder="company name" onChange={
                        (e) => { handleIn(e, "company_name") }
                    }/>
                    <input placeholder="business ID" onChange={
                        (e) => { handleIn(e, "business_id") }
                    }/>
                    <input placeholder="tax ID" onChange={
                        (e) => { handleIn(e, "tax_id") }
                    }/>

                </div>
                
                <p>firemna adresa</p>
                <div>
                    <input placeholder="street" onChange={
                        (e) => { handleIn(e, "street"); }
                    }/>
                    <input placeholder="building number" onChange={
                        (e) => { handleIn(e, "st_num"); }
                    }/>
                    <input placeholder="zip code" onChange={
                        (e) => { handleIn(e, "zip_code"); }
                    }/>
                    <input placeholder="city" onChange={
                        (e) => { handleIn(e, "city"); }
                    }/>
                    <input placeholder="state" onChange={
                        (e) => { handleIn(e, "state"); }
                    }/>
                    <input placeholder="webpage url" onChange={
                        (e) => { handleIn(e, "webpage_url"); }
                    }/>
                    <input placeholder="phone number" onChange={
                        (e) => { handleIn(e, "comp_phone_num"); }
                    }/>
                </div>

                <p>kontaktna osoba</p>
                <div>
                    <input placeholder="name" onChange={
                        (e) => { handleIn(e, "person_name"); }
                    }/>
                    <input placeholder="surname" onChange={
                        (e) => { handleIn(e, "surname"); }
                    }/>
                    <input placeholder="academic titul" onChange={
                        (e) => { handleIn(e, "academic_titul"); }
                    }/>
                    <input placeholder="emial" onChange={
                        (e) => { handleIn(e, "email"); }
                    }/>
                    <input placeholder="phone number" onChange={
                        (e) => { handleIn(e, "phone_num"); }
                    }/>
                </div>

                <p>doplnujuce informacie</p>
                <div>
                    <textarea rows={8} cols="50" onChange={
                        (e) => { handleIn(e, "company_chars") }
                    }/>
                    <input placeholder="employee count e.g. 20" onChange={
                        (e) => { handleIn(e, "employee_count"); }
                    }/>

                    <select onChange={
                        (e) => { handleIn(e, "work_area") }
                    }>
                        <option>ddd</option>
                        <option>dwdwdd</option>

                    </select>
                </div>

                <p>prihlasovacie udaje</p>
                <div>
                    <input placeholder="name" onChange={
                            (e) => { handleIn(e, "login_name"); }
                    }/>
                    <input placeholder="password" onChange={
                        (e) => { handleIn(e, "pass"); }
                    }/>
                    <input placeholder="repeat password" onChange={
                        (e) => { handleIn(e, "rep_pass"); }
                    }/>
                </div>
               
            </form>

            <button onClick={
                (e) => {
                    handleRegisterFetch(e);
                }
            }>Register</button>

        </div>


    )


}

export default CompaniesReg;