import React, { Fragment } from 'react';
import S from './style';
import { Dropdown, Icon } from 'semantic-ui-react';
const FILTERS_MENU = [
  'Open issues and pull requests',
  'Your issues',
  'Your pull requests',
  'Everything assigned to you',
  'Everything mention you',
];
function Filters(props) {
  const selectHandler = (item) => {
    props.setFilterValue(item);
  };
  return (
    <S.FiltersWrapper>
      <S.FiltersButton></S.FiltersButton>
      <Dropdown className="filters-dropdown" text="Filters">
        <Dropdown.Menu direction="right">
          <Dropdown.Header content="Filter Issues" icon="close" />
          <Dropdown.Divider />
          {FILTERS_MENU.map((item, index) => (
            <Fragment>
              <Dropdown.Item
                text={item}
                key={index}
                onClick={() => {
                  selectHandler(item);
                }}
              />
              <Dropdown.Divider />
            </Fragment>
          ))}
          <Dropdown.Item icon="tags" text="View advanced search syntax" />
        </Dropdown.Menu>
      </Dropdown>
    </S.FiltersWrapper>
  );
}

export default Filters;
