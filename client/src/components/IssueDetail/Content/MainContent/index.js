import React from 'react';
import Comment from './Comment/index';
const MainContent = () => {
  return (
    <>
      <Comment author={'dooking'} createdAt={'3 days ago'} isOwner={true} content={'내용입니다'} />
      <Comment author={'dooking'} createdAt={'3 days ago'} isOwner={false} content={'내용입니다'} />
      {/* <CommentLists />
      <CommentInput /> */}
    </>
  );
};

export default MainContent;
