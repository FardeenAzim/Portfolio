import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@mantine/core";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import { MantineProvider, createTheme } from '@mantine/core';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  }, []);

  const theme = createTheme({
    breakpoints: {
      'xs': '320px',
      'sm': '476px',
      'md': '640px',
      'bs': '768px',
      'lg': '962px',
      'xl': '1024',
      '2xl': '1280',
    },
  });
  return (
   <>
      <MantineProvider>
    <div>
        <Header />
        <Home />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer /> 
    </div>
    <Toaster />
     </MantineProvider>
    </>
  );
}

export default App;



