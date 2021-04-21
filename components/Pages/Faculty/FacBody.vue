<template>
  <div class="container">
    <div class="flex">
      <div class="shadow-xl p-5 flex flex-col flex-shrink-0">
        <img
          class="h-60 w-60 object-cover object-top rounded-full"
          src="https://www.aumsu.ru/images/sovet/Ignatenko.jpg"
          alt=""
        />
        <div class="text-center font-bold"><span>Декан</span></div>
        <div class="text-center"><span>Игнатенко Александр</span></div>
        <div class="text-center font-bold mt-2.5"><span>Заместители</span></div>
        <div class="text-center"><span>Каурова Елена Александровна</span></div>
        <div class="text-center"><span>Остюк Андрей Васильевич</span></div>
      </div>
      <div class="border-2 ml-5 flex-auto">
        <h2>О факультетете</h2>
        <p v-html="tHtml"></p>
        <Par />
        <div>asd</div>
      </div>
    </div>
  </div>
</template>

<script>
import Par from '../UI/Paragraph'
export default {
  components: { Par },
  data() {
    return {
      tHtml: ` Факультет образован 1 сентября 1975 года. На протяжении 45 лет
          факультет возглавляли: - кандидат технических наук, доцент, академик
          транспорта Александр Сергеевич Трусов - академик Российской академии
          транспорта, доцент, доктор транспорта Олег Петрович Хайдуков -
          кандидат технических наук, доцент, доктор транспорта Геннадий
          Николаевич Запорожцев - доктор технических наук, доцент Владимир
          Антонович Туркин - кандидат технических наук, доцент Юрий Григорьевич
          Косолап С сентября 2020 года факультет возглавляет выпускник НГМА 1998
          года, старший механик, Александр Владимирович Игнатенко.<a href="#" style="color:red">Links</a>`,
    }
  },
  mounted() {
    this.fetchT()
  },
  methods: {
    async fetchT() {
      const some = await this.$axios.$get(
        `http://localhost:1337/Pages?URL=${this.$route.fullPath}`
      )
      console.log('response', some)
      return some
    },
  },
}
</script>

<style></style>
