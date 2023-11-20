<template>
  <div>
    <index-navbar />

    <section class="header relative pt-16 items-center flex h-96 max-h-860-px px-20 flex justify-center my-16">

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Mã
              </th>
              <th scope="col" class="px-6 py-3">
                Hàng hóa
              </th>
              <th scope="col" class="px-6 py-3">
                Tổng tiền
              </th>
              <th scope="col" class="px-6 py-3">
                Trạng thái
              </th>
              <!-- <th scope="col" class="px-6 py-3">
                Price
              </th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order._id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ order._id }}
              </th>
              <td class="px-6 py-4">
                <div v-if="order.details.length > 0">
                  {{ order.details[0]?.book?.name }}x{{ order.details[0]?.quantity }}
                </div>
                <div v-if="order.details.length > 1">
                  {{ order.details[1]?.book?.name }}x{{ order.details[1]?.quantity }}
                </div>
                <div v-if="order.details.length > 2">
                  ...
                </div>
              </td>
              <td class="px-6 py-4">
                {{ order.details.reduce((p, c) => p + (c.quantity * c.book.price), 0) }}
              </td>
              <td class="px-6 py-4">
                {{ order.status }}
              </td>
              <!-- <td class="px-6 py-4">
                $2999
              </td> -->
            </tr>
            <!-- <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">
                White
              </td>
              <td class="px-6 py-4">
                Laptop PC
              </td>
              <td class="px-6 py-4">
                $1999
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">
                Black
              </td>
              <td class="px-6 py-4">
                Accessories
              </td>
              <td class="px-6 py-4">
                $99
              </td>
            </tr> -->
          </tbody>
        </table>
      </div>

    </section>

    <!-- <footer-component /> -->
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
// import FooterComponent from "@/components/Footers/Footer.vue";
import { useCartStore } from '@/stores/cart.store'
import OrderService from '@/services/order.service'

export default {
  data() {
    return {
      cartStore: useCartStore(),
      orderService: new OrderService(),
      orders: []
    };
  },
  components: {
    IndexNavbar,
    // FooterComponent,
  },
  methods: {
    async getOrders() {
      let rs = await this.orderService.getAll()
      console.log(rs);
      this.orders = rs.data.docs
    }
  },
  mounted() {
    this.getOrders()
  }
};
</script>
