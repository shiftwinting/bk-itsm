(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"1pKe":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=d(a("m1cH")),s=d(a("14Xm")),n=d(a("D3Ub")),o=a("CeR/"),l=d(a("0hVY")),r=d(a("sUbt")),c=d(a("gzP0"));function d(t){return t&&t.__esModule?t:{default:t}}e.default={name:"slaManager",components:{addModel:r.default,EmptyTip:c.default},mixins:[l.default],data:function(){return{isDataLoading:!1,secondClick:!1,versionStatus:!0,modelList:[],changeInfo:{isShow:!1,info:{is_builtin:!1}},isEdit:!1,bktooltipsInfo:{content:this.$t("m.slaContent['内置服务模型不可删除']"),showOnInit:!1,placements:["top"]},emptyTip:{title:this.$t("m['当前项目下还没有 <SLA模式>']"),subTitle:this.$t("m['SLA（即服务级别协议）是服务支撑团队与组织机构内最终用户之间的“服务合同”。通常，SLA 是通过定义所提供的服务必须遵守的质量标准以及交付服务的时间表来建立对服务和服务质量的清晰理解；加快服务响应时间、减少等待时长、降低运营成本，一套合理且适用的 SLA 将是您实现这些目标的最佳选择。']"),desc:[{src:a("+Xwt"),title:this.$t("m['设计服务模式并制定协议']"),content:this.$t("m['通常我们会先设定团队的服务时间段，然后进一步配置在规定的服务时间段内，针对不同的服务工单紧急程度约定响应和处理时长，为的是保障用户的服务体验、提升用户满意度。']")},{src:a("6zN/"),title:this.$t("m['为服务配置合适的 SLA']"),content:this.$t("m['接下来就是为不同的服务配置合适的 SLA 了，因为很多服务的处理流程中可能会需要多个不同职能团队来处理，所以我们支持在一个服务内针对不同的流程区间设置差异化的服务协议，满足对不同服务团队的SLA要求。']")}],links:[{text:this.$t("m['如何设计一套合理有效的 SLA ？']"),btn:this.$t("m['产品白皮书']"),href:"https://bk.tencent.com/docs/document/6.0/145/6596"}]}}},computed:{sliderStatus:function(){return this.$store.state.common.slideStatus}},watch:{},mounted:function(){this.getModelList(),"create"===this.$route.query.key&&this.addModelInfo()},methods:{getModelList:function(){var t=this;return(0,n.default)(s.default.mark((function e(){return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isDataLoading=!0,e.next=3,t.$store.dispatch("sla/getScheduleList",{project_key:t.$store.state.project.id}).then((function(e){t.modelList=e.data})).catch((function(e){(0,o.errorHandler)(e,t)})).finally((function(){t.isDataLoading=!1}));case 3:case"end":return e.stop()}}),e,t)})))()},closeVersion:function(){this.versionStatus=!1},addModelInfo:function(){if(this.hasPermission(["sla_calendar_create"],this.$store.state.project.projectAuthActions))this.isEdit=!1,this.changeInfo.isShow=!0,this.changeInfo.info.is_builtin=!1;else{var t=this.$store.state.project.projectInfo,e={project:[{id:t.key,name:t.name}]};this.applyForPermission(["sla_calendar_create"],this.$store.state.project.projectAuthActions,e)}},changeLineInfo:function(t,e){if(!this.hasPermission(["sla_calendar_edit"],[].concat((0,i.default)(this.$store.state.project.projectAuthActions),(0,i.default)(t.auth_actions)))){var a=this.$store.state.project.projectInfo,s={project:[{id:a.key,name:a.name}],sla_calendar:[{id:t.id,name:t.name}]};return this.applyForPermission(["sla_calendar_edit"],[].concat((0,i.default)(this.$store.state.project.projectAuthActions),(0,i.default)(t.auth_actions)),s),!1}this.changeInfo.info=t,this.isEdit=!0,this.changeInfo.isShow=!0},deleteModel:function(t,e){var a=this;if(!this.hasPermission(["sla_calendar_delete"],[].concat((0,i.default)(this.$store.state.project.projectAuthActions),(0,i.default)(t.auth_actions)))){var s=this.$store.state.project.projectInfo,n={project:[{id:s.key,name:s.name}],sla_calendar:[{id:t.id,name:t.name}]};return this.applyForPermission(["sla_calendar_delete"],[].concat((0,i.default)(this.$store.state.project.projectAuthActions),(0,i.default)(t.auth_actions)),n),!1}t.is_builtin||this.$bkInfo({type:"warning",title:this.$t('m.slaContent["确定删除该服务模式？"]'),confirmFn:function(){var e=t.id;a.secondClick||(a.secondClick=!0,a.$store.dispatch("sla/deleteSchedule",e).then((function(t){a.getModelList()})).catch((function(t){(0,o.errorHandler)(t,a)})).finally((function(){a.secondClick=!1})))}})},splitItem:function(t){return t.days[0].day_of_week.split(",")},numToDay:function(t){var e="";switch(t){case"0":e=this.$t('m.slaContent["周一"]');break;case"1":e=this.$t('m.slaContent["周二"]');break;case"2":e=this.$t('m.slaContent["周三"]');break;case"3":e=this.$t('m.slaContent["周四"]');break;case"4":e=this.$t('m.slaContent["周五"]');break;case"5":e=this.$t('m.slaContent["周六"]');break;case"6":e=this.$t('m.slaContent["周日"]');break;default:e=""}return e}}}},"3S8C":function(t,e,a){"use strict";a("Y3au")},"4g07":function(t,e,a){"use strict";a("pdYN")},JWQf:function(t,e,a){"use strict";a.r(e);var i=a("YjAh"),s=a("ss6E");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("4g07");var o=a("KHd+"),l=Object(o.a)(s.default,i.a,i.b,!1,null,"122a9b25",null);l.options.__file="src/views/slaManager/slaManager.vue",e.default=l.exports},Rq6r:function(t,e,a){"use strict";a.r(e);var i=a("wo6n"),s=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e.default=s.a},Y3au:function(t,e,a){},YjAh:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:t.isDataLoading},expression:"{ isLoading: isDataLoading }"}],staticClass:"bk-itsm-service"},[t.changeInfo.isShow?[a("add-model",{attrs:{"change-info":t.changeInfo,"is-edit":t.isEdit}})]:[a("div",{staticClass:"is-title",class:{"bk-title-left":!t.sliderStatus}},[a("p",{staticClass:"bk-come-back"},[t._v("\n                "+t._s(t.$t('m.slaContent["服务模式"]'))+"\n            ")])]),t._v(" "),a("div",{staticClass:"itsm-page-content"},[t.isDataLoading||0!==t.modelList.length?[t.versionStatus?a("div",{staticClass:"bk-itsm-version"},[a("i",{staticClass:"bk-icon icon-info-circle"}),t._v(" "),a("span",[t._v(t._s(t.$t('m.slaContent["服务模式：通过对工作日节假日的配置，工作时段以及工作时间的设置，来设定不同的服务模式。服务模式将会应用到服务级别协议中，最终体现在对不同优先级服务的受理时效上。"]')))]),t._v(" "),a("i",{staticClass:"bk-icon icon-close",on:{click:t.closeVersion}})]):t._e(),t._v(" "),a("div",{staticClass:"bk-sla-add"},[a("bk-button",{directives:[{name:"cursor",rawName:"v-cursor",value:{active:!t.hasPermission(["sla_calendar_create"],t.$store.state.project.projectAuthActions)},expression:"{ active: !hasPermission(['sla_calendar_create'], $store.state.project.projectAuthActions) }"}],class:["mr10","plus-cus",{"btn-permission-disable":!t.hasPermission(["sla_calendar_create"],t.$store.state.project.projectAuthActions)}],attrs:{"data-test-id":"slaPattern_button_create",theme:"primary",title:t.$t("m.eventdeploy['新增']"),icon:"plus"},on:{click:t.addModelInfo}},[t._v("\n                        "+t._s(t.$t('m.eventdeploy["新增"]'))+"\n                    ")])],1),t._v(" "),t.modelList.length?a("ul",{staticClass:"bk-sla-list"},t._l(t.modelList,(function(e,i){return a("li",{key:i,staticStyle:{cursor:"pointer"},on:{click:function(a){return t.changeLineInfo(e,i)}}},[a("div",{staticClass:"bk-sla-content"},[a("div",{staticClass:"bk-content-info"},[a("p",{staticClass:"bk-info-name",attrs:{title:e.name}},[t._v(t._s(e.name))]),t._v(" "),e.days[0]&&e.days[0].day_of_week?a("p",[t._l(t.splitItem(e),(function(i,s){return a("span",{key:String(e.id)+String(s)},[t._v(t._s(t.numToDay(i))+"\n                                    ")])})),t._v(" "),t._l(e.days[0].duration,(function(e,i){return a("span",{key:i},[t._v("\n                                        "+t._s(e.start_time)+"-"+t._s(e.end_time)+"\n                                    ")])}))],2):a("p",[a("span",[t._v("\n                                        "+t._s(t.$t('m.slaContent["周一至周日 全天"]'))+"\n                                    ")])])]),t._v(" "),a("div",{staticClass:"bk-sla-operat"},[e.is_builtin?a("i",{directives:[{name:"bk-tooltips",rawName:"v-bk-tooltips",value:t.bktooltipsInfo,expression:"bktooltipsInfo"}],staticClass:"bk-icon icon-delete bk-icon-disabled builtin",attrs:{"data-test-id":"slaPattern-i-deleteModel2"},on:{click:function(a){return a.stopPropagation(),t.deleteModel(e,i)}}}):a("i",{staticClass:"bk-icon icon-delete",attrs:{"data-test-id":"slaPattern-i-deleteModel1"},on:{click:function(a){return a.stopPropagation(),t.deleteModel(e,i)}}})])])])})),0):t._e()]:a("empty-tip",{attrs:{title:t.emptyTip.title,"sub-title":t.emptyTip.subTitle,desc:t.emptyTip.desc,links:t.emptyTip.links}},[a("template",{slot:"btns"},[a("bk-button",{directives:[{name:"cursor",rawName:"v-cursor",value:{active:!t.hasPermission(["sla_calendar_create"],t.$store.state.project.projectAuthActions)},expression:"{ active: !hasPermission(['sla_calendar_create'], $store.state.project.projectAuthActions) }"}],class:{"btn-permission-disable":!t.hasPermission(["sla_calendar_create"],t.$store.state.project.projectAuthActions)},attrs:{"data-test-id":"slaPattern_button_createPermission",theme:"primary"},on:{click:t.addModelInfo}},[t._v("\n                        "+t._s(t.$t('m["立即创建"]'))+"\n                    ")])],1)],2)],2)]],2)},s=[];i._withStripped=!0},ccUq:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bk-add-model"},[a("div",{staticClass:"is-title",class:{"bk-title-left":!t.sliderStatus}},[a("p",{staticClass:"bk-come-back",on:{click:t.backList}},[a("arrows-left-icon"),t._v("\n            "+t._s(t.isEdit?t.changeInfo.info.name:t.$t('m.slaContent["新增服务模式"]'))+"\n        ")],1)]),t._v(" "),a("div",{staticClass:"bk-add-content"},[a("div",{staticClass:"bk-content-group",staticStyle:{width:"400px"}},[a("p",{staticClass:"bk-group-title"},[t._v(t._s(t.$t('m.slaContent["基本信息"]')))]),t._v(" "),a("bk-form",{ref:"dynamicForm",attrs:{"label-width":200,"form-type":"vertical",model:t.formInfo,rules:t.nameRules}},[a("bk-form-item",{attrs:{"data-test-id":"slaModel-input-modelName",label:t.$t("m.slaContent['服务模式名称']"),required:!0,property:"name"}},[a("bk-input",{attrs:{maxlength:"120",placeholder:t.$t("m.slaContent['请输入模式名称']"),disabled:t.changeInfo.info.is_builtin},model:{value:t.formInfo.name,callback:function(e){t.$set(t.formInfo,"name","string"==typeof e?e.trim():e)},expression:"formInfo.name"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"bk-content-group"},[a("p",{staticClass:"bk-group-title"},[t._v(t._s(t.$t('m.slaContent["工作时间"]')))]),t._v(" "),a("bk-form",{ref:"daysForm",attrs:{"label-width":200,"form-type":"vertical",model:t.formInfo}},t._l(t.formInfo.days,(function(e,i){return a("div",{key:i,staticClass:"bk-group-table",staticStyle:{"padding-right":"35px"}},[a("div",{staticClass:"bk-group-select",staticStyle:{width:"400px",height:"64px"}},[a("bk-form-item",{attrs:{label:t.$t("m.slaContent['星期']"),required:!0,rules:t.weekRules.week,property:"days."+i+".week"}},[a("bk-select",{attrs:{multiple:"","show-select-all":"",searchable:""},model:{value:e.week,callback:function(a){t.$set(e,"week",a)},expression:"item.week"}},t._l(t.weekList,(function(t){return a("bk-option",{key:t.id,attrs:{id:t.id,name:t.name}})})),1)],1)],1),t._v(" "),a("ul",{staticClass:"bk-group-time"},t._l(e.time,(function(s,n){return a("li",{key:n},[a("p",{staticClass:"bk-width-label"},[s.changStatus?t._e():a("bk-popconfirm",{staticStyle:{"line-height":"25px"},attrs:{placement:"bottom-start",trigger:"click","confirm-text":t.$t("m.slaContent['确定']"),"cancel-text":t.$t("m.slaContent['取消']")},on:{confirm:function(e){s.name=t.timeItemNameTemplate}}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("bk-input",{staticStyle:{width:"226px"},attrs:{maxlength:"120",placeholder:t.$t("m.slaContent['请输入时段名称']")},model:{value:t.timeItemNameTemplate,callback:function(e){t.timeItemNameTemplate="string"==typeof e?e.trim():e},expression:"timeItemNameTemplate"}})],1),t._v(" "),a("span",{staticClass:"cus-ellipsis",attrs:{title:s.name},on:{click:function(e){t.timeItemNameTemplate=s.name}}},[t._v(t._s(s.name))])]),t._v(" "),1!==e.time.length?a("i",{staticClass:"bk-icon icon-delete",on:{click:function(a){return t.deleteTimeName(e.time,n)}}}):t._e()],1),t._v(" "),a("div",{staticClass:"bk-form-content bk-sla-time"},[a("bk-time-picker",{attrs:{type:"timerange",clearable:!1},model:{value:s.value,callback:function(e){t.$set(s,"value",e)},expression:"timeItem.value"}}),t._v(" "),n===e.time.length-1?a("div",{staticClass:"bk-group-icon"},[3!==e.time.length?a("i",{directives:[{name:"bk-tooltips",rawName:"v-bk-tooltips",value:t.bktooltipsInfo.addTime,expression:"bktooltipsInfo.addTime"}],staticClass:"bk-itsm-icon",on:{click:function(e){return t.addTimeFrame(i,"days")}}},[t._v("+")]):a("i",{directives:[{name:"bk-tooltips",rawName:"v-bk-tooltips",value:t.bktooltipsInfo.overTime,expression:"bktooltipsInfo.overTime"}],staticClass:"icon-flow-add bk-icon-false"})]):t._e()],1)])})),0),t._v(" "),a("div",{staticClass:"add-and-reduce-box"},[1!==t.formInfo.days.length?a("div",{staticClass:"bk-add-group",on:{click:function(a){return t.deleteLine(e,i,"days")}}},[a("i",{staticClass:"bk-itsm-icon icon-flow-reduce"})]):t._e(),t._v(" "),a("div",{staticClass:"bk-add-group",on:{click:function(e){return t.addLine("days")}}},[a("i",{staticClass:"bk-itsm-icon icon-flow-add"})])])])})),0)],1),t._v(" "),a("div",{staticClass:"bk-content-group"},[a("p",{staticClass:"bk-group-title"},[t._v(t._s(t.$t('m.slaContent["加班时间"]')))]),t._v(" "),a("bk-form",{ref:"workdaysForm",attrs:{"label-width":200,"form-type":"vertical",model:t.formInfo}},[t._l(t.formInfo.workdays,(function(e,i){return a("div",{key:i,staticClass:"bk-group-table",staticStyle:{"padding-right":"35px"}},[a("div",{staticClass:"bk-group-select",staticStyle:{width:"400px",height:"64px"}},[a("bk-form-item",{attrs:{label:t.$t("m.slaContent['日期']"),required:!0,rules:t.dayTimeRules.dayTime,property:"workdays."+i+".dayTime"}},[a("bk-date-picker",{attrs:{type:"daterange",clearable:!1,"ext-cls":"cus-width"},model:{value:e.dayTime,callback:function(a){t.$set(e,"dayTime",a)},expression:"item.dayTime"}})],1)],1),t._v(" "),a("ul",{staticClass:"bk-group-time"},t._l(e.time,(function(s,n){return a("li",{key:n},[a("p",{staticClass:"bk-width-label"},[s.changStatus?t._e():a("bk-popconfirm",{staticStyle:{"line-height":"25px"},attrs:{placement:"bottom-start",trigger:"click","confirm-text":t.$t("m.slaContent['确定']"),"cancel-text":t.$t("m.slaContent['取消']")},on:{confirm:function(e){s.name=t.timeItemNameTemplate}}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("bk-input",{staticStyle:{width:"226px"},attrs:{maxlength:"120",placeholder:t.$t("m.slaContent['请输入时段名称']")},model:{value:t.timeItemNameTemplate,callback:function(e){t.timeItemNameTemplate="string"==typeof e?e.trim():e},expression:"timeItemNameTemplate"}})],1),t._v(" "),a("span",{staticClass:"cus-ellipsis",attrs:{title:s.name},on:{click:function(e){t.timeItemNameTemplate=s.name}}},[t._v(t._s(s.name))])]),t._v(" "),1!==e.time.length?a("i",{staticClass:"bk-icon icon-delete",on:{click:function(a){return t.deleteTimeName(e.time,n)}}}):t._e()],1),t._v(" "),a("div",{staticClass:"bk-form-content bk-sla-time"},[a("bk-time-picker",{attrs:{type:"timerange",clearable:!1},model:{value:s.value,callback:function(e){t.$set(s,"value",e)},expression:"timeItem.value"}}),t._v(" "),n===e.time.length-1?a("div",{staticClass:"bk-group-icon"},[3!==e.time.length?a("i",{directives:[{name:"bk-tooltips",rawName:"v-bk-tooltips",value:t.bktooltipsInfo.addTime,expression:"bktooltipsInfo.addTime"}],staticClass:"bk-itsm-icon",on:{click:function(e){return t.addTimeFrame(i,"workdays")}}},[t._v("+")]):a("i",{directives:[{name:"bk-tooltips",rawName:"v-bk-tooltips",value:t.bktooltipsInfo.overTime,expression:"bktooltipsInfo.overTime"}],staticClass:"icon-flow-add bk-icon-false"})]):t._e()],1)])})),0),t._v(" "),a("div",{staticClass:"add-and-reduce-box"},[a("div",{staticClass:"bk-add-group",on:{click:function(a){return t.deleteLine(e,i,"workdays")}}},[a("i",{staticClass:"bk-itsm-icon icon-flow-reduce"})]),t._v(" "),a("div",{staticClass:"bk-add-group",on:{click:function(e){return t.addLine("workdays")}}},[a("i",{staticClass:"bk-itsm-icon icon-flow-add"})])])])})),t._v(" "),0===t.formInfo.workdays.length?a("div",{staticClass:"add-and-reduce-box"},[a("div",{staticClass:"bk-add-group",attrs:{"data-test-id":"slaPattern_div_addGroup"},on:{click:function(e){return t.addLine("workdays")}}},[a("i",{staticClass:"bk-itsm-icon icon-flow-add"})])]):t._e()],2)],1),t._v(" "),a("div",{staticClass:"bk-content-group"},[a("p",{staticClass:"bk-group-title"},[t._v(t._s(t.$t('m.slaContent["假期时间"]')))]),t._v(" "),a("bk-form",{key:t.formKey,ref:"timeOutForm",attrs:{"label-width":200,"form-type":"vertical",model:t.formInfo}},[t._l(t.formInfo.holidays,(function(e,i){return a("div",{key:i,staticClass:"bk-group-table",staticStyle:{"padding-right":"35px"}},[a("div",{staticClass:"bk-group-select",staticStyle:{width:"400px",height:"64px"}},[a("bk-form-item",{attrs:{label:t.$t("m.slaContent['节日名称']"),required:!0,rules:t.dayNameRules.dayName,property:"holidays."+i+".dayName"}},[a("bk-input",{attrs:{placeholder:t.$t("m.slaContent['请输入节假日名称']")},model:{value:e.dayName,callback:function(a){t.$set(e,"dayName","string"==typeof a?a.trim():a)},expression:"item.dayName"}})],1)],1),t._v(" "),a("div",{staticClass:"bk-group-select",staticStyle:{width:"200px",height:"64px"}},[a("bk-form-item",{attrs:{label:t.$t("m.slaContent['节日日期']"),required:!0}},[a("bk-date-picker",{attrs:{type:"daterange",clearable:!1},model:{value:e.dayTime,callback:function(a){t.$set(e,"dayTime",a)},expression:"item.dayTime"}})],1)],1),t._v(" "),a("ul",{staticClass:"bk-group-time"},t._l(e.time,(function(s,n){return a("li",{key:n},[a("p",{staticClass:"bk-width-label"},[s.changStatus?t._e():a("bk-popconfirm",{staticStyle:{"line-height":"25px"},attrs:{placement:"bottom-start",trigger:"click","confirm-text":t.$t("m.slaContent['确定']"),"cancel-text":t.$t("m.slaContent['取消']")},on:{confirm:function(e){s.name=t.timeItemNameTemplate}}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("bk-input",{staticStyle:{width:"226px"},attrs:{maxlength:"120",placeholder:t.$t("m.slaContent['请输入时段名称']")},model:{value:t.timeItemNameTemplate,callback:function(e){t.timeItemNameTemplate="string"==typeof e?e.trim():e},expression:"timeItemNameTemplate"}})],1),t._v(" "),a("span",{staticClass:"cus-ellipsis",attrs:{title:s.name},on:{click:function(e){t.timeItemNameTemplate=s.name}}},[t._v(t._s(s.name))])]),t._v(" "),1!==e.time.length?a("i",{staticClass:"bk-icon icon-delete",on:{click:function(a){return t.deleteTimeName(e.time,n)}}}):t._e()],1),t._v(" "),a("div",{staticClass:"bk-form-content bk-sla-time"},[a("bk-time-picker",{attrs:{type:"timerange",clearable:!1},model:{value:s.value,callback:function(e){t.$set(s,"value",e)},expression:"timeItem.value"}}),t._v(" "),n===e.time.length-1?a("div",{staticClass:"bk-group-icon"},[3!==e.time.length?a("i",{directives:[{name:"bk-tooltips",rawName:"v-bk-tooltips",value:t.bktooltipsInfo.addTime,expression:"bktooltipsInfo.addTime"}],staticClass:"bk-itsm-icon",on:{click:function(e){return t.addTimeFrame(i,"holidays")}}},[t._v("+")]):a("i",{directives:[{name:"bk-tooltips",rawName:"v-bk-tooltips",value:t.bktooltipsInfo.overTime,expression:"bktooltipsInfo.overTime"}],staticClass:"icon-flow-add bk-icon-false"})]):t._e()],1)])})),0),t._v(" "),a("div",{staticClass:"add-and-reduce-box"},[a("div",{staticClass:"bk-add-group",on:{click:function(a){return t.deleteLine(e,i,"holidays")}}},[a("i",{staticClass:"bk-itsm-icon icon-flow-reduce"})]),t._v(" "),a("div",{staticClass:"bk-add-group",on:{click:function(e){return t.addLine("holidays")}}},[a("i",{staticClass:"bk-itsm-icon icon-flow-add"})])])])})),t._v(" "),0===t.formInfo.holidays.length?a("div",{staticClass:"add-and-reduce-box"},[a("div",{staticClass:"bk-add-group",on:{click:function(e){return t.addLine("holidays")}}},[a("i",{staticClass:"bk-itsm-icon icon-flow-add"})])]):t._e()],2)],1),t._v(" "),a("div",{staticClass:"bk-model-btn"},[t.isEdit?a("bk-button",{staticClass:"mr10",attrs:{"data-test-id":"slaModel-button-modelSave",theme:"primary",title:t.$t("m.deployPage['保存']"),disabled:t.clickSecond},on:{click:t.saveSchedule}},[t._v(t._s(t.$t("m.deployPage['保存']"))+"\n            ")]):a("bk-button",{staticClass:"mr10",attrs:{"data-test-id":"slaModel-button-modelSubmit",theme:"primary",title:t.$t("m.slaContent['提交']"),disabled:t.clickSecond},on:{click:t.saveSchedule}},[t._v(t._s(t.$t("m.slaContent['提交']"))+"\n            ")]),t._v(" "),a("bk-button",{staticClass:"mr10",attrs:{"data-test-id":"slaModel-button-modelClose",theme:"default",title:t.$t("m.wiki['取消']"),disabled:t.clickSecond},on:{click:t.backList}},[t._v(t._s(t.$t("m.wiki['取消']"))+"\n            ")])],1)]),t._v(" "),a("bk-dialog",{attrs:{"render-directive":"if",width:t.timeInfo.width,"header-position":t.timeInfo.headerPosition,"auto-close":t.timeInfo.autoClose,"mask-close":t.timeInfo.autoClose},on:{confirm:t.TimeFrameComfirm},model:{value:t.timeInfo.show,callback:function(e){t.$set(t.timeInfo,"show",e)},expression:"timeInfo.show"}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v("\n            "+t._s(t.tempTime.isEdit?t.$t('m.slaContent["修改时段"]'):t.$t('m.slaContent["添加时段"]'))+"\n        ")]),t._v(" "),a("div",{staticClass:"bk-add-project bk-add-module"},[a("bk-form",{ref:"dialogForm",attrs:{"label-width":200,"form-type":"vertical",model:t.tempTime.info,rules:t.nameRules}},[a("bk-form-item",{attrs:{label:t.$t("m.slaContent['时段名称']"),required:!0,property:"name"}},[a("bk-input",{attrs:{maxlength:"120",placeholder:t.$t("m.slaContent['请输入时段名称']")},model:{value:t.tempTime.info.name,callback:function(e){t.$set(t.tempTime.info,"name","string"==typeof e?e.trim():e)},expression:"tempTime.info.name"}})],1),t._v(" "),a("bk-form-item",{attrs:{label:t.$t("m.slaContent['起止时间']"),required:!0}},[a("bk-time-picker",{attrs:{type:"timerange",clearable:!1},model:{value:t.tempTime.info.value,callback:function(e){t.$set(t.tempTime.info,"value",e)},expression:"tempTime.info.value"}})],1)],1)],1)])],1)},s=[];i._withStripped=!0},pdYN:function(t,e,a){},sUbt:function(t,e,a){"use strict";a.r(e);var i=a("ccUq"),s=a("Rq6r");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("3S8C");var o=a("KHd+"),l=Object(o.a)(s.default,i.a,i.b,!1,null,"a2aa4570",null);l.options.__file="src/views/slaManager/addModel.vue",e.default=l.exports},ss6E:function(t,e,a){"use strict";a.r(e);var i=a("1pKe"),s=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e.default=s.a},wo6n:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(a("gDS+")),s=a("CeR/"),n=o(a("PaSM"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={name:"addModel",mixins:[n.default],props:{changeInfo:{type:Object,default:function(){return{}}},isEdit:{type:Boolean,default:!1}},data:function(){return{clickSecond:!1,formInfo:{name:"",days:[],workdays:[],holidays:[],id:-1},oldForm:{},multiSelect:!0,weekList:[{id:"0",name:this.$t('m.slaContent["周一"]')},{id:"1",name:this.$t('m.slaContent["周二"]')},{id:"2",name:this.$t('m.slaContent["周三"]')},{id:"3",name:this.$t('m.slaContent["周四"]')},{id:"4",name:this.$t('m.slaContent["周五"]')},{id:"5",name:this.$t('m.slaContent["周六"]')},{id:"6",name:this.$t('m.slaContent["周日"]')}],timeInfo:{show:!1,width:400,headerPosition:"left",autoClose:!1,title:this.$t('m.slaContent["添加时段"]'),info:{}},aaa:"",tempTime:{index:-1,type:"",info:{name:"",value:["08:00:00","12:00:00"]}},hasFalse:!1,nameRules:{},dayNameRules:{},dayTimeRules:{},weekRules:{},infoStatus:{},bktooltipsInfo:{addTime:{content:this.$t("m.slaContent['添加时段']"),showOnInit:!1,placements:["top"]},overTime:{content:this.$t("m.slaContent['最多只能添加三个时段']"),showOnInit:!1,placements:["top"]}},formKey:0,timeItemNameTemplate:""}},computed:{sliderStatus:function(){return this.$store.state.common.slideStatus}},mounted:function(){this.isEdit?this.transferSchedule():this.addLine("days"),this.initData(),this.nameRules=this.checkCommonRules("name"),this.dayNameRules=this.checkCommonRules("dayName"),this.dayTimeRules=this.checkCommonRules("dayTime"),this.weekRules=this.checkCommonRules("week")},methods:{initData:function(){this.oldForm=JSON.parse((0,i.default)(this.formInfo))},addLine:function(t){var e={},a=[{name:this.$t('m.slaContent["上午"]'),value:["08:00:00","12:00:00"],changStatus:!1},{name:this.$t('m.slaContent["下午"]'),value:["14:00:00","18:00:00"],changStatus:!1}];if("days"===t){if(e.week=[],e.time=a,!this.formInfo.days.length)for(var i=0;i<5;i++)e.week.push(String(i))}else"workdays"===t?(e.dayTime=[],e.time=a):(e.dayName="",e.dayTime="",e.time=[{name:this.$t('m.slaContent["全天"]'),value:["00:00:00","23:59:59"],changStatus:!1}]);this.formInfo[t].push(e)},deleteLine:function(t,e,a){this.formInfo[a].splice(e,1),this.formKey=(new Date).getTime()},TimeFrameComfirm:function(){var t=this;this.$refs.dialogForm.validate().then((function(e){var a={name:t.tempTime.info.name,changStatus:!1,value:t.tempTime.info.value};t.tempTime.isEdit?t.formInfo[t.tempTime.type][t.tempTime.index].time.splice(t.tempTime.timeIndex,1,a):t.formInfo[t.tempTime.type][t.tempTime.index].time.push(a),t.timeInfo.show=!1}))},addTimeFrame:function(t,e){this.formInfo[e][t].time.push({name:"晚上",changStatus:!1,value:["08:00:00","12:00:00"]})},changeTimeName:function(t,e,a,i){this.tempTime={index:a,timeIndex:e,type:i,info:{name:t.name,value:t.value},isEdit:!0},this.timeInfo.show=!0},deleteTimeName:function(t,e){t.splice(e,1)},saveSchedule:function(){var t=this;this.$refs.dynamicForm.validate().then((function(e){t.formInfo.holidays.length?t.$refs.timeOutForm.validate().then((function(e){t.isEdit?t.$bkInfo({type:"warning",title:t.$t('m.slaContent["确认更新服务模式？"]'),subTitle:t.$t('m.slaContent["更新的内容将会实时应用在关联的服务协议中，请谨慎修改！"]'),confirmFn:function(){t.ajaxSubmit()}}):t.ajaxSubmit()}),(function(t){})):t.ajaxSubmit()}),(function(t){}))},ajaxSubmit:function(){for(var t=this,e=JSON.parse((0,i.default)(this.formInfo)),a={name:e.name,is_enabled:!0,days:[],workdays:[],holidays:[],id:e.id,project_key:this.$store.state.project.id},n=0;n<e.days.length;n++){var o=this.backObject(e.days[n].time),l={type_of_day:"NORMAL",day_of_week:e.days[n].week.join(","),duration:o,id:e.days[n].id};a.days.push(l)}if(0!==a.days.length){for(var r=0;r<e.workdays.length;r++){var c=this.backObject(e.workdays[r].time),d={type_of_day:"WORKDAY",start_date:this.standardDayTime(e.workdays[r].dayTime[0]),end_date:this.standardDayTime(e.workdays[r].dayTime[1]),duration:c,id:e.workdays[r].id};a.workdays.push(d)}for(var m=0;m<e.holidays.length;m++){var u=this.backObject(e.holidays[m].time),f={type_of_day:"HOLIDAY",start_date:this.standardDayTime(e.holidays[m].dayTime[0]),end_date:this.standardDayTime(e.holidays[m].dayTime[1]),duration:u,name:e.holidays[m].dayName,id:e.holidays[m].id};a.holidays.push(f)}this.isEdit?this.$store.dispatch("sla/updateSchedule",a).then((function(e){t.$bkMessage({message:t.$t('m.slaContent["修改成功！"]'),theme:"success"}),t.submitBack()}),(function(e){(0,s.errorHandler)(e,t)})):(a.project_key=this.$store.state.project.id,this.$store.dispatch("sla/saveSchedule",a).then((function(e){t.$bkMessage({message:t.$t('m.slaContent["提交成功！"]'),theme:"success"}),t.submitBack()}),(function(e){(0,s.errorHandler)(e,t)})))}else this.$bkMessage({message:this.$t('m.slaContent["工作时间不能为空！"]'),theme:"error"})},backObject:function(t){return t.map((function(t){return{start_time:t.value[0],end_time:t.value[1],name:t.name,id:t.id}}))},transferSchedule:function(){var t=this,e=JSON.parse((0,i.default)(this.changeInfo.info));if(this.formInfo.name=e.name,this.formInfo.id=e.id,e.days.length)e.days.forEach((function(e){var a={time:[],week:[],id:e.id};a.week=e.day_of_week.split(","),e.duration.forEach((function(t){var e={changStatus:!1,name:t.name,id:t.id,value:[]};e.value.push(t.start_time),e.value.push(t.end_time),a.time.push(e)})),t.formInfo.days.push(a)}));else{var a={time:[{changStatus:!1,name:this.$t('m.slaContent["24小时"]'),value:["00:00:00","23:59:59"]}],week:[0,1,2,3,4,5,6]};this.formInfo.days.push(a)}e.workdays.forEach((function(e){var a={time:[],dayTime:[],id:e.id};a.dayTime.push(e.start_date),a.dayTime.push(e.end_date),e.duration.forEach((function(t){var e={changStatus:!1,name:t.name,id:t.id,value:[]};e.value.push(t.start_time),e.value.push(t.end_time),a.time.push(e)})),t.formInfo.workdays.push(a)})),e.holidays.forEach((function(e){var a={dayName:e.name,dayTime:[],id:e.id,time:[]};e.duration.forEach((function(t){var e={changStatus:!1,name:t.name,id:t.id,value:[]};e.value.push(t.start_time),e.value.push(t.end_time),a.time.push(e)})),a.dayTime.push(e.start_date),a.dayTime.push(e.end_date),t.formInfo.holidays.push(a)}))},backList:function(){var t=this;(0,i.default)(this.formInfo)!==(0,i.default)(this.oldForm)?this.$bkInfo({type:"warning",title:this.$t('m.slaContent["确认返回？"]'),confirmFn:function(){t.$parent.changeInfo.isShow=!1}}):this.$parent.changeInfo.isShow=!1},submitBack:function(){this.$parent.changeInfo.isShow=!1,this.$parent.getModelList()}}}}}]);