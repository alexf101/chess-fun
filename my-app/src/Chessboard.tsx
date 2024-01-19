import React from "react";
import styled from "styled-components";

class Chessboard extends React.Component {
    render() {
        return <BoardWrapper>
            {makeWhiteRow()}
            {makeBlackRow()}
            {makeWhiteRow()}
            {makeBlackRow()}
            {makeWhiteRow()}
            {makeBlackRow()}
            {makeWhiteRow()}
            {makeBlackRow()}
        </BoardWrapper>
    }
}

function makeBlackRow() {
    let tiles = [];
    for (let i = 0; i < 4; i++) {
        tiles.push(<BlackTile />)
        tiles.push(<WhiteTile />)
    }
    return <RowContainer>{tiles}</RowContainer>;
}

function makeWhiteRow() {
    let tiles = [];
    for (let i = 0; i < 4; i++) {
        tiles.push(<WhiteTile />)
        tiles.push(<BlackTile />)
    }
    return <RowContainer>{tiles}</RowContainer>;
}

const BoardWrapper = styled.div``;

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
const WhiteTile = styled.div`
    width: 80px;
    height: 80px;
    background-color: white;
`;
const BlackTile = styled.div`
    width: 80px;
    height: 80px;
    background-color: black;
`;


export default Chessboard;