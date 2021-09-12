import { Row } from 'antd';
import styled from 'styled-components';

export const DrawerCard = styled(Row)`
  cursor: pointer;
  transition: box-shadow 0.2s linear;
  div {
    padding-right: 20px;
  }
  img {
    width: 100%;
    height: 250px;
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
    margin-top: 5px;
    transition: all 0.15s ease-in-out;
  }
  .director_title:hover {
    color: #1b54a8;
  }
  @media (max-width: 500px) {
    img {
      width: 100%;
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
