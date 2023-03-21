import styled from 'styled-components';
export const ContactCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  border: 1px solid #0926a6;
  border-radius: 10px;
  padding: 5px;
  background-color: #abd2f1;

  margin-bottom: 15px;
`;
export const Contact = styled.p`
  margin-left: 30px;
`;
export const Button = styled.button`
  background-color: #abd2f1;
  border: 1px solid #0926a6;
  border-radius: 10px;
  color: #0926a6;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin-left: auto;
  margin-right: 30px;

  &:hover,
  &:focus {
    border: 1px solid #0926a6;
    font-weight: 700;
    background-color: #7aace8;
  }
`;
