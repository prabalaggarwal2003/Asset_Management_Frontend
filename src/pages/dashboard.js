
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import axios from "axios";
import animation2 from '../animation2.json';
import Lottie from "lottie-react";


export default function Dashboard() {
  function ButtonLink({ to, children }) {
    return (
      <Link to={to}>
        <button>{children}</button>
      </Link>
    );
  }

  const [products, setProducts] = useState([]);
  const [history, setHistory] = useState([]);
  const [enrollmentno, setEnrollmentno] = useState("");

  // const handleClick = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:9010/issue/");
  //     const reversedProducts = res.data.reverse();
  //     setProducts(reversedProducts);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };

  const handleRefresh = async () => {
    try {
      const res = await axios.get(
        `/issues/${enrollmentno}`
      );
      if (res.data) {
        const reversedProductsEnro = res.data.reverse();
        setProducts(reversedProductsEnro);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };

  return (
    <div>

<header  className="header">
    <nav>
        <a href="https://bpitindia.com/" target="_blank"> <img className='bpit' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RzOQ_E52YXYZQ4Vwrbnbs_HaBhq0ZEvXrQ&s" alt="" /></a>  
    </nav>
</header>
      <br/>

      <div className="main">
        <div className="one">
          <h1 id="title">
          Report Campus Assets with Ease for <span className="hello">Improved Resource Utilization</span>
          </h1>
          <br/>
          <div className="decor"></div>
          <br />
          <h2 id="subtitle">
            Fill a <span className="hello">quick form </span>to get it reported
            to <br />
            the authorities <span className="hello">in a snap!</span>
          </h2>

          <br />

          <ButtonLink to="/form">Report here</ButtonLink>
        </div>

        <div className="two">
          <Lottie className="form-animation" animationData={animation2}></Lottie>
        </div>

      </div>

      <div className="how-to">
        <br/>
        <br/>
      <h1 className='how-report'>HOW TO REPORT AN ISSUE?</h1>
      <div className='logos'>
 <figure>
 <img  className="firstlogo" src='https://cdn-icons-png.freepik.com/256/3840/3840581.png?ga=GA1.2.1966107293.1722769303&semt=ais_hybrid'/>
 <figcaption> 
 <h3>Personal Details</h3>
 <p>Fill some personal details like<br/>name and enrolment number</p></figcaption>
 </figure>
 <figure>
  <img  className="firstlogo" src='https://cdn-icons-png.freepik.com/256/3841/3841714.png?ga=GA1.2.1966107293.1722769303&semt=ais_hybrid'/>
  <figcaption> 
 <h3>Identifying the Location</h3>
 <p>Identify the location of the issue<br/> and fill in accordingly</p></figcaption>
 </figure>
 <figure>
  <img className="firstlogo"  src='https://cdn-icons-png.freepik.com/256/8068/8068040.png?ga=GA1.2.1966107293.1722769303&semt=ais_hybrid'/>
  <figcaption> 
 <h3>Describing the Issue</h3>
 <p>Provide a description of the<br/>issue for better assessment</p></figcaption>
 </figure>
 <figure>
  <img className="firstlogo"  src='https://cdn-icons-png.freepik.com/256/6657/6657092.png?ga=GA1.2.1966107293.1722769303&semt=ais_hybrid'/>
  <figcaption> 
 <h3>Track Report Status</h3>
 <p>Track the status of the report<br/>using your enrolment number</p></figcaption>
 </figure>
   </div>
   <br/>
   <br/>

      </div>
<br/>
<br/>

      <div className="user-history">
        <br/>
        <br/>
      <h2 className="history-data">
        View all your reports here 
      </h2>
      

      <div className="decor2"></div>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className="input-history">
      <label className="p">Enter Enrolment Number:</label>

      <input className="p"
        type="text"
        value={enrollmentno}
        onChange={(e) => {
          setEnrollmentno(e.target.value);
        }}
      />
      <button className="history-submit" onClick={handleRefresh}>Submit</button>
      </div>

<br/>
<br/>
<br/>

      <div className="table">
      <table className="p">
        <thead>
          <tr>
            <th>Complaint ID</th>
            <th>Room Number</th>
            <th>Equipment Type</th>
            <th>Equipment ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            products.map((prodObj, index) => (
              <tr key={index}>
                <td style={{ fontSize: 20, color: "black" }}>
                  {prodObj.complaintid}
                </td>
                <td style={{ fontSize: 20, color: "black" }}>
                  {prodObj.roomno}
                </td>
                <td style={{ fontSize: 20, color: "black" }}>
                  {prodObj.itemtype}
                </td>
                <td style={{ fontSize: 20, color: "black" }}>
                  {prodObj.equipmentid}
                </td>
                <td style={{ fontSize: 20, color: "black" }}>
                  {prodObj.status}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
      <br/>
      <br/>

      </div>


      {/* <button className="btnn" onClick={handleClick}>
        Refresh
      </button> */}

      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}