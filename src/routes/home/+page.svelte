<script>
	import { authHandlers } from "../../stores/authStore";

	function logout() {
		// Handle logout logic here
		alert('Logout functionality not implemented in this example.');
	}
</script>

<div class="bg-f4f4f4 flex h-screen flex-col items-center bg-[#f2ece2] font-fredoka">
	<div
		id="container"
		class="flex h-full w-full flex-col justify-between rounded-lg bg-white text-center shadow-md"
	>
		<img id="logo" src="/logo2.png" alt="" srcset="" />
		<div id="middle-content">
			<div class="button-container-main mx-auto flex flex-col justify-center gap-3">
				<button
					class="button mx-auto h-20 rounded-full bg-mongoose-200 text-4xl font-medium text-mongoose-800"
					on:click={() => (window.location.href = 'quickplay.html')}>Quick Play</button
				>
				<button
					class="button mx-auto h-20 rounded-full bg-mongoose-200 text-4xl font-medium text-mongoose-800"
					on:click={() => (window.location.href = 'joinwithcode.html')}>Join with Code</button
				>
				<a href="/lobby"
					><button
						class="button mx-auto h-20 rounded-full bg-mongoose-200 text-4xl font-medium text-mongoose-800"
					>
						Create Room</button
					></a
				>
				<a href="/">
					<button
						class="button logout mx-auto h-20 rounded-full bg-[#5a4134] px-4 text-4xl font-medium text-[#f2ece2]" on:click={authHandlers.logout}
						>Logout</button
					></a
				>
			</div>
		</div>

		<div class="button-container-bottom flex justify-between">
			<button
				class="button lek mx-auto flex items-center gap-2 rounded-full bg-[#5a4134] px-6 py-4 text-2xl text-[#f2ece2]"
			>
				<img src="/human-icon.png" alt="" />View Profile</button
			>
			<button
				class="button lek mx-auto flex items-center gap-2 rounded-full bg-[#5a4134] px-6 py-4 text-2xl text-[#f2ece2]"
				><img src="/tutorial-icon.png" alt="" />Tutorial</button
			>

			<!-- on:click={logout} -->
		</div>
	</div>
</div>

<style>
	#logo {
		position: absolute;
		top: 4%;
		left: 20%;
		width: 60%;
	}
	#container {
		padding-top: 40vh;
		background-color: #f2ece2;
		border-radius: 5px;
		text-align: center;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	}

	.button-container-main {
		width: 40%;
		height: 100%;
	}

	.button {
		width: 100%;
		margin: 15px;
		cursor: pointer;
		border: none;
		text-align: center;
	}
	.button.lek {
		width: 250px;
		margin: 15px;
		cursor: pointer;
		border: none;
		text-align: center;
		justify-content: center;
	}

	@media (max-width: 500px) {
		#logo {
			top: 10%;
			left: 0%;
			width: 100%;
		}
		.button {
			margin: 0;
			padding: 10px 10px;
			font-size: 1.5rem;
		}
		#container {
			padding-top: 30vh;
		}
		.button-container-main {
			width: 70%;
			height: 100%;
		}
		.button-container-bottom {
			margin: 10px;
			gap: 20px;
		}
		.button.lek {
			font-size: 1.1rem;
		}
	}
</style>
