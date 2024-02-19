<script>
	import { authHandlers } from '../stores/authStore';

	let register = false;
	// let username = '';
	let email = '';
	let password = '';
	let confirmpassword = '';
	let slideIndex = 1;

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

	async function handleSubmit() {
		if (!email || !password || (register && !confirmpassword)) {
			return;
		}

		if (register && password === confirmpassword) {
			try {
				await authHandlers.signup(email, password);
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
	}
</script>

<div class="flex flex-col h-dvh w-full items-center justify-center bg-mongoose-300 font-fredoka">
	<div class="w-full flex justify-center pb-5">
		<div class="w-3/4 md:w-1/2">
			<img src="/logo.png" alt="">
		</div>
	</div>

	<div class="flex flex-col md:flex-row w-[80%] gap-2 rounded">
		<div class="flex-1">
			<div class="flex">
				<button
					class={`flex-1 justify-center rounded-t-xl p-4 text-center text-2xl text-mongoose-900 transition ${register ? 'bg-mongoose-200 text-xl font-bold' : 'bg-mongoose-100'}`}
					on:click={() => {
						register = true;
					}}>Register</button
				>
				<button
					class={`flex-1 justify-center rounded-t-xl p-4 text-center text-2xl text-mongoose-900 transition ${!register ? 'bg-mongoose-200 text-xl font-bold' : 'bg-mongoose-100'}`}
					on:click={() => {
						register = false;
					}}>Login</button
				>
			</div>
			<div class="flex bg-mongoose-200 rounded-b-xl">
				<div class="flex h-[40vh] w-full items-center px-10">
					<div class="flex p-10">
						<img src="/favicon.png" alt="" />
					</div>
					<div class="w-full flex-col px-10">
						{#if register}
							<div class="form-container">
								<!-- <label for="username" class="block text-mongoose-800 py-2 text-lg">Username</label> -->
								<!-- <input
									class="mb-4 w-full rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-mongoose-300"
									type="text"
									bind:value={username}
									placeholder="Username"
								/> -->
								<input
									class="mb-4 w-full rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-mongoose-300"
									type="email"
									bind:value={email}
									placeholder="Email"
								/>
								<input
									class="mb-4 w-full rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-mongoose-300"
									type="password"
									bind:value={password}
									placeholder="Password"
								/>
								<input
									class="mb-8 w-full rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-mongoose-300"
									type="password"
									bind:value={confirmpassword}
									placeholder="Confirm Password"
								/>
							</div>
							<button
								on:click={handleSubmit}
								class="rounded-full bg-mongoose-800 px-8 py-2 text-white transition hover:bg-mongoose-600 active:bg-mongoose-900"
								>Register</button
							>
						{:else}
							<div class="form-container">
								<div class="flex">
									<input
										class="mb-4 w-full rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-mongoose-300"
										type="text"
										bind:value={email}
										placeholder="Email"
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
								class="rounded-full bg-mongoose-800 px-8 py-2 text-white transition hover:bg-mongoose-600 active:bg-mongoose-900"
								>Login</button
							>
						{/if}
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-1 flex-col rounded-xl bg-mongoose-400">
			<p class="w-full rounded-t-xl bg-mongoose-800 p-5 text-white font-bold text-center text-2xl">{slideTitle[slideIndex]}</p>
			<div class="flex flex-1">
				<div class="flex h-full items-center justify-center p-1">
					<button
						on:click={() => changeSlide(-1)}
						class="cursor-pointer rounded-md  transition bg-white hover:bg-slate-100 active:bg-slate-200 p-2 ml-4 text-xl text-mongoose-800">❮</button
					>
				</div>
				<div class="flex-1 overflow-y-auto text-white">
					{#if slideIndex == 1}
						<!-- Card 1: Rules -->
						<div class="w-full">
							<div class="h-250 flex flex-col items-center justify-center p-5">
								<p class="">
									เกมนี้จะมีรูปแบบการเล่นที่ใกล้เคียงกับเกม Tic-Tac-Toe
									ปกติแต่จะมีตารางแบ่งเป็นตารางย่อยเล็กๆ 9 ตาราง ตารางละ 3x3 โดยเราจะสุ่มช่องที่มี
									Items พิเศษอยู่ โดยผู้เล่นจะเลือกลง X/O ในช่องไหนก็ได้
									เมื่อผู้เล่นชนะในช่องเล็กแล้วจะกลายเป็น X/O ในช่องใหญ่ เมื่อผู้เล่นชนะในช่องที่มี
									skill พิเศษผู้เล่นก็สามารถใช้ Skill ในรอบถัดไปได้
									แต่ผู้เล่นจะไม่สามารถเก็บสิทธินี้ไปใช้ในรอบต่อต่อไปได้
									เกมจะจบลงต่อเมื่อผู้เล่นฝ่ายใดฝ่ายหนึ่งชนะในช่องใหญ่
								</p>
							</div>
						</div>
					{/if}

					{#if slideIndex == 2}
						<!-- Card 2: Characters -->
						<div class="w-full">
							<div class="flex flex-col items-center p-5">
								<div class="mx-auto mb-8 flex w-full items-center justify-start gap-8">
									<img src="pig.png" alt="Character 1" class="h-50 w-auto max-w-full rounded-lg" />
									<p class="w-2/3">
										เมื่อผู้เล่นชนะในช่องใหญ่มีโอกาส 50% ในการได้สุ่ม Skill หากผู้เล่นยังไม่ได้รับ
										Skill เลย
									</p>
								</div>
								<div class="mx-auto mb-8 flex w-full items-center justify-start gap-8">
									<img src="cat.png" alt="Character 2" class="h-50 w-auto max-w-full rounded-lg" />
									<p class="w-2/3">เมื่อฝ่ายตรงข้ามชนะ 2 ช่องใหญ่ผู้เล่นจะได้สุ่ม Skill 1 ครั้ง</p>
								</div>
								<div class="mx-auto mb-8 flex w-full items-center justify-start gap-8">
									<img src="dog.png" alt="Character 3" class="h-50 w-auto max-w-full rounded-lg" />
									<p class="w-2/3">
										ผู้เล่นมีโอกาส 25% ในการขโมย Skill เมื่อฝั่งตรงข้ามได้รับ Skill (ครั้งเดียว)
									</p>
								</div>
							</div>
						</div>
					{/if}

					{#if slideIndex == 3}
						<!-- Card 3: Special Skills -->
						<div class="w-full">
							<div class="flex flex-col items-center p-5">
								<div class="mx-auto mb-8 flex w-full items-center justify-start gap-8">
									<img src="star.png" alt="Skill 1" class="h-50 w-auto max-w-full rounded-lg" />
									<p class="w-2/3">Star ผู้เล่นสามารถวางทับหมากของฝ่ายตรงข้ามได้</p>
								</div>
								<div class="mx-auto mb-8 flex w-full items-center justify-start gap-8">
									<img src="timer.png" alt="Skill 2" class="h-50 w-auto max-w-full rounded-lg" />
									<p class="w-2/3">
										Timer ลดเวลาการเล่นใน turn ต่อไปของฝ่ายตรงข้ามเหลือแค่ 3 วินาที
									</p>
								</div>
								<div class="mx-auto mb-8 flex w-full items-center justify-start gap-8">
									<img
										src="no-stopping.png"
										alt="Skill 3"
										class="h-50 w-auto max-w-full rounded-lg"
									/>
									<p class="w-2/3">Stop ห้ามผู้เล่นฝ่ายตรงเล่นใน turn ต่อไป</p>
								</div>
							</div>
						</div>
					{/if}
				</div>
				<div class="flex h-full items-center justify-center p-1">
					<button
						on:click={() => changeSlide(1)}
						class="cursor-pointer rounded-md transition bg-white hover:bg-slate-100 active:bg-slate-200 p-2 mr-4 text-xl text-mongoose-800">❯</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
