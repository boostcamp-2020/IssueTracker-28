import styled from 'styled-components';

export default {
  HeaderWrapper: styled.div`
    position: relative;
    width: 100%;
    height: 100px;
    .edit-button {
      position: absolute;
      top: 8px;
      right: 10px;
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
};
