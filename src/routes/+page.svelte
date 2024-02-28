<script>
	import { authHandlers, authStore } from '../stores/authStore';
	import { slide } from "svelte/transition";

	let register = false;
	let username = '';
	let email = '';
	let password = '';
	let confirmpassword = '';
	let slideIndex = 1;
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	let emailErrorMsg = '';
	let passwordErrorMsg = '';
	let confirmpasswordMsg = '';
	let usernameErrorMsg = '';

	const slideTitle = {
		1: 'Rules',
		2: 'Characters',
		3: 'Special Skills'
	};

	const changeSlide = (value) => {
		if (slideIndex + value > 3) {
			slideIndex = 1;
		} else if (slideIndex + value < 1) {
			slideIndex = 3;
		} else {
			slideIndex += value;
		}
	};

	const resetForm = () => {
		username = '';
		email = '';
		password = '';
		confirmpassword = '';
		emailErrorMsg = '';
		passwordErrorMsg = '';
		confirmpasswordMsg = '';
		usernameErrorMsg = '';
	};

	async function handleSubmit() {
		resetForm();

		if(username.length > 20){
			usernameErrorMsg = "Username required less than 20 characters."
		}else if(username.length < 6){
			usernameErrorMsg = "Username required at least 6 characters."
		}
		if (!email.match(validRegex)) {
			emailErrorMsg = "Invalid Email.";
		}
		if (password.length < 8) {
			passwordErrorMsg = "Password required at least 8 characters.";
		}
		if (password != confirmpassword){
			confirmpasswordMsg = "Password doesn't match."
		}else {
			confirmpasswordMsg = "Please confirm your password."
		}


		if (!email || !password || (register && !confirmpassword)) {
			return;
		}

		if (register && password === confirmpassword) {
			try {
				await authHandlers.signup(email, password);
				password = null;
			} catch (err) {
				console.log(err);
			}
		} else {
			try {
				await authHandlers.login(email, password);
			} catch (err) {
				console.log(err);
			}
		}
		if ($authStore.currentUser) {
			window.location.href = '/home';
		}

	}
</script>

<div
	class="body flex min-h-dvh w-full flex-col items-center justify-center bg-mongoose-300 font-fredoka"
>
	<div class="flex w-full justify-center pb-5">
		<div class="w-3/4 md:w-1/2">
			<img src="/logo.png" alt="" />
		</div>
	</div>

	<div class="flex w-[80%] flex-col gap-4 rounded md:flex-row">
		<div class="flex-1">
			<div class="flex">
				<button
					class={`flex-1 justify-center rounded-t-xl p-4 text-center text-2xl text-mongoose-900 transition ${register ? 'bg-mongoose-200 text-3xl font-bold' : 'bg-mongoose-100'}`}
					on:click={() => {
						resetForm(),
						register = true;
					}}>Register</button
				>
				<button
					class={`flex-1 justify-center rounded-t-xl p-4 text-center text-2xl text-mongoose-900 transition ${!register ? 'bg-mongoose-200 text-3xl font-bold' : 'bg-mongoose-100'}`}
					on:click={() => {
						resetForm(),
						register = false;
					}}>Login</button
				>
			</div>
			<div class="flex rounded-b-xl bg-mongoose-200">
				<div class="forms-container flex h-[40vh] w-full items-center px-10">
					<div class="w-full flex-col px-0 md:px-10">
						{#if register}
							<div class="form-container  space-y-4">
								<!-- <label for="username" class="block text-mongoose-800 py-2 text-lg">Username</label> -->
								<div>
									<input
										class="w-full rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-mongoose-300"
										type="text"
										bind:value={username}
										placeholder="Username" required
									/>
									{#if usernameErrorMsg}
									<p transition:slide={{ duration: 100 }} class="text-red-500 ml-5" >
										{usernameErrorMsg}
									</p>
									{/if}
								</div>
								<div>
									<input
										class="w-full rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-mongoose-300"
										type="email"
										bind:value={email}
										placeholder="Email" required
									/>
									{#if emailErrorMsg}
									<p transition:slide={{ duration: 100 }} class="text-red-500 ml-5" >
										{emailErrorMsg}
									</p>
									{/if}
								</div>
								<div>
									<input
										class="w-full rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-mongoose-300"
										type="password"
										bind:value={password}
										placeholder="Password" required
									/>
									{#if passwordErrorMsg}
									<p transition:slide={{ duration: 100 }} class="text-red-500 ml-5" >
										{passwordErrorMsg}
									</p>
									{/if}
								</div>
								<div>
									<input
										class="w-full rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-mongoose-300"
										type="password"
										bind:value={confirmpassword}
										placeholder="Confirm Password" required
									/>
									{#if confirmpasswordMsg}
									<p transition:slide={{ duration: 100 }} class="text-red-500 ml-5" >
										{confirmpasswordMsg}
									</p>
									{/if}
								</div>
							</div>
							<button
								on:click={handleSubmit}
								class="mt-8 rounded-full bg-mongoose-800 px-8 py-2 text-white transition hover:bg-mongoose-600 active:bg-mongoose-900"
								>Register</button
							>
						{:else}
							<div class="form-container space-y-4">
								<div>
									<input
										class="w-full rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-mongoose-300"
										type="text"
										bind:value={email}
										placeholder="Email" required
									/>
									{#if emailErrorMsg}
									<p transition:slide={{ duration: 100 }} class="text-red-500 ml-5" >
										{emailErrorMsg}
									</p>
									{/if}
								</div>
								<div>
									<input
										class="w-full rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-mongoose-300"
										type="password"
										bind:value={password}
										placeholder="Password" required
									/>
									{#if passwordErrorMsg}
										<p transition:slide={{ duration: 100 }} class="text-red-500 ml-5" >
											{passwordErrorMsg}
										</p>
									{/if}
								</div>
							</div>
							<button
								on:click={handleSubmit}
								class="mt-8 rounded-full bg-mongoose-800 px-8 py-2 text-white transition hover:bg-mongoose-600 active:bg-mongoose-900"
								>Login</button
							>
						{/if}
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-1 flex-col overflow-y-auto rounded-xl bg-mongoose-100">
			<p class="w-full rounded-t-xl bg-mongoose-500 p-5 text-center text-3xl font-bold text-white">
				{slideTitle[slideIndex]}
			</p>
			<div class="flex flex-1">
				<div class="arrow flex h-auto items-center justify-center p-1 md:h-full">
					<button
						on:click={() => changeSlide(-1)}
						class=" ml-4 cursor-pointer rounded-md p-2 text-xl text-mongoose-500 transition hover:text-mongoose-700 active:text-mongoose-400"
						>❮</button
					>
				</div>
				<div class="flex-1 overflow-y-auto text-sm font-medium text-mongoose-600 no-scrollbar">
					{#if slideIndex == 1}
						<!-- Card 1: Rules -->
						<div class="w-full">
							<div class="rules over-y-auto flex h-10 flex-col items-center justify-start p-5">
								<img src="/Frame 36.png" alt="Rules" id="rule" />
								<img src="/rule mobile.png" alt="rulemb" id="rule-mb" />
							</div>
						</div>
					{/if}

					{#if slideIndex == 2}
						<!-- Card 2: Characters -->
						<div class="h-full w-full">
							<div class=" flex h-full flex-row items-center justify-center py-5 text-center">
								<div class="characters flex gap-6">
									<div class="mb-8 flex w-full flex-col items-center justify-start gap-3">
										<img
											src="/Piglet.png"
											alt="Character 1"
											class="h-30 w-auto max-w-full rounded-lg"
										/>
										<h3 class="text-3xl text-red-400 font-bold">PIGLET</h3>
										<p class="">
											When the player win in the small grid, there’s a 50% chance of getting a
											random skill if the player didn’t received the skill yet in the game.
										</p>
									</div>
									<div class="mb-8 flex w-full flex-col items-center justify-start gap-3">
										<img
											src="/Kitty.png"
											alt="Character 2"
											class="h-30 w-auto max-w-full rounded-lg"
										/>
										<h3 class="text-3xl text-blue-400 font-bold">KITTY</h3>
										<p class="">
											When the opponent wins 2 small grid, the player will receive a random Skill 1
											time.<br />(once per game)
										</p>
									</div>
									<div class=" mb-8 flex w-full flex-col items-center justify-start gap-3">
										<img
											src="/Puppy.png"
											alt="Character 3"
											class="h-30 w-auto max-w-full rounded-lg"
										/>
										<h3 class="text-3xl text-orange-400 font-bold">PUPPY</h3>
										<p class="">
											Player have a 25% chance to steal a Skill when their opponent gains a Skill.<br
											/>(once per game)
										</p>
									</div>
								</div>
							</div>
						</div>
					{/if}

					{#if slideIndex == 3}
						<!-- Card 3: Special Skills -->
						<div class="h-full w-full">
							<div class="flex h-full flex-row items-center justify-center p-5 text-center">
								<div class="skills flex gap-3">
									<div class="mx-auto mb-8 flex w-full flex-col items-center gap-8">
										<img
											src="star.png"
											alt="Skill 1"
											class="h-50 aspect-square w-24 max-w-full rounded-lg"
										/>
										<p class="">
											Players can place there symbol on top of their opponent's symbol.
										</p>
									</div>
									<div class="mx-auto mb-8 flex w-full flex-col items-center gap-8">
										<img
											src="Timer.png"
											alt="Skill 2"
											class="h-50 aspect-square w-24 max-w-full rounded-lg"
										/>
										<p class="">
											When the opponent wins 2 small grid, the player will receive a random Skill 1
											time.(once per game)
										</p>
									</div>
									<div class="mx-auto mb-8 flex w-full flex-col items-center gap-8">
										<img
											src="no-stopping.png"
											alt="Skill 3"
											class="h-50 aspect-square w-24 max-w-full rounded-lg"
										/>
										<p class="">The next turn your opponent play time reduces to 3 seconds.</p>
									</div>
								</div>
							</div>
						</div>
					{/if}
				</div>
				<div class="arrow flex h-auto items-center justify-center p-1 md:h-full">
					<button
						on:click={() => changeSlide(1)}
						class="mr-4 cursor-pointer rounded-md p-2 text-xl text-mongoose-500 transition hover:text-mongoose-700 active:text-mongoose-400"
						>❯</button
					>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#rule-mb {
		position: fixed;
		visibility: hidden;
	}
	@media (max-width: 500px) {
		.body {
			justify-content: flex-start;
			padding-top: 5vh;
			padding-bottom: 5vh;
		}
		.rules {
			height: auto;
		}
		#rule {
			overflow-y: hidden;
			position: absolute;
			visibility: hidden;
		}
		#rule-mb {
			width: 100%;
			height: auto;
			position: relative;
			visibility: visible;
		}
		.forms-container {
			padding-top: 2rem;
			padding-bottom: 2rem;
			height: auto;
		}
		.arrow {
			align-items: start;
		}
		.characters {
			flex-direction: column;
		}
		.skills {
			flex-direction: column;
		}
	}
</style>
