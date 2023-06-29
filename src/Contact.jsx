import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`

h1{
  font-size:2em;
 text-align:center;
 margin:10px 0px;
  font-weight:bold;
}
.mapbox{
  iframe{
    width:100%;
  }
}

.formbox{
  display:flex;
  flex-direction:column;
  width:50%;
  margin:auto;
  margin-top:15px;

  input,textarea{
    margin:15px 0px;
    text-indent:5px;
  }
  input{
    height:40px;
    outline:none;
  }
  textarea{
    height:80px;
    outline:none;
  }
  .submitbtn{
    font-size: 1.1em;
    border-radius: 4px;
    border:0px;
    background-color: rgb(215, 0, 73);
    color: white;
  }
}
@media (max-width: ${({ theme }) => theme.responsive.Medium}){
  .formbox{
    width:80%;
  }
}

`;
const Contact = () => {
  const {isAuthenticated,user}=useAuth0();
  return (
  <Wrapper>
    <h1>Contact</h1>

    {/* Map Location */}
    <div className='mapbox'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241135.73367646706!2d72.56973499453125!3d19.206300299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1685534424104!5m2!1sen!2sin"
     width="600" 
     height="450" 
     style={{border:0}} 
     allowFullScreen="" 
     loading="lazy" 
     referrerPolicy="no-referrer-when-downgrade"></iframe>
     </div>
     
     {/* form for any query */}
     <form action='https://formspree.io/f/moqzoojo' method="POST"  className='formbox' >
     <input type="text" name="username" placeholder="Username" 
     value={isAuthenticated?user.name:""}
     required autoComplete="off" />
     <input type="email" name="email" placeholder="Email Id" 
       value={isAuthenticated?user.email:""}
     required autoComplete="off" />
     <textarea name="Message" placeholder="Enter Message"  required autoComplete="off"></textarea>
     <input type="submit" value="Send" className='submitbtn' style={{width:"75px",alignSelf:"center"}}/>
     </form>
  </Wrapper>
  )
}

export default Contact
