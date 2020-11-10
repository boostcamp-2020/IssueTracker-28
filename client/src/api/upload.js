import axios from 'axios';

const imageUpload = async (file) => {
  return axios
    .post(`/api/upload`, file, {
      headers: { 'Content-Type': 'multipart/form-data;charset=utf-8;' },
    })
    .then((res) => {
      console.log('res: ', res.data);
      return res.data;
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export { imageUpload };
