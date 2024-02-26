<body
	class="body flex min-h-dvh w-full justify-between bg-mongoose-100 font-fredoka text-mongoose-700"
>
	<div class="playerO flex flex-col items-start gap-10 p-16 text-5xl">
		<h2>Player1</h2>
		<div class="flex flex-row items-center justify-center gap-12">
			<div class="card bg-gray-500">
				<!-- Player 1 card content -->
				<!-- Add your content here -->
			</div>
			<div class="player font-bold text-[#7F8CAE]">O</div>
		</div>
	</div>

	<div class="game-table flex flex-col items-center gap-10 p-10 text-5xl">
		<div class="timer flex flex-row gap-8">
			<img src="/Clock.png" alt="clock" />
			00
		</div>
		<table class="tic-tac-toe">
			<!-- Big 3x3 table -->
			<tr>
				<td class="tic-tac-toe-cell">
					<!-- Small 3x3 table for each cell -->
					<table class="small-tic-tac-toe t1">
						<tr>
							<td class="small-tic-tac-toe-cell" id="t1-r1-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t1-r1-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t1-r1-c3"></td>
						</tr>
						<tr>
							<td class="small-tic-tac-toe-cell" id="t1-r2-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t1-r2-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t1-r2-c3"></td>
						</tr>
						<tr>
							<td class="small-tic-tac-toe-cell" id="t1-r3-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t1-r3-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t1-r3-c3"></td>
						</tr>
					</table>
				</td>
				<td class="tic-tac-toe-cell">
					<!-- Small 3x3 table for each cell -->
					<table class="small-tic-tac-toe t2">
						<tr>
							<td class="small-tic-tac-toe-cell" id="t2-r1-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t2-r1-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t2-r1-c3"></td>
						</tr>
						<tr>
							<td class="small-tic-tac-toe-cell" id="t2-r2-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t2-r2-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t2-r2-c3"></td>
						</tr>
						<tr>
							<td class="small-tic-tac-toe-cell" id="t2-r3-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t2-r3-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t2-r3-c3"></td>
						</tr>
					</table>
				</td>
				<td class="tic-tac-toe-cell">
					<!-- Small 3x3 table for each cell -->
					<table class="small-tic-tac-toe t3">
						<tr>
							<td class="small-tic-tac-toe-cell" id="t3-r1-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t3-r1-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t3-r1-c3"></td>
						</tr>
						<tr>
							<td class="small-tic-tac-toe-cell" id="t3-r2-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t3-r2-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t3-r2-c3"></td>
						</tr>
						<tr>
							<td class="small-tic-tac-toe-cell" id="t3-r3-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t3-r3-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t3-r3-c3"></td>
						</tr>
					</table>
				</td>

				<!-- Repeat for other cells -->
			</tr>
			<!-- Repeat for other rows -->
			<tr>
				<td class="tic-tac-toe-cell">
					<!-- Small 3x3 table for each cell -->
					<table class="small-tic-tac-toe t4">
						<tr>
							<td class="small-tic-tac-toe-cell" id="t4-r1-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t4-r1-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t4-r1-c3"></td>
						</tr>
						<tr>
							<td class="small-tic-tac-toe-cell" id="t4-r2-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t4-r2-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t4-r2-c3"></td>
						</tr>
						<tr>
							<td class="small-tic-tac-toe-cell" id="t4-r3-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t4-r3-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t4-r3-c3"></td>
						</tr>
					</table>
				</td>
				<td class="tic-tac-toe-cell">
					<!-- Small 3x3 table for each cell -->
					<table class="small-tic-tac-toe t5">
						<tr>
							<td class="small-tic-tac-toe-cell" id="t5-r1-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t5-r1-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t5-r1-c3"></td>
						</tr>
						<tr>
							<td class="small-tic-tac-toe-cell" id="t5-r2-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t5-r2-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t5-r2-c3"></td>
						</tr>
						<tr>
							<td class="small-tic-tac-toe-cell" id="t5-r3-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t5-r3-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t5-r3-c3"></td>
						</tr>
					</table>
				</td>
				<td class="tic-tac-toe-cell">
					<!-- Small 3x3 table for each cell -->
					<table class="small-tic-tac-toe t6">
						<tr>
							<td class="small-tic-tac-toe-cell" id="t6-r1-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t6-r1-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t6-r1-c3"></td>
						</tr>
						<tr>
							<td class="small-tic-tac-toe-cell" id="t6-r2-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t6-r2-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t6-r2-c3"></td>
						</tr>
						<tr>
							<td class="small-tic-tac-toe-cell" id="t6-r3-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t6-r3-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t6-r3-c3"></td>
						</tr>
					</table>
				</td>
				<!-- Repeat for other cells -->
			</tr>
			<tr>
				<td class="tic-tac-toe-cell">
					<!-- Small 3x3 table for each cell -->
					<table class="small-tic-tac-toe t7">
						<tr>
							<td class="small-tic-tac-toe-cell" id="t7-r1-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t7-r1-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t7-r1-c3"></td>
						</tr>
						<tr>
							<td class="small-tic-tac-toe-cell" id="t7-r2-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t7-r2-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t7-r2-c3"></td>
						</tr>
						<tr>
							<td class="small-tic-tac-toe-cell" id="t7-r3-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t7-r3-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t7-r3-c3"></td>
						</tr>
					</table>
				</td>
				<td class="tic-tac-toe-cell">
					<!-- Small 3x3 table for each cell -->
					<table class="small-tic-tac-toe t8">
						<tr>
							<td class="small-tic-tac-toe-cell" id="t8-r1-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t8-r1-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t8-r1-c3"></td>
						</tr>
						<tr>
							<td class="small-tic-tac-toe-cell" id="t8-r2-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t8-r2-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t8-r2-c3"></td>
						</tr>
						<tr>
							<td class="small-tic-tac-toe-cell" id="t8-r3-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t8-r3-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t8-r3-c3"></td>
						</tr>
					</table>
				</td>
				<td class="tic-tac-toe-cell">
					<!-- Small 3x3 table for each cell -->
					<table class="small-tic-tac-toe t9">
						<tr>
							<td class="small-tic-tac-toe-cell" id="t9-r1-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t9-r1-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t9-r1-c3"></td>
						</tr>
						<tr>
							<td class="small-tic-tac-toe-cell" id="t9-r2-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t9-r2-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t9-r2-c3"></td>
						</tr>
						<tr>
							<td class="small-tic-tac-toe-cell" id="t9-r3-c1"></td>
							<td class="small-tic-tac-toe-cell" id="t9-r3-c2"></td>
							<td class="small-tic-tac-toe-cell" id="t9-r3-c3"></td>
						</tr>
					</table>
				</td>
				<!-- Repeat for other cells -->
			</tr>
		</table>
		<div id="code">000000</div>
	</div>

	<div class="playerX flex flex-col items-end gap-10 p-16 text-5xl">
		<h2>Player2</h2>
		<div class="flex flex-row items-center justify-center gap-12">
			<div class="player font-bold text-[#D18A8A]">X</div>
			<div class="card bg-gray-500">
				<!-- Player 2 card content -->
				<!-- Add your content here -->
			</div>
		</div>
	</div>
	<img src="/Arrow.png" alt="Arrow" id="arrow" />
</body>

<style>
	#arrow {
		visibility: hidden;
		position: absolute;
		top: 81%;
	}
	.playerX {
		width: 20%;
	}
	.playerO {
		width: 20%;
	}
	.card {
		width: 200px;
		height: 200px;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
	}

	.tic-tac-toe {
		border-collapse: collapse;
		margin-top: 20px;
		background-color: #ffedda;
		outline: 10px solid #73593b;
		border-radius: 50px;
	}

	.tic-tac-toe-cell {
		width: 200px;
		height: 200px;
		text-align: center;
		cursor: pointer;
	}

	.small-tic-tac-toe {
		border-collapse: collapse;
		width: 100%;
		height: 100%;
		outline: 2px solid #73593b;
	}
	.t1 {
		border-top-left-radius: 50px;
	}
	.t3 {
		border-top-right-radius: 50px;
	}
	.t7 {
		border-bottom-left-radius: 50px;
	}
	.t9 {
		border-bottom-right-radius: 50px;
	}
	.small-tic-tac-toe-cell {
		width: 33.33%;
		height: 33.33%;
		outline: 1px solid #d3c9c0;
		text-align: center;
		cursor: pointer;
	}
	#t1-r1-c1 {
		border-top-left-radius: 50px;
	}
	#t3-r1-c3 {
		border-top-right-radius: 50px;
	}
	#t7-r3-c1 {
		border-bottom-left-radius: 50px;
	}
	#t9-r3-c3 {
		border-bottom-right-radius: 50px;
	}
	.player {
		font-size: 200px;
	}
	@media (max-width: 500px) {
		.body {
			margin: auto;
			padding: 0;
			justify-content: center;
		}
		.tic-tac-toe-cell {
			width: 100px;
			height: 100px;
			text-align: center;
			cursor: pointer;
		}
		.playerO {
			position: absolute;
			align-items: center;
			padding: 0;
			top: 70%;
			left: 15%;
		}
		.playerX {
			position: absolute;
			align-items: center;
			padding: 0;
			top: 70%;
			right: 15%;
		}
		.t1 {
			border-top-left-radius: 20px;
		}
		.t3 {
			border-top-right-radius: 20px;
		}
		.t7 {
			border-bottom-left-radius: 20px;
		}
		.t9 {
			border-bottom-right-radius: 20px;
		}
		#t1-r1-c1 {
			border-top-left-radius: 20px;
		}
		#t3-r1-c3 {
			border-top-right-radius: 20px;
		}
		#t7-r3-c1 {
			border-bottom-left-radius: 20px;
		}
		#t9-r3-c3 {
			border-bottom-right-radius: 20px;
		}
		.tic-tac-toe {
			border-radius: 20px;
			outline: 5px solid #73593b;
		}
		h2 {
			font-size: 1.2rem;
		}
		.card {
			width: 100px;
			height: 100px;
		}
		.player {
			position: absolute;
			top: 100%;
			font-size: 2rem;
		}
		#arrow {
			visibility: visible;
		}
	}
</style>
