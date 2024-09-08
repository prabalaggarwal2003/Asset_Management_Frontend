import {Helmet} from 'react-helmet';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Footer from '../components/footer'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Lottie from 'lottie-react';
import animation from '../animation.json';

export default function Home(){
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const navigate = useNavigate();
    
    const handleLogin = async(e) =>{
      e.preventDefault();
      fakeLogin(username, password);
      
    };

    const fakeLogin=(username, password) =>{
      return new Promise((resolve)=>{
        setTimeout(()=>{
          if(username==='prabal20csea22@bpitindia.edu.in' && password==='prabal'){
            resolve(true);
            navigate('/dashboard');
          }
          else if(username==='achalkaushik@bpitindia.edu.in' && password==='achalsir'){
resolve(true);
navigate('/admin_dashboard');
          }
          else{
            resolve(false);
            alert("Enter Valid Credentials")
          }
          },1000);
        });
    };

  
    return(
        <div>
      <Helmet><script src="script.js"/></Helmet>
<Navbar/>

<section  className="main1" style={{position: "sticky"}}>
  
  <img src="https://images.shiksha.com/mediadata/images/1512469113phpxVkQNz.png" alt=""/>
<div  className="L1"> <h1>WELCOME TO BPIT'S</h1> 
 <h1  className="L2"  >ASSET <span style={{color: "red"}}>MANAGEMENT</span> SYSTEM</h1>
 <h2 className="L3">Streamlining Asset Management for a Smarter Campus</h2>
 </div>
</section>

<br/>
<section className='intro'>
  <div className='Apart'>
<h1 className='how'>Where College Asset Management  Meets Efficiency</h1>  <br/>
<h2 className='Line2'>Simplify College Operations with Effective <br/>Asset Management</h2>
</div>
<div className='Bpart'>
<Lottie className='anima' animationData={animation}/> </div>
 </section>

 <br/>
 <br/>

<div className='signin-form' id="signin">

  <form>
    <label>Email ID:</label>
    <br/>

    <input type="text" onChange={(e) => setUsername(e.target.value)} required/>
    <br/>
    <br/>
    <br/>
    <br/>

    <label>Password:</label>
    <br/>

    <input type="password" onChange={(e) => setPassword(e.target.value)} required/>
    <br/>
    <br/>

    <input type="submit" value="Submit" onClick={handleLogin} className="btn" />
    </form>

</div>

<br/>
<br/>
<br/>

<div className='about' id='aboutus'> <br/><br/>
  <h1 className='headingA'>ABOUT US</h1>
  <div className='parts'>
    <p>Streamlining the process of reporting faults <br></br> and damages in equipment using our centralised platform ensuring that the  <br></br>right people are informed at the right time</p>
  </div>
   <div className='logos'>
 <figure>
 <img  className="firstlogo" src='https://cdn-icons-png.flaticon.com/128/1450/1450932.png'/>
 <figcaption> 
 <h3>Effortlessly Report Asset Status</h3>
 <p>Easily report asset conditions for <br/> prompt attention and action</p></figcaption>
 </figure>
 <figure>
  <img  className="firstlogo" src='https://cdn-icons-png.flaticon.com/128/842/842482.png'/>
  <figcaption> 
 <h3>Accurately Track Asset Locations</h3>
 <p>Precisely track asset locations to <br/> ensure efficient utilization.</p></figcaption>
 </figure>
 <figure>
  <img className="firstlogo"  src='https://cdn-icons-png.flaticon.com/128/8568/8568089.png'/>
  <figcaption> 
 <h3>Streamline Repairs and Maintenance</h3>
 <p>Quickly manage repairs to maintain <br/> optimal asset functionality.</p></figcaption>
 </figure>
   </div>
    <br/><br/><br/>
  </div>




<br/><br/>
<br/><br/>
<br/><br/>

<div  className="vis" id="vision">
<h1>Vision & Mission</h1>
<div className='ParaVis'>
<p>
  Vision To establish a leading Global center of excellence in multidisciplinary education, training and research in the area of Engineering, Technology and Management. To produce technologically competent, morally & emotionally strong and ethically sound professionals who excel in their chosen field, practice commitment to their profession and dedicate themselves to the service of mankind.</p>
 <img className='visimage' src='https://i.imgur.com/HY84eiI.jpg'/>
</div>
</div>

<br/>
<br/>
<br/>



<br/>
<br/>
<Footer/>

        </div>
    )
}