import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConfirmForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    localStorage.setItem('emailKey', JSON.stringify(email));
    localStorage.setItem('passwordKey', JSON.stringify(password));
  }, [email, password]);

  const confirm = () => {
    if (!localStorage.getItem('user')) {
      navigate('/login');
    }
    else {
      navigate('/')
    }

  };
  const handleSubmit = (event) => {
    event.preventDefault();

    //validation
    if (email === '' || password === '') {

      toast.error('Email and password should be required !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      

      return;
    }
    if (password.length < 6) {
      toast.warn('Password should be longer than 6 letters.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      return;
    }
    localStorage.setItem('user', 'mail:' + email + ' ' + 'pas:' + password);
    navigate('/');



    setEmail("");
    setPassword("");
  };

  return (
    <div className='bg-secondary text-white m-5'>
      <h1 className='text-center mt-5'> LOGIN PAGE</h1>
      <h3 className='text-center mt-5'> Movie Search Application</h3>
      <div className="container my-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Adress
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Ex: dtarhan@gmail.com"
              autoFocus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="Ex: 123456"
              autoFocus
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

          </div>

          <div className="d-flex justify-content-center my-5 ">
            <button
              type="submit"
              onClick={confirm}
              className="btn btn-info btn-lg mb-5 "
            >
              Save
            </button>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />

          </div>
          <div>


          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmForm;
