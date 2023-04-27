import React from 'react'
import '../styles/login.css'
import man from '../images/man.svg'

const login = () => {
  return (
    <div className='container'>
      <div className="innerContainer">
        <div className="canvasBackground">
            <div className="canvasUpper">
                <img src={man} className="imgMan" alt="" />
            </div>
            <div className="content">
              <div className='upperForm'>
                <span className='left'>ALREADY MEMBERS</span>
                <span className='right'>Need Help ?</span>
              </div>
              {/* <div className='lowerForm'> */}
                <form action="" method="post" className='form'>
                  <div className='insideForm f1'>
                    <input type="text" name="username" id="username" placeholder='Enter your username' />
                  </div>
                  <div className='insideForm f2'>
                    <input type="password" name="password" id="password" placeholder='Enter your password' />
                  </div>
                  <div className='insideForm f3'>
                    <button type='submit'>SIGN IN</button>
                  </div>
                </form>
              {/* </div> */}
              <div className='lowerForm'>
                <p style={{color:"white"}}>Don't have an account yet ?</p>
                <p style={{color:"radial-gradient(50.31% 50.31% at 9.84% 45.44%, #3C818C 0%, #1A535C 100%)"}}>Create an account</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default login;
