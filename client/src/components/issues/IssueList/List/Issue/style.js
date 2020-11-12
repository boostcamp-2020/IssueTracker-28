import styled from 'styled-components';

export default {
  IssueWrapper: styled.div`
    display: flex;
    padding: 8px 16px;
    position : relative;
    border: 1px solid #e1e4e8;
    border-top: 0;
    .issue-checkbox {
      margin-top: 5px;
    }
    .issue-icon{
      position : relative;
      top : 2px;
      margin-left: 16px;
    }
    .issue-open-icon {
      color: #28a745;
    }
    .issue-closed-icon {
      color: #dd2100;
    }
    &:last-of-type {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }
    &:hover {
      background: #f7f8fa;
    }
    .title {
      margin-right: 2px;
      cursor: pointer;
    }
  `,
  IssueContainer: styled.div`
    padding: 0 8px;
    .title-container {
      display: flex;
      .title {
        font-weight: 600;
      }
    }
  `,
  LabelList: styled.div`
    display: flex;
  `,
  Label: styled.div`
  padding: 0 7px;
  margin-left: 2px;
  border: 1px solid transparent;
  color: #fff;
  border-radius: 2rem;
  background-color: #6b6bce;
  font-size: 12px;
  font-weight: 500;
  `,
  OtherContainer: styled.div`
    display: flex;
    margin-top: 3px;
    font-size: 12px;
    color: #586069;
  `,
  AssigneesContainer: styled.div`
    position : absolute;
    right : 150px;
    .pc-AvatarStackBody:hover{
      .pc-AvatarItem{
        margin-left: 4px;
        opacity: 100%;
        visibility: visible;
        box-shadow: 0 0 0 0px #fff;
      }
    }
  `,
  MilestoneContainer: styled.div`
    display: flex;
    margin-left: 8px;
    .milestone-icon {
      color: #959da5;
      vertical-align: bottom;
    }
    &:hover {
      cursor: pointer;
    }
  `,
};
