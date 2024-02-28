<script>
	import { authHandlers } from '../../stores/authStore';

	function logout() {
		// Handle logout logic here
		alert('Logout functionality not implemented in this example.');
	}
</script>

<div class="bg-f4f4f4 flex h-screen flex-col items-center bg-[#f2ece2] font-fredoka">
	<div
		class="flex h-full w-full flex-col items-center justify-start rounded-lg bg-[#f2ece2] text-center shadow-md"
	>
		<img class="w-[100%] py-10 sm:w-[65%] lg:w-[50%]" src="/logo2.png" alt="" srcset="" />
		<div class="middle-content flex w-[50%] flex-col gap-3 lg:w-[35%]">
			<button
				class="button mx-auto h-16 w-full rounded-full bg-mongoose-200 text-4xl font-medium text-mongoose-800 sm:h-20"
				on:click={() => (window.location.href = 'quickplay.html')}>Quick Play</button
			>
			<button
				class="button mx-auto h-16 w-full rounded-full bg-mongoose-200 text-4xl font-medium text-mongoose-800 sm:h-20"
				on:click={() => (window.location.href = 'joinwithcode.html')}>Join with Code</button
			>
			<a href="/lobby"
				><button
					class="button mx-auto h-16 w-full rounded-full bg-mongoose-200 text-4xl font-medium text-mongoose-800 sm:h-20"
				>
					Create Room</button
				></a
			>
			<a href="/">
				<button
					class="button logout mx-auto h-16 w-full rounded-full bg-[#5a4134] px-4 text-4xl font-medium text-[#f2ece2] sm:h-20"
					on:click={authHandlers.logout}>Logout</button
				></a
			>
		</div>
		<div class="fixed bottom-0 flex w-full flex-row justify-between">
			<a href="/profile"
				><button
					class="button lek mx-auto flex items-center gap-2 rounded-full bg-[#5a4134] px-6 py-4 text-2xl text-[#f2ece2]"
				>
					<img src="/human-icon.png" alt="" />View Profile</button
				>
			</a>
			<a
				href="/tutorial
			"
			>
				<button
					class="button lek mx-auto flex items-center gap-2 rounded-full bg-[#5a4134] px-6 py-4 text-2xl text-[#f2ece2]"
					><img src="/tutorial-icon.png" alt="" />Tutorial</button
				></a
			>
			<!-- on:click={logout} -->
		</div>
	</div>
</div>

<style>
	.button {
		margin: 5px;
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

	@media (max-width: 640px) {
		.button {
			margin: 0;
			padding: 10px 10px;
			font-size: 1.3rem;
		}
		.button.lek {
			font-size: 1.1rem;
			width: 150px;
		}
	}
</style>
