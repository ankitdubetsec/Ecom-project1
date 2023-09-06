import React from 'react'
import ReactDom from 'react-dom'



function Card(props){
    //console.log(props.item)
    let badgetext
    if(props.item.spots===0){
        badgetext="Sold out"
    }
    else if(props.item.mode==="online"){
        badgetext="online"

    }
   
    // let l=badgetext.length
    //console.log(badgetext.length)
    
    return(
    <div className='card'>
       {badgetext&&<div className='badge'>{badgetext}</div>}
        <img src={`images/${props.item.img}`} className='card-img'></img>
        
        <div className='card-stats'>
        <h1 class="loc">{props.item.location}</h1>
        <img src='images/star.png'  className='card-star'></img>
        <span>{props.item.rating}</span>
        {/* <span>({props.reviewCount}) .</span> */}
        </div>
        <p>{props.item.distance} kms away</p>
        <p>{props.item.date}</p>
        <p ><span className='bold'>₹{props.item.price} </span> per Night</p>
    </div>
    );
}

export default Card