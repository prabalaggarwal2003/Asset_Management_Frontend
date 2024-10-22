import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import animation3 from '../animation3.json';
import Lottie from "lottie-react";
import Records from '../components/Records';
import Pagination from '../components/Pagination';

    


toast.configure();

export default function Admin_dashboard() {
  const [products, setProducts] = useState([]);
  const [complaintId, setComplaintId] = useState([]);
  const navigate = useNavigate();

  const notify = () => {
    toast("Status Updated");
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [Status, setStatus] = useState("");

  

  

  

  const handleClick = async () => {
    const res = await axios.get("https://asset-management-backend-postgres-3.onrender.com/issue/");
    console.log(res.data);
    const reversedProducts = res.data.reverse();
    setData(res.data);
    setLoading(false);
    setProducts(reversedProducts);
    };

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)
  
  const update = {
    ComplaintID:"",
    Designation:"",
    Name:"",
    EnrollmentNo:"",
    Location:"",
    Area:"",
    Floorno:"",
    Roomno:"",
    Itemtype:"",
    Equipmentid:"",
    Issuedescription:"",
    Status:"Pending",
  };

  const handleUpdate = async ()=> {
    axios.put(`https://asset-management-backend-postgres-3.onrender.com/issueUpdate/${complaintId}`,update)
    .then(response => {console.log("status updated")});
    navigate("/admin_dashboard");
  
  }
  
  return (
    <div>
      <header  className="header">
    <nav>
      <div  className="left">
        <a href="https://bpitindia.com/" target="_blank"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RzOQ_E52YXYZQ4Vwrbnbs_HaBhq0ZEvXrQ&s" alt="" /></a>  
      </div>
    </nav>

</header>

     

      <div className="parent">
        <div className="idhar">
        <br/>
<br/>
<br/>
<br/>
          <h1 id="title">
          Effortless Control at Your Fingertips 
          <br/>
          for <span className="hello"> Seamless Management </span>
          </h1>
          <br />
          <h2 id="subtitle">
          Optimize, Monitor, and Manage with Ease
          </h2>
          <br />
          <div className="decor"></div>
<br/>
          <h2 id="desc">
            Click on the <span className="hello"> View Reports </span>button to check
            all reports!
          </h2>
          <br />
        </div>

        <Lottie className="admin-animation" animationData={animation3} 
        style={{height:500,width:500,zIndex:1,marginRight:-400}}></Lottie>

        <div className="udhar">

        </div>


        </div>

        <br/>
        <br/>

        {/* <table>
          <thead>
            <tr>
            <th>Complaint ID</th>
            <th>Designation</th>
            <th>Name</th>
            <th>Enrolment No./Teacher ID</th>
            <th>Location</th>
            <th>Area</th>
            <th>Floor Number</th>
            <th>Room Number</th>
            <th>Item Type</th>
            <th>Equipment ID</th>
            <th>Issue Description</th>
            <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {products.map((prodObj, index) => (
            <tr key={index}>
    
                <td>
                  {prodObj.complaintid}
                </td>
                <td>
                  {prodObj.designation}
                </td>
                <td>
                  {prodObj.name}
                </td>
                <td>
                  {prodObj.enrollmentno}
                </td>
                <td>
                  {prodObj.location}
                </td>
                <td>
                  {prodObj.area}
                </td>
                <td>
                  {prodObj.floorno}
                </td>
                <td>
                  {prodObj.roomno}
                </td>
                <td>
                  {prodObj.itemtype}
                </td>
                <td>
                  {prodObj.equipmentid}
                </td>
                <td>
                  {prodObj.issuedescription}
                </td>
                <td>
                  {prodObj.status}
                </td>
                </tr>
          ))}
          </tbody>
        </table> */}

<Records data={currentRecords}/>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

        <button className="view-report" onClick={handleClick}>
            View Reports
          </button>
          

       <br/>
       <br/>
<br/>
<br/>
        <h1 className="update-status">Update the Status of a Complaint</h1>
        <div className="decor-2"></div>
<br/>
<br/>
<br/>

      <div className="status-form">
        <h2 className="h2">Enter Complaint ID:</h2>
      
       <form onSubmit={handleUpdate}>
        <input value={complaintId} onChange={(e)=>{
          setComplaintId(e.target.value)
        }}/>
        <button type="submit" onClick={notify} style={{marginLeft:25}}>Mark As 'Complete'</button>
      </form>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <Footer />
    </div>
  );
}
