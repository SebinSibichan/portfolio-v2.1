

// // // // components/Header.js  last version
// // // import React from 'react';

// // // function Header() {
// // //   return (
// // //     <header className="bg-bg-dark bg-opacity-90 fixed w-full top-0 z-50">
// // //       <nav className="max-w-6xl mx-auto px-4 py-4">
// // //         <ul className="flex justify-center space-x-6">
// // //           {['home', 'projects', 'experience', 'contact'].map((item) => (
// // //             <li key={item}>
// // //               <a 
// // //                 href={`#${item}`} 
// // //                 className="text-white hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-110"
// // //               >
// // //                 {item.charAt(0).toUpperCase() + item.slice(1)}
// // //               </a>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       </nav>
// // //     </header>
// // //   );
// // // }

// // // export default Header;



// // // components/Header.js
// // import React from 'react';

// // function Header() {
// //   return (
// //     <header className="mb-10">
// //       <h1 className="text-5xl font-bold mb-5 ">Sebin Sibichan</h1>
// //       <h2 className="text-2xl text-accent mb-4 mt-4 ">I'm a Senior Frontend Engineer</h2>
// //       <p className="text-text-secondary mb-8 mr-8">
// //         I build pixel-perfect, engaging, and accessible digital experiences.
// //       </p>
// //       <nav>
// //         <ul className="space-y-3">
// //           <li><a href="#about" className="text-text-secondary hover:text-accent">About</a></li>
// //           <li><a href="#experience" className="text-text-secondary hover:text-accent">Experience</a></li>
// //           <li><a href="#projects" className="text-text-secondary hover:text-accent">Projects</a></li>
// //           <li><a href="#contact" className="text-text-secondary hover:text-accent">Contact</a></li>

// //         </ul>
// //       </nav>
// //     </header>
// //   );
// // }

// // export default Header;

// import React from 'react';
// import AnimatedTitle from './AnimatedTitle';

// function Header() {
//   return (
//     <header className="mb-10">
//       <h1 className="text-5xl font-bold mb-5">Sebin Sibichan</h1>
//       <AnimatedTitle />
//       <p className="text-text-secondary mb-8 mr-8">
//         I build pixel-perfect, engaging, and accessible digital experiences.
        
//       </p>
//       <nav>
//         <ul className="space-y-3">
//           <li><a href="#about" className="text-text-secondary hover:text-accent">About</a></li>
//           <li><a href="#experience" className="text-text-secondary hover:text-accent">Experience</a></li>
//           <li><a href="#projects" className="text-text-secondary hover:text-accent">Projects</a></li>
//           <li><a href="#contact" className="text-text-secondary hover:text-accent">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import React from 'react';
import AnimatedTitle from './AnimatedTitle';
import useActiveSection from './useActiveSection';

function Header() {
  const sectionIds = ['about', 'experience', 'projects', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  return (
    <header className="mb-10 sticky top-0 bg-background z-10 py-4">
      <h1 className="text-5xl font-bold mb-5">Sebin Sibichan</h1>
      <AnimatedTitle />
      <p className="text-text-secondary mb-8 mr-8">
        I build pixel-perfect, engaging, and accessible digital experiences.
      </p>
      <nav>
        <ul className="space-y-3">
          {sectionIds.map((sectionId) => (
            <li key={sectionId}>
              <a
                href={`#${sectionId}`}
                className={`text-text-secondary hover:text-accent transition-colors duration-300 ${
                  activeSection === sectionId ? 'text-white font-bold' : ''
                }`}
              >
                {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;