import React from 'react';
import S from './style';
import { TriangleDownIcon } from '@primer/octicons-react'
import { Dropdown } from 'semantic-ui-react';


function Filters() {
    return (
        <S.FiltersWrapper>
            <S.FiltersButton></S.FiltersButton>
            <Dropdown className='filters-dropdown' text='Filters'>
                <Dropdown.Menu direction='right'>
                <Dropdown.Header icon='tags' content='Filter Issues' />
                <Dropdown.Item text='open issues' />
                </Dropdown.Menu>
            </Dropdown>
        </S.FiltersWrapper>
    );
};

export default Filters;
