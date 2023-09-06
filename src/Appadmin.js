import React from 'react'
import ReactDom from 'react-dom'
import './Appadmin.css'
import Sidebar from './admincomponents/Sidebar'
import Navbar from './admincomponents/Navbar'
import Cards from './admincomponents/Cards'



function Appadmin(){
    return(
        <div >

            <Sidebar/>
           <Navbar/>
          
        </div>
    )
}

export default Appadmin