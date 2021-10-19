import React from 'react';
import axios from 'axios';
import { useState, useRef } from 'react';
  
const OwnerHomePage = () => {
    const[multiFile, setMultiFile] = useState('');
    const[title, setTitle] = useState('');
    const[address, setAddress] = useState('');
    const[country, setCountry] = useState('');
    const[city, setCity] = useState('');
    const[postalCode, setPostalCode] = useState('');
    const[username, setUsername] = useState('abc@gmail.com');



    const MultipleFileChange = (e) => {
        setMultiFile(e.target.files)
    }

    const UploadMultipleFile = async () => {

        let data = new FormData();
        data.append('username', username);
        data.append('title', title);
        data.append('address', address);
        data.append('city', city);
        data.append('country', country);
        data.append('postalCode', postalCode);
        data.append('image', multiFile);

        for (var value of data.values()) {
            console.log(value);
         }        
         await axios.post("http://localhost:8080/api/units/add", data, {headers: {"Content-type": "multipart/form-data"}} ).then((res) => {
            console.log(res)
        })

    }

    return (
        <main>
        <section className="midSection midBlock">

            <div className="loginReg-control">
             <label htmlFor="title">Title</label>
             <input name="title" type="text" className="loginReg-input" onChange={(e) => setTitle(e.target.value)}/>
            </div>

           <div className="loginReg-control"> 
            <input type="file" onChange={(e) => MultipleFileChange(e)} />
            <button onClick={() => UploadMultipleFile()}>Upload Files</button>
           </div>

           <div className="row">
            <div className="input-field col s6">
            <input id="streetAddress" type="text" className="validate"  onChange={(e) => setAddress(e.target.value)}/>
            <label htmlFor="streetAddress" onChange={(e) => setAddress(e.target.value)}>Street Address</label>
          </div>

          <div className="input-field col s6">
           <input id="city" type="text" className="validate" onChange={(e) => setCity(e.target.value)}/>
           <label htmlFor="city">City</label>
          </div>

          <div className="input-field col s6">
           <input id="country" type="text" className="validate" onChange={(e) => setCountry(e.target.value)}/>
           <label htmlFor="country">Country</label>
          </div>

          <div className="input-field col s6">
           <input id="postalCode" type="text" className="validate" onChange={(e) => setPostalCode(e.target.value)}/>
           <label htmlFor="postalCode">Postal Code</label>
          </div>

          </div>
        </section>
        </main>
    );
}

export default OwnerHomePage;