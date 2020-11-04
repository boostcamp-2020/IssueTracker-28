import styled from 'styled-components';

export default {
  LabelContainer: styled.div`
    color: #586069;
    width: 280px;
    border-bottom: 1px solid #eaecef;
    padding: 16px 0px;
    .label-dropdown {
      padding: 0;
    }
    .ui.multiple.dropdown {
      padding: 0;
    }
  `,
  LabelHeader: styled.div`
    width: 280px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 0;
    .gear-icon {
      cursor: pointer;
    }
  `,
  TitleContainer: styled.div`
    display: flex;
    padding-bottom: .5rem;
    color: #586069;
  `,
  BoxColor: styled.div`
    width: 16px;
    height: 16px;
    background-color: ${(props) => props.background || "white"};
    border-radius: 3px;
  `,
  LabelName: styled.div`
    padding-left: .5rem;
  `,
  LabelDesc: styled.div`
    color: #586069;
  `,
};