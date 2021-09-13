import { Button } from 'antd';
import styled from 'styled-components';

export const ButtonStyled = styled(Button)`
  background-color: #1b54a8;
  border-color: #1b54a8 !important;
  color: white;
  height: 50px;
  padding: 0px 27px 5px 27px;
  border-radius: 8px;
  text-transform: uppercase;
  :hover {
    color: #1b54a8;
  }
  :focus {
    color: #1b54a8;
  }
`;
