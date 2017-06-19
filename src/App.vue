<template>
  <div id="app">
    <v-head></v-head>
    <v-side></v-side>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import {Pagination,
        Dialog,
        Autocomplete,
        Dropdown,
        DropdownMenu,
        DropdownItem,
        Menu,
        Submenu,
        MenuItem,
        MenuItemGroup,
        Input,
        InputNumber,
        Radio,
        RadioGroup,
        RadioButton,
        Checkbox,
        CheckboxGroup,
        Switch,
        Select,
        Option,
        OptionGroup,
        Button,
        ButtonGroup,
        Table,
        TableColumn,
        DatePicker,
        TimeSelect,
        TimePicker,
        Popover,
        Tooltip,
        Breadcrumb,
        BreadcrumbItem,
        Form,
        FormItem,
        Tabs,
        TabPane,
        Tag,
        Tree,
        Alert,
        Slider,
        Row,
        Col,
        Upload,
        Progress,
        Spinner,
        Badge,
        Card,
        Rate,
        Steps,
        Step,
        Carousel,
        Scrollbar,
        CarouselItem,
        Collapse,
        CollapseItem,
        Cascader,
        ColorPicker,
        Loading,
        MessageBox,
        Message} from 'element-ui'

import 'element-ui/lib/theme-default/index.css'

Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Autocomplete)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(TimePicker)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Alert)
Vue.use(Slider)
Vue.use(Row)
Vue.use(Col)
Vue.use(Upload)
Vue.use(Progress)
Vue.use(Spinner)
Vue.use(Badge)
Vue.use(Card)
Vue.use(Rate)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Carousel)
Vue.use(Scrollbar)
Vue.use(CarouselItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Cascader)
Vue.use(ColorPicker)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

import vHead from '@/components/public/head'
import vSide from '@/components/public/side'

export default {
  name: 'app',
  components: {
    vHead,
    vSide
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}

</script>

<style lang="scss">
@import "style/base.scss";
.view{
    position: absolute;
    top: 56px;
    right: 0;
    bottom: 0;
    left: 230px;
    padding: 30px 50px 0 50px;
}
</style>
