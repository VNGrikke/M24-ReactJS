import './bt3.css'

class User {
    name: string;
    gender: string;
    email: string;
    date: string;
    address: string;

    constructor(name: string, gender: string, email: string, date: string, address: string) {
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.date = date;
        this.address = address;
    }
}

let userInfor: User = new User("Vương", "nam", "v@gmail.com", "13/2/1986", "Hải Dương");
function App3() {
  return (
    <>
      <h3>Thông tin nguoief dùng</h3>
      <ul>
       <li>Họ và tên: <b>{userInfor.name}</b></li>
       <li>Giới tính: <b>{userInfor.gender}</b></li>
       <li>ngày sinh: <b>{userInfor.date}</b></li>
       <li>Email: <b>{userInfor.email}</b></li>
       <li>địa chỉ: <b>{userInfor.address}</b></li>
      </ul>
    </>
  )
}

export default App3
