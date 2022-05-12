import '../css/createinzer.css';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import { getValue } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';

function Createinzer() {
    const navigate = useNavigate();

    
    const [森, セト森] = useState([]);
    
    const [hr_selected, set_hr_selected] = useState("Component_pos_selector");


    class 木
    {
        constructor()
        {    
            this.children = [];
            this.bar = null;

            this.html = (
                <div className='Tree'>
                    <p>
                        Cubilia pede felis luctus felis odio neque senectus gravida purus id primis dapibus. Sociosqu donec magnis faucibus pellentesque dignissim netus euismod ullamcorper facilisis hymenaeos leo risus. Fringilla, proin volutpat vehicula augue hac, tristique quam.
    
                        Egestas nunc fusce suspendisse sagittis nullam. Posuere. Eleifend hac curae; dolor hendrerit aptent lacinia augue laoreet enim feugiat ut arcu id ridiculus leo magnis lacus faucibus libero proin. Blandit rutrum ipsum congue rutrum bibendum quis arcu, varius porta.
    
                        Est imperdiet pretium aliquet. Cum accumsan ac sociosqu gravida tortor. Imperdiet mauris ridiculus. Consectetuer a habitasse suscipit litora quis vulputate feugiat praesent iaculis ut mus nisi diam malesuada.
                    </p>
                    
                
                </div>
            );
        }

        
    }

    function bar_color_change(e)
    {

        var hr = document.getElementById(e.target.id);

        
        hr.classList.add('Component_pos_selector_selected')

        
        console.log(e.target.id)
        
    }
    
    
    
    function create_tree(資料, 木か)
    {
        
        セト森([
            ...森,
            {
                木: 木か,
                子: 資料,
                bar: {
                    selected: false,
                    html: <hr onClick={
                                (e) => bar_color_change(e)
                            } 
                            className='Component_pos_selector' id={森.length}
                          />,
                    pointer: 森.length, 
                }
                
                
            }
        ])

        console.log("creaated");

    }

    function 森を書く()
    {
        console.log(森);
    }


   


    return (
        <div className="Createinzer-main">
            

            <section className='Createinzer-sidebar'>


                <button onClick={
                    () => create_tree(
                        <p>daco</p>,
                        false
                    )
                    }>create tree</button>


                <button onClick={
                    森を書く
                }>print forest</button>
             

            </section>

            <section className='Createinzer-page'>
                <div className='inzerat_paper'>
                    
                    <div className='content'>
                        <textarea 
                            className='header'
                            placeholder='Here is your main header'
                        />

                        <div className='basic_info'>
                            <section className='fir_r'>
                                <input 
                                    className='reverted_dir'
                                    placeholder='0$/h'
                                />
                                <input placeholder='remote'/>
                            </section>

                            <section className='sec_r'>
                                <input 
                                    className='reverted_dir'
                                    style={{fontSize: '20px'}}
                                    placeholder='Street, country'
                                />
                                <input 
                                    style={{fontSize: '20px'}}
                                    placeholder='Valid until ...'
                                />
                            </section>

                        </div>

                        <section className='dynamic_content'>
                            {
                                森.map(e => {
                                    if (e.木 === false)
                                    {

                                        return (
                                            <span>{e.子}{e.bar.html}</span>
                                            
                                            
                                        )
                                    }
                                }) 
                            }
                        </section>
                        
                        

                    </div>

                </div>
            </section>

            <div className='footer-bar'>
                d
            </div>
            
        </div>
    
    );
}

export default Createinzer;
