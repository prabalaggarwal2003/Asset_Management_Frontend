import React,{useState} from 'react'

const Records = ({data}) => {
const[search, setSearch]=useState('');



  return ( 
    <>
    <input type='search' name='search' id='search' style={{marginLeft:40,}}
    onChange={(e)=>setSearch(e.target.value)} placeholder='Search here...'/>
    <table>
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
            {
            data.filter((item)=>{
              
              if(search.toLowerCase()==='')
              {
                return item;
              }
              else if(search.toLowerCase()==='pending'||search.toLowerCase()==='complete')
              {
              return item.status.toLowerCase().includes(search);
              }
              else if(search.toLowerCase()==='faculty'||search.toLowerCase()==='student')
                {
                return item.designation.toLowerCase().includes(search);
                }
              else if(search.toLowerCase()==='old building'||search.toLowerCase()==='new building'
            ||search.toLowerCase()==='canteen'||search.toLowerCase()==='parking'
            ||search.toLowerCase()==='ground')
                {
                return item.location.toLowerCase().includes(search);
                }
              else
              {
                return item;
              }

            }).map(item => (
                <tr>
                    <td>
                  {item.complaintid}
                </td>
                <td>
                  {item.designation}
                </td>
                <td>
                  {item.name}
                </td>
                <td>
                  {item.enrollmentno}
                </td>
                <td>
                  {item.location}
                </td>
                <td>
                  {item.area}
                </td>
                <td>
                  {item.floorno}
                </td>
                <td>
                  {item.roomno}
                </td>
                <td>
                  {item.itemtype}
                </td>
                <td>
                  {item.equipmentid}
                </td>
                <td>
                  {item.issuedescription}
                </td>
                <td>
                  {item.status}
                </td>
                </tr>
            ))}
            
            
        </tbody>
    </table>
    <br/>
    
    </>
  ) 
}

export default Records  