import styled from 'styled-components'


export default {
    SearchBar: styled.input`
    display : flex;
    box-sizing: border-box;
    background : #f9f9f9;
    width : 500px;
    height: 35px;
    align-items : center;
    padding-left : 10px;
    font-size: 13px;
    outline : none;
    border : none;
    `,
    IssueHeader: styled.div`
    width : 100%;
    display : flex;
    justify-content : space-between;
    `,
    HeaderItemWrapper : styled.div`
    display : flex;
    border: 1px solid #e0e0e0;
    overflow : hidden;
    border-radius : 4px;
    `
};