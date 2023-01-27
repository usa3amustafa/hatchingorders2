import GoogleIcon from '../../../../assets/googleIcon.png';
import { useState, useContext } from 'react';
import AppContext from '../../../../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import GoogleAuthSignUp from '../GoogleAuthSignUp';
import jwtDecode from 'jwt-decode';

const SignupModal = () => {
  const {
    openLoginModal,
    openForgotPassModal,
    openSuccessModal,
    closeModal,
    openErrorModal,
  } = useContext(AppContext);

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(faEye);

  const [emailExists, setEmailExists] = useState(false);
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formData = {
    fullname,
    email,
    password,
  };

  const handleFullname = (e) => {
    setFullName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailExists(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post('/user/register', formData);
      console.log(response.data);
      console.log(response.message);
      console.log(response.status);

      // if successful show modal of succesful registration
      if (response.status === 200) {
        closeModal();
        openSuccessModal();
      }

      // errors
    } catch (err) {
      console.error(err.response.status);

      // if email already exists
      if (err.response.status === 409) {
        setEmailExists(true);
      }

      // internal error 500 try again later show error modal
      if (err.response.status === 500) {
        closeModal();
        openErrorModal();
      }
    }
  };

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(faEye);
      setType('text');
    } else {
      setIcon(faEyeSlash);
      setType('password');
    }
  };

  return (
    <>
      <h2 className="registrationModalTitle">Create account</h2>

      {/* form */}
      <form onSubmit={handleSubmit}>
        <div className="form-el">
          <label htmlFor="name" className="inputLabel">
            Name
          </label>
          <input
            type="text"
            name="fullname"
            className="registrationInput"
            onChange={handleFullname}
            value={fullname}
          />
        </div>

        <div className="form-el">
          <label htmlFor="email" className="inputLabel">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="registrationInput"
            onChange={handleEmail}
            value={email}
          />
          {/* email already exists error message */}

          {emailExists && (
            <p className="inputLabel desc errorMsg">Email already exists</p>
          )}
        </div>

        <div className="form-el">
          <label htmlFor="password" className="inputLabel">
            Password
          </label>

          <div className="passwordInputWrapper">
            <input
              type={type}
              name="password"
              className="passwordInput"
              onChange={handlePassword}
              value={password}
            />
            <div className="showPassBtn" onClick={handleToggle}>
              <FontAwesomeIcon icon={icon} />
            </div>
          </div>

          <p className="inputLabel modalLink" onClick={openForgotPassModal}>
            Forgot Password?
          </p>
        </div>

        <div className="form-el">
          <button className="cta registrationCta">Signup</button>
        </div>

        <div className="form-el">
          <GoogleAuthSignUp />
        </div>

        <p className="logindesc inputLabel">
          Already have an account?
          <span className="modalLink" onClick={openLoginModal}>
            Login Here
          </span>
        </p>
      </form>
    </>
  );
};

export default SignupModal;
