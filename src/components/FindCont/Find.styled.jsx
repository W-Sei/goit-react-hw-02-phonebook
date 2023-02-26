import styled from 'styled-components';

export const ContactsInput = styled.input`
  height: 35px;
  width: 250px;
  border: 1px transparent;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  :hover,
  :focus {
box-shadow: rgb(221, 255, 85) 0px 0px 0px 3px, rgb(193, 165, 27) 0px 0px 0px 6px;
  }
`;

export const LabelTitle = styled.h3`
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
  margin-right: 15px;
`;

export const NameInputWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 20px;
  border: 1px transparent;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: 15px;
  background-color: #F7F9BE;
`;