import styled from 'styled-components';

export const LabelContainer = styled.div`
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
`;

export const LabelHeader = styled.div`
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 0;
  .gear-icon {
    cursor: pointer;
  }
`;