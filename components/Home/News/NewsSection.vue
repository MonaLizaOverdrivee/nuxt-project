<template>
  <div class="mt-2 md:mt-10 bg-gray- py-2">
    <div class="container">
      <div
        class="flex sm:grid grid-rows-3 grid-cols-4 gap-3 overflow-x-scroll sm:overflow-x-auto"
      >
        <article
          v-for="itm in 6"
          :key="itm"
          class="px-5 border-l-4 w-80 sm:w-auto flex-shrink-0 flex-grow-1 h-40 lg:h-56 2xl:h-72 flex flex-col hover:border-primary cursor-pointer transition duration-300"
        >
          <div><span class="text-2xl font-medium">Some title</span></div>
          <div class="flex-auto">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              nesciunt tempore, impedit ex reprehenderit omnis aut, accusantium
              ratione nemo quia quibusdam magnam ipsam! Tenetur voluptatem
              deleniti eius magni, sit perspiciatis!
            </p>
          </div>
          <div>
            <b
              >{{ new Date().getDate() }}.{{ new Date().getMonth() + 1 }}.{{
                new Date().getFullYear()
              }}</b
            >
          </div>
        </article>
        <div
          class="col-start-1 col-span-3 row-start-2 row-span-2 flex flex-col justify-end p-5 text-white"
          style="
            background-image: url(https://www.aumsu.ru/images/news/04.2021/11.jpg);
            background-size: cover;
          "
        >
          <div><span class="text-4xl font-medium">Some title</span></div>
          <div>
            <p class="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              nesciunt tempore, impedit ex reprehenderit omnis aut, accusantium
              ratione nemo quia quibusdam magnam ipsam! Tenetur voluptatem
              deleniti eius magni, sit perspiciatis!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
