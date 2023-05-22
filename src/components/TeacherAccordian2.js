import { Accordion } from 'react-bootstrap'

function TeacherAccordian({ teacher }) {

    return (
        <div>
            <Accordion.Item>
                <Accordion.Header>{teacher.first_name} {teacher.last_name}</Accordion.Header>
                <Accordion.Body>
                    {teacher.bio}
                </Accordion.Body>
            </Accordion.Item>
        </div>
    )
}

export default TeacherAccordian