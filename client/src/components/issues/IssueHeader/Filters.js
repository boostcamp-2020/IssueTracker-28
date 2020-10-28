import React from 'react';
import S from './Buttons/style';
import { TriangleDownIcon } from '@primer/octicons-react'
import { Dropdown } from 'semantic-ui-react';


function Filters() {
    return (
        <S.FiltersButton>
            <S.DropdownWrapper>
            <Dropdown className = "" text='Filters'>
                <Dropdown.Menu direction='left'>
                <Dropdown.Header icon='tags' content='Filter by author' />
                <Dropdown.Item text='johnyejin' />
                </Dropdown.Menu>
            </Dropdown>
            </S.DropdownWrapper>
        </S.FiltersButton>
    );
};

export default Filters;
