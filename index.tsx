import React from 'react';

const IndexPage: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      <header className="fixed top-0 left-0 w-full py-5 px-24 flex justify-between items-center z-[100] bg-[#2c3e50]">
        <a href="index.html" className="logo relative text-2xl text-white no-underline font-medium ml-7 hover:text-[#a6b4c2]">CBHLC </a>
        <nav className="navigation">
          <a href="about.html" className="relative text-lg text-white no-underline font-medium ml-10">About</a>
          <button className="btnLogin-popup w-[130px] h-[45px] bg-transparent border-2 border-white rounded-md cursor-pointer text-lg text-white font-medium ml-10 transition-all duration-400 hover:bg-white hover:text-black">Login</button>
        </nav>
      </header>

      <section className="landing bg">
        <div className="landing-bg flex justify-center items-center flex-col text-center pt-[120px] px-5 pb-10 object-cover">
          <div className="hero-image">
            <img src="landingp.png" alt="School Photo" className="w-[1500px] h-[700px] rounded-lg" />
          </div>
          <p className="bible-verse mt-5 text-lg font-bold text-black">
            “Start children off on the way they should go...” <br />
            — Proverbs 22:6
          </p>
          <p className="copyright mt-2.5 text-sm text-black">
            ©2025 CBHLC | All rights reserved |
          </p>
          
          <div className="contact relative bottom-2.5 mr-[1500px] flex gap-4 text-base z-[100] justify-center mt-7 flex-wrap">
            <a href="https://www.facebook.com/CBHLC.Pasig" className="text-4xl"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/awrabriguela/" className="text-4xl"><i className="fab fa-instagram"></i></a>
           
          </div>
        </div>
      </section>

      {/* LOGIN / REGISTER / FORGOT */}
      <div className="wrapper fixed top-1/2 left-1/2 w-[400px] p-10 bg-white/10 border-2 border-black rounded-2xl backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] text-center text-white overflow-hidden transition-transform duration-300 z-[200] h-[600px]" style={{ transform: 'translate(-50%, -50%) scale(0)' }}>
        <span className="icon-close absolute top-0 right-0 w-11 h-11 text-2xl text-black flex items-center justify-center cursor-pointer transition-colors duration-300 hover:text-red-600"><ion-icon name="close-outline"></ion-icon></span>

        {/* LOGIN */}
        <div className="form-box login w-full transition-transform duration-500 ease-in-out text-black min-h-[320px] py-7 px-5">
          <h2 className="mb-5 text-2xl">Login</h2>
          <br />
          <form id="loginForm">
            <div className="input-box mb-4">
              <input type="text" placeholder="Username" required className="w-[90%] py-3 px-4 rounded-md border-none outline-none text-base border-2 border-black mt-2.5" />
            </div>
            <div className="input-box mb-4">
              <input type="password" placeholder="Password" required className="w-[90%] py-3 px-4 rounded-md border-none outline-none text-base border-2 border-black mt-2.5" />
            </div>
            <div className="forgot-pass mt-5">
              <a href="#" className="forgot-pass-btn text-black underline text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:text-gray-400">Forgot password?</a>
            </div>
            <br /><br /><br />
            <button type="submit" className="btn w-[80%] py-3 border-2 border-black rounded-md bg-transparent text-black text-lg font-semibold cursor-pointer transition-all duration-300 mt-5 hover:bg-[#2c3e50] hover:text-white">Login</button>
              
            <div className="login-link mt-4 text-sm">
              <br />
              <p>Don’t have an account? <a href="#" className="register-link-btn text-black underline font-semibold cursor-pointer transition-colors duration-300 ease-in-out hover:text-gray-500">Register</a></p>
            </div>
          </form>
        </div>

        {/* RESET PASSWORD */}
        <div className="form-box password absolute top-0 left-0 w-full mt-5 text-black" style={{ transform: 'translateX(400px)' }}>
          <h2 className="reset-password mb-5 text-2xl">Reset Password</h2>
          <form action="#">
            <div className="input-box mb-4">
              <input type="text" placeholder="Old Password" required className="w-[90%] py-3 px-4 rounded-md border-none outline-none text-base border-2 border-black mt-2.5" />
            </div>
            <div className="input-box mb-4">
              <input type="text" placeholder="New Password" required className="w-[90%] py-3 px-4 rounded-md border-none outline-none text-base border-2 border-black mt-2.5" />
            </div>
            <div className="input-box mb-4">
              <input type="password" placeholder="Confirm Password" required className="w-[90%] py-3 px-4 rounded-md border-none outline-none text-base border-2 border-black mt-2.5" />
            </div>
            <button type="submit" className="btn w-[80%] py-3 border-2 border-black rounded-md bg-transparent text-black text-lg font-semibold cursor-pointer transition-all duration-300 mt-5 hover:bg-[#2c3e50] hover:text-white">Confirm</button>
            <div className="register-link mt-4 text-sm">
              <p>Already have an account? <a href="#" className="login-link-btn text-black underline font-semibold cursor-pointer transition-colors duration-300 ease-in-out hover:text-gray-500">Login</a></p>
            </div>
          </form>
        </div>

       <div className="form-box register absolute top-0 left-0 w-full mt-5 text-black" style={{ transform: 'translateX(400px)' }}>
          <h2 className="registration-text mb-5 text-2xl">Create Account</h2>
          <form action="#">
            <br />
            <div className="input-box mb-4">
              <input type="text" placeholder="Name" required className="w-[90%] py-3 px-4 rounded-md border-none outline-none text-base border-2 border-black mt-2.5" />
            </div>
            <div className="input-box mb-4">
              <input type="text" placeholder="Email" required className="w-[90%] py-3 px-4 rounded-md border-none outline-none text-base border-2 border-black mt-2.5" />
            </div>
            <div className="input-box mb-4">
              <input type="password" placeholder="Password" required className="w-[90%] py-3 px-4 rounded-md border-none outline-none text-base border-2 border-black mt-2.5" />
            </div>

            <div className="input-box mb-4">
              <select required className="w-[90%] py-3 px-4 rounded-md border-none outline-none text-base border-2 border-black mt-2.5 bg-white cursor-pointer">
                <option value="" disabled selected>Select Role</option>
                <option value="parent">Parent</option>
                <option value="registrar">Registrar</option>
              </select>
            </div>

            <button type="submit" className="btn w-[80%] py-3 border-2 border-black rounded-md bg-transparent text-black text-lg font-semibold cursor-pointer transition-all duration-300 mt-5 hover:bg-[#2c3e50] hover:text-white">Register</button>
            <div className="register-link mt-4 text-sm">
              <p>Already have an account? <a href="#" className="login-link-btn text-black underline font-semibold cursor-pointer transition-colors duration-300 ease-in-out hover:text-gray-500">Login</a></p>
            </div>
          </form>
        </div>
      </div>
      {/* The script.js and ionicons scripts would be handled by React's build process or public/index.html */}
      {/* <script src="script.js"></script> */}
      {/* <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script> */}
      {/* <script nomodule src="https://unpkg.com/ionicons@8.1.0/dist/ionicons/ionicons.js"></script> */}
    </div>
  );
};

export default IndexPage;
