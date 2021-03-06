import '../app.css';
import Scene from './scene3d';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';

function Main() {
    const navigate = useNavigate();

    function route_find(page)
    {

        navigate(page);
    }

    return (
        <div className="App">

            <div className='nav'>
                
                <button>CV template</button>
                <div className= "vertical"></div>
                <button onClick={
                    () => { route_find("company-login") }
                }>companies</button>
            </div>

            <section className='main-section'>
                <div className='content'>
                    <h1>
                        Need a <br/> 
                        <div className='dynamic'>
                            <p>Job ?</p>
                        </div> 
                    </h1>
                    
                    <p>Start by clicking here 	&#11088;</p>

                    <div className='buttons'>
                        <button className='btn-grad' onClick={
                            () => { route_find("find") }
                        }>Find</button>
                       
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
