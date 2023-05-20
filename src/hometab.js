import { useInView } from 'react-intersection-observer';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useRef } from 'react';

const Hometab = () => {
    const { ref:sec1 , inView:sec1vis} = useInView();
    const { ref:sec2 , inView:sec2vis} = useInView();
    const { ref:sec3 , inView:sec3vis} = useInView();
  
    return ( 
        <div className='whole'>
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <img src={require('./Pics/logo.png')} className = "logo" alt = "logo" />
        <div className='section1' ref={sec1} id='homeid'>
                <img src = {require('./Pics/IMG_9794.png')} className="profile" alt = "profile"/>
                <h1 className="Hi">Hi!</h1>
                <h2 className="name">I'm Dhia Eddine Ounissi </h2>
                <h2 className="current"> Programer , Radiologic Technologist and a Gamer </h2>

        </div>

        <div className='section2'ref={sec2} id='aboutid'>
            <h1 className= {`${sec2vis ? '' :'about'} ${sec2vis ? 'aboutvis' :''}`}>About</h1>
            <p className={`${sec2vis ? '' :'p1'} ${sec2vis ? 'p1vis' :''}`}>Welcome to my portfolio , i m dhia eddine a Computer Science student and a beginner programer , i 
                live in Batna Algeria , i am also a Radiologic Technologist currently working in the Merièm Bou Attoura Hospital , I mostly enjoy 
                creating desktop apps and experiences but i m trying my best to branch out to other frontiers , outside of work i love 
                playing video games and enjoy challenges . Thanks for passing by ! 
            </p>
            <h2 className={`${sec2vis ? '' :'h2-1'} ${sec2vis ? 'h2-1vis' :''}`} >What i know </h2>
            <p className={`${sec2vis ? '' :'p2'} ${sec2vis ? 'p2vis' :''}`}>Html , css , C , Objective C , Swift <br></br>C# , python ,some Game design skills</p>
            <h2 className={`${sec2vis ? '' :'h2-2'} ${sec2vis ? 'h2-2vis' :''}`}>What i'm learning </h2>
            <p className={`${sec2vis ? '' :'p3'} ${sec2vis ? 'p3vis' :''}`}>Backend development , Graphic design <br></br>Video editing , German and English</p>
        </div>

        <div className='section3' id='contactid'>
           <div className='section3in'ref={sec3}> 
           <h1 className= {`${sec3vis ? 'contact' :''}`}>contact : </h1> 
            <a href="https://web.facebook.com/didou.archer.420/"><img className= {` ${sec3vis ? 'facebook' :''}`} src={require('./Pics/Facebook_Logo.png')}></img></a>
            <a href="https://twitter.com/didou_archer"><img className= {` ${sec3vis ? 'twitter' :''}`} src={require('./Pics/twitter_logo.png')}></img></a>
            <a href="https://instagram.com/unsc_dhia_eddine?igshid=YmMyMTA2M2Y="><img className= {` ${sec3vis ? 'instagram' :''}`} src={require('./Pics/iglogo.png')}></img></a>
            <p className='rights'> ©2023 Ounissi Dhia Eddine. <br></br> All trademarks referenced herein are the properties of their respective owners.</p>
           </div>

        </div>
        </div>  
     );
}
export default Hometab;