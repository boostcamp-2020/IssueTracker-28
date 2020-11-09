import styled from 'styled-components';

export default {
  ListWrapper: styled.div`
    margin-top: 24px;
  `,
  ListHeader: styled.div`
    display: flex;
    border: 1px solid #e1e4e8;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-color: #f6f8fa;
    padding: 16px;
  `,
  CountWrapper: styled.div`
    display: flex;
    align-items: center;
    color: #606060;
    margin-right: 10px;
  `,
  Count: styled.div`
    margin-left: 4px;
  `,
  List: styled.div`
  `,
  LoadSpinner: styled.img`
    width : 250px;
    position : absolute;
    margin : auto;
    top: 0;
    bottom:0;  
    left:0;
    right:0;  
  `
};