import React, { useState } from 'react';
import './addStudent.css';

interface Student {
  id: string;
  name: string;
  birthDate: string;
  email: string;
  status: boolean;
}

export default function AddStudent() {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(false);
  const [students, setStudents] = useState<Student[]>([]);
  const [newStudent, setNewStudent] = useState<Student>({
    id: '',
    name: '',
    birthDate: '',
    email: '',
    status: false,
  });

  const handleClose = () => {
    setShowForm(false);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newStudent.id && newStudent.name && newStudent.birthDate && newStudent.email) {
      setStudents([...students, newStudent]);
      setNewStudent({
        id: '',
        name: '',
        birthDate: '',
        email: '',
        status: false,
      });
      students.push(newStudent);
      setShowForm(false);
      setError(false);
    } else {
      setError(true);
    }
    console.log(newStudent);
    saveData();
  };
  const saveData = () =>{
    const data = JSON.stringify(students);
    localStorage.setItem('students', data);
    console.log(data);
  }

  return (
    <>
      <button onClick={handleShowForm}>Thêm mới sinh viên</button>
      {showForm && (
        <form className='inputData' onSubmit={handleSubmit}>
          <div className='headerInput'>
            <h2>Thêm mới sinh viên</h2>
            <button type="button" onClick={handleClose}>X</button>
          </div>
          <div>
            <label htmlFor="studentId">Mã sinh viên</label><br />
            <input type="text" name='id' id="studentId" onChange={handleChange} value={newStudent.id} />
          </div>
          <div>
            <label htmlFor="studentName">Họ tên</label><br />
            <input onChange={handleChange} type="text" name='name' id="studentName" value={newStudent.name} />
          </div>
          <div>
            <label htmlFor="birthDate">Ngày sinh</label><br />
            <input onChange={handleChange} type="date" name='birthDate' id="birthDate" value={newStudent.birthDate} />
          </div>
          <div>
            <label htmlFor="email">Email</label><br />
            <input onChange={handleChange} type="text" name='email' id="email" value={newStudent.email} />
          </div>
          {
            error && (
              <div className='error'>
                Vui lòng nhập đầy đủ thông tin
              </div>
            )
          }
          <div className='footer'>
            <button type="submit">Thêm</button>
          </div>
        </form>
      )}
    </>
  );
}
