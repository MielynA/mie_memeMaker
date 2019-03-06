import React from 'react';
import axios from 'axios';
import { Row, Modal } from 'reactstrap'
import './mainpane.css';


class MainPane extends React.Component {
    constructor() {
        super();
        this.state = {
            topTex: "",
            bottomTex: "",
            allMemeImg: [],
           // modalIsOpen: false,
            randomImg: "https://i.imgflip.com/gft6.jpg"
        }
    }

    componentDidMount = () => {
        axios('https://api.imgflip.com/get_memes')
            .then(res => {
                const memes = res.data.data.memes;
                console.log(memes)
                this.setState({ allMemeImg: memes })

            })
    }
    //   getMeme = () => {
    //       axios.get('https://api.imgflip.com/get_memes')
    //       .then((res)=>{
    //           this.setState({modal: res.data.memes})
    //           console.log(res.data.memes)
    //       })
    //   }  

    handleChange = (e) => {
        const { name, value } = e.target
        console.log(name)
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.allMemeImg)
        const randNum = Math.floor(Math.random() * this.state.allMemeImg.length)
        console.log(randNum)
        const randName = this.state.allMemeImg[randNum].url
        this.setState({ randomImg: randName })
    }




    render() {
        return (
            <React.Fragment>

                <div className='col-6'>
                    <form className='form-inline my-2 my-lg-0 'onSubmit={this.handleSubmit}>
                        <input className='form-control mr-sm-2' type='text' name='topTex' placeholder='Top Text' value={this.state.topTex}
                            onChange={this.handleChange}></input>
                        <input className='form-control mr-sm-2' type='text' name='bottomTex' placeholder='Bottom Text' value={this.state.bott}
                            onChange={this.handleChange}></input>
                        <button className='btn btn-outline-secondary my-2 my-sm-0' type="submit">Generate</button>
                    </form>
                    
                     <div className='meme'>
                        <h2 className='top'>{this.state.topTex}</h2>
                        <img  className ='mt-2' src={this.state.randomImg} alt=''></img>
                        <h2 className='bottom'>{this.state.bottomTex}</h2>
                     </div>
                    
                </div>
            </React.Fragment>

        );

    }

}





export default MainPane;