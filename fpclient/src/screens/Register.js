import logo from './logo.svg';
import './App.css';
import {useState}  from 'react'

function App() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  async function registerUser(e){
    e.preventDefault()
    const response = await fetch('http://localhost:2307/api/register', {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password

      })
    })

    const data = await response.json()

    console.log(data)
  }

  return (
    <div>
      <h1>
        Register
      </h1>
      <form onSubmit={registerUser}>
        <input value = {name} onChange={(e)=>setname(e.target.value)} type="text" placeholder="Name" />
        <br></br>
        <input value = {email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="Email" />
        <br></br>
        <input value = {password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password" />
        <br/>
        <input type="submit" value="Register"/>

        

      </form>
    </div>
  );
}

export default App;
