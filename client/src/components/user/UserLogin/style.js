import styled from 'styled-components';

export default {
  LoginWrapper: styled.div`
    width: 380px;
    height: 330px;
    background: white;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 20px 0;
    box-sizing: border-box;
    margin-bottom: 120px;
  `,
  LoginButton: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #333333;
    color: white;
    border: none;
    width: 320px;
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
    width: 320px;
    color: black;
    height: 45px;
    border-radius: 4px;
    font-size: 16px;
    background: #d9d9d9;
    border: 1px solid #d9d9d9;
  `,
  LoginImage: styled.img`
    width: 240px;
  `,
};
