import React, { useState, useEffect } from "react";
export default function Header(){
    const [input, setInput] = useState({
        topText: 'you should try it out',
        bottomText: 'You gonna be amazed',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    function handleChange(event){
          setInput(prev=>{
            const {name, value} = event.target
            return{
                ...prev,
                [name]: value
            }
          })
    }
    const [allMemes, setAllMemes] = React.useState([])

    const handleClick = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setInput(prev => ({
            ...prev,
            randomImage: url
        }))
    }
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    })
    return(
        
<>
<div className="header">
   <div className="header-text">
   <img src="https://freepngimg.com/thumb/categories/1749.png" alt="" width={'60px'}/>
<h1>Meme Machine</h1>
   </div>
   {window.innerWidth > 842 && 
   
   <div className="socials">
<a href="https://twitter.com/tusharrvrma">Twitter</a>
<a href="https://github.com/tusharverma06">Github</a>
<a href="https://www.buymeacoffee.com/tusharverma06">Buymeacoffee</a>
<a href="https://www.instagram.com/tushhhhaarr/">Instagram</a>
   </div>
   }
</div>       
<div className="main">
    <div className="inputs">

    <input type="text" placeholder='Top Text' onChange={handleChange} name='topText' value={input.topText}/>
    <input type="text" placeholder='Bottom Text' onChange={handleChange} name='bottomText' value={input.bottomText}/>
    </div>
<button className="generateButton" onClick={handleClick}>Generate new meme image 🖼️</button>
</div>

<div className="meme">
{input.randomImage && <img src={input.randomImage} alt="" />}
<h2 className="meme-text top">{input.randomImage && input.topText}</h2>
<h2 className="meme-text bottom">{input.randomImage && input.bottomText}</h2>
</div>

</>
)
}
