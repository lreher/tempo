(function (vue) {
  'use strict';

  var script = {
    data: function data () {
      return {
        msg: 'Hello World!'
      }
    }
  };

  var _hoisted_1 = { class: "hello" };
  var _hoisted_2 = { class: "hello__title" };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
      vue.createVNode("h1", _hoisted_2, vue.toDisplayString($data.msg), 1 /* TEXT */)
    ]))
  }

  script.render = render;
  script.__file = "client/Hello.vue";

  return script;

}(vue));
