import styled from 'styled-components';

export default {
  ListWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #e1e4e8;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-color: #f6f8fa;
    padding: 16px;
    padding-right : 28px;
    position: relative;
    .checked-item-count {
      position: absolute;
      left: 40px;
      font-size: 13px;
      color: #616e75;
    }
  `,
  ListFilters: styled.div`
    display: flex;
    .check-icon {
      display: none !important;
      margin-right: 5px;
    }
    .show {
      display: inline-block !important;
    }
  `,
  FilterDropdown: styled.div`
    padding-left: 20px;
    .dropdown {
      .dropdown-item {
        font-weight: 500;
        font-size: 13.5px;
        background: white;
        min-width: 150px;
      }
      .dropdown-menu {
        font-weight: 700;
        font-size: 15px;
        background: #f7f8fa;
        .item:hover {
          background: #f7f8fa;
        }
      }
      .dropdown-header {
        height: 10px;
        display: flex;
        position: relative;
        bottom: 5px;
      }
      .dropdown-divider {
        margin: 0;
        border: none;
        border-top: 1px solid #e7e8ea;
      }
    }
  `,
  ItemContainer: styled.div`
    display: flex;
    align-items : center;
  `,
};
