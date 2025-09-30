// // import { Routes, Route } from 'react-router-dom';
// // import './App.css';
// // import Sagbar from './components/Sagbar/Sagbar';
// // import Home from './components/Home/Home';
// // import About from './components/About/About';
// // import Skills from './components/Skills/Skills';
// // import Projects from './components/Projects/Projects';
// // import Contact from './components/Contact/Contact';
// // import NoteFound from './components/notefound/NoteFound';

// // const Layout = ({ children }) => {
// //   return (
// //     <div>
// //       <Sagbar />
// //       <main>
// //         <div className="router">{children}</div>
// //       </main>
// //     </div>
// //   );
// // };

// // const App = () => {
// //   return (
// //     <Routes>
// //       <Route
// //         path="/"
// //         element={
// //           <Layout>
// //             <Home />
// //           </Layout>
// //         }
// //       />
// //       <Route
// //         path="/about"
// //         element={
// //           <Layout>
// //             <About />
// //           </Layout>
// //         }
// //       />
// //       <Route
// //         path="/skills"
// //         element={
// //           <Layout>
// //             <Skills />
// //           </Layout>
// //         }
// //       />
// //       <Route
// //         path="/projects"
// //         element={
// //           <Layout><Projects /></Layout>
// //         }
// //       />
// //       <Route
// //         path="/contact"
// //         element={
// //           <Layout><Contact /></Layout>
// //         }
// //       />

// //       {/*  404 sahifa -> Sagbar chiqmaydi */}
// //       <Route path="*" element={<NoteFound />} />
// //     </Routes>
// //   );
// // };

// // export default App;



// // Updated Sagbar.jsx with proper navigation highlighting
// import React, { useState } from 'react'
// import rasm from './assets/image.png'
// import './sagbar.css'

// // Icons
// import { RiMenu2Fill } from "react-icons/ri";
// import { IoHome, IoPersonSharp } from "react-icons/io5";
// import { FaBriefcase, FaListUl } from "react-icons/fa";
// import { IoMdChatboxes } from "react-icons/io";
// import { NavLink, useLocation } from "react-router-dom";

// const Sagbar = () => {
//     const [open, setOpen] = useState(true);
//     const location = useLocation();

//     return (
//         <div className={`sagbar ${open ? "" : "active"}`}>
//             <div className="sagbar-min">
//                 <div className="div-icon">
//                     <h1>
//                         <RiMenu2Fill 
//                             size={30} 
//                             onClick={() => setOpen(!open)} 
//                             className='menu-icon' 
//                         />
//                     </h1>
//                 </div>
//                 <div className="sagbar-left">
//                     <img src={rasm} alt="Logo" />
//                     {open && <h1>Ibrohim</h1>}
//                 </div>

//                 <ul className="sagbar-menu">
//                     <li>
//                         <NavLink 
//                             to="/" 
//                             className={({isActive}) => 
//                                 `link ${isActive ? "active" : ""}`
//                             }
//                         >
//                             <span className='icon'><IoHome /></span>
//                             {open && <span className='text'>Home</span>}
//                         </NavLink>
//                     </li>
//                     <hr />
//                     <li>
//                         <NavLink 
//                             to="/about" 
//                             className={({isActive}) => 
//                                 `link ${isActive ? "active" : ""}`
//                             }
//                         >
//                             <span className='icon'><IoPersonSharp /></span>
//                             {open && <span className='text'>About</span>}
//                         </NavLink>
//                     </li>
//                     <hr />
//                     <li>
//                         <NavLink 
//                             to="/skills" 
//                             className={({isActive}) => 
//                                 `link ${isActive ? "active" : ""}`
//                             }
//                         >
//                             <span className='icon'><FaListUl /></span>
//                             {open && <span className='text'>Skills</span>}
//                         </NavLink>
//                     </li>
//                     <hr />
//                     <li>
//                         <NavLink 
//                             to="/projects" 
//                             className={({isActive}) => 
//                                 `link ${isActive ? "active" : ""}`
//                             }
//                         >
//                             <span className='icon'><FaBriefcase /></span>
//                             {open && <span className='text'>Projects</span>}
//                         </NavLink>
//                     </li>
//                     <hr />
//                     <li>
//                         <NavLink 
//                             to="/contact" 
//                             className={({isActive}) => 
//                                 `link ${isActive ? "active" : ""}`
//                             }
//                         >
//                             <span className='icon'><IoMdChatboxes /></span>
//                             {open && <span className='text'>Contact</span>}
//                         </NavLink>
//                     </li>
//                     <hr />
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Sagbar








// App.jsx - Updated with proper routing and layout
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Sagbar from './components/Sagbar/Sagbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import NoteFound from './components/notefound/NoteFound';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Sagbar />
      <main className="main-content">
        <div className="router">{children}</div>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/skills"
        element={
          <Layout>
            <Skills />
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={
          <Layout><Projects /></Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout><Contact /></Layout>
        }
      />

      {/*  404 page -> No Sagbar */}
      <Route path="*" element={<NoteFound />} />
    </Routes>
  );
};

export default App;