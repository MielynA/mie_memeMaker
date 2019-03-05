import React from 'react';
//import MemeImages from '../Services/meme-images';
import axios from 'axios';
import {Modal} from 'reactstrap'
import './mainpane.css';
import { allResolved } from 'q';

class MainPane extends React.Component {
    constructor() {
        super();
        this.state = {
            topTex: "",
            bottomTex: "",
            allMemeImg: [],
            modalIsOpen: false,
            randomImg: "https://i.imgflip.com/gft6.jpg"
        }
       this.handleChange = this.handleChange.bind(this)  
       this.handleSubmit = this.handleSubmit.bind(this)  
    }

    componentDidMount = () => {
        axios('https://api.imgflip.com/get_memes')
        .then(res =>{
            const memes = res.data.data.memes;
            console.log(memes)
            this.setState({allMemeImg: memes})
           
        })
    }
    //   getMeme = () => {
//       axios.get('https://api.imgflip.com/get_memes')
//       .then((res)=>{
//           this.setState({modal: res.data.memes})
//           console.log(res.data.memes)
//       })
//   }  

    handleChange(e) {
        const {name, value} = e.target
        console.log(name)
        this.setState({[name] :value})
    }

    handleSubmit (e){
        e.preventDefault()
        console.log(this.state.allMemeImg)
        const randNum = Math.floor(Math.random() * this.state.allMemeImg.length)
        console.log(randNum)
        const randName = this.state.allMemeImg[randNum].url
        this.setState({randomImg: randName})
    }




  render() {
    return (
        <>
        <div>
       <form className='meme-form' onSubmit={this.handleSubmit}>
       <input type='text' 
              name='topTex' 
              placeholder='Top Text'
              value={this.state.topTex} 
              onChange={this.handleChange}
              />

        <input type='text' 
              name='bottomTex' 
              placeholder='Bottom Text'
              value={this.state.bottomTex} 
              onChange={this.handleChange}
              />      

       <button>Generate</button>
       </form>

       <div className='meme'>
       <h2 className='top'>{this.state.topTex}</h2>
       <img src={this.state.randomImg } alt=''></img>
       
       <h2 className='bottom'>{this.state.bottomTex}</h2>
       </div>
       </div>
       </>

    );

}

}





export default MainPane;