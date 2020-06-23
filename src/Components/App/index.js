import React from 'react'
//import ReactDom from 'react-dom'
import { Container,Button } from 'react-bootstrap'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import List from '../List'
import Details from '../Details'
import UserList from '../userList'
import style from '../styles/style.css'

class App extends React.Component{

    // onBookSelected(book){
    //     this.setState({bookSelected: book})
    // }

    render(){
        return(
            <Container>
                { <BrowserRouter>
                    <div>
                        <Link to="/"><Button>Crea Poliza</Button></Link>
                        <Link to="/users"><Button>Lista Completa</Button></Link>
                        <Route path="/" exact component={List}></Route>
                        <Route path="/" exact component={Details}></Route>
                        <Route path="/users" exact component={UserList}></Route>  
                    </div>
                </BrowserRouter> }
            </Container>
        )
    }
}

export default App