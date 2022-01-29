import { useState} from 'react'

export default function Form(props) {
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <form onSubmit={props.handleSubmit({email}) }>
        <label htmlFor="userName">Username</label>
        <input type="text" value={userName} id='userName' onChange={e => setUserName(e.target.value)} required />
        {/* <label htmlFor="avatar">Avatar</label>
        <input type="text" value={props.input.avatar} id='avatar' onChange={event.target.value}/> */}
        {/* <label htmlFor="firstName">First Name</label>
        <input type="text" value={props.input.firstName} id='firstName' onChange={event.target.value} required/> */}
        <label htmlFor="lastName">Last Name</label>
        <input type="text" value={lastName} id='lastName' onChange={e => setLastName(e.target.value)}  required/>
        <label htmlFor="email">E-mail</label>
        <input type="text" value={email} id='email' onChange={e => setEmail(e.target.value)}  required/>
        {/* <label htmlFor="password">Password</label>
        <input type="text" id='password' onChange={event.target.value} required/> */}
        {/* <label htmlFor="confirm-password">Confirm Password</label>
        <input type="text" id='confirm-password' onChange={event.target.value} required/> */}
        <button>Submit</button>
      </form>
    
  )
}