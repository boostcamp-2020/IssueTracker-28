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
    padding: 4px 0 12px 0;
    font-weight: 700;
    &:hover {
      color: #0266d6;
    }
    .gear-icon {
      cursor: pointer;
    }
  `,
  TitleContainer: styled.div`
    display: flex;
    padding-bottom: 0.5rem;
    color: #586069;
    align-items: center;
  `,
  BoxColor: styled.div`
    width: 16px;
    height: 16px;
    background-color: ${(props) => props.background || 'white'};
    border-radius: 3px;
  `,
  LabelName: styled.div`
    padding-left: 0.5rem;
  `,
  LabelDesc: styled.div`
    color: #586069;
    margin-top: 0.5rem;
    font-size: 13px;
  `,
  LabelPic: styled.img`
    width: 23px;
    height: 23px;
    border-radius: 4px;
    margin-right: 8px;
  `,
  SelectedItem: styled.div`
    color: white;
    font-weight: 800;
    padding: 4px 10px;
    margin-bottom: 4px;
    border-radius: 5px;
    background-color: ${(props) => props.background || 'black'};
    &:last-child {
      margin-bottom: 0px;
    }
  `,
};
