<template lang="html">
  <div class="clients">
    <div class="container_xl app-container main-table">
      <div class="d-flex justify-content-between">
        <h5 class="title">Информация о клиенте</h5>
      
        <a-button @click="$router.push('/')">Назад</a-button>
      </div>
      <h5 class="title">Клиент: {{ user?.tg_name }}</h5>
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

          <span slot="indexId" slot-scope="text">#{{ text }}</span>
          <span slot="answar" slot-scope="text">
            <a
              class="download-link"
              v-if="text.photo"
              target="_blank"
              :href="`${baseUrl}${text?.photo}`"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M0.500001 1.375C0.500001 0.891753 0.891755 0.499999 1.375 0.499999L13.625 0.5C14.1082 0.5 14.5 0.891754 14.5 1.375C14.5 1.85825 14.1082 2.25 13.625 2.25L1.375 2.25C0.891755 2.25 0.500001 1.85824 0.500001 1.375ZM8.11871 4.14689C7.94784 3.97602 7.72395 3.8906 7.5 3.8906C7.27611 3.8906 7.05211 3.97605 6.88129 4.14689L3.78111 7.24704C3.4394 7.58876 3.4394 8.14277 3.78111 8.48448C4.12283 8.8262 4.67684 8.8262 5.01856 8.48448L6.625 6.87804L6.625 13.625C6.625 14.1082 7.01675 14.5 7.5 14.5C7.98325 14.5 8.375 14.1082 8.375 13.625L8.375 6.87804L9.98145 8.48448C10.3232 8.8262 10.8772 8.8262 11.2189 8.48448C11.5606 8.14277 11.5606 7.58876 11.2189 7.24704L8.11871 4.14689Z"
                  fill="currentColor"
                />
              </svg>
              Загрузите изображение</a
            >
            <span v-else>{{ text.text }}</span>
          </span>
          <span slot="image" slot-scope="text">
            <img v-if="text != null" class="table-image" :src="`${baseUrl}${text}`" />
            <img
              v-else
              class="table-image"
              src="@/assets/images/photo_2023-03-04_13-28-58.jpg"
            />
          </span>
        </a-table>
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
  middleware: ["auth", "access"],
  layout: "auth",

  data() {
    return {
      user: {},
      baseUrl: process.env.BASE_URL,
      columnsFaq: [
        {
          title: "№",
          dataIndex: "indexId",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "indexId" },
          className: "column-service",
        },
        {
          title: "Вопрос",
          dataIndex: "photo",
          scopedSlots: { customRender: "image" },
          className: "column-name",
          key: "phone_number",
          align: "start",
          width: 55,
          colSpan: 2,
        },
        {
          title: "Вопрос",
          dataIndex: "question",
          scopedSlots: { customRender: "age" },
          className: "column-name",
          align: "start",
          width: "55%",
          customRender: (text) => text?.text,
          colSpan: 0,
        },
        {
          title: "Ответ",
          scopedSlots: { customRender: "answar" },
          className: "column-name",
          key: "name",
          align: "end",
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
      data: [],
      status: {
        online: "В сети",
        offline: "Не в сети",
      },
    };
  },
  mounted() {
    this.baseUrl = process.env.BASE_URL;
    console.log(process.env);
    this.getFirstData("__GET_ORDERS");
  },
  methods: {
    moment,
    deleteAction(id) {},

    async __GET_ORDERS() {
      console.log("Loading....");
      this.loading = true;
      const data = await this.$store.dispatch(
        "fetchClients/getClientsById",
        this.$route.params.id
      );
      this.data = data?.answers.map((item, index) => {
        return {
          ...item,
          indexId: index + 1,
        };
      });
      this.user = data?.user
      this.loading = false;
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
.download-link {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  align-items: center;
}
.download-link svg {
  transform: rotate(180deg);
}
</style>
