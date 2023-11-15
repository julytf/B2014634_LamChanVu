<template>
  <div>
    <index-navbar />

    <section class="header relative pt-16 items-center flex h-96 max-h-860-px px-20 flex justify-center my-16">

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Tên Sách
              </th>
              <th scope="col" class="px-6 py-3">
                Giá
              </th>
              <th scope="col" class="px-6 py-3">
                Số lượng
              </th>
              <!-- <th scope="col" class="px-6 py-3">
                Price
              </th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="detail in cartStore.details" :key="detail.book._id"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ detail.book.name }}
              </th>
              <td class="px-6 py-4">
                {{ detail.book.price }}
              </td>
              <td class="px-6 py-4">
                {{ detail.quantity }}
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
        <button
          class=" get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-emerald-500 active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg hover:bg-emerald-400 ease-linear transition-all duration-150 m-6"
          @click="buyFromCart()">
          Đặt hàng
        </button>
      </div>

    </section>

    <footer-component />
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";
import { useCartStore } from '@/stores/cart.store'
import OrderService from '@/services/order.service'

export default {
  data() {
    return {
      cartStore: useCartStore(),
      orderService: new OrderService(),
    };
  },
  components: {
    IndexNavbar,
    FooterComponent,
  },
  methods: {
    async buyFromCart() {
      let data = await this.orderService.buyFromCart()
      if (data.status == 'success') {
        this.$router.push('/')
      }
    }
  }
};
</script>
