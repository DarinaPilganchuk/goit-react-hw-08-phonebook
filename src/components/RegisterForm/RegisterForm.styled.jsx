import styled from 'styled-components';
export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-right: auto;
  margin-left: auto;

  margin-bottom: 15px;

  border: 1px solid #0926a6;
  border-radius: 10px;
  padding: 25px;
  width: 400px;
`;

export const Button = styled.button`
  background-color: #abd2f1; /* Green */
  border: 1px solid #0926a6;
  border-radius: 10px;
  color: #0926a6;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  &:hover,
  &:focus {
    border: 1px solid #fff;
    font-weight: 700;
    background-color: #7aace8;
  }
`;
export const TitleInput = styled.label`
  color: #0926a6;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  border: 1px solid #0926a6;
  border-radius: 10px;
  background-color: #d6e9ff;
  padding: 5px;
  margin-left: 25px;
  width: 250px;
`;
export const InputEmail = styled.input`
  border: 1px solid #0926a6;
  border-radius: 10px;
  background-color: #d6e9ff;
  padding: 5px;
  margin-left: 62px;
  width: 250px;
`;
