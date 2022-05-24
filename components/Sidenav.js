import Link from 'next/link'
import style from '../styles/Sidenav.module.css'
import { useState, useRef } from 'react'
const Sidenav = () => {

    const snav = useRef(0);
    const mai=useRef(0);

    function openNav() {
        // document.getElementById("mySidenav").style.width = "250px";
        // document.getElementById("main").style.marginLeft = "250px";
        // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        // console.log(snav);
        mai.current.style.backgroundColor="rgba(0,0,0,0.4)"
        snav.current.style.width="250px";
        mai.current.style.marginLeft="250px";
      }
      
      function closeNav() {
        // document.getElementById("mySidenav").style.width = "0";
        // document.getElementById("main").style.marginLeft= "0";
        // document.body.style.backgroundColor = "white";

        snav.current.style.width="0px";
        mai.current.style.marginLeft="0px";
        mai.current.style.backgroundColor="white"
      }
    return (

       <>

          <style jsx>{`

          body {
              font-family: "Lato", sans-serif;
              transition: background-color .5s;
            }
            
            .sidenav {
              height: 100%;
              width: 0;
              position: fixed;
              z-index: 1;
              top: 0;
              left: 0;
              background-color: #111;
              overflow-x: hidden;
              transition: 0.5s;
              padding-top: 60px;
            }
            
            .sidenav a {
              padding: 8px 8px 8px 32px;
              text-decoration: none;
              font-size: 25px;
              color: #818181;
              display: block;
              transition: 0.3s;
            }
            
            .sidenav a:hover {
              color: #f1f1f1;
            }
            
            .sidenav .closebtn {
              position: absolute;
              top: 0;
              right: 25px;
              font-size: 36px;
              margin-left: 50px;
            }
            
            #main {
              transition: margin-left .5s;
              padding: 16px;
            }
            
            @media screen and (max-height: 450px) {
              .sidenav {padding-top: 15px;}
              .sidenav a {font-size: 18px;}
            }
            
            `}
        </style>
        <div id="mySidenav" ref={snav} className="sidenav">
            <Link href="#"><a  className="closebtn" onClick={()=>closeNav()}>&times;</a></Link>
            <Link href="#"><a >About</a></Link>
            <Link href="#"><a >Services</a></Link>
            <Link href="#"><a >Clients</a></Link>
            <Link href="#"><a >Contact</a></Link>
        </div>

        <div id="main" ref={mai}>
          <span style={{fontSize:"30px" ,  cursor:"pointer"}} onClick={()=>openNav()}>&#9776; open</span>
            <h2>Sidenav Push Example</h2>
            <p>Click on the element below to open the side navigation menu, and push this content to the right. Notice that we add a black see-through background-color to body when the sidenav is opened.</p>
            
        </div>


        

      </>



      );
}
 
export default Sidenav;