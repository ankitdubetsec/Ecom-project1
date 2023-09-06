import React from 'react'
import ReactDom from 'react-dom'
import Nav from './components2/Nav'
import Options from './components2/Options'
import Cards from './components2/Cards'
import './App2.css'
import './App.css';
import Cardsdata2 from './components2/Cardsdata2'
import Img from './components2/Img'
import Sunglasses from './components2/Sunglasses'
import Eyeglasses from './components2/Eyeglasses'
import Footer from './components2/Footer'
function App2(){
    
    const card=Cardsdata2.map(item=>{
        return(
            <Cards
            id={item.id}
              type1={item.type1}
              product1={item.product1}
              type2={item.type2}
              product2={item.product2}
              price={item.price}
              img={item.img}
              title={item.title}
            />
        )
    })

    return(
        <div >

            <Nav/>
            <Options />
            {/* <Cards /> */}
            <section>
                {card}
            </section>
            <Img />
            <Sunglasses/>
            <Eyeglasses/>
            <Footer/>
        </div>
    )
}

export default App2