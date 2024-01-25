<template lang="html">
  <div class="clients">
    <div class="container_xl app-container main-table">
      <div class="d-flex justify-content-between">
        <h5 class="title">Информация о клиенте</h5>
        <a-button @click="$router.push('/')">Назад</a-button>
      </div>
      <div class="card_block main-table px-4 py-4">
        <a-table
          :columns="columnsFaq"
          :data-source="data"
          :pagination="false"
          :loading="loading"
          align="center"
        >
          <span to="/orders/1232/details" slot="client" slot-scope="text" align="center">
            {{ text }}
          </span>
          <span slot="orderId" slot-scope="text">#{{ text?.id }}</span>

          <span
            slot="status"
            slot-scope="tags"
            class="tags-style"
            :class="{
              tag_success: tags == 'online',
              tag_rejected: tags == 'offline',
            }"
          >
            {{ status[tags] }}
          </span>
        </a-table>
        <div class="flex justify-end mt-5">
          <a-pagination
            class="table-pagination flex justify-end"
            :simple="false"
            v-model.number="current"
            :total="totalPage"
            :page-size.sync="params.pageSize"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import columns from "@/mixins/columns";
import moment from "moment";
import global from "@/mixins/global";
import authAccess from "@/mixins/authAccess";

export default {
  mixins: [columns, global, authAccess],
  data() {
    return {
      columnsFaq: [
        {
          title: "ID",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "orderId" },
          className: "column-service",
        },
        {
          title: "F.I.SH",
          dataIndex: "name",
          scopedSlots: { customRender: "name" },
          className: "column-name",
          key: "name",
        },
        {
          title: "Номер телефона",
          dataIndex: "phone_number",
          scopedSlots: { customRender: "phone_number" },
          className: "column-name",
          key: "phone_number",
        },
        {
          title: "Возраст",
          dataIndex: "age",
          scopedSlots: { customRender: "age" },
          className: "column-client",
          key: "age",
        },
        {
          title: "Область",
          dataIndex: "region",
          scopedSlots: { customRender: "region" },
          className: "column-name",
        },

        {
          title: "Категория",
          dataIndex: "category",
          scopedSlots: { customRender: "category" },
          className: "column-name",
          key: "category",
        },
        {
          title: "Дата регистрации",
          dataIndex: "date",
          scopedSlots: { customRender: "date" },
          className: "column-date",
          key: "date",
        },
        {
          title: "статус",
          dataIndex: "status",
          scopedSlots: { customRender: "status" },
          className: "column-tags",
          key: "status",
        },
      ],
      statusFilter: [
        {
          name: {
            ru: "Активный",
          },
          id: 1,
        },
        {
          name: {
            ru: "Неактивный",
          },
          id: 2,
        },
      ],
      value: "",
      pageSize: 10,
      loading: false,
      orders: [],
      data: [
        {
          id: 1,
          name: "Order name",
          phone_number: "+998 99 730 14 99",
          age: "24",
          date: "24/09/2024",
          region: "Qashqadaryo",
          category: "Kategoriya",
          status: "online",
        },
        {
          id: 2,
          name: "Order name",
          phone_number: "+998 99 730 14 99",
          age: "24",
          date: "24/09/2024",
          region: "Qashqadaryo",
          category: "Kategoriya",
          status: "offline",
        },
      ],
      status: {
        online: "В сети",
        offline: "Не в сети",
      },
    };
  },
  mounted() {
    this.getFirstData("__GET_ORDERS");
    this.checkAllActions("orders");
  },
  methods: {
    moment,
    deleteAction(id) {},

    async __GET_ORDERS() {
      console.log("Loading....");
      // this.loading = true;
      // const data = await this.$store.dispatch("fetchOrders/getOrders", {
      //   ...this.$route.query,
      // });
      // this.loading = false;
      // const pageIndex = this.indexPage(
      //   data?.orders?.current_page,
      //   data?.orders?.per_page
      // );
      // this.orders = data?.orders?.data.map((item, index) => {
      //   return {
      //     ...item,
      //     key: index + pageIndex,
      //   };
      // });
      // this.totalPage = data?.orders?.total;
      // this.orders.dataAdd = moment(data?.orders?.created_at).format("DD/MM/YYYY");
    },
    indexPage(current_page, per_page) {
      return (current_page * 1 - 1) * per_page + 1;
    },
  },
  watch: {
    async current(val) {
      this.changePagination(val, "__GET_ORDERS");
    },
    async value(val) {
      if (val) {
        if (this.$route.query?.service != val)
          await this.$router.replace({
            path: this.$route.path,
            query: { ...this.$route.query, service: val },
          });
        if (val == this.$route.query.service) this.__GET_ORDERS();
      }
    },
  },
};
</script>
<style lang="css" scoped>
.clients {
  padding-top: 60px;
}
.title {
  font-family: "Inter", sans-serif;
  font-size: 17.55px;
  font-weight: 600;
  margin-top: 3.25px;
  margin-bottom: 24px;
}
</style>
