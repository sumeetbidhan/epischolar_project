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
                <div className="circle">
                    <h3>Photographs</h3>
                    <ul>
                        <li>Recent passport-size</li>
                    </ul>
                </div>
                <div className="circle">
                    <h3>Property Documents</h3>
                    <ul>
                        <li>Registered sale deed</li>
                    </ul>
                </div>
                <div className="circle">
                    <h3>Bank Statements</h3>
                    <ul>
                        <li>Last 6 months</li>
                    </ul>
                </div>
                <div className="circle">
                    <h3>Academic Records</h3>
                    <ul>
                        <li>Certificates</li>
                        <li>Mark sheets</li>
                    </ul>
                </div>
            </div>
            <div className="orbit orbit-2">
                <div className="circle">
                    <h3>Application Form</h3>
                    <ul>
                        <li>Completed and signed</li>
                    </ul>
                </div>
                <div className="circle">
                    <h3>Residence Proof</h3>
                    <ul>
                        <li>Utility bill</li>
                        <li>Rental agreement</li>
                    </ul>
                </div>
                <div className="circle">
                    <h3>Additional Documents</h3>
                    <ul>
                        <li>Employment letter</li>
                    </ul>
                </div>
                <div className="circle">
                    <h3>Identity Proof</h3>
                    <ul>
                        <li>Passport</li>
                        <li>Driver's license</li>
                    </ul>
                </div>
            </div>
            <div className="orbit orbit-3">
                <div className="circle">
                    <h3>Guarantor Form</h3>
                    <ul>
                        <li>Signed by guarantor</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FeaturedComponent;
