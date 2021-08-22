import React from 'react'

export const GiftItem = ( {title, url, id} ) => {
   
    return (
        <div className="card card-style border-0 m-2 animate__animated animate__fadeInUp" >
        
            <img src={url} className="card-img-top img-fluid" style={{height:'190px', backgroundColor: 'blue'}} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    )
}
