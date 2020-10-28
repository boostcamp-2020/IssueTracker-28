import styled from 'styled-components';

export const IssueWrapper = styled.div`
  display: flex;
  padding: 8px 16px;
  border: 1px solid #e1e4e8;
  border-top: 0;
  .octicon-issue-opened {
    margin-left: 16px;
    color: #28a745;
  }
  &:last-of-type {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

export const IssueContainer = styled.div`
  padding: 0 8px;
  .title-container {
    display: flex;
    .title {
      font-weight: 600;
    }
    .label-list {
      display: flex;
      .label {
        padding: 0 7px;
        margin-left: 2px;
        border: 1px solid transparent;
        color: #fff;
        border-radius: 2rem;
        background-color: #6b6bce;
        font-size: 12px;
        font-weight: 500;
      }
    }
  }
`;

export const OtherContainer = styled.div`
  display: flex;
  margin-top: 3px;
  font-size: 12px;
  color: #586069;
  .milestone-container {
    display: flex;
    margin-left: 8px;
    .octicon-milestone {
      color: #959da5;
    }
  }
`;
