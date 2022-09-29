(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c13f74f2"],{"2e49":function(t,n,e){},"358a":function(t,n,e){"use strict";e("2e49")},"77ed":function(t,n,e){},8040:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("sweet-alert-basic"),e("sweet-alert-position"),e("sweet-alert-animation"),e("sweet-alert-types"),e("sweet-alert-option"),e("sweet-alert-confirm-option")],1)],1)},o=[],r=e("a15b"),a=e("b28b"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Basic Examples"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeBasic)+" ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[t._v(" SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. It's even highly customizable, as you can see below! ")]),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.showAlert}},[t._v(" Basic ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.withTitle}},[t._v(" With Title ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.withFooter}},[t._v(" With Footer ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.withHtml}},[t._v(" HTML ")])],1)],1)},l=[],c=e("541c"),u=e("d6e4"),b=e("1947"),p=e("e009"),m="\n<template>\n  \x3c!-- trigger buttons --\x3e\n  <div class=\"demo-inline-spacing\">\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showAlert\"\n    >\n      Basic\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"withTitle\"\n    >\n      With Title\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"withFooter\"\n    >\n      With Footer\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"withHtml\"\n    >\n      HTML\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {  BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n\n    // basic\n    showAlert() {\n      this.$swal({\n        title: 'Any fool can use a computer',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // whith title\n    withTitle() {\n      this.$swal({\n        title: 'The Internet?,',\n        text: 'That thing is still around?',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // with footer\n    withFooter() {\n      this.$swal({\n        icon: 'error',\n        title: 'Oops...',\n        text: 'Something went wrong!',\n        footer: '<a href=\"javascript:void(0)\">Why do I have this issue?</a>',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // with html\n    withHtml() {\n      this.$swal({\n        title: '<span class=\"font-weight-bolder\">HTML <u>example</u></span>',\n        icon: 'info',\n        html:\n          'You can use <span class=\"font-weight-bolder\">bold text</span>, '\n          + '<a href=\"https://pixinvent.com/\" target=\"_blank\">links</a> '\n          + 'and other HTML tags',\n        showCloseButton: true,\n        showCancelButton: true,\n        focusConfirm: false,\n        confirmButtonText: 'Great!',\n        confirmButtonAriaLabel: 'Thumbs up, great!',\n        cancelButtonAriaLabel: 'Thumbs down',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n          cancelButton: 'btn btn-outline-danger ml-1',\n        },\n        buttonsStyling: false,\n      })\n    },\n  },\n}\n<\/script>\n",f="\n<template>\n  \x3c!-- trigger button --\x3e\n  <div class=\"demo-inline-spacing\">\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"topStart\"\n    >\n      Top Start\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"topEnd\"\n    >\n      Top End\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"bottomStart\"\n    >\n      Bottom Starts\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"bottomEnd\"\n    >\n      Bottom End\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n\n    // top start\n    topStart() {\n      this.$swal({\n        position: 'top-start',\n        icon: 'success',\n        title: 'Your work has been saved',\n        showConfirmButton: false,\n        timer: 1500,\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n    // top end\n    topEnd() {\n      this.$swal({\n        position: 'top-end',\n        icon: 'success',\n        title: 'Your work has been saved',\n        showConfirmButton: false,\n        timer: 1500,\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n    // bottom start\n    bottomStart() {\n      this.$swal({\n        position: 'bottom-start',\n        icon: 'success',\n        title: 'Your work has been saved',\n        showConfirmButton: false,\n        timer: 1500,\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // bottom end\n    bottomEnd() {\n      this.$swal({\n        position: 'bottom-end',\n        icon: 'success',\n        title: 'Your work has been saved',\n        showConfirmButton: false,\n        timer: 1500,\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n  },\n}\n<\/script>\n",d="\n<template>\n  \x3c!-- trigger button --\x3e\n  <div class=\"demo-inline-spacing\">\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"bounceIn\"\n    >\n      Bounce In\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"fadeIn\"\n    >\n      Fade In\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"flipIn\"\n    >\n      Flip In\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"tada\"\n    >\n      Tada\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"shake\"\n    >\n      Shake\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {  BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport 'animate.css'\n\nexport default {\n  components: {\n    BCardCode,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n\n    // bounce in method\n    bounceIn() {\n      this.$swal({\n        title: 'Bounce In Animation',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        showClass: {\n          popup: 'animate__animated animate__bounceIn',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // fade in\n    fadeIn() {\n      this.$swal({\n        title: 'Fade In Animation',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        showClass: {\n          popup: 'animate__animated animate__fadeIn',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // flip in\n    flipIn() {\n      this.$swal({\n        title: 'Flip In Animation',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        showClass: {\n          popup: 'animate__animated animate__flipInX',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // tada\n    tada() {\n      this.$swal({\n        title: 'Tada Animation',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        showClass: {\n          popup: 'animate__animated animate__tada',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // shake\n    shake() {\n      this.$swal({\n        title: 'Shake Animation',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        showClass: {\n          popup: 'animate__animated animate__shakeX',\n        },\n        buttonsStyling: false,\n      })\n    },\n  },\n}\n<\/script>\n",v="\n<template>\n  \x3c!-- trigger button --\x3e\n  <div class=\"demo-inline-spacing\">\n    <b-button\n      v-ripple.400=\"'rgba(40, 199, 111, 0.15)'\"\n      variant=\"outline-success\"\n      @click=\"success\"\n    >\n      Success\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(234, 84, 85, 0.15)'\"\n      variant=\"outline-danger\"\n      @click=\"error\"\n    >\n      Error\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(255, 159, 67, 0.15)'\"\n      variant=\"outline-warning\"\n      @click=\"warning\"\n    >\n      Warning\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(0, 207, 232, 0.15)'\"\n      variant=\"outline-info\"\n      @click=\"info\"\n    >\n      Info\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {  BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BCardCode,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n\n    // success\n    success() {\n      this.$swal({\n        title: 'Good job!',\n        text: 'You clicked the button!',\n        icon: 'success',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // error\n    error() {\n      this.$swal({\n        title: 'Error!',\n        text: ' You clicked the button!',\n        icon: 'error',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // warning\n    warning() {\n      this.$swal({\n        title: 'Warning!',\n        text: ' You clicked the button!',\n        icon: 'warning',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // info\n    info() {\n      this.$swal({\n        title: 'Info!',\n        text: 'You clicked the button!',\n        icon: 'info',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n  },\n}\n<\/script>\n",h="\n<template>\n  \x3c!-- trigger button --\x3e\n  <div class=\"demo-inline-spacing\">\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"customImage\"\n    >\n      Custom Image\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"autoClose\"\n    >\n      Auto Close\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"clickOutside\"\n    >\n      Click Outside\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"ajax\"\n    >\n      Ajax\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      timerInterval: null,\n    }\n  },\n  methods: {\n\n    // custom image\n    customImage() {\n      this.$swal({\n        title: 'Sweet!',\n        text: 'Modal with a custom image.',\n        // eslint-disable-next-line global-require\n        imageUrl: require('@/assets/images/slider/04.jpg'),\n        imageWidth: 400,\n        imageHeight: 200,\n        imageAlt: 'Custom image',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // auto close\n    autoClose() {\n      this.$swal({\n        title: 'Auto close alert!',\n        html: 'I will close in <strong>3</strong> seconds.',\n        timer: 3000,\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // click out side\n    clickOutside() {\n      this.$swal({\n        title: 'Click outside to close!',\n        text: 'This is a cool message!',\n        allowOutsideClick: true,\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // ajax\n    ajax() {\n      this.$swal({\n        title: 'Search for a user',\n        input: 'text',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n          cancelButton: 'btn btn-outline-danger ml-1',\n        },\n        buttonsStyling: false,\n        inputAttributes: {\n          autocapitalize: 'off',\n        },\n        showCancelButton: true,\n        confirmButtonText: 'Look up',\n        showLoaderOnConfirm: true,\n        preConfirm(login) {\n          if (!login) return null\n          return fetch(`//api.github.com/users/${login}`)\n            .then(response => {\n              if (!response.ok) {\n                throw new Error(response.statusText)\n              }\n              return response.json()\n            })\n            .catch(error => {\n              this.$swal.showValidationMessage(`Request failed:  ${error}`)\n            })\n        },\n      }).then(result => {\n        if (result.value) {\n          this.$swal({\n            title: `${result.value.login}'s avatar`,\n            imageUrl: result.value.avatar_url,\n            customClass: { confirmButton: 'btn btn-primary' },\n          })\n        }\n      })\n    },\n  },\n}\n<\/script>\n",g="\n<template>\n  \x3c!-- trigger buttons --\x3e\n  <div class=\"demo-inline-spacing\">\n    <div>\n      <h5>Confirm Button Text</h5>\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"confirmText\"\n      >\n        Confirm Text\n      </b-button>\n    </div>\n    <div>\n      <h5>Confirm Button Text</h5>\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"confirmButtonColor\"\n      >\n        Confirm Button Color\n      </b-button>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    // confirm texrt\n    confirmText() {\n      this.$swal({\n        title: 'Are you sure?',\n        text: \"You won't be able to revert this!\",\n        icon: 'warning',\n        showCancelButton: true,\n        confirmButtonText: 'Yes, delete it!',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n          cancelButton: 'btn btn-outline-danger ml-1',\n        },\n        buttonsStyling: false,\n      }).then(result => {\n        if (result.value) {\n          this.$swal({\n            icon: 'success',\n            title: 'Deleted!',\n            text: 'Your file has been deleted.',\n            customClass: {\n              confirmButton: 'btn btn-success',\n            },\n          })\n        }\n      })\n    },\n\n    // comfirm button color\n    confirmButtonColor() {\n      this.$swal({\n        title: 'Are you sure?',\n        text: \"You won't be able to revert this!\",\n        icon: 'warning',\n        showCancelButton: true,\n        confirmButtonText: 'Yes, delete it!',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n          cancelButton: 'btn btn-outline-danger ml-1',\n        },\n        buttonsStyling: false,\n      }).then(result => {\n        if (result.value) {\n          this.$swal({\n            icon: 'success',\n            title: 'Deleted!',\n            text: 'Your file has been deleted.',\n            customClass: {\n              confirmButton: 'btn btn-success',\n            },\n          })\n        } else if (result.dismiss === 'cancel') {\n          this.$swal({\n            title: 'Cancelled',\n            text: 'Your imaginary file is safe :)',\n            icon: 'error',\n            customClass: {\n              confirmButton: 'btn btn-success',\n            },\n          })\n        }\n      })\n    },\n  },\n}\n<\/script>\n",w={components:{BCardCode:c["a"],BCardText:u["a"],BButton:b["a"]},directives:{Ripple:p["a"]},data:function(){return{codeBasic:m}},methods:{showAlert:function(){this.$swal({title:"Any fool can use a computer",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},withTitle:function(){this.$swal({title:"The Internet?,",text:"That thing is still around?",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},withFooter:function(){this.$swal({icon:"error",title:"Oops...",text:"Something went wrong!",footer:'<a href="javascript:void(0)">Why do I have this issue?</a>',customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},withHtml:function(){this.$swal({title:'<span class="font-weight-bolder">HTML <u>example</u></span>',icon:"info",html:'You can use <span class="font-weight-bolder">bold text</span>, <a href="https://pixinvent.com/" target="_blank">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:"Great!",confirmButtonAriaLabel:"Thumbs up, great!",cancelButtonAriaLabel:"Thumbs down",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1"},buttonsStyling:!1})}}},y=w,B=e("2877"),C=Object(B["a"])(y,s,l,!1,null,null,null),x=C.exports,O=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Position"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codePosition)+" ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[t._v(" You can specify position of your alert with "),e("code",[t._v("{position : 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' }")]),t._v(" in js. ")]),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.topStart}},[t._v(" Top Start ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.topEnd}},[t._v(" Top End ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.bottomStart}},[t._v(" Bottom Starts ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.bottomEnd}},[t._v(" Bottom End ")])],1)],1)},_=[],j={components:{BCardCode:c["a"],BCardText:u["a"],BButton:b["a"]},directives:{Ripple:p["a"]},data:function(){return{codePosition:f}},methods:{topStart:function(){this.$swal({position:"top-start",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500,customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},topEnd:function(){this.$swal({position:"top-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500,customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},bottomStart:function(){this.$swal({position:"bottom-start",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500,customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},bottomEnd:function(){this.$swal({position:"bottom-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500,customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})}}},k=j,S=Object(B["a"])(k,O,_,!1,null,null,null),$=S.exports,T=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Animations"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeAnimation)+" ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[t._v("Use ")]),e("code",[t._v("popup")]),e("span",[t._v(" inside ")]),e("code",[t._v("showClass")]),e("span",[t._v(" parameter to add animation to your alert.")])]),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.bounceIn}},[t._v(" Bounce In ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.fadeIn}},[t._v(" Fade In ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.flipIn}},[t._v(" Flip In ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.tada}},[t._v(" Tada ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.shake}},[t._v(" Shake ")])],1)],1)},I=[],A=(e("77ed"),{components:{BCardCode:c["a"],BCardText:u["a"],BButton:b["a"]},directives:{Ripple:p["a"]},data:function(){return{codeAnimation:d}},methods:{bounceIn:function(){this.$swal({title:"Bounce In Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__bounceIn"},buttonsStyling:!1})},fadeIn:function(){this.$swal({title:"Fade In Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__fadeIn"},buttonsStyling:!1})},flipIn:function(){this.$swal({title:"Flip In Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__flipInX"},buttonsStyling:!1})},tada:function(){this.$swal({title:"Tada Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__tada"},buttonsStyling:!1})},shake:function(){this.$swal({title:"Shake Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__shakeX"},buttonsStyling:!1})}}}),Y=A,E=Object(B["a"])(Y,T,I,!1,null,null,null),N=E.exports,P=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Types"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeTypes)+" ")]},proxy:!0}])},[e("b-card-text",[t._v(' The type of the modal. SweetAlert comes with 4 built-in types which will show a corresponding icon animation: "success", "error", "warning" and "info". You can also set it as "input" to get a prompt modal. It can either be put in the object under the key "icon" or passed as the third parameter of the function. ')]),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(40, 199, 111, 0.15)",expression:"'rgba(40, 199, 111, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-success"},on:{click:t.success}},[t._v(" Success ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(234, 84, 85, 0.15)",expression:"'rgba(234, 84, 85, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-danger"},on:{click:t.error}},[t._v(" Error ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 159, 67, 0.15)",expression:"'rgba(255, 159, 67, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-warning"},on:{click:t.warning}},[t._v(" Warning ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(0, 207, 232, 0.15)",expression:"'rgba(0, 207, 232, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-info"},on:{click:t.info}},[t._v(" Info ")])],1)],1)},R=[],F={components:{BCardCode:c["a"],BCardText:u["a"],BButton:b["a"]},directives:{Ripple:p["a"]},data:function(){return{codeTypes:v}},methods:{success:function(){this.$swal({title:"Good job!",text:"You clicked the button!",icon:"success",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},error:function(){this.$swal({title:"Error!",text:" You clicked the button!",icon:"error",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},warning:function(){this.$swal({title:"Warning!",text:" You clicked the button!",icon:"warning",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},info:function(){this.$swal({title:"Info!",text:"You clicked the button!",icon:"info",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})}}},H=F,L=Object(B["a"])(H,P,R,!1,null,null,null),D=L.exports,W=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Options"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeOptions)+" ")]},proxy:!0}])},[e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.customImage}},[t._v(" Custom Image ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.autoClose}},[t._v(" Auto Close ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.clickOutside}},[t._v(" Click Outside ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.ajax}},[t._v(" Ajax ")])],1)])},M=[],G=(e("d3b7"),{components:{BCardCode:c["a"],BButton:b["a"]},directives:{Ripple:p["a"]},data:function(){return{timerInterval:null,codeOptions:h}},methods:{customImage:function(){this.$swal({title:"Sweet!",text:"Modal with a custom image.",imageUrl:e("80d9"),imageWidth:400,imageHeight:200,imageAlt:"Custom image",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},autoClose:function(){this.$swal({title:"Auto close alert!",html:"I will close in <strong>3</strong> seconds.",timer:3e3,customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},clickOutside:function(){this.$swal({title:"Click outside to close!",text:"This is a cool message!",allowOutsideClick:!0,customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},ajax:function(){var t=this;this.$swal({title:"Search for a user",input:"text",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1"},buttonsStyling:!1,inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Look up",showLoaderOnConfirm:!0,preConfirm:function(t){var n=this;return t?fetch("//api.github.com/users/".concat(t)).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()})).catch((function(t){n.$swal.showValidationMessage("Request failed:  ".concat(t))})):null}}).then((function(n){n.value&&t.$swal({title:"".concat(n.value.login,"'s avatar"),imageUrl:n.value.avatar_url,customClass:{confirmButton:"btn btn-primary"}})}))}}}),U=G,q=Object(B["a"])(U,W,M,!1,null,null,null),V=q.exports,X=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Confirm Options"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeConfirm)+" ")]},proxy:!0}])},[e("div",{staticClass:"demo-inline-spacing"},[e("div",[e("h5",[t._v("Confirm Button Text")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.confirmText}},[t._v(" Confirm Text ")])],1),e("div",[e("h5",[t._v("Confirm Button Text")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.confirmButtonColor}},[t._v(" Confirm Button Color ")])],1)])])},z=[],J={components:{BButton:b["a"],BCardCode:c["a"]},directives:{Ripple:p["a"]},data:function(){return{codeConfirm:g}},methods:{confirmText:function(){var t=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1"},buttonsStyling:!1}).then((function(n){n.value&&t.$swal({icon:"success",title:"Deleted!",text:"Your file has been deleted.",customClass:{confirmButton:"btn btn-success"}})}))},confirmButtonColor:function(){var t=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1"},buttonsStyling:!1}).then((function(n){n.value?t.$swal({icon:"success",title:"Deleted!",text:"Your file has been deleted.",customClass:{confirmButton:"btn btn-success"}}):"cancel"===n.dismiss&&t.$swal({title:"Cancelled",text:"Your imaginary file is safe :)",icon:"error",customClass:{confirmButton:"btn btn-success"}})}))}}},K=J,Q=Object(B["a"])(K,X,z,!1,null,null,null),Z=Q.exports,tt={components:{BRow:r["a"],BCol:a["a"],SweetAlertBasic:x,SweetAlertPosition:$,SweetAlertAnimation:N,SweetAlertTypes:D,SweetAlertOption:V,SweetAlertConfirmOption:Z}},nt=tt,et=(e("358a"),Object(B["a"])(nt,i,o,!1,null,null,null));n["default"]=et.exports},a15b:function(t,n,e){"use strict";e.d(n,"a",(function(){return B}));var i=e("b42e"),o=e("c637"),r=e("a723"),a=e("2326"),s=e("228e"),l=e("6c06"),c=e("b508"),u=e("d82f"),b=e("cf75"),p=e("fa73");function m(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function f(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?m(Object(e),!0).forEach((function(n){d(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function d(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var v=["start","end","center"],h=Object(c["a"])((function(t,n){return n=Object(p["h"])(Object(p["g"])(n)),n?Object(p["c"])(["row-cols",t,n].filter(l["a"]).join("-")):null})),g=Object(c["a"])((function(t){return Object(p["c"])(t.replace("cols",""))})),w=[],y=function(){var t=Object(s["b"])().reduce((function(t,n){return t[Object(b["g"])(n,"cols")]=Object(b["c"])(r["p"]),t}),Object(u["c"])(null));return w=Object(u["h"])(t),Object(b["d"])(Object(u["m"])(f(f({},t),{},{alignContent:Object(b["c"])(r["u"],null,(function(t){return Object(a["a"])(Object(a["b"])(v,"between","around","stretch"),t)})),alignH:Object(b["c"])(r["u"],null,(function(t){return Object(a["a"])(Object(a["b"])(v,"between","around"),t)})),alignV:Object(b["c"])(r["u"],null,(function(t){return Object(a["a"])(Object(a["b"])(v,"baseline","stretch"),t)})),noGutters:Object(b["c"])(r["g"],!1),tag:Object(b["c"])(r["u"],"div")})),o["Ob"])},B={name:o["Ob"],functional:!0,get props(){return delete this.props,this.props=y(),this.props},render:function(t,n){var e,o=n.props,r=n.data,a=n.children,s=o.alignV,l=o.alignH,c=o.alignContent,u=[];return w.forEach((function(t){var n=h(g(t),o[t]);n&&u.push(n)})),u.push((e={"no-gutters":o.noGutters},d(e,"align-items-".concat(s),s),d(e,"justify-content-".concat(l),l),d(e,"align-content-".concat(c),c),e)),t(o.tag,Object(i["a"])(r,{staticClass:"row",class:u}),a)}}},b28b:function(t,n,e){"use strict";e.d(n,"a",(function(){return x}));var i=e("b42e"),o=e("c637"),r=e("a723"),a=e("992e"),s=e("2326"),l=e("228e"),c=e("6c06"),u=e("7b1e"),b=e("b508"),p=e("d82f"),m=e("cf75"),f=e("fa73");function d(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function v(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?d(Object(e),!0).forEach((function(n){h(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function h(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var g=["auto","start","end","center","baseline","stretch"],w=function(t,n,e){var i=t;if(!Object(u["p"])(e)&&!1!==e)return n&&(i+="-".concat(n)),"col"!==t||""!==e&&!0!==e?(i+="-".concat(e),Object(f["c"])(i)):Object(f["c"])(i)},y=Object(b["a"])(w),B=Object(p["c"])(null),C=function(){var t=Object(l["b"])().filter(c["a"]),n=t.reduce((function(t,n){return t[n]=Object(m["c"])(r["i"]),t}),Object(p["c"])(null)),e=t.reduce((function(t,n){return t[Object(m["g"])(n,"offset")]=Object(m["c"])(r["p"]),t}),Object(p["c"])(null)),i=t.reduce((function(t,n){return t[Object(m["g"])(n,"order")]=Object(m["c"])(r["p"]),t}),Object(p["c"])(null));return B=Object(p["a"])(Object(p["c"])(null),{col:Object(p["h"])(n),offset:Object(p["h"])(e),order:Object(p["h"])(i)}),Object(m["d"])(Object(p["m"])(v(v(v(v({},n),e),i),{},{alignSelf:Object(m["c"])(r["u"],null,(function(t){return Object(s["a"])(g,t)})),col:Object(m["c"])(r["g"],!1),cols:Object(m["c"])(r["p"]),offset:Object(m["c"])(r["p"]),order:Object(m["c"])(r["p"]),tag:Object(m["c"])(r["u"],"div")})),o["y"])},x={name:o["y"],functional:!0,get props(){return delete this.props,this.props=C()},render:function(t,n){var e,o=n.props,r=n.data,s=n.children,l=o.cols,c=o.offset,u=o.order,b=o.alignSelf,p=[];for(var m in B)for(var f=B[m],d=0;d<f.length;d++){var v=y(m,f[d].replace(m,""),o[f[d]]);v&&p.push(v)}var g=p.some((function(t){return a["e"].test(t)}));return p.push((e={col:o.col||!g&&!l},h(e,"col-".concat(l),l),h(e,"offset-".concat(c),c),h(e,"order-".concat(u),u),h(e,"align-self-".concat(b),b),e)),t(o.tag,Object(i["a"])(r,{class:p}),s)}}},d6e4:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var i=e("2b0e"),o=e("b42e"),r=e("c637"),a=e("a723"),s=e("cf75"),l=Object(s["d"])({textTag:Object(s["c"])(a["u"],"p")},r["u"]),c=i["default"].extend({name:r["u"],functional:!0,props:l,render:function(t,n){var e=n.props,i=n.data,r=n.children;return t(e.textTag,Object(o["a"])(i,{staticClass:"card-text"}),r)}})}}]);
//# sourceMappingURL=chunk-c13f74f2.d7b876a1.js.map