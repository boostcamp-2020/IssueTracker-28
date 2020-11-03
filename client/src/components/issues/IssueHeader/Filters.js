import React, { Fragment } from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import { useIssuesState, useIssuesDispatch, getIssues } from '../../../contexts/IssuesContext';

import S from './style';

const filterItems = [
  ['Open issues', {status : 'opened'}],
  ['Your issues', {author : localStorage.getItem('user_id')}],
  ['Everything assigned to you', {assignees : [localStorage.getItem('user_id')]}],
  ['Everything mentioning you', {author : localStorage.getItem('user_id')}],
  ['Closed issues', {status : 'closed'}],
];
function Filters({setFilterValue}) {

  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const {filters} = state;


  const selectHandler = (updatedFilter) => {
    dispatch({type : 'UPDATE_FILTER', filters : {...filters, ...updatedFilter}})
  };

  return (
    <S.FiltersWrapper>
      <S.FiltersButton />
      <Dropdown className="filters-dropdown" text="Filters">
        <Dropdown.Menu className="dropdown-menu" direction="right">
          <Dropdown.Header className="dropdown-header" content="Filter Issues" />
          {filterItems.map((item, index) => (
            <>
              <hr className="dropdown-divider" />
              <Dropdown.Item
                className="dropdown-item"
                text={item[0]}
                key={index}
                onClick={() => {
                  selectHandler(item[1]);
                }}
              />
            </>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </S.FiltersWrapper>
  );
}

export default Filters;
