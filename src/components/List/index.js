import React from 'react';
import { Container } from './styles';
//import dos icones 
import { MdAdd } from 'react-icons/md';


export default function List() {
    return(
        <Container>
            <header>
                <h2>Terefas</h2>
                <button type = "button">
                    <MdAdd size= {24} color ="#FFF" />
                </button>
            </header>
        </Container>
    );
}