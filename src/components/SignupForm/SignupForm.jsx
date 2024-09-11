import authService from '../../services/authService.js';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConf: '',
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      updateMessage('');
      if (password !== passwordConf) {
        updateMessage('Passwords do not match.');
        return;
      }
      const newUserResponse = await authService.signup(formData);
      props.setUser(newUserResponse.user);
      navigate('/');
    } catch (err) {
      updateMessage(err.message);
    }
  };

  const { username, password, passwordConf } = formData;

  const isFormInvalid = () => {
    return !(username && password && password === passwordConf);
  };

  return (
    <main className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Sign Up</h1>
          {message && <div className="alert alert-danger">{message}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirm" className="form-label">Confirm Password:</label>
              <input
                type="password"
                className="form-control"
                id="confirm"
                value={passwordConf}
                name="passwordConf"
                onChange={handleChange}
              />
            </div>
            <div className="row flex-fill">
              <div className="col">
              <button type="submit" className="btn btn-primary w-100 m-0 mt-2 p-2">Sign Up</button>
              </div>
              <div className="col">
              <Link to="/">
                <button type="button" className="btn btn-secondary w-100 m-0 mt-2 p-2">Cancel</button>
              </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignupForm;