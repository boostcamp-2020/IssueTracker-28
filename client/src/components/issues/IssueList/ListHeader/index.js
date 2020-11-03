import React, {Fragment, useState} from 'react';
import { Dropdown } from 'semantic-ui-react';
import { ListWrapper, ListFilters, FilterDropdown } from './style';
import { useIssuesState, useIssuesDispatch } from '@contexts/IssuesContext';


const AUTHOR_MENU = [
  'yeji9175',
  'sang-gyeong',
  'dooking',
  'johnyejin',
  'a'
];
const LABEL_MENU = [
  'Bug',
  'front-end',
  'back-end',
  'High-priority',
  'feature'
];
const MILESTONE_MENU = [
  '스프린트1',
  '스프린트2',
  '스프린트3'
];
const ASSIGNEE_MENU = [
  'yeji9175',
  'sang-gyeong',
  'dooking',
  'johnyejin',
  'a'
];

const NO_FILTER_ITEM = [
  'Unlabeled',
  'Issues with no milestone',
  'Assigend to nobody'
]


function ListHeader({allCheckedHandler}) {
  const [beChecked, setChecked] = useState(false);
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const {filters} = state;

  const filterHandler=(item, type)=>{
    switch(type){
      case 'author':
        return dispatch({type:'UPDATE_FILTER', filters : {...filters, author : item}});
      case 'label':
        if (item===null) return dispatch({type:'UPDATE_FILTER', filters : {...filters,  labels : []}})
        if (filters.labels === '*') return dispatch({type:'UPDATE_FILTER', filters : {...filters,  labels : [item]}})
        return dispatch({type:'UPDATE_FILTER', filters : {...filters,  labels : [...filters.labels, item]}})
      case 'milestone':
        return dispatch({type:'UPDATE_FILTER', filters : {...filters, milestone : item}})
      case 'assignees':
        if (item===null) return dispatch({type:'UPDATE_FILTER', filters : {...filters,assignees : []}})
        return dispatch({type:'UPDATE_FILTER', filters : {...filters, assignees : [item]}})
    }
  }

  const checkHandler = ({ target }) => {
    setChecked(!beChecked);
    allCheckedHandler(target.checked);
  };

  return (
    <ListWrapper>
      <input type='checkbox' checked={beChecked} onChange={(e) => checkHandler(e)} className='all-checkbox'  />
      <ListFilters>
        <FilterDropdown>
          <Dropdown className='author-dropdown dropdown' text='Author'>
            <Dropdown.Menu className="dropdown-menu" direction='left'>
              <Dropdown.Header className="dropdown-header" content='Filter by author' />
                {AUTHOR_MENU.map((item, index) => (
                  <Fragment>
                    <hr className="dropdown-divider"/>
                    <Dropdown.Item className="dropdown-item" onClick={()=>{filterHandler(item, 'author')}} text={item} key={index} />
                  </Fragment>
                ))}
            </Dropdown.Menu>
          </Dropdown>
        </FilterDropdown>
        <FilterDropdown>
          <Dropdown className='label-dropdown dropdown' text='Label'>
            <Dropdown.Menu className="dropdown-menu" direction='left'>
              <Dropdown.Header className="dropdown-header" content='Filter by label' />
              <hr className="dropdown-divider"/>
              <Dropdown.Item className="dropdown-item" onClick={()=>{filterHandler(null, 'label')}} text={NO_FILTER_ITEM[0]} />
              {LABEL_MENU.map((item, index) => (
                  <Fragment>
                    <hr className="dropdown-divider"/>
                    <Dropdown.Item className="dropdown-item"  onClick={()=>{filterHandler(item, 'label')}} text={item} key={index} />
                  </Fragment>
                ))}
            </Dropdown.Menu>
          </Dropdown>
        </FilterDropdown>
        <FilterDropdown>
          <Dropdown className='milestons-dropdown dropdown' text='Milestons'>
            <Dropdown.Menu className="dropdown-menu" direction='left'>
              <Dropdown.Header className="dropdown-header" content='Filter by milestons' />
              <hr className="dropdown-divider"/>
              <Dropdown.Item className="dropdown-item" onClick={()=>{filterHandler(null, 'milestone')}} text={NO_FILTER_ITEM[1]} />
              {MILESTONE_MENU.map((item, index) => (
                  <Fragment>
                    <hr className="dropdown-divider"/>
                    <Dropdown.Item className="dropdown-item" onClick={()=>{filterHandler(item, 'milestone')}} text={item} key={index} />
                  </Fragment>
                ))}
            </Dropdown.Menu>
          </Dropdown>
        </FilterDropdown>
        <FilterDropdown>
          <Dropdown className='assignee-dropdown dropdown' text='Assignee'>
            <Dropdown.Menu className="dropdown-menu" direction='left'>
              <Dropdown.Header className="dropdown-header" content='Filter by assignee' />
              <hr className="dropdown-divider"/>
              <Dropdown.Item className="dropdown-item" onClick={()=>{filterHandler(null, 'assignees')}} text={NO_FILTER_ITEM[2]} />
              {ASSIGNEE_MENU.map((item, index) => (
                  <Fragment>
                    <hr className="dropdown-divider"/>
                    <Dropdown.Item className="dropdown-item" onClick={()=>{filterHandler(item, 'assignees')}} text={item} key={index} />
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