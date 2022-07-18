import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"

const MainPage = () => {
    const [addedName, setAddedName] = useState('');
    const [list, setList] = useState([]);

    const handleChange = (e) => {
        setAddedName(e);
    }

    return (
        <Container>
            <Row>
                <Col className="center">
                    <label>Name: </label>
                    <input type="text"  onChange={ (e) => handleChange(e.target.value)} value={addedName}></input>
                </Col>
            </Row>
        </Container>
    )
}

export default MainPage