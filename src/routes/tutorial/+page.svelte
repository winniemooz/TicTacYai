<div class="body flex min-h-dvh w-full flex-col bg-mongoose-100 font-fredoka"> 
    <div class="flex flex-col items-center justify-center">
        <img src="/logo2.png" alt="" class=" w-[50%] mt-12 mb-12">
        <div class="grid grid-cols-4 gap-20 mx-[11%]">
            <div class="flex flex-col text-center items-center">
                <img src="/tutorial-1.png" alt="" class="w-[90%]">
                <p class="my-4 text-mongoose-800 font-medium text-xl">This game is similar to the normal Tic-Tac-Toe game, but there will be a grid divided into 9 small 3x3 grids.</p>
            </div>
            <div class="flex flex-col text-center items-center">
                <img src="/tutorial-2.png" alt="" class="w-[90%]">
                <p class="my-4 text-mongoose-800 font-medium text-xl">Game will have special skills and it will randomly place on the large grids, which player can place X/O on any cell. When player win in a small grids, it becomes X/O in a large grid.</p>
            </div>
            <div class="flex flex-col text-center items-center">
                <img src="/tutorial-3.png" alt="" class="w-[90%]">
                <p class="my-4 text-mongoose-800 font-medium text-xl">When player win in small grids with a special skills, it will active in next round!</p>
            </div>
            <div class="flex flex-col text-center items-center">
                <img src="/tutorial-4.png" alt="" class="w-[90%]">
                <p class="my-4 text-mongoose-800 font-medium text-xl">The game ends when one player wins the big grid.</p>
            </div>
        </div>
    </div>
    <div class="flex mx-[10%] my-[4vh]">
        <div class="flex flex-col items-center w-[60%]">
          <p class="flex text-center text-5xl text-mongoose-700 font-bold tracking-wide mb-4">CHARACTER</p>
            <div class="grid grid-cols-3 gap-8 rounded-xl bg-mongoose-200 h-[45vh] mx-4 px-6">
                <div class="flex flex-col text-center justify-center items-center">
                    <img src="/piglet.png" alt="">
                    <p class=" font-copyduck text-4xl mt-4 text-[#FF6A6A]">PIGLET</p>
                    <p class=" text-mongoose-800 font-medium text-lg">When the player win in the small grid, get 50% chance of getting random skill if player didn’t received skill yet in game.</p>
                </div>
                <div class="flex flex-col text-center justify-center items-center">
                    <img src="/Kitty.png" alt="">
                    <p class=" font-copyduck text-4xl mt-4 text-[#4B79B0]">KITTY</p>
                    <p class=" text-mongoose-800 font-medium text-lg">When the opponent wins 2 small grid, the player will receive a random Skill 1 time.(once per game)</p>
                </div>
                <div class="flex flex-col text-center justify-center items-center">
                    <img src="/Puppy.png" alt="">
                    <p class=" font-copyduck text-4xl mt-4 text-[#FA8836]">PUPPY</p>
                    <p class=" text-mongoose-800 font-medium text-lg">Player have a 25% chance to steal a Skill when their opponent gains a Skill. (once per game)</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center w-[40%]">
            <p class="flex text-center text-5xl text-mongoose-700 font-bold tracking-wide mb-4">SPECIAL SKILLS</p>
              <div class="grid grid-cols-3 gap-8 rounded-xl bg-mongoose-200 h-[45vh] mx-4 px-6">
                  <div class="flex flex-col text-center justify-center items-center">
                      <img src="/star.png" alt="" class="w-[60%]">
                      <p class=" font-copyduck text-4xl mt-4 text-[#FF9900]">STAR</p>
                      <p class=" text-mongoose-800 font-medium text-lg">Players can place there symbol on top of their opponent's symbol.</p>
                  </div>
                  <div class="flex flex-col text-center justify-center items-center">
                      <img src="/no-stopping.png" alt="" class="w-[55%]">
                      <p class=" font-copyduck text-4xl mt-4 text-[#CB3D3D]">SKIP</p>
                      <p class=" text-mongoose-800 font-medium text-lg">Your opponent is not allowed to play in next turn.</p>
                  </div>
                  <div class="flex flex-col text-center justify-center items-center">
                      <img src="/Timer.png" alt="" class="w-[60%]">
                      <p class=" font-copyduck text-4xl mt-4 text-[#513D6C]">TIMER</p>
                      <p class=" text-mongoose-800 font-medium text-lg">The next turn your opponent play time reduces to 3 seconds.</p>
                  </div>
              </div>
          </div>
    </div>
    <button class="fixed bottom-0 left-0 m-6 w-[10%] h-[8vh] rounded-full bg-mongoose-900 text-white text-3xl font-medium">Back</button>
</div>