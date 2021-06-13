import React, { useEffect } from "react";
import axios from "axios";
const TestPage = (props) => {

  return (
    <div>
      <button>
        {console.log(props)}
      </button>
    </div>
  );
};

export default TestPage;
/*
Luong chay nhe
1. Nguoi dung dang ky, se check o backend. Neu ok thi add
2. Den phan login, nguoi dung login -> pass -> ban ve token ->luu o localStorage -> ok?
- ko can nhat thiet phai luu vao cookie dau dung ko thay? chuan roi
- man hinh dang ky dau?
*/
