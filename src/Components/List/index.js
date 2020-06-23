import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { selectPoliza,deletePoliza } from '../../actions'
import style from '../styles/style.css'

const List = (props) => {  

    const nameRef = React.createRef()
    const authorRef = React.createRef()

    const handlerSummint = (event) => {
        event.preventDefault()
        let book = {//...props.bookSelected,
            name: nameRef.current.value
            ,mount: authorRef.current.value
        }
        props.selectPoliza(book)
    }

    const handlerDelete = (event) => {
        event.preventDefault()
        let book2 = {//...props.bookSelected,
            name: nameRef.current.value
            ,mount: authorRef.current.value
        }
        props.deletePoliza(book2)
    }
    
    return(
        <Container className = "seccion_margen">
            nombre
            <input ref={nameRef}></input>
            Monto
            <input ref={authorRef}></input>
            <button className = "colorboton" onClick={handlerSummint}>Crear..</button>
            <button className = "colorboton" onClick={handlerDelete}>Borrar..</button>
            {/* {
                props.list.map((book, index) => {
                    return(
                        <Row key={index}>
                            <Col sm="6">
                                {book.name}
                            </Col>
                            <input ref={inputRef}></input>
                            <Col sm="6">
                                <Button onClick={ (book) => handlerSummint(book) }>Detalles</Button>
                            </Col>
                        </Row>
                    )
                })
            } */}
        </Container>
    )
}

const creacionDeProps = (state) => {
    return {
        list: state.list
    }
}

export default connect(creacionDeProps, {selectPoliza,deletePoliza})(List)