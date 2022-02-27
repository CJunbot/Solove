import styled from "styled-components";


const Solove = styled("img")`
  width: 15%;
  height: 60px;
`;

const Container = styled("div")`
  width: 100vw;
  height: 60px;
  background-color: #8a2be2;
  display: flex;

  `
const Title = styled("h1")`
  margin:0
`

const Navbar = () => {
  return(
    <Container>
      <Solove src="/Solove_icon.png" alt=""/>
    </Container>
  )
}

export default Navbar;
