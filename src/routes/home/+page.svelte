<script>
	function logout() {
		// Handle logout logic here
		alert('Logout functionality not implemented in this example.');
	}
</script>

<div class="bg-f4f4f4 flex h-screen flex-col items-center bg-[#f2ece2]">
	<div
		id="container"
		class="flex h-full w-full flex-col justify-between rounded-lg bg-white text-center shadow-md"
	>
		<img
			id="logo"
			src="https://cdn.discordapp.com/attachments/903554014766043148/1209178798508089434/Slide_16_9_-_3_1.png?ex=65e5fa83&is=65d38583&hm=bb4eca3970501a5e1d2bd2e0bf4bf5b81e167627efcbad0a01c0e0f526d25c20&"
			alt=""
			srcset=""
		/>
		<div id="middle-content">
			<div class="button-container-main w-30 mx-auto flex flex-col justify-center gap-10">
				<button
					class="button mx-auto h-12 rounded-full bg-[#5a4134] text-[#f2ece2]"
					on:click={() => (window.location.href = 'quickplay.html')}>Quick Play</button
				>
				<button
					class="button mx-auto h-12 rounded-full bg-[#5a4134] text-[#f2ece2]"
					on:click={() => (window.location.href = 'joinwithcode.html')}>Join with Code</button
				>
				<button
					class="button mx-auto h-12 rounded-full bg-[#5a4134] text-[#f2ece2]"
					on:click={() => (window.location.href = 'createroom.html')}>Create Room</button
				>
			</div>
		</div>

		<div class="button-container-bottom">
			<button
				class="button left h-10 rounded-full bg-[#5a4134] px-4 text-[#f2ece2]"
				on:click={() => alert('View Profile functionality not implemented')}>View Profile</button
			>
			<button
				class="button left rounded-full bg-[#5a4134] px-4 text-[#f2ece2]"
				on:click={() => alert('Tutorial functionality not implemented')}>Tutorial</button
			>
			<button class="button right rounded-full bg-[#5a4134] px-4 text-[#f2ece2]" 
			><a href="/">Logout</a></button
			>
			<!-- on:click={logout} -->
			
		</div>
	</div>
</div>

<style>
	#logo {
		position: absolute;
		top: -7%;
		left: 24%;
		width: 50%;
	}
	#container {
		padding-top: 45vh;
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
		width: 30%;
		height: 100%;
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 10px;
	}

	.button {
		padding: 10px 20px;
		margin: 5px;
		font-size: 16px;
		height: 50px;
		cursor: pointer;
		border: none;
		border-radius: 30px;
		color: white;
		text-align: center;
	}
	.button.left {
		height: 40px;
		float: left;
	}

	.button.right {
		height: 40px;
		float: right;
	}
	img {
		width: 100%;
	}
</style>
