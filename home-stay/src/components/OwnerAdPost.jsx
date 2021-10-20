import React from 'react';
import { useState, useRef } from 'react';
  
const OwnerAdPost = () => {
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
    <div >
    <section class="page-hero">
        <h1 class="page-hero-title">--- Post an Ad ---</h1>
    </section>

    <div className="AdPostList">   
          <article className="AdPostList-article">

          <h2>Ad Info</h2>
           <label htmlFor="imageUpload">Select Images</label>
           <input type="file" id="imageUpload"onChange={(e) => MultipleFileChange(e)} multiple/>

           <label htmlFor="streetAddress">Street Address</label>
           <input id="streetAddress" type="text" className="validate" />

           <label htmlFor="city">City</label>
           <input id="city" type="text" className="validate" />

           <label htmlFor="country">Country</label>
           <input id="country" type="text" className="validate" />

           <label htmlFor="postalCode">Postal Code</label>
           <input id="postalCode" type="text" className="validate" />

           <button className="regLog-btn" onClick={() => UploadMultipleFile()}>Upload Files</button>

          </article>
        
   </div>
 </div>
);
};
  
export default OwnerAdPost;