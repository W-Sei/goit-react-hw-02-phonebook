import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormSection = styled(Form)`
  margin-top: 20px;
  margin-bottom: 40px;
  background-color: #F7F9BE;
  border: 1px transparent;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: center;
`;

export const AddNumberInput = styled(Field)`
  height: 35px;
  width: 350px;
  margin: 10px;
  border: 1px transparent;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 8px;
  :hover,
  :focus {
    box-shadow: rgb(221, 255, 85) 0px 0px 0px 3px, rgb(193, 165, 27) 0px 0px 0px 6px;
  }
`;

export const Button = styled.button`
  width: 175px;
  height: 35px;
  margin-top: 20px;
  background-color: white;
  border-radius: 10px;
  font-weight: 400;
  border: 1px transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  :hover,
  :focus {
    background-color: #F7E2B2;
    border: 1px solid black;
    color: black;
    font-weight: 600;
  }
`;

export const InputTitle = styled.h3`
  font-weight: 400;
  text-transform: uppercase;
  font-size: 26px;
  margin-top: 10px;
`;

export const ErrorMes = styled(ErrorMessage)`
  color: #ff0000;
  margin-bottom: 8px;
  font-weight: 100;
  font-size: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: end;
`;