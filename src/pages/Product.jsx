import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ flexDirection: "column", padding: "10px" })};
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Img = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  ${mobile({ height: "50vh" })};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  margin: 20px 0;
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  ${mobile({ width: "100%" })};
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterText = styled.span`
  font-weight: 200;
  font-size: 20px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${(props) => props.color};
`;

const FilterSize = styled.select`
  margin-left: 5px;
  padding: 10px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ width: "100%" })};
`;

const AmmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Ammount = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid teal;
  border-radius: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;

const Button = styled.div`
  border: 2px solid teal;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Img src="https://i.ibb.co/S6qMxwr/jean.jpg"></Img>
        </ImageContainer>
        <InfoContainer>
          <Title>Jumsuit Jeans</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            sequi neque, debitis accusantium consequuntur reiciendis inventore!
            Itaque minus tenetur, soluta rem explicabo nihil assumenda
            necessitatibus qui! Laboriosam quaerat ullam et!
          </Desc>
          <Price>20 $ </Price>
          <FilterContainer>
            <Filter>
              <FilterText>Color: </FilterText>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="blue"></FilterColor>
              <FilterColor color="red"></FilterColor>
            </Filter>
            <Filter>
              <FilterText>Size: </FilterText>
              <FilterSize>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>XS</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmmountContainer>
              <Add />
              <Ammount>1</Ammount>
              <Remove />
            </AmmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
