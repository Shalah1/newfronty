import React from 'react';
import Head from 'next/head'
import Footer from './components/Footer';
import Slider from './components/HomeSlider';
import Slider2 from './components/CustomSlider';

import { useState,useEffect } from 'react'
import { Inter } from 'next/font/google'
// import Navbar from './components/NavbarCustom';
// import Navbar from '../citizen/components/CustomNavbar'
// import Slider2 from '../citizen/components/CustomSlider'
// import Slider from '../citizen/components/HomeSlider'
import { useRouter } from 'next/router';
// import Navbar from '../components/CustomNavbar';
// import Slider2 from '../employee/components/CustomSlider'
// import Slider from '../employee/components/HomeSlider'



// import Login from './employee/login/signup';
const inter = Inter({ subsets: ['latin'] })

 function HomePage() {
 
  const router=useRouter()
  const loginroute =()=>{router.push('/employee/login/signin')}
  const Signuproute =()=>{router.push('/employee/login/signup')}
  const  eemployeeroute =()=>{router.push('/employee/dashboard/getusers')}
  const images = [
    '/image/employee/banner2.png',
    '/image/employee/banner1.png',
    'https://www.daily-sun.com/assets/news_images/2016/07/07/Community-Health.jpg',
  

  ];


  // const loginroute =()=>{router.push('/employee/login/signin')}
  // const Signuproute =()=>{router.push('/employee/login/signup')}
  // const  eemployeeroute =()=>{router.push('/employee/dashboard/getusers')}
    
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold">E-GOVERENCE</a>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/about" className="hover:text-gray-400">About</a></li>
              <li><a href="/contactus" className="hover:text-gray-400">Contact Us</a></li>
              {/* <li><a href="/dashboard" className="hover:text-gray-400">dashboard</a></li> */}
            </ul>
          </nav>
          <button onClick={loginroute} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Log In
          </button>
          <button onClick={Signuproute} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign up
          </button>
        </div>
      </header>

      <main className="container mx-auto my-4 flex-1">
        <h1 className="text-4xl font-bold mb-4">Welcome to E-GOVERENCE SITE</h1>
        <p className="text-lg">
         
The main motto of e-governance in the e-health sector is to improve the delivery of healthcare services through the use of technology and digital tools. This involves the use of electronic health records, telemedicine, mobile health apps, and other technologies to streamline healthcare delivery, reduce costs, and improve access to care for patients.

E-governance in the e-health sector also aims to improve the overall efficiency of healthcare systems by enabling better communication and coordination among healthcare providers and stakeholders, facilitating the sharing of health information across different organizations, and enabling better monitoring and evaluation of health outcomes.

Ultimately, the goal of e-governance in the e-health sector is to improve the quality of healthcare services and outcomes for patients, while also making healthcare more accessible and affordable for all.
        </p>
        <button onClick={eemployeeroute} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
          Employee
        </button>
      </main>

      {/* <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-center items-center">
          <p>&copy; Footer</p>
        </div>
      </footer> */}
       {/* <Navbar/> */}
            <Slider/>
      
      <Slider2  images={images}/>
      
      {/* <BlogCard/> */}

       <Footer/>
    </div>
  );
}

export default HomePage;
