import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { ListWrapper, ListFilters, FilterDropdown } from './style';

function ListHeader() {
  return (
    <ListWrapper>
      <input className='all-checkbox' type='checkbox' />
      <ListFilters>
        <FilterDropdown>
          <Dropdown className='author-dropdown dropdown' text='Author'>
            <Dropdown.Menu className="dropdown-menu" direction='left'>
              <Dropdown.Header className="dropdown-header" content='Filter by author' />
              <Dropdown.Item className="dropdown-item" text='johnyejin' />
            </Dropdown.Menu>
          </Dropdown>
        </FilterDropdown>
        <FilterDropdown>
          <Dropdown className='label-dropdown dropdown' text='Label'>
            <Dropdown.Menu className="dropdown-menu" direction='left'>
              <Dropdown.Header className="dropdown-header" content='Filter by label' />
              <Dropdown.Item className="dropdown-item" text='frontend' />
            </Dropdown.Menu>
          </Dropdown>
        </FilterDropdown>
        <FilterDropdown>
          <Dropdown className='milestons-dropdown dropdown' text='Milestons'>
            <Dropdown.Menu className="dropdown-menu" direction='left'>
              <Dropdown.Header className="dropdown-header" content='Filter by milestons' />
              <Dropdown.Item className="dropdown-item" text='스프린트1' />
            </Dropdown.Menu>
          </Dropdown>
        </FilterDropdown>
        <FilterDropdown>
          <Dropdown className='assignee-dropdown dropdown' text='Assignee'>
            <Dropdown.Menu className="dropdown-menu" direction='left'>
              <Dropdown.Header className="dropdown-header" content='Filter by assignee' />
              <Dropdown.Item className="dropdown-item" text='johnyejin' />
            </Dropdown.Menu>
          </Dropdown>
        </FilterDropdown>
      </ListFilters>
    </ListWrapper>
  );
}

export default ListHeader;