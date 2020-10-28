import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { ListWrapper, ListFilters, FilterDropdown } from './style';

function ListHeader() {
  return (
    <ListWrapper>
      <input className='all-checkbox' type='checkbox' />
      <ListFilters>
        <FilterDropdown>
          <Dropdown className='author-dropdown' text='Author'>
            <Dropdown.Menu direction='left'>
              <Dropdown.Header icon='tags' content='Filter by author' />
              <Dropdown.Item text='johnyejin' />
            </Dropdown.Menu>
          </Dropdown>
        </FilterDropdown>
        <FilterDropdown>
          <Dropdown className='label-dropdown' text='Label'>
            <Dropdown.Menu direction='left'>
              <Dropdown.Header icon='tags' content='Filter by label' />
              <Dropdown.Item text='frontend' />
            </Dropdown.Menu>
          </Dropdown>
        </FilterDropdown>
        <FilterDropdown>
          <Dropdown className='milestons-dropdown' text='Milestons'>
            <Dropdown.Menu direction='left'>
              <Dropdown.Header icon='tags' content='Filter by milestons' />
              <Dropdown.Item text='스프린트1' />
            </Dropdown.Menu>
          </Dropdown>
        </FilterDropdown>
        <FilterDropdown>
          <Dropdown className='assignee-dropdown' text='Assignee'>
            <Dropdown.Menu direction='left'>
              <Dropdown.Header icon='tags' content='Filter by assignee' />
              <Dropdown.Item text='johnyejin' />
            </Dropdown.Menu>
          </Dropdown>
        </FilterDropdown>
      </ListFilters>
    </ListWrapper>
  );
}

export default ListHeader;