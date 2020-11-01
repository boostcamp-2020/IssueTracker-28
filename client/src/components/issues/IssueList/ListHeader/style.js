import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e1e4e8;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: #f6f8fa;
  padding: 16px;
`;

export const ListFilters = styled.div`
  display: flex;
`;

export const FilterDropdown = styled.div`
  padding-left: 16px;
  .dropdown{
    .dropdown-item{
      color : red;
      font-weight : 500;
      font-size : 13.5px;
      background : white;
    }
    .dropdown-menu{
      font-weight : 700;
      font-size : 15px;
      background : #F7F8FA;
    }
    .dropdown-header{
      height : 10px;
      display : flex;
      position : relative;
      bottom : 5px;
    }
    .dropdown-divider{
      margin: 0;
      border: none;
      border-top : 1px solid #E7E8EA;
    }
  }
`;