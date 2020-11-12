import styled from 'styled-components';

export default {
  HeaderWrapper: styled.div`
    background: #000000;
    color: #ffffff;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 36px 160px;
    position: relative;
  `,
  HeaderImage: styled.img`
    width: 18px;
    height: 18px;
  `,
  HeaderText: styled.div`
    font-size: 15px;
    margin-left: 5px;
    font-weight: bold;
    cursor: pointer;
  `,
  LogoutButton: styled.a`
    color: #ffffff;
    right: 162px;
    position: absolute;
    font-weight: bold;
    &:hover {
      cursor: pointer;
      color: #ffffff;
    }
  `,
};
