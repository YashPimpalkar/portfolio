import React from 'react';
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Testimonial from './components/testimonials/Testimonial';
import Pricing from './components/pricing/Pricing';
const App = () => {
  return (
    <>
      <Sidebar/>
      <main className='main'>
       <Home />
       <About />
       <Services />
       <Resume />
       <Portfolio />
       <Pricing />
       <Testimonial />
       <Blog />
       <Contact />
      </main>
    </>
  )
}

export default App
