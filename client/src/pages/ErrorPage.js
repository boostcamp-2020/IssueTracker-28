import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 500px;
  margin: auto;
  margin-top: 150px;
  text-align: center;
  img {
    width: 500px;
  }
  a {
    font-size: 20px;
  }
`;
const ErrorPage = () => {
  return (
    <Wrapper>
      <img src="https://kr.object.ncloudstorage.com/issue/1605231073618.png" alt="404" />
      <a href="/">돌아가기</a>
    </Wrapper>
  );
};

export default ErrorPage;
