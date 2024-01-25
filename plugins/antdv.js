import Vue from "vue";
import {
  //   Checkbox,
  Switch,
  Input,
  //   Select,
    Pagination,
  //   Slider,
  Rate,
  FormModel,
  Carousel,
  Button,
  Table,
  // Upload,
  Modal,
  // Popconfirm,
  // Radio,
  //   Icon,
  Spin,
  Dropdown,
  // Menu,
  // Layout,
  // TimePicker,
  // DatePicker,
  notification,
  message,
  // InputNumber,
  // Skeleton,
  // Empty,
  // Alert,
  Tooltip,
  Drawer,
} from "ant-design-vue";
const { info, success, error, warning, confirm } = Modal;
Vue.prototype.$notification = notification;
Vue.prototype.$message = message;
Vue.prototype.$confirm = confirm;
// Vue.use(Checkbox);
// Vue.use(Slider);
// Vue.use(Select);
Vue.use(Tooltip);
Vue.use(Switch);
Vue.use(Drawer);
Vue.use(Pagination);
Vue.use(Input);
Vue.use(Rate);
Vue.use(Carousel);

// Vue.use(Alert);
// Vue.use(Empty);
// Vue.use(DatePicker);
// Vue.use(Skeleton);
// Vue.use(TimePicker);
// Vue.use(InputNumber);
Vue.use(FormModel);
// Vue.use(Layout);
Vue.use(Button);
Vue.use(Table);
// Vue.use(Upload);
Vue.use(Modal);
// Vue.use(Popconfirm);
// Vue.use(Radio);
// Vue.use(Icon);
// Vue.use(Input);
Vue.use(Spin);
Vue.use(Dropdown);
// Vue.use(Menu);
