import { Row } from 'antd';
import styled from 'styled-components';

export const CardStyled = styled(Row)`
  cursor: pointer;
  transition: box-shadow 0.2s linear;
  :hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  div {
    padding-right: 15px;
  }
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    object-position: center;
  }
  .title {
    font-size: 27px;
    font-weight: 700;
    margin-top: 10px;
  }
  .category_title {
    font-size: 16px;
    color: gray;
  }
  .director_title {
    font-size: 17px;
    font-weight: 500;
    transition: all 0.15s ease-in-out;
  }
  .director_title:hover {
    color: #1b54a8;
  }
  @media (max-width: 500px) {
    img {
      width: 130px;
      height: 130px;
    }
    .title {
      font-size: 22px;
    }
    .category_title {
      font-size: 13px;
    }
    .director_title {
      font-size: 15px;
    }
  }
`;
