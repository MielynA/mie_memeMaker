import React from 'react';
import './header.css';
import { Media} from 'reactstrap';
import MainPane from './mainpane';

const HeaderPane = () => {
   return (
    <>
  
    <div className='header'>
    <Media> 
     <Media href='#'>
     <Media className='memePic' src={require('../assets/meme2.png')}  />
      </Media>
      <Media body>
      <p>Make-A-Meme Generator</p>
     <p>
     You can add top and bottom text to a meme-template, </p>
     <p>move the text around and can save the image by downloading it
     </p>
        <Media heading>
        <MainPane />
      </Media>
     </Media>
     </Media>
     </div>
    </>
   );
}




export default HeaderPane; 
