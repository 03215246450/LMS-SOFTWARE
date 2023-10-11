import React, { useState } from 'react';

const students = [
  {
    id: 1,
    name: 'Ahsan',
    fatherName: 'Ameer Mavia',
    course: 'Computer Science',
  },
  {
    id: 2,
    name: 'Ali',
    fatherName: 'Akbar',
    course: 'Pre-engeeniering',
  },
  {
    id: 3,
    name: 'Asif',
    fatherName: 'Ali',
    course: 'Pre-engeeniering',
  },
  {
    id: 4,
    name: 'Kinza',
    fatherName: 'Jamal',
    course: 'Pre-Medical',
  },
  {
    id: 5,
    name: 'Adeel',
    fatherName: 'kashif',
    course: 'Grephics designer',
  },
  
];

function StudentList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStudents, setFilteredStudents] = useState(students);

  const handleSearchChange = (e : any) => {
    const table = e.target.value;
    setSearchQuery(table);

    const filtered = students.filter((student) =>
      student.name.toLowerCase().includes(table) ||
      student.fatherName.toLowerCase().includes(table) ||
      student.course.toLowerCase().includes(table)
    );
    setFilteredStudents(filtered);
  };

  return (
    <div className="container mt-4">
      <h2>Student List</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search students..."
        onChange={handleSearchChange}
        value={searchQuery}
      />
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Father Name</th>
            <th>Course</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.fatherName}</td>
              <td>{student.course}</td>
              <td>{student.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
