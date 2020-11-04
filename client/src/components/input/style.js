import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  margin-right: 1.5rem;
`;

export const InputTitle = styled.input`
  width: 97.5%;
  height: 32px;
  margin: 8px 8px 16px 8px;
  padding: 2px 12px;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  outline: none;
  background-color: rgb(250, 251, 252);
`;

export const WriteWrapper = styled.div``;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #e1e4e8;
`;

export const WriteTitle = styled.div`
  display: inline-block;
  margin: 0 8px;
  padding: 8px 16px;
  border: 1px solid #e1e4e8;
  border-radius: 6px 6px 0 0;
  border-bottom: none;
`;
export const WritePreview = styled.div`
  display: inline-block;
  color: rgb(88, 96, 105);
  margin-left: 10px;
`;
export const InputComment = styled.textarea`
  margin: 8px 8px 0 8px;
  padding: 8px;
  width: 97.5%;
  height: 300px;
  border: 1px solid #e1e4e8;
  border-radius: 6px 6px 0 0;
  border-bottom: 1px dashed #e1e4e8;
  background-color: rgb(250, 251, 252);
`;

export const InputPicture = styled.div`
  margin: 0 8px;
  padding: 8px;
  color: #586069;
  border: 1px solid #e1e4e8;
  border-top: none;
  border-radius: 0 0 6px 6px;
  cursor: pointer;
  background-color: rgb(250, 251, 252);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
`;

export const CancelButton = styled.button`
  border: none;
  background: none;
  color: #586069;
  cursor: pointer;
`;
