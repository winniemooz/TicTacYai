<script>
	let isRegistering = false;
	let username = '';
	let email = '';
	let password = '';

	const handleSubmit = () => {
		if (isRegistering) {
			// Handle registration logic
			console.log('Registering...');
		} else {
			// Handle login logic
			console.log('Logging in...');
		}
	};
</script>

<div class="flex h-dvh w-full items-center justify-center bg-mongoose-50 font-kanit">
	<div class="flex w-[80%] gap-2 rounded">
		<div class="flex-1">
			<div class="flex">
				<button
					class={`flex-1 justify-center rounded-t p-4 text-center ${isRegistering ? 'bg-mongoose-200 text-xl font-bold' : 'bg-mongoose-100'}`}
					on:click={() => {
						isRegistering = true;
					}}>Register</button
				>
				<button
					class={`flex-1 justify-center rounded-t p-4 text-center ${!isRegistering ? 'bg-mongoose-200 text-xl font-bold' : 'bg-mongoose-100'}`}
					on:click={() => {
						isRegistering = false;
					}}>Login</button
				>
			</div>
			<div class="bg-mongoose-200 flex">
				<div class="flex h-[40vh] w-full items-center px-10">
					<div class="flex p-10">
						<img src="/favicon.png" alt="" />
					</div>
					<div class="w-full flex-col px-10">
						{#if isRegistering}
							<div class="form-container">
                                <!-- <label for="username" class="block text-mongoose-800 py-2 text-lg">Username</label> -->
								<input
									class="mb-4 w-full rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-mongoose-300"
									type="text"
									bind:value={username}
									placeholder="Username"
								/>
								<input
									class="mb-4 w-full rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-mongoose-300"
									type="email"
									bind:value={email}
									placeholder="Email"
								/>
								<input
									class="mb-8 w-full rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-mongoose-300"
									type="password"
									bind:value={password}
									placeholder="Password"
								/>
							</div>
							<button
								on:click={handleSubmit}
								class="bg-mongoose-800 rounded-full px-8 py-2 text-white transition hover:bg-mongoose-600 active:bg-mongoose-900">Register</button
							>
						{:else}
							<div class="form-container">
                                <div class="flex">
                                    <input
                                        class="mb-4 w-full rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-mongoose-300"
                                        type="text"
                                        bind:value={username}
                                        placeholder="Username"
                                    />
                                </div>
								<input
									class="mb-8 w-full rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-mongoose-300"
									type="password"
									bind:value={password}
									placeholder="Password"
								/>
							</div>
							<button
								on:click={handleSubmit}
								class="bg-mongoose-800 rounded-full px-8 py-2 text-white transition hover:bg-mongoose-600 active:bg-mongoose-900">Login</button
							>
						{/if}
					</div>
				</div>
			</div>
		</div>
		<div class="bg-mongoose-400 flex-1 rounded"></div>
	</div>
</div>
