import React, { useState } from 'react';
import axios from 'axios';

function TestPage() {
  const submitHandler = (event) => {
    if (event.target.files !== null) {
      const fd = new FormData();
      fd.append('filename', event.target.files[0]);
      axios
        .post(`/api/upload/test`, fd, {
          headers: { 'Content-Type': 'multipart/form-data;charset=utf-8;' },
        })
        .then((res) => {
          setImgPath(`https://kr.object.ncloudstorage.com/issue/` + res.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  };
  let [imgPath, setImgPath] = useState('');
  if (imgPath == '') {
    return (
      <div>
        <input type="file" accept="image/png" onChange={submitHandler}></input>
      </div>
    );
  } else {
    return <a href={imgPath}>마크다운 형식 : {imgPath}</a>;
  }
}

export default TestPage;
