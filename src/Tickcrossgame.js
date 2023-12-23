import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
// import { Button } from "react-bootstrap";

const winnerArray = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function Tickcrossgame() {
	const [turn, setTurn] = useState("X");
	const [currentPlayer, setCurrentPlayer] = useState([]);

	const newPlayer = (turnno) => {
		console.log("New PLayer is Working");
		setTurn(turn === "X" ? "O" : "X");
		const player = [...currentPlayer];
		player[turnno] = turn;
		setCurrentPlayer(player);
	};

	const reStartGame = () => {
		console.log("Its is working");
		window.location.reload();
	};
	return (
		<>
			<div>
				<Header />
			</div>
			<div className="gamebody">
				<h1>First Player is "X" Second Player is "O"</h1>
				<div>
					<button
						className="gamebutton"
						onClick={() => {
							newPlayer(0);
						}}
					>
						{currentPlayer[0] || "Player"}
					</button>
					<button
						className="gamebutton"
						onClick={() => {
							newPlayer(1);
						}}
					>
						{currentPlayer[1] || "Player"}
					</button>
					<button
						className="gamebutton"
						onClick={() => {
							newPlayer(2);
						}}
					>
						{currentPlayer[2] || "Player"}
					</button>
					<br />
					<button
						className="gamebutton"
						onClick={() => {
							newPlayer(3);
						}}
					>
						{currentPlayer[3] || "Player"}
					</button>
					<button
						className="gamebutton"
						onClick={() => {
							newPlayer(4);
						}}
					>
						{currentPlayer[4] || "Player"}
					</button>
					<button
						className="gamebutton"
						onClick={() => {
							newPlayer(5);
						}}
					>
						{currentPlayer[5] || "Player"}
					</button>
					<br />
					<button
						className="gamebutton"
						onClick={() => {
							newPlayer(6);
						}}
					>
						{currentPlayer[6] || "Player"}
					</button>
					<button
						className="gamebutton"
						onClick={() => {
							newPlayer(7);
						}}
					>
						{currentPlayer[7] || "Player"}
					</button>
					<button
						className="gamebutton"
						onClick={() => {
							newPlayer(8);
						}}
					>
						{currentPlayer[8] || "Player"}
					</button>
				</div>
				<br />
				<br />

				<div>
					<button
						className="startbutton"
						onClick={() => {
							reStartGame();
						}}
					>
						{" "}
						New Game
					</button>
				</div>
			</div>
		</>
	);
}

export default Tickcrossgame;
