import React from 'react';
function UserPage() {
  return(
  <div>
    <button>
      로그인 요청
    </button>
    <a href="http://localhost:3000/api/auth/github">Login</a>
    <a href="http://localhost:3000/api/auth/logout">Logout</a>
  </div>
  );
}
export default UserPage;