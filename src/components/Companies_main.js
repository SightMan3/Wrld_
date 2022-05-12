import '../app.css';
import Scene from './scene3d';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import Table from './table3d';

function Company_main() {
    const navigate = useNavigate();

    function route_find()
    {

        navigate('/Create')
    }

    return (
        <div className="App">

            <div className='nav'>
                
                <button className='black'
                onClick={
                    () => { navigate('/') }
                }>Log Out</button>
                <div className= "vertical"></div>
                <button onClick={
                    () => { navigate('/') }
                } className='white'>Profile</button>
            </div>

            <section className='main-section'>
                <div className='content'>
                    <h1>
                        Create <br/> 
                        <div className='dynamic'>
                            <p>Oportunities</p>
                        </div> 
                    </h1>
                    
                    <p>Start by clicking here 	&#11088;</p>

                    <div className='buttons'>

                        <button className='btn-grad'
                            onClick={route_find}
                        >create</button>
                    </div>

                </div>

                <div className='scene_3d'>
                    <Table />
                </div>
            </section>
        </div>
    
    );
}

export default Company_main;
