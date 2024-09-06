// import React, { useState, useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import  TOPOLOGY  from 'vanta/src/vanta.topology';

// const VantaBackground = () => {
//   const [vantaEffect, setVantaEffect] = useState(null);
//   const vantaRef = useRef(null);

//   useEffect(() => {
//     try{
//       if(!vantaEffect){
//          setVantaEffect(TOPOLOGY({
//       el: vantaRef.current,
//       THREE,
//       mouseControls: true,
//       touchControls: true,
//       gyroControls: false,
//       minHeight: 200.00,
//       minWidth: 200.00,
//       scale: 1.00,
//       scaleMobile: 1.00
//     })
//   );
//   }
// } catch (error) {
//   console.error('Error initializing WebGL:', error);
// }

//   const handleResize = () => {
//     if (vantaEffect) {
//       vantaEffect.resize();
//     }
//   };

//   window.addEventListener("resize", handleResize);


//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div ref={vantaRef} className="absolute inset-0 -z-10 min-h-screen w-full flex items-center justify-center" id="Home">
//     </div>
//   );
// };
 
// export default VantaBackground;