import React from 'react'

const Hero = () => {
  return (
    <>
<div className='d-flex flex-column flex-lg-row align-items-center' style={{height: '45rem', backgroundColor: '#8f00ff', width: '100%'}}>
      <div className='d-flex flex-column' style={{flex: 1, paddingRight: '0rem'}}>
    <h1 className='text-light fw-bold mt-5 mb-4 text text-center' style={{fontSize: '3.5rem'}}>
      The Smarter Way <br className='d-none d-md-block' /> to Bank is Here
    </h1>
    <p className='fs-2 text-light text-center'>
      Tools to help you pay, earn, save and <br className='d-none d-md-block'/> grow - all in one app
    </p>
      <div className='container d-flex flex-lg-row flex-column gap-2 align-content-center mt-5 justify-content-center'>
        <button className='bg-light text-dark btn rounded-4 text-center px-5 align-items-'><img src="data:image/png;base64,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" alt="" style={{width: '30px'}} />Get it on <br/> <span className='fs-6 fw-medium'>Google Play</span></button>
        <button className='bg-light text-dark btn rounded-4'> <img src="data:image/png;base64,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" alt=""style={{width: '30px'}}  />Download on the <br/> <span className='fs-6 fw-medium'>App Store</span></button>
      </div>
      <div className='container text-white' style={{width:'10rem'}}>
        <span>Licensed by
the CBN</span>
      </div>
      </div>

       <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
          <img src="src/assets/Image/GroupHero4d45664d-962a-45.png" alt="" style={{maxWidth: '30rem',}} className='mt-4 mt-lg-0 image1' />
  </div>



        </div>

        <div style={{backgroundColor: '#9f00ff', width: '100%',  height:'10vh', position: 'absolute',marginTop: '0.02rem' }}>

        </div>
    </>
  )
}

export default Hero


  
//   {/* Text section */}
  
//     <div className='d-flex flex-column flex-lg-row gap-2 mt-5'>
//       {/* Buttons */}
//     </div>
//   </div>

//   {/* Image section */}
  
// </div>