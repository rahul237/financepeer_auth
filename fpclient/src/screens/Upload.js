import React, { useState } from "react";

import './styles/box.css'

export default function Upload({ children }) {
  const [files, setFiles] = useState("");


  async function uploadpost(elem){

    const response = await fetch('http://localhost:2307/api/uploadjson', {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        "id":elem["id"],
        "userId":elem["userId"],
        "title":elem["title"],
        "body":elem["body"]

        

      })
    })
  }

const handleChange = e =>{
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8")
    fileReader.onload = e => {
      // console.log("e.target.result", e.target.result);
      try{const list = (JSON.parse(e.target.result))

      list.map(elem => {
        // console.log(elem["id"])

        uploadpost(elem)

        

     

        
      });
    }catch(e){
      alert("Please upload a JSON file in the right format")

    }
      setFiles(e.target.result);
    
    };

    alert("Your file has been uploaded")

    window.location.href = '/view'
  };

  return (
    <div class="box">
      <h1>Upload Json file</h1>

      <input type="file" onChange={handleChange} />
      <br />
      {/* {"uploaded file content -- " + files} */}
    </div>
  );
}