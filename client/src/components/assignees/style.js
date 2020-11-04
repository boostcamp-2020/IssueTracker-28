import styled from 'styled-components';

export default {
  AssignSelf: styled.div`
    cursor: pointer;
  `,
  SelectedItem: styled.div`
    color: black;
    padding-bottom: 3px;
    &:last-child {
      padding-bottom: 0px;
    }
  `,
};