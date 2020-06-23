import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

class Info extends React.Component{

    render(){
        const con_filtro2 = this.props.polizaSelected[this.props.polizaSelected.length-1].name
        const con_filtro = this.props.polizaSelected.filter(poliza => poliza.name.includes(con_filtro2));
        return(
            <Container>ultima poliza creada:
                {
                        con_filtro.map((user,index) => {
                    
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

export default connect(mapStateToProps)(Info)