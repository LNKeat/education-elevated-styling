import React, { useState } from 'react'
import { Accordion, Container } from 'react-bootstrap'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'

function TeacherAccordian({ teacher }) {

    return (
        <div>
            <Accordion.Item eventKey={teacher.id}>
                <Accordion.Header>{teacher.first_name} {teacher.last_name}</Accordion.Header>
        
                <AccordionBody>
                    {teacher.bio}
                    {teacher && teacher.programs.length > 0 && 
                    <Container>
                    <h6>Programs:</h6>
                    <ul>
                        {teacher.programs.map((tp) => <li key={tp.id}>{tp.name}</li>)}
                    </ul>
                    </Container>}
                </AccordionBody> 
            </Accordion.Item>
        </div>
    )
}

export default TeacherAccordian