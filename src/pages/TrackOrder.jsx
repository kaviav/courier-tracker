import styled from "styled-components";
import { mobile } from "../Responsive";
import { useState } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.geotab.com/CMS-Media-production/Blog/NA/_2020/Oct/GPS-jammers/blog-combatting-gps-jammers-hero@2x.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 35%;
  padding: 26px;
  background-color: #99b3e6;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 21px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #003380;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top:25px;
  
  }
`;

export const TrackOrder = () => {
  const [trackingId, setTrackingId] = useState("");
  const [details, setDetails] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log(trackingId);
    const trackOrder = async () => {
      const res = await axios.post("http://localhost:5000/user/track", {
        trackingId,
      });
      setDetails(res.data.order);
      console.log(res.data);
    };
    trackOrder();
  };
  return (
    <Container>
      <Wrapper>
        <Title>Track your Delivery</Title>
        <Form>
          <Input
            placeholder="Tracking Id"
            onChange={(e) => setTrackingId(e.target.value)}
          />
          <Button onClick={handleClick}>UPDATE</Button>
          {details && (
            <div>
              <h3>Location: {`${details.Location}`}</h3>
            </div>
          )}
        </Form>
      </Wrapper>
    </Container>
  );
};
