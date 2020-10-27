import React from 'react';
import Issue from './Issue';

const issues = [
  {
    id: 1,
    title: 'Github OAuth',
    content: 'github로 로그인 구현',
    milestone: '스프린트1',
    user: 'johnyejin',
    status: 'opened',
    labels: ['frontend', 'backend']
  },
  {
    id: 2,
    title: 'wiki 정리',
    content: 'wiki 정리하기',
    milestone: '스프린트1',
    user: 'johnyejin',
    status: 'opened',
    labels: ['docs']
  }
]

function List() {
  return (
    <div className='list-wrapper'>
      {issues.map(issue => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </div>
  );
}

export default List;