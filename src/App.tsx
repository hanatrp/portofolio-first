// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import foto  from '../src/assets/img/mbaOliv-removebg-preview.png'

function App() {

  return (
    <div className=' items-start'>
      <header className="bg-white top-0 left-0 w-full flex items-center z-10 fixed">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a href="#home" className='font-bold text-lg text-primary block py-6'>Hanatrp</a>
            </div>
          {/* Hamburger */}
            {/* <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
          </button> */}
            
       <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
           <a href="#home" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
          <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
          </svg>
           Home
          </a>
          </li>
          <li>
      <div className="flex items-center">
        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#contact" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Contact</a>
      </div>
     </li>
    <li aria-current="page">
      <div className="flex items-center">
        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#aboutMe" className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400 dark:hover:text-white">About Me</a>
        {/* <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"> </span> */}
      </div>
    </li>
  </ol>
</nav>

            {/* <div className='flex items-center px-4'>
             <button id='burger' name='burger' type='button' className='block absolute right-4'>
              <span className="burger"></span>
              <span className="burger"></span>
              <span className="burger"></span>
             </button>
            </div> */}
          </div>
        </div>
      </header>
      {/* home */}
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-start px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl "> WELCOME!🙌 I AM  <span className="block font-bold text-4xl mt-1 text-dark lg:text-5xl">HANA</span> </h1>
              <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl"> I Am Full Stack Web Developer</h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed repudiandae, excepturi maxime odit magni, dolorem neque fuga ad quam esse necessitatibus, sint quisquam. Quasi accusantium eligendi nulla nemo! Nemo, repellat!</p>

              <a href="#contact" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80">Contact Me</a>
            </div>

            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <img src={foto} alt="mba oliv" className='max-w-full mx-auto ' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about */}

      {/* <section id='home' className='pt-36'>

      </section> */}
        <section id='about' className='pt-36 pb-32'>
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full px-4 mb-10 lg:w-1/2">
                <h4 className='font-bold uppercase text-pribary text-lg mb-3'>About Me</h4>
                <h2 className='font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl'>Ini Pusing! Ayo Belajar nak</h2>
                <p className='font-medium text-base text-secondary max-w-xl'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati in enim aut assumenda aperiam at.</p>
            </div>
            
            <div className="w-full px-4 lg:w-1/2">
              <h3 className='font-semibold text-dark text-2xl mb-4 lg:pt-10 lg:text-3xl'>Let Us Be Freinds!</h3>
              <p className='font-medium text-base text-secondary mb-6 lg:text-lg'>Follow and contact me for talk about Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nisi.</p>

              <div className="flex items-center">
                {/* ig */}
                <a href="https://instagram.com/hanatrp" target='_blank' className='w-12 h-12 mr-4 rounded-full flex justify-center items-center border border-gray-600 hover:border-secondary hover:bg-primary hover:text-white'>
                <svg role="img" width='30' className='fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Instagram</title>
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
                </a>

                {/* github */}
                <a href="https://github.com/hanatrp" target='_blank' className='w-12 h-12 mr-5 rounded-full flex justify-center items-center border border-gray-600 hover:border-secondary hover:bg-primary hover:text-white'> 
                <svg role="img" viewBox="0 0 24 24" width={30} className='fill-current' xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
                <a href="https://linkedin.com/hanatrp" target='_blank' className='w-12 h-12 mr-4  flex justify-center items-center rounded-full border border-gray-600 hover:border-secondary hover:bg-primary hover:text-white'>
                  <svg role="img" viewBox="0 0 24 24" width={30} className='fill-current' xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> 
                </a>
              </div>
            </div>
          </div>
          </div>
        </section>
    
    </div>
  )
}

export default App
