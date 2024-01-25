export default {
  data() {
    return {
      columnsOrders: [
        {
          title: "ID",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "orderId" },
          className: "column-service",
        },
        {
          title: "Название заказа",
          dataIndex: "name",
          scopedSlots: { customRender: "name" },
          className: "column-name",
          key: "name",
        },
        {
          title: "Имя продавца",
          dataIndex: "seller",
          scopedSlots: { customRender: "seller" },
          className: "column-client",
          key: "seller",
        },
        {
          title: "Имя фрилансера",
          dataIndex: "freelancer",
          scopedSlots: { customRender: "freelancer" },
          className: "column-client",
          key: "freelancer",
        },
        {
          title: "Дата публикации",
          dataIndex: "date",
          scopedSlots: { customRender: "date" },
          className: "column-date",
        },

        {
          title: "Категория",
          dataIndex: "category",
          scopedSlots: { customRender: "category" },
          className: "column-name",
          key: "category",
        },
        {
          title: "Срок",
          dataIndex: "count",
          scopedSlots: { customRender: "count" },
          className: "column-name",
          key: "count",
        },
        {
          title: "статус",
          dataIndex: "status",
          scopedSlots: { customRender: "status" },
          className: "column-tags",
          key: "status",
        },
        {
          title: "ДЕЙСТВИЯ",
          key: "id",
          dataIndex: "id",
          scopedSlots: { customRender: "btns" },
          className: "column-btns",
          width: "100px",
          align: "center",
        },
      ],
      columnsFreelancers: [
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
        {
          title: "ДЕЙСТВИЯ",
          key: "id",
          dataIndex: "id",
          scopedSlots: { customRender: "btns" },
          className: "column-btns",
          width: "100px",
          align: "center",
        },
      ],
      columnsSellers: [
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
          title: "КОЛ-ВО",
          dataIndex: "ordersCount",
          scopedSlots: { customRender: "ordersCount" },
          className: "column-name",
          key: "ordersCount",
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
        {
          title: "ДЕЙСТВИЯ",
          key: "id",
          dataIndex: "id",
          scopedSlots: { customRender: "btns" },
          className: "column-btns",
          width: "100px",
          align: "center",
        },
      ],
      columnsShow1: [
        {
          title: "ID",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "orderId" },
          className: "column-service",
        },
        {
          title: "Имя фрилансера",
          dataIndex: "freelancer",
          scopedSlots: { customRender: "freelancer" },
          className: "column-name",
          key: "freelancer",
        },

        {
          title: "Дата предложения",
          dataIndex: "date",
          scopedSlots: { customRender: "date" },
          className: "column-date",
          key: "date",
        },
        {
          title: "Срок",
          dataIndex: "term",
          scopedSlots: { customRender: "term" },
          className: "column-name",
          key: "term",
        },
        {
          title: "Цена",
          dataIndex: "price",
          scopedSlots: { customRender: "price" },
          className: "column-name",
          key: "orders-count",
        },
        {
          title: "Текст ",
          dataIndex: "text",
          scopedSlots: { customRender: "text" },
          className: "column-name",
          key: "text",
        },
        {
          title: "статус",
          dataIndex: "status",
          scopedSlots: { customRender: "status" },
          className: "column-tags",
          key: "status",
        },
        {
          title: "ДЕЙСТВИЯ",
          key: "id",
          dataIndex: "id",
          scopedSlots: { customRender: "btns" },
          className: "column-btns",
          width: "100px",
          align: "center",
        },
      ],
      columnsShow2: [
        {
          title: "ID",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "orderId" },
          className: "column-service",
        },
        {
          title: "Имя фрилансера",
          dataIndex: "freelancer",
          scopedSlots: { customRender: "freelancer" },
          className: "column-name",
          key: "freelancer",
        },

        {
          title: "Дата",
          dataIndex: "date",
          scopedSlots: { customRender: "date" },
          className: "column-date",
          key: "date",
        },
        {
          title: "Текст ",
          dataIndex: "text",
          scopedSlots: { customRender: "text" },
          className: "column-name",
          key: "text",
        },

        {
          title: "ДЕЙСТВИЯ",
          key: "id",
          dataIndex: "id",
          scopedSlots: { customRender: "btns" },
          className: "column-btns",
          width: "100px",
          align: "center",
        },
      ],
    };
  },
};