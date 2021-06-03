import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
/** LoginForm component
 * 
 * Routes -> LoginForm
 */
function LoginForm({handleLogin}) {
  const [loginData, setLoginData] = useState({username: "", password: ""});
  function handleChange(evt) {
    const { name, value } = evt.target;
    setLoginData(loginData => ({
      ...loginData,
      [name]: value,
    }));
    console.log("loginData handleChange-->", loginData);
  }

  function handleSubmit(evt) {
    console.log('handleSubmit ran');
    console.log('loginData in handlesubmit= ', loginData);
    evt.preventDefault();
    handleLogin(loginData);
  }
  return (
    <Form inline onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="login-username"></Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          name="username"
          value={loginData.username}
          id="login-username"
          type="text"
          placeholder="username"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="login-password"></Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          name="password"
          value={loginData.password}
          id="login-password"
          type="password"
          placeholder="password"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button>Login</Button>
    </Form>
  )
}

export default LoginForm;