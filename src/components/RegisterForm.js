import React from 'react';
import PropTypes from 'prop-types';
import useSignUpForm from '../hooks/RegisterHooks';
import { checkUserAvailable, login, register } from '../hooks/ApiHooks';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history }) => {
  const doRegister = async () => {
    const free = await checkUserAvailable(inputs.username);
    if (free.available) {
      const reg = await register(inputs);
      console.log(reg);
      // kirjaudu tomaattisesti
      const user = await login(inputs);
      console.log(user);
      // etusivulle
      history.push('/home');
    } else {
      console.log('not available');
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(doRegister);
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          onChange={handleInputChange}
          value={inputs.username}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleInputChange}
          value={inputs.password}
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          onChange={handleInputChange}
          value={inputs.email}
        />
        <input
          type='text'
          name='full_name'
          placeholder='Full name'
          onChange={handleInputChange}
          value={inputs.full_name}
        />
        <button type='submit'>Register</button>
      </form>
    </>
  );
};

RegisterForm.propTypes = {
  history: PropTypes.object
};

export default withRouter(RegisterForm);
