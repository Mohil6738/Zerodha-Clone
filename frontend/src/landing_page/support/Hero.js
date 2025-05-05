import React from 'react';
function Hero() {
    return ( 
        <section className="container-fluid" id='supportHero'>
        <div className=" p-5" id='supportWrapper'>
          <h4>Support Portal</h4>
          <a href='' style={{color:"white"}}>Track tickets</a>
     
        </div>
        <div className="row p-5 m-3 " >
        <div className="col-6 p-3 " >
          <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder='Eg:  how do i activate F&O, why is my order getting rejected...'/> <br/>
          <a href=''>Track account opening</a>
          <a href='' style={{marginLeft:"70px", lineHeight:"3"}}>Track segment activation</a> 
          <a href='' style={{marginLeft:"70px", }}>Intraday margins</a> <br/>
          <a href=''>Kite user manual</a>
        </div>
        <div className="col-6 p-3  " >
           <h1 className='fs-3'>Featured
          </h1>
          <ol>
            <li><a href=''style={{lineHeight:"3"}}>Current Takeovers and Delisting – April 2025
          </a></li>
          <li><a href=''>Surveillance measure on scrips - April 2025
          </a></li>
          
          </ol>
        </div>
          
        </div>
        </section>
     );
}

export default Hero;
