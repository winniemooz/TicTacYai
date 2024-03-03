<div
	class="flex min-h-dvh w-full flex-col items-center justify-between bg-mongoose-100 font-fredoka text-mongoose-700"
>

	<h1 class="code mt-10 text-8xl font-bold tracking-widest">000000</h1>
	<div class="player flex flex-row justify-around">
		<div class="player-x flex flex-col items-center gap-10 text-5xl">
			Player-X
			<div class="card-container flex flex-row items-center justify-center gap-4">
				<div
					class="card flex flex-col items-center justify-center border-8 border-[#D89874] bg-[#F3C9AA] text-[#D89874]"
					id="puppy"
				>
					<img src="/Puppy.png" alt="" class="h-auto w-48" />
					PUPPY
				</div>
				<p class="text-mb text-[#D89874] font-copyduck">PUPPY</p>
				<div
					class="card flex flex-col items-center justify-center border-8 border-[#98AAC0] bg-[#C8DAF0] text-[#98AAC0]"
				>
					<img src="/Kitty.png" alt="" class="h-auto w-48" />
					KITTY
				</div>
				<p class="text-mb text-[#98AAC0]">KITTY</p>
				<div
					class="card flex flex-col items-center justify-center border-8 border-[#B78B8B] bg-[#EECCCC] text-[#B78B8B]"
				>
					<img src="/piglet.png" alt="" class="h-auto w-48" />
					PIGLET
				</div>
				<p class="text-mb text-[#B78B8B]">PIGLET</p>
			</div>
		</div>
		<div class="player-o gap flex flex-col items-center gap-10 text-5xl">
			Player-O
			<div
				class="card-container flex flex-row justify-center gap-4
			"
			>
				<div
					class="card flex flex-col items-center justify-center border-8 border-[#D89874] bg-[#F3C9AA] text-[#D89874]"
				>
					<img src="/Puppy.png" alt="" class="h-auto w-48" />
					PUPPY
				</div>
				<p class="text-mb text-[#D89874]">PUPPY</p>
				<div
					class="card flex flex-col items-center justify-center border-8 border-[#98AAC0] bg-[#C8DAF0] text-[#98AAC0]"
				>
					<img src="/Kitty.png" alt="" class="h-auto w-48" />
					KITTY
				</div>
				<p class="text-mb text-[#98AAC0]">KITTY</p>
				<div
					class="card flex flex-col items-center justify-center border-8 border-[#B78B8B] bg-[#EECCCC] text-[#B78B8B]"
				>
					<img src="/piglet.png" alt="" class="h-auto w-48" />
					PIGLET
				</div>
				<p class="text-mb text-[#B78B8B]">PIGLET</p>
			</div>
		</div>
	</div>
	<p class="text-4xl text-mongoose-500">Select your character</p>
	<button class="readyBtn rounded-full bg-mongoose-700 px-12 py-4 text-3xl text-mongoose-100"
		>READY</button
	>
	<div class="button-container-bottom flex w-full flex-row justify-start">
		<a href="/home"
			><button
				class="button left-0 m-5 rounded-full bg-[#5a4134] px-12 py-3 text-4xl text-mongoose-100"
				>Back</button
			></a
		>
	</div>
</div>

<style>
	.player {
		width: 100%;
	}
	.card {
		width: 35%;
		height: 400px;
		border-radius: 40px;
	}
	.text-mb {
		font-size: 0px;
	}
	@media (max-width: 1280px) {
		.player {
			justify-content: space-around;
		}
		.player-x,
		.player-o {
			font-size: 2rem;
			flex-direction: column;
		}
		.card {
			width: 25%;
			height: 260px;
			border-radius: 20px;
			font-size: 1.5rem;
			padding: 5px;
		}
	}
	@media (max-width: 640px) {
		.code {
			font-size: 3rem;
		}
		.card-container {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 10px;
			margin: 0;
			padding: 0;
			width: 100%;
		}
		.player-x,
		.player-o {
			font-size: 1.5rem;
			flex-direction: column;
			width: 45%;
		}
		.player {
			justify-content: center;
			gap: 0;
		}
		.card {
			width: 110px;
			height: 110px;
			border-radius: 20px;
			font-size: 0px;
			padding: 2px;
		}
		img {
			width: 80%;
		}
		.text-mb {
			font-size: 1.5rem;
		}
		.button,
		.readyBtn {
			font-size: 1.25rem;
			padding-top: 0.25rem;
			padding-bottom: 0.25rem;
			padding-left: 2rem;
			padding-right: 2rem;
		}
		p {
			font-size: 1.5rem;
		}
	}
</style>
