import React, {Fragment} from 'react';
import { Dropdown } from 'semantic-ui-react';
import { ListWrapper, ListFilters, FilterDropdown } from './style';
const AUTHOR_MENU = [
  'Peter Kim',
  'Crong Go',
  'johnyejin'
];
const LABEL_MENU = [
  'Unlabeled',
  'front-end',
  'back-end',
  'Bug',
  'High-priority',
];
const MILESTONE_MENU = [
  'Issues with no milestone',
  '스프린트 1',
  '스프린트 2',
];
const ASSIGNEE_MENU = [
  'Assigned to nobody',
  'Peter Kim',
  'johnyejin'
];


function ListHeader() {
  return (
    <ListWrapper>
      <input className='all-checkbox' type='checkbox' />
      <ListFilters>
        <FilterDropdown>
          <Dropdown className='author-dropdown dropdown' text='Author'>
            <Dropdown.Menu className="dropdown-menu" direction='left'>
              <Dropdown.Header className="dropdown-header" content='Filter by author' />
                {AUTHOR_MENU.map((item, index) => (
                  <Fragment>
                    <hr className="dropdown-divider"/>
                    <Dropdown.Item className="dropdown-item" text={item} key={index} />
                  </Fragment>
                ))}
            </Dropdown.Menu>
          </Dropdown>
        </FilterDropdown>
        <FilterDropdown>
          <Dropdown className='label-dropdown dropdown' text='Label'>
            <Dropdown.Menu className="dropdown-menu" direction='left'>
              <Dropdown.Header className="dropdown-header" content='Filter by label' />
              {LABEL_MENU.map((item, index) => (
                  <Fragment>
                    <hr className="dropdown-divider"/>
                    <Dropdown.Item className="dropdown-item" text={item} key={index} />
                  </Fragment>
                ))}
            </Dropdown.Menu>
          </Dropdown>
        </FilterDropdown>
        <FilterDropdown>
          <Dropdown className='milestons-dropdown dropdown' text='Milestons'>
            <Dropdown.Menu className="dropdown-menu" direction='left'>
              <Dropdown.Header className="dropdown-header" content='Filter by milestons' />
              {MILESTONE_MENU.map((item, index) => (
                  <Fragment>
                    <hr className="dropdown-divider"/>
                    <Dropdown.Item className="dropdown-item" text={item} key={index} />
                  </Fragment>
                ))}
            </Dropdown.Menu>
          </Dropdown>
        </FilterDropdown>
        <FilterDropdown>
          <Dropdown className='assignee-dropdown dropdown' text='Assignee'>
            <Dropdown.Menu className="dropdown-menu" direction='left'>
              <Dropdown.Header className="dropdown-header" content='Filter by assignee' />
              {ASSIGNEE_MENU.map((item, index) => (
                  <Fragment>
                    <hr className="dropdown-divider"/>
                    <Dropdown.Item className="dropdown-item" text={item} key={index} />
                  </Fragment>
                ))}
            </Dropdown.Menu>
          </Dropdown>
        </FilterDropdown>
      </ListFilters>
    </ListWrapper>
  );
}

export default ListHeader;