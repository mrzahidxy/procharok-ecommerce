import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "0", flexDirection: "column" })};
`;

const Categories = () => {
  return (
    <Link to="/products/:category">
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </Link>
  );
};

export default Categories;
