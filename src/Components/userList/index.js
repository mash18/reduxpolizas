import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import {connect} from 'react-redux'


class UserList extends React.Component{

    // componentDidMount(){
    //     this.props.getUsers()
    // }

    render(){
        return(
            <Container>
                {
                    this.props.polizaSelected.map((user,index) => {
                        return <Row key={index}>
                            <Col>
                                Name: { user.name }
                            </Col>
                            <Col>
                                Monto: { user.mount }
                            </Col>
                        </Row>
                    })
                }
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        polizaSelected: state.polizaSelected
    }
}

export default connect(mapStateToProps)(UserList)