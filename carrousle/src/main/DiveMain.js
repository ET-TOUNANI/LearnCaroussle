
import React,{ useState, useEffect } from 'react';
import './divMain.css';
const Divemain = () => {

    const  allDiv=document.querySelectorAll('.caroussel')
    const [count, setCount] = useState(0);

    // Similaire à componentDidMount et componentDidUpdate :
    useEffect(() => {
        // Met à jour le titre du document via l’API du navigateur
        document.title = `Vous avez cliqué ${count} fois`;
    });
    return (
        <div>
            <h4>What People say about Abderrahmane ETTOUNANI</h4>
                <section>
                    
                    {
                        // setInterval(() => {
                        //     console.log(allDiv)
                        //     allDiv.forEach(div =>{
                        //         div.style.left=div.style.left.value() - 10 + 'px';
                        //     })
                        //     // allDiv[i].setAttribute('className','first');
                        //     // allDiv[j].setAttribute('className','las t');
                        //     // i++;j--;
                        // }, 2000)
                    }
                    
                    <div className='caroussel'></div>
                    <div className='caroussel'></div>
                    <div className='caroussel'></div>
                    <div className='caroussel'></div>
                    <p>Vous avez cliqué {count} fois</p>
                    <button onClick={() => setCount(count - 1)}>
                        Cliquez ici
                    </button>
                </section>
        </div>
    );
}

export default Divemain;
