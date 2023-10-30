import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 100vh;
  background-color: #ddd0c8;
  display: flex;

  justify-content: center;
`;

const SubContainer = styled.div`
  width: 80%;
  padding: 50px 0px;
`;

const Box = styled.span`
  margin: auto;
  color: #323232;
  font-size: 35px;
  font-wight: 900;
  font-family: Arial, sans-serif;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 40px;
`;

const Row = styled.tr`
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #323232;
  padding: 10px 0;
`;

const Header = styled.th`
  flex: 1;
  text-align: left;
  font-weight: bold;
  padding-left: 1px;
`;

const Data = styled.td`
  flex: 1;
  display: flex;
  padding-left: 6px;
`;

const Button = styled.button`
  width: 30px;
  padding: 5px;
  background-color: #323232;
  font-weight: 300;
  font-size: 8px;
  color: white;
  border: none;
  border-radius: 5px;

  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: brown;
  }
`;

export const Orders = () => {
  const [userOrders, setUserOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { currentUser } = useSelector((state) => state.user);

  // const { _id, products, amount, createdAt, status } = userOrders;

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/user/allorders");

        setUserOrders(res.data);
        console.log(res.data);
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching orders");
        setIsLoading(false);
      }
    };
    getOrders();
  }, []);

  return (
    <Container>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        <p>{error}</p>
      ) : (
        <SubContainer>
          <Title>
            <Box>ORDER HISTORY</Box>
          </Title>
          <Table>
            <Row>
              <Header>OrderID</Header>
              <Header>Order Status</Header>
              <Header>Location</Header>
              <Header></Header>
              <Header></Header>
            </Row>
            {userOrders.map((orders, i) => (
              <Row key={i}>
                <Data>{orders._id}</Data>
                <Data>{orders.OrderStatus}</Data>
                <Data>{orders.Location}</Data>

                <Data>
                  <Link to={`/update/${orders._id}`}>
                    <Button>Edit</Button>
                  </Link>
                </Data>
                <Data>
                  {" "}
                  <Button>Delete</Button>
                </Data>
              </Row>
            ))}
          </Table>
        </SubContainer>
      )}
    </Container>
  );
};
