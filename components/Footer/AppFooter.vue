<template>
  <div class="mt-10 p-5 bg-blue-100 bg-access">
    <div class="container flex flex-col">
      <div class="flex flex-col md:flex-row">
        <div>
          <h3 class="font-medium">Дополнительные ссылки</h3>
          <ul>
            <li v-for="itm in resurceLink" :key="itm" class="py-1">
              <nuxt-link
                :to="itm.url"
                class="text-primary underline text-access"
                >{{ itm.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="md:ml-5">
          <h3 class="font-medium">Ресурсы</h3>
          <ul>
            <li v-for="itm in additionalLink" :key="itm" class="py-1">
              <nuxt-link
                :to="itm.url"
                class="text-primary underline text-access"
                >{{ itm.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="border-t border-primary py-2 font-medium flex justify-between border-access mt-5"
      >
        <div>
          Copyright <font-awesome-icon :icon="['far', 'copyright']" /> 2021 ГМУ
          имени Ф.Ф. Ушакова
        </div>
        <div>
          <span class="underline cursor-pointer"
            >Обратная связь с разработчиком</span
          >
        </div>
        <div>
          <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
          <font-awesome-icon :icon="['fab', 'vk']" size="2x" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    resurceLink: [
      {
        title:
          'Вестник государственного морского университета им. Ф.Ф. Ушакова',
        url: '/',
      },
      {
        title: 'Научный сборник "Эксплуатация морского транспорта"',
        url: '/',
      },
      {
        title: 'Южный центр организации учебных практик',
        url: '/',
      },
      {
        title: 'Противодействие корупции',
        url: '/',
      },
    ],
    additionalLink: [
      {
        title: 'Министерство транспорта российской федерации',
        url: '',
      },
      {
        title: 'Министерство науки и высшего образования',
        url: '',
      },
      {
        title: 'Федеральное агенство морского и речного транспорта',
        url: '',
      },
      {
        title: 'Федеральное центр информационно-образовательных ресурсов',
        url: '',
      },
      {
        title: 'Единая коллекция цифровых образовательных ресурсов',
        url: '',
      },
      {
        title: 'Единое окно доступа к информационным ресурсам',
        url: '',
      },
      {
        title: 'Российское образование',
        url: '',
      },
    ],
  }),
}
</script>

<style></style>
