import React, { ReactElement } from "react";
import styled from "styled-components";

class Chessboard extends React.Component {
    game: Game;
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.game = new Game();
    }
    render() {
        return <BoardWrapper>
            <GameDisplay game={this.game}></GameDisplay>
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

const A = 1;
const B = 2;
const C = 3;
const D = 4;
const E = 5;
const F = 6;
const G = 7;
const H = 8;


enum Color {
    WHITE, BLACK
}

class Game {
    whitePieces: ChessPiece[];
    blackPieces: ChessPiece[];
    constructor() {
        this.whitePieces = [
            new King(D, 1),
            new Queen(E, 1),
            new Pawn(A, 2),
            new Pawn(B, 2),
            new Pawn(C, 2),
            new Pawn(D, 2),
            new Pawn(E, 2),
            new Pawn(F, 2),
            new Pawn(G, 2),
            new Pawn(H, 2),
        ];
        this.blackPieces = [
            new King(D, 8),
            new Queen(E, 8),
            new Pawn(A, 7),
            new Pawn(B, 7),
            new Pawn(C, 7),
            new Pawn(D, 7),
            new Pawn(E, 7),
            new Pawn(F, 7),
            new Pawn(G, 7),
            new Pawn(H, 7),
        ];
    }
}

const GameDisplay = ({ game }: { game: Game }) => {
    return <div>{game.whitePieces.map(piece => <GameDisplayComponent rows={piece.x} cols={piece.y} color={"lightgrey"}>
        <CenteredPiece>
            {piece.render(Color.WHITE)}
        </CenteredPiece>
    </GameDisplayComponent>)}
        {game.blackPieces.map(piece => <GameDisplayComponent rows={piece.x} cols={piece.y} color={"lightgrey"}>
            <CenteredPiece>
                {piece.render(Color.BLACK)}
            </CenteredPiece>
        </GameDisplayComponent>)}
    </div>
}

const GameDisplayComponent = styled.div< { rows: number, cols: number }>`
    position: absolute;
    left: ${props => (props.rows - 1) * 80}px;
    top: ${props => (props.cols - 1) * 80}px;
`;

abstract class ChessPiece {
    x: number;
    y: number;
    abstract render(color: Color): ReactElement;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class Pawn extends ChessPiece {
    render(color: Color) {
        if (color === Color.WHITE) {
            // TODO: Render actual images here
            return <div style={{ color: "#cccccc" }}>P</div>;
        } else {
            // TODO: Render actual images here
            return <div style={{ color: "#555555" }}>P</div>;
        }
    }
}
class King extends ChessPiece {
    render(color: Color) {
        if (color === Color.WHITE) {
            // TODO: Render actual images here
            return <div style={{ color: "#cccccc" }}>K</div>;
        } else {
            // TODO: Render actual images here
            return <div style={{ color: "#555555" }}>K</div>;
        }
    }
}
class Queen extends ChessPiece {
    render(color: Color) {
        if (color === Color.WHITE) {
            // TODO: Render actual images here
            return <div style={{ color: "#cccccc" }}>Q</div>;
        } else {
            // TODO: Render actual images here
            return <div style={{ color: "#555555" }}>Q</div>;
        }
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
        tiles.push(<WhiteTile></WhiteTile>)
        tiles.push(<BlackTile />)
    }
    return <RowContainer>{tiles}</RowContainer>;
}

const CenteredPiece = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 40px;
    width: 80px;
    height: 80px;
`;

const BoardWrapper = styled.div`
    position: relative;
`;

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