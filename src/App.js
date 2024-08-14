
// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './components/Home';
// import Projects from './components/Projects';
// import Experience from './components/Experience';
// import Contact from './components/Contact';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/experience" element={<Experience />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// //////////////////

// App.js
// import React from 'react';
// import Header from './components/Header';
// import Home from './components/Home';
// import Projects from './components/Projects';
// import Experience from './components/Experience';
// import Contact from './components/Contact';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <main>
//         <section id="home">
//           <Home />
//         </section>
//         <section id="projects">
//           <Projects />
//         </section>
//         <section id="experience">
//           <Experience />
//         </section>
//         <section id="contact">
//           <Contact />
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;



// App.js ;last version
// import React from 'react';
// import Header from './components/Header';
// import Home from './components/Home';
// import Projects from './components/Projects';
// import Experience from './components/Experience';
// import Contact from './components/Contact';

// function App() {
//   return (
//     <div className="bg-bg-dark text-white min-h-screen">
//       <Header />
//       <main className="max-w-6xl mx-auto px-4 py-8">
//         <section id="home" className="min-h-screen flex items-center">
//           <Home />
//         </section>
//         <section id="projects" className="min-h-screen py-20">
//           <Projects />
//         </section>
//         <section id="experience" className="min-h-screen py-20">
//           <Experience />
//         </section>
//         <section id="contact" className="min-h-screen py-20">
//           <Contact />
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;


// App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';



function App() {
  return (
    <div className="bg-bg-dark text-text-primary min-h-screen p-10 lg:p-20 ">
      <CustomCursor />
      <div className="max-w-6xl mx-auto ">
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-2/5 lg:fixed ">
            <Header />
            <SocialLinks />
          </div>
          <div className="lg:w-3/5 lg:ml-auto lg:pl-20 ">
            <About />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;