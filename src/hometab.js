import { useInView } from 'react-intersection-observer';

const Hometab = () => {
    const { ref:sec2 , inView:sec2vis} = useInView();
    const { ref:sec3 , inView:sec3vis} = useInView();
    return ( 
        <div className='whole'>
        <img src={require('./Pics/logo.png')} className = "logo" alt = "logo" />
        <section className='section1'>
            <img src = {require('./Pics/IMG_9794.png')} className="profile" alt = "profile"/>
            <h1 className="Hi">Hi!</h1>
            <h2 className="name">I'm Dhia Eddine Ounissi </h2>
            <h2 className="current"> Programer , Radiologic Technologist and a Gamer </h2>
        </section>
        <section className='section2'ref={sec2}>
            <h1 className= {`${sec2vis ? 'about' :''}`}>About</h1>
            <p className={`${sec2vis ? 'p1' :''}`}>Welcome to my portfolio , i m dhia eddine a Computer Science student and a beginner programer , i 
                live in Batna Algeria , i am also a Radiologic Technologist currently working in the Merièm Bou Attoura Hospital , I mostly enjoy 
                creating desktop apps and experiences but i m trying my best to branch out to other frontiers , outside of work i love 
                playing video games and enjoy challenges . Thanks for passing by ! 
            </p>
            <h2 className={`${sec2vis ? 'h2-1' :''}`} >What i know </h2>
            <p className={`${sec2vis ? 'p2' :''}`}>Html , css , C , Objective C , Swift <br></br>,C# , python ,some Game design skills</p>
            <h2 className={`${sec2vis ? 'h2-2' :''}`}>What i'm learning </h2>
            <p className={`${sec2vis ? 'p3' :''}`}>Backend development , Graphic design , Video editing , German and English</p>
        </section>
        <section className='section3'ref={sec3}>
            <h1 className= {`${sec3vis ? 'contact' :''}`}>contact</h1>
        </section>
        </div>  
     );
}
export default Hometab;