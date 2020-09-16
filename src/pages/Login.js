import React, { useState } from 'react';

// strapi functions

// handle user
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  // setup user context

  // state values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('default');
  const [isMember, setIsmember] = useState(true);

  let isEmpty = true;

  const toggleMember = () => {};

  const handleSubmit = async (e) => {};

  return (
    <section className="form section">
      <h2 className="section-title">{isMember ? 'Sign in' : 'register'}</h2>
    </section>
    <form className="login-form">
      {/* singel input */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input type="email" id="email" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
       {/* end of input */}
       {/* singel input */}
       <div className="form-control">
       <label htmlFor="password">password</label>
          <input type="password" id="password" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
       {/* end of input */}
       {/* singel input */}
       {!isMember && (
        <div className="form-control">
          <label htmlFor="username">username</label>
          <input type="text" id="username" value="username" onChange={e=>setUsername(e.target.value)} />
        </div>
       )}
       {/* end of input */}
       {/* empty form text */}
       {isEmpty && <p className="form-empty">
          please fill out all form fields
         </p>}
         {/* submit btn */}
         {!isEmpty && <button type="submit" className="btn btn-block btn-primary" onClick={handleSubmit}/>} 
         <p className="register-link">
           {isMember ? "need to register" : "already a member"} 
         </p>
    </form>
  );
};

export default Login;
