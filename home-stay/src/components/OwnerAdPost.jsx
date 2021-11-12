import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import Popup from "./Popup"

const OwnerAdPost = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const [multiFile, setMultiFile] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [username, setUsername] = useState("abc@gmail.com");

  const MultipleFileChange = (e) => {
    setMultiFile(e.target.files);
  };

  const UploadMultipleFile = async () => {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    let data = new FormData();
    data.append("username", user.userName);
    data.append("title", title);
    data.append("address", address);
    data.append("city", city);
    data.append("country", country);
    data.append("postalCode", postalCode);
    for(let i = 0; i< multiFile.length; i++){
      data.append("image", multiFile[i]);
    }

    for (var value of data.values()) {
      console.log(value);

    }
    

    axios({
      method: "post",
      url: "http://localhost:8080/api/units/add",
      data: data,
      headers: { Accept: "application/json ,text/plain, */*" },
      auth: {
        username: user.userName,
        password: user.password,
      },
    })
      .then((res) => {
        //console.log(res)
        togglePopup();
      })
      .catch((error) => {
        console.log(error.response);
      });

      setAddress('');
      setCity('');
      setCountry('');
      setPostalCode('');
      setMultiFile('');

  };

  return (
    <div>
      <section class="page-hero">
        <h1 class="page-hero-title">--- Post an Ad ---</h1>
      </section>

      <div className="AdPostList">
        <article className="AdPostList-article">
          <h2>Ad Info</h2>
          <label htmlFor="imageUpload">Select Images</label>
          <input type="file" multiple onChange={(e) => MultipleFileChange(e)} />

          <label htmlFor="streetAddress">Street Address</label>
          <input
            id="streetAddress"
            type="text"
            className="validate"
            onChange={(e) => setAddress(e.target.value)}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            className="validate"
            onChange={(e) => setCity(e.target.value)}
          />

          <label htmlFor="country">Country</label>
          <input
            id="country"
            type="text"
            className="validate"
            onChange={(e) => setCountry(e.target.value)}
          />

          <label htmlFor="postalCode">Postal Code</label>
          <input
            id="postalCode"
            type="text"
            className="validate"
            onChange={(e) => setPostalCode(e.target.value)}
          />

          <button className="regLog-btn" onClick={() => UploadMultipleFile()}>
            Upload Files
          </button>
          {isOpen && <Popup
      content={<div>
      <h3 className="errorLogin">Listing post Successfull!</h3>
      <h3 className="errorLogin">Go to Ad Postings to confirm the listing!</h3>
      </div>}
      handleClose={togglePopup}
    />}
        </article>
      </div>
    </div>
  );
};

export default OwnerAdPost;