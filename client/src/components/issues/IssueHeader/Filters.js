import React, { Fragment } from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import { useIssuesState, useIssuesDispatch, getIssues } from '../../../contexts/IssuesContext';

import S from './style';

const filterItems = [
  {title : 'Open issues', filter : {status : 'opened'}},
  {title : 'Your issues', filter : {author : localStorage.getItem('user_id')}},
  {title : 'Everything assigned to you', filter : {assignee : [localStorage.getItem('user_id')]}},
  {title : 'Everything mentioning you', filter : {author : localStorage.getItem('user_id')}},
  {title : 'Closed issues', filter : {status : 'closed'}},
];
function Filters({setFilterValue}) {

  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const {filters} = state;


  const selectHandler = (item) => {
    setFilterValue(item);
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
                text={item.title}
                key={index}
                onClick={() => {
                  selectHandler(item);
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
