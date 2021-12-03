import {useState}  from 'react'
import './styles/login.css'

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

    if(data.user){
        localStorage.setItem('token', data.user)
        alert('Login successful')
        window.location.href = '/dashboard'
    }else{
        alert('Login failed. Please check that you have signed up with the email and password you entered.')
    }

    console.log(data)
  }

  return (
    <div id = "loginbox">
      <h1>
        Login
      </h1>
      <form onSubmit={loginUser}>
        <input class="box" value = {email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="Email" />
        <br></br>
        <input class="box" value = {password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password" />
        <br/>
        <input class="button" type="submit" value="Login"/>
        <br/>
        <br/>


        Don't have an account? <a href="/register">Sign Up</a>

        

      </form>
    </div>
  );
}

export default App;
