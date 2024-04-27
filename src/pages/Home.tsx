// import { useState } from 'react'
import './../App.css'
import pfp from '../assets/ayanoo.png'
import l from '../assets/linkedin.svg'
import arrow_long from '../assets/arrow.svg'
import git_hub from '../assets/git.svg'
import insta from '../assets/insta.svg'
import Clouds from './components/Clouds'
import takao from '../assets/takao.jpg'
import {motion} from "framer-motion"

function Home() {
  // const [count, setCount] = useState(0)
  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
  
    },
  
  };
  return (

    <>
      <body>
        <div className='wrapper'>
          <div id="bg">
            <nav>
              <h1 className="title"> Portfolio </h1>

              <ul className="sections">
                <li><a href=" ">Home</a></li>
                <li><a href=" ">Projects</a></li>
                <li><a href=" ">Resume</a></li>
                <li><a href=" ">Awards</a></li>
              </ul>
              <button className="hiButton">
                Say hi!
              </button>
            </nav>
            <div className="content">
              <div className="desc">
                <h1 className="heading" >Greetings, I'm </h1>
                <h1 className="name animate-pop">Kiyotaka Ayanokōji</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <div className="links">
                  <img src={l} alt="linkedin_logo" width="20" height="20"></img>
                  <img src={git_hub} alt="github_logo" width="20" height="20"></img>
                  <img src={insta} alt="instagram_logo" width="20" height="20"></img>

                </div>
                <img className="arrow" src={arrow_long} alt="long down arrow" width="40" height="100" />
              </div>

              <div className="img_bg">
                <div className="circle1"></div>
                <img className="pfp animate-pop" src={pfp} alt="Ayanokoji" />
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
              </div>
            </div>
          </div>

          <section className="sec2">
            <div className="animate-pop ">
              <h1 >CURIOUS... BY NAME, BY NATURE</h1>
              <p>It’s what inspires us to whip up, throw together, tear, shake, and break the rules – on a mission to redefine food for a new generation.
              </p>
            </div>
            <img className="sec2_img animate-pop " src={takao} alt="kurko_basuke" />
          </section>


          <Clouds />
          <section className="sec3">
            <div className="text1">
              FURTHER
            </div>
          </section>

          <section className="sec4">
            <div className="text2">
            </div>
          </section>

          <section className="sec5">
          <motion.div className="text3" variants={variants} initial="initial" whileInView="animate">
              <motion.h1 className="h1_tag" variants={variants}>Let's</motion.h1>
              <motion.h1 className="h1_tag" variants={variants}>Connect</motion.h1>
              <br/><br/>
              <motion.h3 variants={variants}>Mail</motion.h3>
              <motion.p variants={variants}>hello@react.dev</motion.p>
              <br/><br/>
              <motion.h3 variants={variants}>Address</motion.h3>
              <motion.p variants={variants}> 123 Avenue Street New York</motion.p>
              <br/><br/>
              <motion.h3 variants={variants}> Phone</motion.h3>
              <motion.p variants={variants}> +12345678</motion.p>
            </motion.div>
            <form className="fill">
              <input className="f_name" type="text" placeholder='Name'></input><br/>
              <input className="f_email" type="text" placeholder='Email'></input><br/>
              <textarea className ="f_message" rows={8} placeholder='Message'></textarea><br/>
              <button className="f_submit" >Submit</button>

            </form>

          </section>


        </div>

      </body>





    </>

  )
}

export default Home