import React from 'react'

export default function Form(props) {

  return (
    <form onSubmit={props.handleSubmit}>
        <label htmlFor="userName">Username</label>
        <input type="text" value={props.input.userName} id='userName' onChange={props.handleTextInput} required />
        <label htmlFor="avatar">Avatar</label>
        <input type="text" value={props.input.avatar} id='avatar' onChange={props.handleTextInput}/>
        <label htmlFor="firstName">First Name</label>
        <input type="text" value={props.input.firstName} id='firstName' onChange={props.handleTextInput} required/>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" value={props.input.lastName} id='lastName' onChange={props.handleTextInput} required/>
        <label htmlFor="email">E-mail</label>
        <input type="text" value={props.input.email} id='email' onChange={props.handleTextInput} required/>
        <label htmlFor="password">Password</label>
        <input type="text" id='password' onChange={props.handleTextInput} required/>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="text" id='confirm-password' onChange={props.handleTextInput} required/>
        <button>Submit</button>
      </form>
    
  )
}