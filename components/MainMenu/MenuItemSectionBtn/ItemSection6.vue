<template>
  <div class="p-1 row-start-2 row-end-7 col-start-auto">
    <div class="grid grid-rows-5-auto grid-flow-col auto-cols-fr">
      <div v-for="(contactGroup, i) in subMenuBtn" :key="i" class="p-1">
        <ul>
          <li class="font-semibold">{{ contactGroup.title }}</li>
          <li v-for="(contact, idx) in contactGroup.data" :key="idx">
            {{ contact }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subMenuBtn: [
        {
          title: 'Адрес',
          data: ['353918', 'г. Новороссийск, пр-т Ленина,93'],
        },
        {
          title: 'Приемная руководителя',
          data: ['8 (8617) 76-78-00', '8 (8617) 71-75-25', 'mail@nsma.ru'],
        },
        {
          title: 'Приемная комиссия',
          data: ['8 (8617) 76-78-10 ', '71-63-03', 'pcom@nsma.ru'],
        },
        {
          title: 'Морской колледж',
          data: ['8 988 7692275', '8 918 3881399'],
        },
        {
          title: 'Транспортный колледж',
          data: [
            '8 (9887) 65-30-55',
            'http://t-college.ru/',
            'dekanat.tk@mail.ru',
          ],
        },
        {
          title: 'ИМТМЭиП',
          data: ['8 (8617) 76-78-45', '8 (8617) 76-79-45'],
        },
        {
          title: 'Деканат ФЭВТиС',
          data: ['8 (8617) 76-78-25'],
        },
        {
          title: 'Деканат СМФ',
          data: ['8 (8617) 76-78-87'],
        },
        {
          title: 'Заочный факультет',
          data: ['8 (8617) 76-78-54', 'zf@nsma.ru'],
        },
        {
          title: 'Институт повышения квалификации',
          data: ['8 (8617) 76-79-00', '8 (8617) 71-64-04', 'ipk.aumsu.ru'],
        },
      ],
    }
  },
}
</script>

<style></style>
