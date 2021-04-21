<template>
  <div>
    <FacHeader
      :contact="dataTest.contact"
      :title="dataTest.title"
      :img="dataTest.wallpapper"
    />
    <PageBreadcrumbs />
    <FacBody />
  </div>
</template>

<script>
import PageBreadcrumbs from '../PageBreadcrumbs'
import FacHeader from './FacHeader'
import FacBody from './FacBody'

export default {
  components: { FacHeader, FacBody, PageBreadcrumbs },
  meta: {
    bread: 'asadasd',
  },
  data() {
    return {
      dataTest: {
        title: 'Судомеханический факультет',
        wallpapper:
          'https://mfame.guru/wp-content/uploads/2018/11/Engine-Room.jpg',
        contact: {
          phone: '8 (8617) 76-78-87',
          email: 'Email@mail.ru',
          location: 'Учебный корпус, 3 этаж',
        },
        adminStaff: {
          chief: 'Игнатенко Александ',
          alternateChief: [
            'Каурова Елена Александровна',
            'Остюк Андрей Васильевич',
          ],
        },
      },
    }
  },
}
</script>

<style scoped>
.faculty__header {
  height: 50vh;
}
</style>
