import React, { useState } from 'react'
import { Container, Accordion } from 'react-bootstrap'
import TeacherAccordian from './components/TeacherAccordian'


function Teachers({ teachers }) {

  return (
    <Container>
      <Accordion>
        {teachers && teachers.map((t) => <TeacherAccordian 
        key={t.id} 
        teacher={t}
       />)}
      </Accordion>
    </Container>
  )
}

export default Teachers