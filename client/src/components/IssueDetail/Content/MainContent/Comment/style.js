import styled from 'styled-components';

export default {
  FlexWrapper: styled.div`
    display: flex;
  `,
  Triangle: styled.div`
    margin-top: 45px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid ${(props) => props.backgroundColor};
    margin-left: 100px;
  `,
  CommentsWrapper: styled.div`
    margin-top: 30px;
    width: 70%;
    height: 150px;
    border: 1px solid rgb(225, 228, 232);
    border-radius: 6px;
  `,
  TitleWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: 45px;
    border-bottom: 1px solid rgb(225, 228, 232);
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-color: ${(props) => props.backgroundColor};
  `,
  AuthorInfo: styled.div`
    display: flex;
  `,
  WriterInfo: styled.div`
    display: flex;
    align-items: center;
  `,
  TitleAuthor: styled.div`
    margin-right: 5px;
    font-weight: bold;
  `,
  TitleTime: styled.div``,
  WriterAuthor: styled.div`
    margin-right: 10px;
    border: 1px solid rgb(225, 228, 232);
    padding: 3px 8px;
    font-weight: bold;
  `,
  EditButton: styled.div`
    margin-left: 10px;
    cursor: pointer;
  `,
  CommentsContent: styled.div`
    height: 80px;
    padding: 10px;
  `,
  InputWrappers: styled.div`
    width: 70%;
    height: ${(props) => props.wrapperHeight};
    border: 1px solid rgb(225, 228, 232);
    margin: 30px;
    margin-left: 110px;
  `,
  FlexWrapper: styled.div`
    display: flex;
  `,
};
