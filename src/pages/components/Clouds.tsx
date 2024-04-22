
// import React, { useEffect, useRef } from 'react';
// // import { gsap } from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';


// import './cloud.css';
// import cloud2 from '../../assets/parallax-imgs/cloud2.webp';
// import cloud3 from '../../assets/parallax-imgs/cloud3.png';
// import mount1 from '../../assets/parallax-imgs/mount1.webp';
// import mount2 from '../../assets/parallax-imgs/mount2.webp';
// import mount3 from '../../assets/parallax-imgs/mount3.webp';
// import sky from '../../assets/parallax-imgs/sky.jpg';
// import cloudMask from '../../assets/parallax-imgs/cloudMask.png';

// export default function Clouds() {
//   const arrowBtnRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.set('.main', {
//       position: 'fixed',
//       background: '#fff',
//       width: '100%',
//       maxWidth: '1200px',
//       height: '100%',
//       top: 0,
//       left: '50%',
//       x: '-50%'
//     });

//     gsap.set('.scrollDist', {
//       width: '100%',
//       height: '200%'
//     });

//     gsap.timeline({
//       scrollTrigger: {
//         trigger: '.scrollDist',
//         start: 'top top',
//         end: 'bottom bottom',
//         scrub: 1
//       }
//     })
//       .fromTo('.sky', { y: 0 }, { y: -200 }, 0)
//       .fromTo('.cloud1', { y: 100 }, { y: -800 }, 0)
//       .fromTo('.cloud2', { y: -150 }, { y: -500 }, 0)
//       .fromTo('.cloud3', { y: -50 }, { y: -650 }, 0)
//       .fromTo('.mountBg', { y: -10 }, { y: -100 }, 0)
//       .fromTo('.mountMg', { y: -30 }, { y: -250 }, 0)
//       .fromTo('.mountFg', { y: -50 }, { y: -600 }, 0);

//     const arrowBtn = arrowBtnRef.current;

//     const handleMouseEnter = () => {
//       gsap.to('.arrow', { y: 10, duration: 0.8, ease: 'back.inOut(3)', overwrite: 'auto' });
//     };

//     const handleMouseLeave = () => {
//       gsap.to('.arrow', { y: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
//     };

//     const handleClick = () => {
//       gsap.to(window, { scrollTo: window.innerHeight, duration: 1.5, ease: 'power1.inOut' });
//     };

//     // if (arrowBtn) {
//     //   arrowBtn.onMouseEnter = handleMouseEnter;
//     //   arrowBtn.onMouseLeave = handleMouseLeave;
//     //   arrowBtn.onClick = handleClick;

//     //   return () => {
//     //     arrowBtn.onMouseEnter = null;
//     //     arrowBtn.onMouseLeave = null;
//     //     arrowBtn.onClick = null;
//     //   };
//     // }
//   }, []);

//   return (
//     <>
//       <div className="scrollDist"></div>
//       <div className="main">
//         <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
//           <mask id="m">
//             <g className="cloud1">
//               <rect fill="#fff" width="100%" height="801" y="799" />
//               <img src="https://assets.codepen.io/721952/cloud1Mask.jpg" alt="Cloud Mask" width="1200" height="800" />
//             </g>
//           </mask>

//           <img className="sky" src={sky} alt="Sky" width="1200" height="590" />
//           <img className="mountBg" src={mount1} alt="Mountain Background" width="1200" height="800" />
//           <img className="mountMg" src={mount2} alt="Mountain Middle Ground" width="1200" height="800" />
//           <img className="cloud2" src={cloud2} alt="Cloud 2" width="1200" height="800" />
//           <img className="cloud1" src={cloudMask} alt="Cloud 1" width="1200" height="800" />
//           <img className="cloud3" src={cloud3} alt="Cloud 3" width="1200" height="800" />
//           <img className="mountFg" src={mount3} alt="Mountain Foreground" width="1200" height="800" />
//           <text fill="#fff" x="350" y="200">
//             EXPLORE
//           </text>
//           <polyline className="arrow" fill="#fff" points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250" />

//           <g mask="url(#m)">
//             <rect fill="#fff" width="100%" height="100%" />
//             <text x="350" y="200" fill="#162a43">
//               FURTHER
//             </text>
//           </g>

//           <rect ref={arrowBtnRef} width="100" height="100" opacity="0" x="550" y="220" style={{ cursor: 'pointer' }} />
//         </svg>
//       </div>
//     </>
//   );
// }



















import "./cloud.css"
import cloud2 from "../../assets/parallax-imgs/cloud2.webp"
import cloud3 from "../../assets/parallax-imgs/cloud3.png"
import mount1 from "../../assets/parallax-imgs/mount1.webp"
import mount2 from "../../assets/parallax-imgs/mount2.webp"
import mount3 from "../../assets/parallax-imgs/mount3.webp"
import sky from "../../assets/parallax-imgs/sky.jpg"
import cloudMask from "../../assets/parallax-imgs/cloudMask.png"



export default function Clouds() {
  

  return (
   
    <div className="parallax">
      
        <img className="sky" src={sky} alt= "sky"/>
        <img className="mount1" src={mount1} alt= "mount1"/>
        <img className="mount2" src={mount2} alt= "mount2"/>
        <img className="cloud2" src={cloud2} alt= "cloud2"/>
        <img className="mount3" src={mount3} alt= "mount3"/>
        <img className="cloud3" src={cloud3} alt= "cloud3"/>
        <img className="cloudMask" src={cloudMask} alt="cloudMask"/>
      
        
    </div>

    
    
   
  )
}



