import { useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import '../styles/MainPage.css'

const MainPage = () => {
    const [addedName, setAddedName] = useState('');
    const [list, setList] = useState([]);
    const [randomName, setRandomName] = useState('');


    // Binding text input to variable
    const handleChange = (e) => {
        setAddedName(e);
    }

    // Binding text variable to array and resetting text input
    const handleClick = () => {
        setList([...list, addedName]);
        setAddedName('');
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setList([...list, addedName]);
            setAddedName('');
        }
    }

    // Removing selected element from array
    const handleRemove = (index) => {
        setList([
            ...list.slice(0, index),
            ...list.slice(index + 1, list.length
            )]);
    }

    const getRandomName = () => {
        console.log(list);
        setRandomName(list[Math.floor(Math.random() * list.length)]);
        console.log(randomName);
    }
    return (
        <Container className="mainCon">
            <Row>
                <Col className="center">
                    <label>Name:</label>
                    <input type="text" onChange={(e) => handleChange(e.target.value)} onKeyDown={handleKeyDown} value={addedName}></input>
                    <Button onClick={handleClick}>Submit</Button>
                </Col>
            </Row>
            <Row>
                {
                    list.map((name, index) => {
                        // return <h1 key={index} onClick={() => handleRemove(index)} >{name} - {index}</h1>
                        return (
                            <Col key={index} className="nameItem">
                                <h1  >{name} - {index}</h1>
                                <div className="nameDeleteBtn">
                                    <Button onClick={() => handleRemove(index)}>Delete Name</Button>
                                </div>
                            </Col>
                        )

                    })
                }
            </Row>
            <Row>
                <Col>
                    <Button onClick={getRandomName}>Get a Random Name</Button>
                </Col>
                {
                    randomName ? <h1>{randomName}</h1> : null
                }
            </Row>
        </Container>
    )
}

export default MainPage