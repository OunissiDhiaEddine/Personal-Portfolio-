import { useInView } from 'react-intersection-observer';

const Hometab = () => {
    const { ref:sec2 , inView:sec2vis} = useInView({delay: 0.3 , });
    return ( 
        <div className='whole'>
        <img src={require('./Pics/logo.png')} className = "logo" alt = "logo" />
        <section className='section1'>
        <div className="welcome" >
            <img src = {require('./Pics/IMG_9794.png')} className="profile" alt = "profile"/>
            <h1 className="Hi">Hi!</h1>
            <h2 className="name">I'm Dhia Eddine Ounissi </h2>
            <h2 className="current"> Programer , Radiologic Technologist and a Gamer </h2>
        </div> 
        </section>
        <section className='section2'ref={sec2}>
            <h1 className= {`${sec2vis ? 'about' :''}`}>About</h1>
        </section>
        </div>  
     );
}
export default Hometab;