import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 50px;
  background-color: #f9f9f9;
  text-align: center;
`;

const Title = styled.h1`
   font-family: 'Playfair Display', serif;
      font-size: 3em;
      font-weight: 700;
      color: #4A4A4A;
      text-align: center;
      margin-top: 50px;
      letter-spacing: 2px;
      text-transform: uppercase;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  justify-items: center;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ProductName = styled.h2`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: #888;
`;
const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -3px 5px rgba(0, 0, 0, 0.2);
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1em;
  font-family: 'Arial', sans-serif;
`;

const DateText = styled.span`
  font-weight: bold;
`;

const NewArrival = () => {
  const currentYear = new Date().getFullYear(); 

  const products = [
    {
      id: 1,
      name: " Winter collection",
      price: "Starting_price  $25.99",
      img: "https://img.freepik.com/premium-photo/collection-items-including-winter-hat-boots-jacket_1044943-232351.jpg?w=740",
    },
    {
      id: 2,
      name: " Bomber jakets",
      price: "$49.99",
      img: "https://img.freepik.com/free-photo/handsome-guy_144627-5593.jpg?t=st=1728975400~exp=1728979000~hmac=cbdf8122072d3e3090c8052559703505d34a1ca2846ce28fe3626ff7f286588a&w=360",
    },
    {
      id: 3,
      name: " Leather jackets",
      price: "$50.99",
      img: "https://img.freepik.com/premium-photo/collection-leather-jackets-with-word-leather-front_1172687-4850.jpg?w=1380",
    },
    {
      id: 4,
      name: " Kids Collecton",
      price: "$20.99",
      img: "https://img.freepik.com/free-psd/cute-child-winter-collection-sale-banner-template_23-2148829430.jpg?t=st=1728975959~exp=1728979559~hmac=17353024d3b08eec58add7af2625dc4c0548add7ed6034730212294312dcd392&w=1380",
    },
    {
      id: 5,
      name: "Winter beauty Products",
      price: "$10.99",
      img: "https://img.freepik.com/premium-vector/realistic-cosmetic-product-template_11100-334.jpg?w=740",
    }
  ];

  return (
    <Container>
      <Title>New Arrivals</Title>
      
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <Image src={product.img} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
          </ProductCard>
        ))}
      </ProductGrid>
      <FooterContainer>
      <FooterText>
        Made by Javed Hussain © <DateText>{currentYear}</DateText>
      </FooterText>
    </FooterContainer>

    </Container>
  );
};

export default NewArrival;







