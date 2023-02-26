import styled from 'styled-components';

export const List = styled.ul`
  margin-right: 30px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
`;

export const Button = styled.button`
  border-radius: 10px;
  width: 100px;
  border: 1px transparent;
  padding: 5px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  :hover,
  :focus {
    background-color: #f7e2b2;
    border: 1px solid black;
    color: black;
    font-weight: 700;
  }
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 20px;
`;
