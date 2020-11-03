import styled from 'styled-components';

export default {
  SearchBar: styled.input`
    display: flex;
    box-sizing: border-box;
    background: #f9f9f9;
    width: 500px;
    height: 35px;
    align-items: center;
    padding-left: 10px;
    font-size: 14.5px;
    color : #404040;
    outline: none;
    border: none;
    border-radius: 0px 4px 4px 0px;
    border-left: 1px solid #e0e0e0;
  `,
  IssueHeader: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  HeaderItemWrapper: styled.div`
    display: flex;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
  `,
  FiltersButton: styled.button`
    background: linear-gradient(to bottom, #fff, #e9e9e9);
    &:hover {
      background : gold;
    }
    border-radius: 4px 0px 0px 4px;
    color: #606060;
    display: flex;
    box-sizing: border-box;
    min-width: 80px;
    height: 35px;
    border: none;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 600;
    padding: 0px 13px;
    cursor: pointer;
    outline: none;
  `,
  ResetButton : styled.div`
  cursor : pointer;
  color : gray;
  font-weight : 600;
  margin-top : 12.5px;
  :hover{
    color : #0266D6;
  }
  .x-icon{
    margin-right : 4px;
  }
  `,
  FiltersWrapper: styled.div`
    position: relative;
    color: #606060;
    .filters-dropdown {
      width: 80px;
      height: 35px;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 5px;
      .dropdown-item{
        font-weight : 500;
        font-size : 13.5px;
        background : white;
      }
      .dropdown-menu{
        font-weight : 800;
        font-size : 16px;
        background : #F7F8FA;
        .item:hover{
          background : #F7F8FA;
        }
      }
      .dropdown-divider{
        margin: 0;
        border: none;
        border-top : 1px solid #E7E8EA;
      }
      .dropdown-header{
        height : 10px;
        display : flex;
        position : relative;
        bottom : 5px;
      }
    }
  `,
};
