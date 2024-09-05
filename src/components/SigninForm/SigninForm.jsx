import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../services/authService.js';

const SigninForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(['']);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    updateMessage('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.signin(formData); // TODO build signin service function

      props.setUser(user);
      navigate('/');
    } catch (err) {
      updateMessage(err.message);
    }
  };

  return (
    <main className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Log In</h1>
          {message && <div className="alert alert-danger">{message}</div>}
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={formData.username}
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
                value={formData.password}
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">Log In</button>
              <Link to="/">
                <button type="button" className="btn btn-secondary">Cancel</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SigninForm;