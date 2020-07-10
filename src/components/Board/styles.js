import styled from 'styled-components';

export const Container = styled.div`
    /* display flex aqui permite que as lista fiquem na horizontal*/
    display: flex;
    padding: 30px 0;
    /* Altura 100% da altura do documento - 80px do Header */
    height: calc(100% - 80px);
`;