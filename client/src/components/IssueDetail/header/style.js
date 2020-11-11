import styled from 'styled-components';

export default {
  HeaderWrapper: styled.div`
    position: relative;
    width: 100%;
    height: 90px;
    margin: 15px 15px 30px 15px;
    border-bottom: 1px solid rgb(225, 228, 232);
    .edit-button {
      position: absolute;
      top: 2px;
      right: 10px;
    }
  `,
  EditWrapper: styled.div`
    display: flex;
    .issue-title {
      width: 100%;
    }
    .cancle-button {
      color: #0366d6;
      font-size: 14px;
      align-self: center;
      margin-left: 10px;
      border: none;
      background: #ffffff;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    .save-button {
      margin-left: 15px;
      width: 70px;
    }
  `,
  IssueTitle: styled.div`
    color: #24292e;
    font-size: 32px;
  `,
  IssueId: styled.div`
    color: #6a737d;
    font-size: 30px;
    font-weight: light;
  `,
  TitleWrapper: styled.div`
    display: flex;
    height: 34px;
    align-items: center;
  `,
  ContentWrapper: styled.div`
    display: flex;
    margin-top: 15px;
  `,
  Content: styled.p`
    margin: 0;
    margin-left: 8px;
    align-self: center;
    .detail-author {
      font-weight: bold;
    }
  `,
  HrLine: styled.hr`
    width: 99%;
    border: 0px;
    margin-top: 20px;
  `,
};
