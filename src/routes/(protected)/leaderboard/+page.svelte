<script>
	import { onSnapshot, collection } from 'firebase/firestore';
	import { firestore } from '$lib/firebase/firebase.client';

	let users = [];
	onSnapshot(collection(firestore, 'UserProfile'), (snapShot) => {
		users = [];
		snapShot.forEach((doc) => {
			users.push(doc.data());
		});
		users.sort((a, b) => b.win - a.win);
		users = users.slice(0, 10);
	});
</script>

<div class="body flex min-h-dvh w-full flex-col bg-mongoose-100 font-fredoka">
	<div class=" flex flex-col items-center justify-start gap-5 sm:gap-0 lg:my-0">
		<img src="/logo2.png" alt="" class=" my-6 sm:w-[65%] lg:mt-0 lg:w-[50%]" />
		<p class="pb-5 text-4xl font-semibold text-mongoose-700 sm:text-5xl lg:text-6xl">
			Leaderboards
		</p>
		<table class="w-[80%] table-fixed text-sm sm:text-xl lg:text-2xl mb-20">
			<thead class=" bg-mongoose-800 text-mongoose-100">
				<tr>
					<th class="p-3 lg:p-5">RANK</th>
					<th>NAME</th>
					<th>TOTAL WIN</th>
				</tr>
			</thead>
			<tbody class="bg-mongoose-200 text-mongoose-800">
				{#each users as user, index}
					<tr>
						<th class="p-2 lg:p-3">{index + 1}</th>
						<th>{user.username}</th>
						<th>{user.win}</th>
					</tr>
				{/each}
				{#if users.length == 0}
					<tr>
						<td class="p-2 text-center lg:p-3" colspan="3">Loading...</td>
					</tr>
				{/if}
			</tbody>
		</table>
	</div>
	<a href="/home"
		><button
			class="fixed bottom-0 left-0 m-6 h-[5vh] w-[30%] rounded-full bg-mongoose-900 text-2xl font-medium text-white sm:h-[8vh] sm:text-3xl lg:w-[10%]"
			>Back</button
		>
	</a>
</div>
