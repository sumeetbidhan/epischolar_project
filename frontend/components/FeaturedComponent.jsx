import React, { useEffect, useState } from 'react';
import axios from 'axios';


const FeaturedComponent = () => {
 const [data, setData] = useState([]);


 useEffect(() => {
   axios.get('http://localhost:3001/globe-data')
     .then(response => {
       setData(response.data);
     })
     .catch(error => {
       console.error('Error fetching data:', error);
     });
 }, []);


 const orbit1Data = [
   { title: 'Photographs', items: [' Passport size photographs of the applicant and co-applicant (if any).'], x: 115, y: 50 },
   { title: 'Property Documents', items: [' If applicable as collateral, documents related to the property being pledged.'], x: 70, y: -210 },
   { title: 'Bank Statements', items: [' For the last 6 months (both applicant and co-applicant).'], x: -200, y: -200 },
   { title: 'Academic Records', items: ['Mark sheets and certificates of qualifying exams.', 'Admission letter.'], x: -170, y: 100 }
 ];


 const orbit2Data = [
   { title: 'Application Form', items: ['Completed and signed application form.'], x: 230, y: -100 },
   { title: 'Residence Proof', items: ['Any one of the following:', "Passport", "Aadhaar", "Voter ID", "Driving license"], x: 0, y: 230 },
   { title: 'Additional Documents', items: [' PAN card (Permanent Account Number)'], x: -350, y: 0 },
   { title: 'Identity Proof', items: ['Any one of the following:', "Passport", "Aadhaar", "Voter ID", "Driving license"], x: -130, y: -360 }
 ];


 const orbit3Data = [
   { title: 'Guarantor Form', items: ['If required, duly filled and signed.'], x: 280, y: 150 }
 ];


 const generateCircles = (data) => {
   return data.map((item, index) => (
     <div
       className="circle"
       style={{ left: `calc(50% + ${item.x}px)`, top: `calc(50% + ${item.y}px)` }}
       key={index}
     >
       <div className="circle-content">
         <h3>{item.title}</h3>
         <ul>
           {item.items.map((listItem, i) => (
             <li key={i} className={listItem === 'Any one of the following:' ? 'no-bullet' : ''}>{listItem}</li>
           ))}
         </ul>
       </div>
     </div>
   ));
 };


 return (
   <div className="solar-system">
     <div className="center-circle">
       <h2>Income Proof</h2>
       <ul>
         <li>Salary slips of the last 3 months</li>
         <li>Form 16</li>
         <li>Income Tax Returns (ITR)</li>
         <li>ITR, Profit & Loss account, Balance Sheet, and/or Business Proof</li>
       </ul>
     </div>
     <div className="orbit orbit-1">
       {generateCircles(orbit1Data)}
     </div>
     <div className="orbit orbit-2">
       {generateCircles(orbit2Data)}
     </div>
     <div className="orbit orbit-3">
       {generateCircles(orbit3Data)}
     </div>
   </div>
 );
};


export default FeaturedComponent;
