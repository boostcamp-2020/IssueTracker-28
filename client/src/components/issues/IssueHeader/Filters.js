import React, { Fragment } from 'react';
import S from './style';
import { Dropdown, Icon } from 'semantic-ui-react';
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
      <S.FiltersButton></S.FiltersButton>
      <Dropdown className="filters-dropdown" text="Filters">
        <Dropdown.Menu className="filters-menu" direction="right">
          <Dropdown.Header className="filters-header" content="Filter Issues" />
          {FILTERS_MENU.map((item, index) => (
            <Fragment>
              <hr className="filters-divider"/>
              <Dropdown.Item className="filters-item"
                text={item}
                key={index}
                onClick={() => {
                  selectHandler(item);
                }}
              />
            </Fragment>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </S.FiltersWrapper>
  );
}

export default Filters;
