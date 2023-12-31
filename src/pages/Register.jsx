import { styled } from "styled-components";
import { mobile } from "../Responsive";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { signup } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://spokesbuzz.org/wp-content/uploads/2022/11/Courier-Delivery-201802-004.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #ccc;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #d80032;
  color: white;
  cursor: pointer;
`;

export const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState(false);
  const { isFetching, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleSignup = (e) => {
    e.preventDefault();
    const username = firstname + lastname;

    if (password === confirmPassword) {
      signup(dispatch, { username, email, password });
    } else {
      console.log("Something went wrong!");
      // setError(true);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="firstname"
            type="text"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <Input
            placeholder="lastname"
            type="text"
            onChange={(e) => setLastname(e.target.value)}
          />
          <Input
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="confirm password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the
            <b> PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleSignup} disabled={isFetching}>
            CREATE
          </Button>
          {error && (
            <p style={{ color: "red", marginLeft: 5 }}>Something went wrong!</p>
          )}

          {/* {error && (
            <p style={{ color: "red", marginLeft: 5 }}>Something went wrong!</p>
          )} */}
        </Form>
      </Wrapper>
    </Container>
  );
};
