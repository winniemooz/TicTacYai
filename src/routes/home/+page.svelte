<script>
	let slideIndex = 1;

	const slideTitle = {
		1: 'Rules',
		2: 'Characters',
		3: 'Special Skills'
	};

	const changeSlide = (value) => {
		slideIndex = Math.min(Math.max(slideIndex + value, 1), 3);
	};
</script>

<div class="flex h-screen flex-col items-center justify-center">
  <div class="w-[500px] h-[500px] rounded shadow border">
    <p class="bg-mongoose-800 text-white p-5 w-full">
      {slideTitle[slideIndex]}
    <p>
    <div class="flex">
      <button
        on:click={() => changeSlide(-1)}
        class="cursor-pointer rounded-md bg-white p-2 text-xl text-mongoose-800">❮</button
      >
      {#if slideIndex == 1}
        <!-- Card 1: Rules -->
        <div class="w-full">
          <div class="h-250 flex flex-col items-center justify-center p-5">
            <p class="text-center">
              เกมนี้จะมีรูปแบบการเล่นที่ใกล้เคียงกับเกม Tic-Tac-Toe
              ปกติแต่จะมีตารางแบ่งเป็นตารางย่อยเล็กๆ 9 ตาราง ตารางละ 3x3 โดยเราจะสุ่มช่องที่มี Items
              พิเศษอยู่ โดยผู้เล่นจะเลือกลง X/O ในช่องไหนก็ได้ เมื่อผู้เล่นชนะในช่องเล็กแล้วจะกลายเป็น
              X/O ในช่องใหญ่ เมื่อผู้เล่นชนะในช่องที่มี skill พิเศษผู้เล่นก็สามารถใช้ Skill
              ในรอบถัดไปได้ แต่ผู้เล่นจะไม่สามารถเก็บสิทธินี้ไปใช้ในรอบต่อต่อไปได้
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
                เมื่อผู้เล่นชนะในช่องใหญ่มีโอกาส 50% ในการได้สุ่ม Skill หากผู้เล่นยังไม่ได้รับ Skill เลย
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
              <p class="w-2/3">Timer ลดเวลาการเล่นใน turn ต่อไปของฝ่ายตรงข้ามเหลือแค่ 3 วินาที</p>
            </div>
            <div class="mx-auto mb-8 flex w-full items-center justify-start gap-8">
              <img src="no-stopping.png" alt="Skill 3" class="h-50 w-auto max-w-full rounded-lg" />
              <p class="w-2/3">Stop ห้ามผู้เล่นฝ่ายตรงเล่นใน turn ต่อไป</p>
            </div>
          </div>
        </div>
      {/if}
      <button
        on:click={() => changeSlide(1)}
        class="cursor-pointer rounded-md bg-white p-2 text-xl text-mongoose-800">❯</button
      >
    </div>
  </div>
</div>
