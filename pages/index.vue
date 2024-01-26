<template lang="html">
  <div class="clients">
    <div class="container_xl app-container main-table">
      <div class="d-flex justify-content-between">
        <h5 class="title">Клиенты</h5>
        <a-button @click="logout">Выход</a-button>
      </div>
      <div class="card_block main-table px-4 py-4">
        <a-table
          :columns="columnsClients"
          :data-source="data"
          :pagination="false"
          :loading="loading"
          align="center"
        >
          <span to="/orders/1232/details" slot="client" slot-scope="text" align="center">
            {{ text }}
          </span>
          <span slot="orderId" slot-scope="text">#{{ text }}</span>

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
          <span slot="btns" slot-scope="text">
            <span class="action-btn" @click="$router.push(`/view/${text.tg_id}`)"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2 12C10.2 11.0059 11.0059 10.2 12 10.2C12.9941 10.2 13.8 11.0059 13.8 12C13.8 12.9941 12.9941 13.8 12 13.8C11.0059 13.8 10.2 12.9941 10.2 12Z"
                  fill="#3699FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 12C4 13.3115 4.33997 13.7532 5.01991 14.6365C6.37757 16.4004 8.65449 18.4 12 18.4C15.3455 18.4 17.6224 16.4004 18.9801 14.6365C19.66 13.7532 20 13.3115 20 12C20 10.6885 19.66 10.2468 18.9801 9.36347C17.6224 7.59965 15.3455 5.60001 12 5.60001C8.65449 5.60001 6.37757 7.59965 5.01991 9.36347C4.33997 10.2468 4 10.6885 4 12ZM12 9.00001C10.3431 9.00001 9 10.3432 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3432 13.6569 9.00001 12 9.00001Z"
                  fill="#3699FF"
                />
              </svg>
            </span>
            <a-popconfirm
              placement="topLeft"
              ok-text="Yes"
              cancel-text="No"
              @confirm="confirm(text)"
            >
              <template slot="title">
                <p>Вы уверены, что хотите удалить?</p>
              </template>
              <span class="action-btn"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.7998 7.50878C4.7998 7.12121 5.07611 6.80703 5.41695 6.80703L7.54834 6.80665C7.97182 6.79445 8.34542 6.48827 8.48952 6.03529C8.4933 6.02339 8.49766 6.00869 8.51329 5.95539L8.60513 5.64205C8.66133 5.44993 8.71029 5.28255 8.7788 5.13294C9.04948 4.54189 9.55026 4.13145 10.129 4.02637C10.2755 3.99978 10.4306 3.99989 10.6087 4.00002H13.3911C13.5692 3.99989 13.7243 3.99978 13.8708 4.02637C14.4495 4.13145 14.9503 4.54189 15.2209 5.13294C15.2895 5.28255 15.3384 5.44993 15.3946 5.64205L15.4865 5.95539C15.5021 6.00869 15.5064 6.02339 15.5102 6.03529C15.6543 6.48827 16.102 6.79483 16.5255 6.80703H18.5827C18.9235 6.80703 19.1998 7.12121 19.1998 7.50878C19.1998 7.89634 18.9235 8.21053 18.5827 8.21053H5.41695C5.07611 8.21053 4.7998 7.89634 4.7998 7.50878Z"
                    fill="#3699FF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.6763 20H12.3233C14.5495 20 15.6626 20 16.3863 19.2913C17.11 18.5825 17.184 17.4199 17.3321 15.0948L17.5455 11.7445C17.6259 10.4829 17.666 9.85209 17.303 9.45236C16.9399 9.05263 16.3268 9.05263 15.1006 9.05263H8.89904C7.67282 9.05263 7.05971 9.05263 6.69665 9.45236C6.33358 9.85209 6.37376 10.4829 6.4541 11.7445L6.66748 15.0948C6.81556 17.4199 6.8896 18.5825 7.61332 19.2913C8.33703 20 9.45011 20 11.6763 20ZM14.5968 12.2765C14.6298 11.9294 14.3892 11.6199 14.0595 11.5852C13.7298 11.5505 13.4358 11.8037 13.4028 12.1508L13.0028 16.3613C12.9698 16.7084 13.2104 17.0179 13.5401 17.0526C13.8698 17.0873 14.1639 16.8341 14.1968 16.487L14.5968 12.2765ZM9.9401 11.5852C10.2698 11.5505 10.5639 11.8037 10.5968 12.1508L10.9968 16.3613C11.0298 16.7084 10.7892 17.0179 10.4595 17.0526C10.1298 17.0873 9.83575 16.8341 9.80278 16.487L9.40278 12.2765C9.36981 11.9294 9.61037 11.6199 9.9401 11.5852Z"
                    fill="#3699FF"
                  />
                </svg>
              </span>
            </a-popconfirm>
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
  layout: "auth",
  data() {
    return {
      columnsClients: [
        {
          title: "ID",
          dataIndex: "tg_id",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "orderId" },
          className: "column-service",
        },
        {
          title: "F.I.SH",
          dataIndex: "tg_name",
          scopedSlots: { customRender: "name" },
          className: "column-name",
          key: "name",
        },
        // {
        //   title: "Номер телефона",
        //   dataIndex: "phone_number",
        //   scopedSlots: { customRender: "phone_number" },
        //   className: "column-name",
        //   key: "phone_number",
        // },
        {
          title: "Текущий порядок вопросов",
          dataIndex: "current_question_order",
          scopedSlots: { customRender: "age" },
          className: "column-name",
          key: "age",
        },

        {
          title: "ДЕЙСТВИЯ",
          scopedSlots: { customRender: "btns" },
          className: "column-btns",
          width: "100px",
          align: "center",
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
    this.getFirstData("__GET_ORDERS");
    this.checkAllActions("orders");
  },
  methods: {
    logout() {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("refresh_token");
      this.$router.push("/admin/login");
    },
    moment,
    confirm(id) {
      this.__DELETE_USER(id.tg_id);
    },
    async __GET_ORDERS() {
      try {
        this.loading = true;
        const data = await this.$store.dispatch("fetchClients/getClients", {
          ...this.$route.query,
        });
        this.data = data?.results;
        this.totalPage = data?.count;
        this.loading = false;
      } catch (e) {
        if (e.response.status == 401) {
          this.__REFRESH_TOKEN();
        }
      }
    },
    async __DELETE_USER(id) {
      try {
        const data = await this.$store.dispatch("fetchClients/deleteClients", id);
        this.notification("success", "Success", "Клиент успешно удален.");
        this.__GET_ORDERS();
      } catch (e) {
        if (e.response.status == 401) {
          this.__REFRESH_TOKEN();
        }
      }
    },
    async __REFRESH_TOKEN() {
      try {
        const refreshToken = localStorage.getItem("refresh_token");
        const data = await this.$store.dispatch("fetchAuth/refreshToken", {
          refresh: refreshToken,
        });
        localStorage.setItem("auth_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
      } catch (e) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("refresh_token");
        this.$router.push("/admin/login");
      }
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
