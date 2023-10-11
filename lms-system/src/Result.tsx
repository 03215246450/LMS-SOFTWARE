import React, { useState } from 'react'


const studentsResults =  [
      {
        id: "1",
        name: "Ahsan",
        courseId: "101",
        assignment1Score: "90",
        assignment2Score: "85",
        finalExamScore: "95"
      },
      {
        id: "2",
        name: "Asif",
        courseId: "102",
        assignment1Score: "88",
        assignment2Score: "92",
        finalExamScore: "89"
      },
      {
        id: "3",
        name: "Kinza",
        courseId: "103",
        assignment1Score: "92",
        assignment2Score: "91",
        finalExamScore: "91"
      },
      {
        id: "4",
        name: "Adeel",
        courseId: "104",
        assignment1Score: "93",
        assignment2Score: "93",
        finalExamScore: "94"
      },
      {
        id: "5",
        name: "Ali",
        courseId: "105",
        assignment1Score: "97",
        assignment2Score: "92",
        finalExamScore: "93"
      },
     ]
  


export default function Result() {

    const [searchResult, setSearchResult] = useState("")
    const [filteredResult, setFilterdResult] = useState(studentsResults)


    const handleSearchChange = (e:any) => {
        const result = e.target.value
        setSearchResult(result)

        const filtered = studentsResults.filter((resulted) =>
        resulted.name.toLowerCase().includes(result) ||
        resulted.id.toLowerCase().includes(result) ||
        resulted.courseId.toLowerCase().includes(result)||
        resulted.assignment1Score.toLowerCase().includes(result)||
        resulted.assignment2Score.toLowerCase().includes(result)||
        resulted.finalExamScore.toLowerCase().includes(result)
        )
        setFilterdResult(filtered)
    }

  return (
    <div className="container mt-4">
    <h2>Results</h2>
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Search students..."
      onChange={handleSearchChange}
      value={searchResult}
    />
    <table className="table table-bordered table-striped">
      <thead className="thead-dark">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Course Id</th>
          <th>First Assignment Score</th>
          <th>SEcond Assignment Score</th>
          <th>Final Exam Score</th>
        </tr>
      </thead>
      <tbody>
        {filteredResult.map((student) => (
          <tr key={student.id}>
            <td className='text-center'>{student.id}</td>
            <td className='text-center'>{student.name}</td>
            <td className='text-center'>{student.courseId}</td>
            <td className='text-center'>{student.assignment1Score}</td>
            <td className='text-center'>{student.assignment2Score}</td>
            <td className='text-center'>{student.finalExamScore}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
