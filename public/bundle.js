'use strict';

var vue = require('vue');

var script = {
    props: ['name'],
  };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", null, "Hello " + vue.toDisplayString($props.name) + "!", 1 /* TEXT */))
}

script.render = render;
script.__file = "client/index.vue";

module.exports = script;
