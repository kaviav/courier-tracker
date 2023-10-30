import styled from "styled-components";
import { mobile } from "../Responsive";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://5.imimg.com/data5/SELLER/Default/2023/4/304027361/YM/CB/YA/146656270/transport-service-bulk-500x500.jpeg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 35%;
  padding: 20px;
  background-color: #99b3e6;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 43%;
  margin: 5px 0;
  padding: 5px;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  padding: 10px 10px;
  background-color: #003380;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
 
  
  }
`;

export const Update = () => {
  const [trackingId, setTrackingId] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [location, setLocation] = useState("");
  const [updatedDetails, setUpdatedDetails] = useState("");

  const path = useLocation();
  const id = path.pathname.split("/")[2];
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(trackingId);

    const updateOrder = async () => {
      const res = await axios.put(
        `http://localhost:5000/user/updateorder/${id}`,
        {
          TrackingID: trackingId,
          PaymentStatus: paymentStatus,
          OrderStatus: orderStatus,
          Location: location,
        }
      );
      setUpdatedDetails(res.data);
      navigate("/");
    };
    updateOrder();
  };

  return (
    <Container>
      <Wrapper>
        <Title>Update Delivery details</Title>
        <Form>
          <Input
            placeholder="Tracking Id"
            onChange={(e) => setTrackingId(e.target.value)}
          />
          <Input
            placeholder="Payment"
            type="text"
            onChange={(e) => setPaymentStatus(e.target.value)}
          />
          <Input
            placeholder="Order Status"
            type="text"
            onChange={(e) => setOrderStatus(e.target.value)}
          />
          <Input
            placeholder="Location"
            type="text"
            onChange={(e) => setLocation(e.target.value)}
          />

          <Button onClick={handleClick}>UPDATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
