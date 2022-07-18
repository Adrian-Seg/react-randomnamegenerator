import { useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

const MainPage = () => {
    const [addedName, setAddedName] = useState('');
    const [list, setList] = useState([]);

    // Binding text input to variable
    const handleChange = (e) => {
        setAddedName(e);
    }
    const logArray = (e) => {
        console.log(list);
    }
    // Binding text variable to array and resetting text input
    const handleClick = () => {
        setList([...list, addedName]);
        setAddedName('');
    }
    // Removing selected element from array
    const handleRemove = (index) => {
        setList([
        ...list.slice(0, index),
        ...list.slice(index + 1, list.length
        )]);
    }

    return (
        <Container>
            <Row>
                <Col className="center">
                    <label>Name: </label>
                    <input type="text"  onChange={ (e) => handleChange(e.target.value)} value={addedName}></input>
                    <Button onClick={handleClick}>Submit</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                {
                    list.map((name, index) => {
                        return <h1 key={index} onClick={() => handleRemove(index)} >{name} - {index}</h1>
                    })
                }                
                </Col>
            </Row>
            <Button onClick={logArray}>Log array</Button>
        </Container>
    )
}

export default MainPage