import styled from 'styled-components';

export default {
  LoginWrapper: styled.div`
    width: 400px;
    min-height: 320px;
    background: white;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 25px 0;
    margin-bottom: 120px;
  `,
  LoginButton: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #222222;
    color: white;
    border: none;
    width: 325px;
    height: 45px;
    border-radius: 4px;
    font-size: 16px;
    .githubIcon {
      margin-left: 8px;
    }
  `,
  LogoutButton: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 325px;
    color: black;
    height: 45px;
    border-radius: 4px;
    font-size: 16px;
    background: white;
    border: 1px solid #d9d9d9;
  `,
  LoginImage: styled.img`
    width: 70%;
  `,
};
