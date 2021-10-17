import React from 'react';
import axios from 'axios';
import { useState, useRef } from 'react';
  
const OwnerHomePage = () => {
    const[multiFile, setMultiFile] = useState('');
    const[title, setTitle] = useState('');

    const MultipleFileChange = (e) => {
        setMultiFile(e.target.files)
    }

    const UploadMultipleFile = async () => {
        const formData = new FormData();

        // Add the fields data here in form data object and append and send to API
        console.log(multiFile)
    }

    return (
        <main>
        <section className="midSection midBlock">

            <div className="loginReg-control">
             <label htmlFor="title">Title</label>
             <input name="title" type="text" className="loginReg-input" onChange={(e) => setTitle(e.target.value)}/>
            </div>

           <div className="loginReg-control"> 
            <input type="file" onChange={(e) => MultipleFileChange(e)} multiple/>
            <button onClick={() => UploadMultipleFile()}>Upload Files</button>
           </div>

           <div className="row">
            <div className="input-field col s6">
            <input id="streetAddress" type="text" className="validate" />
            <label htmlFor="streetAddress">Street Address</label>
          </div>

          <div className="input-field col s6">
           <input id="city" type="text" className="validate" />
           <label htmlFor="city">City</label>
          </div>

          <div className="input-field col s6">
           <input id="country" type="text" className="validate" />
           <label htmlFor="country">Country</label>
          </div>

          <div className="input-field col s6">
           <input id="postalCode" type="text" className="validate" />
           <label htmlFor="postalCode">Postal Code</label>
          </div>

          </div>
        </section>
        </main>
    );
}

export default OwnerHomePage;