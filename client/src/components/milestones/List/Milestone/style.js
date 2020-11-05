import styled from 'styled-components';

export default {
  MilestoneWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    border: 1px solid #e1e4e8;
    border-top: 0;
    flex: 1 0 0;
    &:last-of-type {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  `,
  Left: styled.div`
    padding: 15px 20px;
    flex: 1.5 0 0;
  `,
  Title: styled.div`
    font-size: 24px;
    margin-bottom: 10px;
  `,
  DateWrapper: styled.div`
    display: flex;
    align-items: center;
    color: #606060;
    margin-bottom: 10px;
    font-size: 14px;
  `,
  Date: styled.div`
    margin-left: 7px;
  `,
  Description: styled.div`
    color: #606060;
  `,

  Right: styled.div`
    margin: auto 0;
    flex: 1 0 0;
  `,
  ProgressBar: styled.progress`
    width: 100%;
    margin-bottom: 5px;
    border-radius: 8px;
    color: #28a745;
    height: 10px;
    &::-webkit-progress-bar {
      background-color: #eee;
      border-radius: 8px;
    }
    &::-webkit-progress-value {
      background-color: #28a745;
      border-radius: 8px;
    }
    &::-moz-progress-bar {
      background-color: #eee;
      border-radius: 8px;
    }
  `,
  ProgressState: styled.div`
    display: flex;
    margin-bottom: 10px;
  `,
  State: styled.div`
    margin-right: 10px;
    color: #606060;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    .delete-btn {
      color: red;
    }
  `,
  Button: styled.div`
    color: blue;
    margin-right: 10px;
    cursor: pointer;
  `
}