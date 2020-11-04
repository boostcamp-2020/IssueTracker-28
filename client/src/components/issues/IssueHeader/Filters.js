import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { useIssuesState, useIssuesDispatch } from '@contexts/IssuesContext';
import { FILTERS_ITEMS } from '@constants/filtersItems';
import { UPDATE_FILTER } from '@constants/actionTypes';
import S from './style';

function Filters() {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const {filters} = state;

  const selectHandler = (updatedFilter) => {
    dispatch({type : UPDATE_FILTER, filters : {...filters, ...updatedFilter}})
  };

  return (
    <S.FiltersWrapper>
      <S.FiltersButton className="filters-button"/>
      <Dropdown className="filters-dropdown" text="Filters">
        <Dropdown.Menu className="dropdown-menu" direction="right">
          <Dropdown.Header className="dropdown-header" content="Filter Issues" />
          {FILTERS_ITEMS.map((item, index) => (
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
