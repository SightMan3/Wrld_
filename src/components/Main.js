import '../app.css';
import Scene from './scene3d';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';

function Main() {
    const navigate = useNavigate();

    function route_find()
    {
        console.log("dd");
        navigate("find");
    }

    return (
        <div className="App">

            <div className='nav'>
                <button>sign in</button>
                <div className = "vertical"></div>
                <button>sign up</button>
                <div className= "vertical"></div>
                <button>companies</button>
            </div>

            <section>
                <div className='content'>
                <h1>Need a <br/> Job ?</h1>
                <p>Start here by clicking here</p>

                <div className='buttons'>
                    <button className='btn-grad' onClick={
                        route_find
                    }>Find</button>
                    or
                    <button className='btn-grad'>sing up</button>
                </div>

                </div>

                <div className='scene_3d'>
                    <Scene />
                </div>
            </section>
        </div>
    
    );
}

export default Main;
