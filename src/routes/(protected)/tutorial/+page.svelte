<div class="body flex min-h-dvh w-full flex-col bg-mongoose-100 font-fredoka">
	<div class="flex flex-col items-center justify-center">
		<img src="/logo2.png" alt="" class=" mb-12 mt-12 w-[90%] sm:w-[50%]" />
		<div class="rule mx-[11%] grid grid-cols-2 gap-20 lg:grid-cols-4">
			<div class="flex flex-col items-center text-center">
				<img src="/tutorial-1.png" alt="" class="w-[90%]" />
				<p class="my-4 text-xl font-medium text-mongoose-800">
					This game is similar to the normal Tic-Tac-Toe game, but there will be a grid divided into
					9 small 3x3 grids.
				</p>
			</div>
			<div class="flex flex-col items-center text-center">
				<img src="/tutorial-2.png" alt="" class="w-[90%]" />
				<p class="my-4 text-xl font-medium text-mongoose-800">
					Game will have special skills and it will randomly place on the large grids, which player
					can place X/O on any cell. When player win in a small grids, it becomes X/O in a large
					grid.
				</p>
			</div>
			<div class="flex flex-col items-center text-center">
				<img src="/tutorial-3.png" alt="" class="w-[90%]" />
				<p class="my-4 text-xl font-medium text-mongoose-800">
					When player win in small grids with a special skills, it will active in next round!
				</p>
			</div>
			<div class="flex flex-col items-center text-center">
				<img src="/tutorial-4.png" alt="" class="w-[90%]" />
				<p class="my-4 text-xl font-medium text-mongoose-800">
					The game ends when one player wins the big grid.
				</p>
			</div>
		</div>
	</div>
	<div class="char-skills mx-[10%] my-[4vh] flex flex-col items-center lg:flex-row">
		<div class="flex flex-col items-center lg:w-[60%]">
			<p class="mb-4 flex text-center text-5xl font-bold tracking-wide text-mongoose-700">
				CHARACTER
			</p>
			<div class="char mx-4 grid h-[50vh] grid-cols-3 gap-8 rounded-xl bg-mongoose-200 px-6">
				<div class="flex flex-col mt-10 items-center text-center">
					<img src="/piglet.png" alt="" class=" w-[80%]" />
					<p class=" mt-4 font-black text-4xl text-[#FF6A6A]">PIGLET</p>
					<p class=" text-lg font-medium text-mongoose-800">
						When the player win in the small grid, get 50% chance of getting random skill if player
						didn’t received skill yet in game.
					</p>
				</div>
				<div class="flex flex-col mt-10 items-center text-center">
					<img src="/Kitty.png" alt="" class=" w-[80%]"/>
					<p class=" mt-4 font-black text-4xl text-[#4B79B0]">KITTY</p>
					<p class=" text-lg font-medium text-mongoose-800">
						When the opponent wins 2 small grid, the player will receive a random Skill 1 time.(once
						per game)
					</p>
				</div>
				<div class="flex flex-col mt-10 items-center text-center">
					<img src="/Puppy.png" alt="" class=" w-[80%]"/>
					<p class=" mt-4 font-black text-4xl text-[#FA8836]">PUPPY</p>
					<p class=" text-lg font-medium text-mongoose-800">
						Player have a 25% chance to steal a Skill when their opponent gains a Skill. (once per
						game)
					</p>
				</div>
			</div>
		</div>
		<div class="flex flex-col items-center lg:w-[40%]">
			<p class="w-100 mb-4 flex text-center text-5xl font-bold tracking-wide text-mongoose-700">
				SPECIAL SKILLS
			</p>
			<div class="skill mx-4 grid h-[50vh] grid-cols-2 gap-8 rounded-xl bg-mongoose-200 px-6">
				<div class="flex flex-col sm:mt-16 items-center text-center">
					<img src="/star.png" alt="" class="w-[60%]" />
					<p class=" mt-4 font-black text-4xl text-[#FF9900]">STAR</p>
					<p class=" text-lg font-medium text-mongoose-800">
						Players can place there symbol on top of their opponent's symbol.
					</p>
				</div>
				<div class="flex flex-col sm:mt-16 items-center text-center">
					<img src="/no-stopping.png" alt="" class="w-[55%]" />
					<p class=" mt-4 font-black text-4xl text-[#CB3D3D]">SKIP</p>
					<p class=" text-lg font-medium text-mongoose-800">
						Your opponent is not allowed to play in next turn.
					</p>
				</div>
			</div>
		</div>
	</div>
	<a href="/home"
		><button
			class="fixed bottom-0 left-0 m-3 h-[4vh] w-[20%] rounded-full bg-mongoose-900 text-xl font-medium text-white sm:m-6 sm:h-[8vh] sm:w-[10%] sm:text-3xl"
			>Back</button
		>
	</a>
</div>

<style>
	@media (max-width: 640px) {
		.rule {
			display: flex;
			flex-direction: column;
		}
		.char {
			display: flex;
			flex-direction: column;
			align-items: center;
			height: 100%;
			padding: 1rem;
			margin: 0;
			width: 280px;
		}
		.skill {
			display: flex;
			flex-direction: column;
			align-items: center;
			height: 100%;
			padding: 1rem;
			margin: 0;
			width: 280px;
		}
		.char-skills {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 4rem;
		}
	}
</style>
