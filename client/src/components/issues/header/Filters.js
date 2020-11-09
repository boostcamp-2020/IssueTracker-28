import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { useIssuesState, useIssuesDispatch } from '@contexts/IssuesContext';
import { FILTERS_ITEMS } from '@constants/filtersItems';
import { UPDATE_FILTER } from '@constants/actionTypes';
import { uncheckAllFilters } from '@utils/uncheckAllFilters';
import S from './style';

function Filters() {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const {filters} = state;

  const selectHandler = (index, updatedFilter) => {
    dispatch({type : UPDATE_FILTER, filters : {...filters, ...updatedFilter}})
    // yourIssues, assigning you 필터 선택시, 드롭다운 필터에 있는 체크를 display:none으로 변경
    uncheckFiltersHandler(index)
  };

  const uncheckFiltersHandler=(index)=>{
    const authorDropdown = document.querySelector('.author-dropdown');
    const assigneeDropdown = document.querySelector('.assignee-dropdown');
    if (index===1) uncheckAllFilters(authorDropdown);
    if (index===2) uncheckAllFilters(assigneeDropdown);
  }

  return (
    <S.FiltersWrapper>
      <S.FiltersButton className="filters-button" />
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
                  selectHandler(index, item[1]);
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
