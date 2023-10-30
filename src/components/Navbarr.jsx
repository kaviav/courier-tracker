import { styled } from "styled-components";
import { LogoutRounded } from "@mui/icons-material";
import { mobile } from "../Responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/userRedux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items:center
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
// `;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
//NB

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Button = styled.button`
  font-size: 14px;
  border: none;
  padding: 8px 8px;

  cursor: pointer;
  margin-left: 25px;
  border-radius: 15%;
  background-color: white;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

export const Navbarr = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(currentUser);
  // console.log(quantity)
  const isAdmin = currentUser?.isAdmin;

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };
  return (
    <Container>
      <Wrapper>
        <Center>
          <Logo>TrackOk</Logo>
        </Center>
        <Right>
          {!currentUser && (
            <>
              <Link to="/login">
                <Button>ADMIN</Button>
              </Link>
              <Link to="/register">
                <Button>REGISTER</Button>
              </Link>
              <Link to="/login">
                <Button>SIGN IN</Button>
              </Link>
            </>
          )}

          {currentUser && isAdmin && (
            <>
              <Link to="/track">
                <Button>TRACK ORDER</Button>
              </Link>
              <Link to="/placeorder">
                <Button>PLACE ORDER</Button>
              </Link>
              <Link to="/orders">
                <Button>ORDERS</Button>
              </Link>
              <Button onClick={handleClick}>
                <LogoutRounded />
              </Button>
            </>
          )}
          {currentUser && (
            <>
              <Link to="/track">
                <Button>TRACK ORDER</Button>
              </Link>
              <Link to="/placeorder">
                <Button>PLACE ORDER</Button>
              </Link>
              <Button onClick={handleClick}>
                <LogoutRounded />
              </Button>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};
