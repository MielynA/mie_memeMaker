import React from 'react';
import './header.css';
// import { useWindowSize } from 'react-use';
// import Confetti from 'react-confetti';
import { Media, Container, Nav } from 'reactstrap';


const HeaderPane = (props) => {
   // const { width = '50px', height = '50px' } = useWindowSize()

   return (
      <React.Fragment>
            
            <nav className='navbar navbar-expand-lg bg-dark'>
            <div className = 'col-4'>
               <a className='navbar-brand'>
                  
                  <Media className='memePic' src='https://media.giphy.com/media/utZ6qyygNqBzO/giphy.gif'></Media></a></div>
                  <div className='col-6'>
                    <p className='typewriter'>
                     <h1 className='textMeme'> MEME MAKER!</h1>
                     <h6> Get randomly meme pic or search to create a meme</h6>
                     </p>
                  </div>   
                  <div className = 'col-4'>
                  <a className='navbar-brand '>
                  <Media className='memePic ' src='https://media.giphy.com/media/utZ6qyygNqBzO/giphy.gif'></Media></a></div>
            </nav>

         {/* <div className='row'>
                   <Confetti width={width}
                     height={height}
                    /></div> */}


      </React.Fragment>
   );
}




export default HeaderPane; 
