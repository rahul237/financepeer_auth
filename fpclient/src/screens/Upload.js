import {useState}  from 'react'

function App() {
  const [Data, setData] = useState('')
  const [ErrorData, setErrorData] = useState('')

  const readFileOnUpload = (uploadedFile) =>{
    const fileReader = new FileReader();
    fileReader.onloadend = ()=>{
       try{
          setData((fileReader.result));
          setErrorData(null)
          console.log("uploaded")
          console.log(Data)
       }catch(e){
          setErrorData("**Not valid JSON file!**");
          console.log(ErrorData)
       }
    }
    if( uploadedFile!== undefined)
       fileReader.readAsText(uploadedFile);
 }


  return (
    <div>
      <h1>
        Upload
      </h1>
      <input type="file"
  onChange={(e)=>readFileOnUpload(e.target.files[0])} />
    </div>
  );
}

export default App;
