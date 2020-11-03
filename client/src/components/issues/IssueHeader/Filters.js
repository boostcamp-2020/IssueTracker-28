import React, { Fragment } from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import S from './style';

const FILTERS_MENU = [
  'Open issues',
  'Your issues',
  'Everything assigned to you',
  'Everything mentioning you',
  'Closed issues',
];
function Filters(props) {
  const selectHandler = (item) => {
    props.setFilterValue(item);
  };
  return (
    <S.FiltersWrapper>
      <S.FiltersButton />
      <Dropdown className="filters-dropdown" text="Filters">
        <Dropdown.Menu className="dropdown-menu" direction="right">
          <Dropdown.Header className="dropdown-header" content="Filter Issues" />
          {FILTERS_MENU.map((item, index) => (
            <>
              <hr className="dropdown-divider" />
              <Dropdown.Item
                className="dropdown-item"
                text={item}
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
