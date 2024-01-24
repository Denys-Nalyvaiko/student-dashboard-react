import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FormSection } from '../../css/Containers';
import {
  FormContainer,
  FormTitle,
  FormInput,
  SubmitButton,
} from './RegisterForm.styled';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const options = {
    username: setUsername,
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
    <FormSection>
      <FormContainer action="submit" onSubmit={handleFormSubmit}>
        <FormTitle>Register Form</FormTitle>
        <FormInput
          name="username"
          type="text"
          id="username"
          placeholder="username"
          value={username}
          required
          onChange={handleInputChange}
        />
        <FormInput
          name="email"
          type="email"
          id="email"
          placeholder="email@gmail.com"
          value={email}
          required
          onChange={handleInputChange}
        />
        <FormInput
          name="password"
          type="password"
          id="password"
          placeholder="password"
          value={password}
          required
          onChange={handleInputChange}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </FormContainer>
    </FormSection>
  );
};

export default RegisterForm;
