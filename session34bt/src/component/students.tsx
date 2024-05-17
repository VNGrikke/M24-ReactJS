import React from 'react'
import AddStudent from './addStudent'
import Student from './student'
interface Student{
    id:number,
    name:string,
    birthday:string,
    email:string,
    status:boolean
}
export default function students() {
    let students = localStorage.getItem('student')
    if (students === null) {
      students = []
    } else {
      students = JSON.parse(students)
    }
  return (
    <>
      <header>
        <h2>Quản lý sinh viên</h2>
        <AddStudent></AddStudent>
      </header>
      <body>
        <div className='sortAndSearch'>
          <select className='sort'>
            <option selected>Sắp xếp theo tên</option>
            <option>Sắp xếp theo tuổi</option>
            <option>Sắp xếp theo ngày sinh</option>
          </select>
          <input type="text" name='search' />
        </div>
        <div className='studentList'>
          <table>
            <thead>
              <tr>
                <td>STT</td>
                <td>Mã sinh viên</td>
                <td>Tên sinh viên</td>
                <td>Ngày sinh</td>
                <td>Email</td>
                <td>Trạng thái</td>
                <td>Chức năng</td>
              </tr>
            </thead>
            <tbody>
                <Student></Student>
            </tbody>
          </table>
        </div>
      </body>
    </>
  )
}
