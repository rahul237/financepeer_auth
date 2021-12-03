import {useState, useEffect}  from 'react'
import Card from '../components/card'

function App() {
  const [uploads, setuploads] = useState('')
  const [isLoading, setisLoading] = useState(false)



  async function getUploads(){

    const response = await fetch('http://localhost:2307/api/viewuploads', {
      method:'GET',
      headers:{
        'Content-Type':'application/json',
      },
    })

    const data = await response.json()

    setuploads(data["data"]);
    setisLoading(false);

    console.log(data)

  }

  useEffect(()=>{
    getUploads()
  },[])

  if(isLoading){
    return <div>Loading</div>
  }

  return (
    <div>
    {
      uploads.length>0 && uploads.map((item)=><Card data={item}></Card>)
    }
    {uploads.length}
    wdqd
    </div>
  );
}

export default App;
