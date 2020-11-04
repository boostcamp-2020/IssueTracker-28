import styled from 'styled-components';

export default {
  TitleContainer: styled.div`
    color: #586069;
  `,
  SelectedItem: styled.div`
    color: black;
    font-weight: 700;
  `,
  ProgressBar: styled.progress`
    width: 100%;
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
};
