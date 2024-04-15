import { Form, Button } from "react-bootstrap";

function ContactForm(){
    return(
        <Form>
            <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Label className="mb-0">Name</Form.Label>
                <Form.Control className="bg-form-custom" type="text"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput2">
                <Form.Label className="mb-0">Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput3">
                <Form.Label className="mb-0">Subject</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="mb-3" contextMenu="textArea1">
                <Form.Label className="mb-0">Message</Form.Label>
                <Form.Control as='textarea' rows={3}/>
            </Form.Group>
            <Button className="bg-button-custom px-5 btn-dark" type='submit'>Submit</Button>
        </Form>
    )
}

export default ContactForm;