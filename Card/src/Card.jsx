import aadu from './assets/aadu.jpeg'

function Card(){
    return(
        <div className="card">
            <img className='card-image'
           src ={aadu} alt ="profile"></img>
            <h2 className="card-title">B'day</h2>
            <p>Happy B'day Aadu</p>   
            
        </div>

    );

}

export default Card