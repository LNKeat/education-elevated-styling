import './App.css';
import { Container } from 'react-bootstrap';
import Teachers from './Teachers';
import { useEffect, useState } from 'react';

function App() {
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/teachers', {
      "method": "GET"
    }).then((r) => r.json())
    .then ((teacherData) => setTeachers(teacherData))
  }, [])
  
  return (
    <Container style={{margin:"50px"}}>
      <h1>Teachers</h1>
      <Teachers teachers={teachers} />
    </Container>
  );
}

export default App;
