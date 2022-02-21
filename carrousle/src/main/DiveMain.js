import React, { Component } from 'react';
import './divMain.css';
class Divemain extends Component {
    
    render() {
        const  allDiv=document.querySelectorAll('.caroussel')
        let i=0
        let j= allDiv.length-1
        return (
            <div>
                <h4>What People say about Abderrahmane ETTOUNANI</h4>
                <section>
                    
                    {
                        setInterval(() => {
                            
                            allDiv[i].setAttribute('className','first');
                            allDiv[j].setAttribute('className','last');
                            i++;
                            j--;
                        }, 2000)
                    }
                    
                    <div className='caroussel'></div>
                    <div className='caroussel'></div>
                    <div className='caroussel'></div>
                    <div className='caroussel'></div>
                </section>
            </div>
        );
    }
}

export default Divemain;
