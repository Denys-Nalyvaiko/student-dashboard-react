import { useState } from 'react';
import { useNavigate } from 'react-router';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const options = {
    email: setEmail,
    password: setPassword,
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    options[name](value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <section>
      <h2>Login Form</h2>
      <form action="submit" onSubmit={handleFormSubmit}>
        <input
          name="email"
          type="email"
          id="email"
          placeholder="email@gmail.com"
          value={email}
          required
          onChange={handleInputChange}
        />
        <input
          name="password"
          type="password"
          id="password"
          placeholder="password"
          value={password}
          required
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default LoginForm;
