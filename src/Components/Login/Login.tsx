import React, { useState } from "react";
import { FormControl, FormLabel, Input, Button, Alert, AlertIcon, Stack } from "@chakra-ui/react";
import axios from "axios";
import "./Login.css";

interface IUsers {
  email: string | undefined;
  password: string | undefined;
}

interface loginProps {
  onSubmit: (logged: boolean) => void;
}

const Login = (props: loginProps) => {
  const [user, setUser] = useState<IUsers>({
    email: undefined,
    password: undefined,
  });

  const [users, setUsers] = useState<IUsers[]>([]);

  React.useEffect(() => {
    getData("http://localhost:4000/user");
  }, []);

  const getData = async (url: string) => {
    try {
      const response = await axios.get(`${url}`);

      setUsers(response.data);
    } catch (err) {}
  };

  const handleInputEmail = (e: { target: { value: string } }) =>
    setUser({ ...user, email: e.target.value });

  const handleInputPassword = (e: { target: { value: string } }) =>
    setUser({ ...user, password: e.target.value });

  const onSubmit = () => {
    props.onSubmit(
      users.some(
        (el) => el.email === user.email && el.password === user.password
      )       
    );
  };

  return (
    <>
      <h1 style={{'marginTop':'100px'}}>Movie watchlist form</h1>
      <div className="container">
        <form action="/action_page.php">
        <div className="row">
          <div className="col-25">
            <label htmlFor="fname">Email = test@test.com</label>
          </div>
          <div className="col-75">
            <Input className="input" type="email" onChange={handleInputEmail} placeholder="Your email" style={{'width' : '300px'}} />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="lname">Password = test</label>
          </div>
          <div className="col-75">
          <Input type="password" onChange={handleInputPassword} placeholder="Your password" style={{'width' : '300px'}}/>
          </div>
        </div>
        <div className="row">
          <Button className="button" onClick={() => onSubmit()} type="submit" colorScheme='blackAlpha' variant='outline'>
            Button
          </Button>
        </div>
        </form>
      </div>
    </>
  );
};

export default Login;
