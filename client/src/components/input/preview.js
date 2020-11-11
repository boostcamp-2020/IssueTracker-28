import React from 'react';
import S from './style';
const Preview = ({ comment }) => {
  const imageReg = /\[.*\]\^\(.*\)/i;
  return (
    <>
      {comment.split('!').map((cur, i) => {
        if (imageReg.test(cur)) {
          let [imgName, imgPath] = cur.split('^');
          imgName = imgName.replace(/\[|\]|\s*/gi, '');
          imgPath = imgPath.replace(/\(|\)|\s*/gi, '');
          return (
            <S.ImgLink href={imgPath} target="_blank">
              {imgName}
            </S.ImgLink>
          );
        } else if (cur === '') {
          return ``;
        } else {
          return <span>{cur}</span>;
        }
      })}
    </>
  );
};

export default Preview;
