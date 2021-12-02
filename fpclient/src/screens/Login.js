import {useState}  from 'react'

function App() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  async function loginUser(e){
    e.preventDefault()
    const response = await fetch('http://localhost:2307/api/login', {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
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
        Login
      </h1>
      <form onSubmit={loginUser}>
        <input value = {email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="Email" />
        <br></br>
        <input value = {password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password" />
        <br/>
        <input type="submit" value="Login"/>

        

      </form>
    </div>
  );
}

export default App;
