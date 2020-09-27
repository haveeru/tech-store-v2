import React, { useState } from 'react';

// strapi functions
import loginUser from '../strapi/loginUser';
import registerUser from '../strapi/registerUser';

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

  let isEmpty = !email || !password || !username;

  const toggleMember = () => {
    setIsmember((prevMember) => {
      let isMember = !prevMember;
      isMember ? setUsername('default') : setUsername('');
      return isMember;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    if (isMember) {
      response = await loginUser({email, password})
    } else {
      setIsmember(false);
      response = await registerUser({ email, password, username });
    }

    if (response) {
      //
      console.log('suceess');
      console.log(response);
    } else {
      // show alert
    }
  };

  return (
    <section className="form section">
      <h2 className="section-title">{isMember ? 'Sign in' : 'register'}</h2>

      <form className="login-form">
        {/* singel input */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* end of input */}
        {/* singel input */}
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* end of input */}
        {/* singel input */}
        {!isMember && (
          <div className="form-control">
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        {/* end of input */}
        {/* empty form text */}
        {isEmpty && (
          <p className="form-empty">please fill out all form fields</p>
        )}
        {/* submit btn */}
        {!isEmpty && (
          <button
            type="submit"
            className="btn btn-block btn-primary"
            onClick={handleSubmit}
          >
            submit
          </button>
        )}
        <p className="register-link">
          {isMember ? 'need to register' : 'already a member'}
          <button type="button" onClick={toggleMember}>
            click here
          </button>
        </p>
      </form>
    </section>
  );
};

export default Login;
