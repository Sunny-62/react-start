import './hello.css'
function Hello(props){
    
    

    return (
/* <div>
<div id="p-1">
<h1>Show Email field</h1>
<p>login to put basic app</p>
<label for="email :">Enter your email</label>
<input type='email'id='email'/><br/>
<label for="pass :"> Enter your password</label>
<input type='number'id='pass'/><br/>
<button id='btn' style={{color:"red"}} onClick={(e)=>{
    console.log(e.target.id);
}}>login in</button>


</div> */
<div id='card'>
    <h1>{props.name}</h1>
    <p>{props.description}</p>
</div>


)
}

export default Hello;