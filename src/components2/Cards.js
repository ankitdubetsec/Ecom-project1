import React from 'react'
import ReactDom from 'react-dom'

function Cards(props){
   console.log(props)
   let [isshown,setisshown]=React.useState(false)
   function toggle(){
    setisshown(prevstate=>!prevstate)
   }
    return(
        //<h1>dcnbj</h1>
        <div className='card'>
       {/* {badgetext&&<div className='badge'>{badgetext}</div>} */}
        <img src={`images/${props.img}`} className='card-img' onMouseEnter={toggle}></img>
        <p className='titlepara'>{props.title}</p>
        <hr className='titlehr'></hr>
        <div className='card-stats'>
        {/* <h1 class="loc"></h1>
        <img src='images/star.png'  className='card-star'></img>
        <span></span> */}
        {/* <span>({props.reviewCount}) .</span> */}
        </div>
        {/* <p>kms away</p>
        <p></p>
        <p ><span className='bold'>₹ </span> per Night</p> */}
        {isshown&&<div>
        <p className="features-para"><span className="bold">{props.type1}</span> Starting</p>
        <p className="features-para">{props.product1}<span className="bold sec">Rs. {props.price}</span></p>
        <hr></hr>
        <p className="features-para"><span className="bold">{props.type2}</span> Starting</p>
        <p className="features-para">{props.product2}<span className="bold sec">Rs. {props.price}</span></p>
        </div>
}
        {/* <hr></hr>
        <p className="features-para"><span className="bold">Air Light weight</span> Starting</p>
        <p className="features-para">Powered lenses<span className="bold sec">₹ 1200</span></p> */}
        
    </div>
    )
}

export default Cards