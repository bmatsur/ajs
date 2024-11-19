import profilePic from '../assets/question-hoodie.png'

function Card(){

    return (
        <div className='card'>
            <img src={profilePic} alt="profile picture" className='profile-Pic'/>
            <h2 className='card-title'>Hack You all</h2>
            <p className='cart-text'>Cybersecurity enthusiast and content creator</p>
        </div>
    );
}

export default Card;