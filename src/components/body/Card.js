import React from 'react'
import {vendorData} from '../data/VendorData'

function Card() {

   
    const style={
        display: "flex",
        left:"30%",
         transform: "translate(+0%, +80%)",
         JustifyContent:"space-between"
    }

    const data= vendorData;

  
   
  return (
    <div className='carding container-md' style={style}>
       
        {data.map(e=>{
            return(
                <div key={e.Id} className="card" style={{width: "18rem"}}>
                <img src={e.Image} className="card-img-top" alt="../photos/Electrician.jpg"/>
           <div className="card-body">
                <h5 className="card-title">{e.Name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Get Vendors</a>
           </div>
          </div>
            )
        })
            

        }
  </div>
  )
}

export default Card