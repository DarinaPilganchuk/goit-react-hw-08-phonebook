import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  background-color: #7aace8;
  border-radius: 10px;
  color: #0926a6;
  padding: 5px 15px;
  margin-right: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  &:hover,
  &:focus {
    border: 1px solid #0926a6;
    font-weight: 700;
    background-color: #abd2f1;
  }
`;

export const Text = styled.span`
  margin-right: 15px;
  font-weight: 700;
`;
