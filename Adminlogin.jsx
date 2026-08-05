import {useState} from "react";
import axios from "axios";

function AdminLogin(){

const [username,setUsername]=useState("");
const [password,setPassword]=useState("");


const login=async()=>{

const res=await axios.post(
"http://localhost:5000/api/auth/login",
{
username,
password
}
);

localStorage.setItem(
"token",
res.data.token
);

window.location="/admin/dashboard";

}


return(
<div className="login">

<h1>Admin Login</h1>

<input 
placeholder="Username"
onChange={(e)=>setUsername(e.target.value)}
/>


<input 
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>


<button onClick={login}>
Login
</button>

</div>
)

}

export default AdminLogin;
