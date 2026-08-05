import axios from "axios";

function Contact(){

function sendMessage(e){

e.preventDefault();

axios.post(
"http://localhost:5000/contact",
{
name:e.target.name.value,
email:e.target.email.value,
message:e.target.message.value
}
)
.then(()=>{
alert("Message sent!");
});

}


return(
<form onSubmit={sendMessage}>

<input name="name" placeholder="Name"/>

<input name="email" placeholder="Email"/>

<textarea 
name="message"
placeholder="Message"
/>

<button>
Send
</button>

</form>
)

}

export default Contact;
