import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewStudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);

  // Fetch students when the component mounts
  useEffect(() => {
    fetch('http://localhost:5000/api/applications/students')
      .then((response) => response.json())
      .then((data) => {
        setStudents(data); // Set the students data
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });
  }, []);

  const handleCheckboxChange = (index) => {
    setSelectedStudents((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index]
    );
  };

  const handleRemoveSelected = () => {
    // Send a DELETE request for each selected student
    selectedStudents.forEach((index) => {
      const studentId = students[index].id;
      fetch(`http://localhost:5000/api/applications/students/${studentId}`, {
        method: 'DELETE',
      })
        .then(() => {
          // Remove the deleted student from the state
          setStudents((prevStudents) =>
            prevStudents.filter((_, i) => i !== index)
          );
          setSelectedStudents((prevSelected) =>
            prevSelected.filter((i) => i !== index)
          );
        })
        .catch((error) => {
          console.error('Error deleting student:', error);
        });
    });
  };

  const handleDropSelectedForMonth = () => {
    // Implement drop selected for month functionality
    alert('Drop Selected for Month functionality is not implemented yet.');
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ backgroundColor: '#2c3e50', color: '#fff', padding: '15px 0' }}>
        <div style={{ width: '90%', margin: '0 auto', maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '26px', fontWeight: 'bold' }}>Coach Dashboard</div>
          <nav>
            <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
              <li style={{ marginLeft: '20px' }}>
                <Link to="/coach-login-home" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
              </li>
              <li style={{ marginLeft: '20px' }}>
                <Link to="/addstudents" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Add Students</Link>
              </li>
              <li style={{ marginLeft: '20px' }}>
                <Link to="/viewstudents" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>View Students</Link>
              </li>
              <li style={{ marginLeft: '20px' }}>
                <Link to="/markattendance" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Mark Attendance</Link>
              </li>
              <li style={{ marginLeft: '20px' }}>
                <Link to="/markfees" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Mark Fees</Link>
              </li>
              <li style={{ marginLeft: '20px' }}>
                <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Logout</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <h1>View Students</h1>
      <div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Select</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Phone</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Gender</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Experience</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Batch</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Time Slot</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <input
                    type="checkbox"
                    checked={selectedStudents.includes(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.phone}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.email}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.gender}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.experience}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.batch}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.time_slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
        

        <div>
          <button
            onClick={handleRemoveSelected}
            style={{
              marginRight: '20px',
              padding: '10px 20px',
              backgroundColor: '#e74c3c',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Remove Selected
          </button>
          <button
            onClick={handleDropSelectedForMonth}
            style={{
              padding: '10px 20px',
              backgroundColor: '#f39c12',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Drop Selected for Month
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewStudentsPage;
