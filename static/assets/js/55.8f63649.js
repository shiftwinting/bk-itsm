(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"/2XR":function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return a}));var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("nav-title",{attrs:{"title-name":e.$t("m.serviceConfig['服务']")}}),e._v(" "),i("div",{staticClass:"page-content"},[i("div",{class:["service-left",e.isHiddenDirectory?"hide":""]},[i("tree-info",{attrs:{"tree-info":e.treeInfo,"dir-list":e.dirList}}),e._v(" "),i("div",{staticClass:"hidden-tree",on:{click:e.hiddenTree}},[i("i",{class:["bk-itsm-icon",e.isHiddenDirectory?"icon-arrow-right":"icon-xiangzuo1"]})])],1),e._v(" "),i("div",{class:["service-right",e.isHiddenDirectory?"auto-wight":""]},[i("div",{staticClass:"bk-only-btn"},[i("div",{staticClass:"bk-more-search"},[i("bk-button",{directives:[{name:"cursor",rawName:"v-cursor",value:{active:!e.hasPermission(["service_create"],e.$store.state.project.projectAuthActions)},expression:"{ active: !hasPermission(['service_create'], $store.state.project.projectAuthActions) }"}],class:["mr10","plus-cus",{"btn-permission-disable":!e.hasPermission(["service_create"],e.$store.state.project.projectAuthActions)}],attrs:{"data-test-id":"service_button_createService",theme:"primary",icon:"plus",title:e.$t("m.serviceConfig['新增']")},on:{click:e.onServiceCreatePermissonCheck}},[e._v("\n                        "+e._s(e.$t("m.serviceConfig['新增']"))+"\n                    ")]),e._v(" "),i("bk-button",{staticClass:"mr10",attrs:{theme:"default","data-test-id":"service_button_batchImportService",title:e.$t("m['导入']")},on:{click:e.importService}},[e._v("\n                        "+e._s(e.$t("m['导入']"))+"\n                    ")]),e._v(" "),i("bk-button",{attrs:{theme:"default","data-test-id":"service_button_batchDeleteService",title:e.$t("m.serviceConfig['批量删除']"),disabled:!e.checkList.length},on:{click:e.deleteCheck}},[e._v("\n                        "+e._s(e.$t("m.serviceConfig['批量删除']"))+"\n                    ")]),e._v(" "),i("div",{staticClass:"bk-search-name"},[i("div",{staticClass:"bk-search-content"},[i("bk-input",{attrs:{placeholder:e.moreSearch[0].placeholder||e.$t("m.serviceConfig['请输入服务名']"),clearable:!0,"right-icon":"bk-icon icon-search"},on:{enter:e.searchContent,clear:e.clearSearch},model:{value:e.moreSearch[0].value,callback:function(t){e.$set(e.moreSearch[0],"value",t)},expression:"moreSearch[0].value"}})],1),e._v(" "),i("bk-button",{staticClass:"ml10 filter-btn",attrs:{title:e.$t("m.deployPage['更多筛选条件']"),icon:" bk-itsm-icon icon-search-more"},on:{click:e.searchMore}})],1)],1),e._v(" "),i("search-info",{ref:"searchInfo",attrs:{"more-search":e.moreSearch}})],1),e._v(" "),i("bk-table",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:e.isDataLoading},expression:"{ isLoading: isDataLoading }"}],ref:"serviceTable",attrs:{data:e.dataList,size:"small",pagination:e.pagination},on:{"cell-mouse-enter":e.cellMouseEnter,"cell-mouse-leave":e.cellMouseLeave,"page-change":e.handlePageChange,"page-limit-change":e.handlePageLimitChange,"select-all":e.handleSelectAll,select:e.handleSelect}},[i("bk-table-column",{attrs:{type:"selection",width:"60",align:"center",selectable:e.disabledFn},scopedSlots:e._u([{key:"default",fn:function(t){return[e.hasPermission(["service_manage"],e.$store.state.project.projectAuthActions.concat(t.row.auth_actions))?[i("bk-checkbox",{attrs:{"data-test-id":"service_checkbox_checkService","true-value":e.trueStatus,"false-value":e.falseStatus},on:{change:function(i){return e.changeCheck(t.row)}},model:{value:t.row.checkStatus,callback:function(i){e.$set(t.row,"checkStatus",i)},expression:"props.row.checkStatus"}})]:[i("div",{staticStyle:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}},[i("span",{directives:[{name:"cursor",rawName:"v-cursor"}],staticClass:"checkbox-permission-disable",on:{click:function(i){return e.onServicePermissonCheck(["service_manage"],t.row)}}})])]]}}])}),e._v(" "),i("bk-table-column",{attrs:{label:e.$t("m.common['ID']"),"min-width":"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{attrs:{title:t.row.id}},[e._v(e._s(t.row.id||"--"))])]}}])}),e._v(" "),i("bk-table-column",{attrs:{label:e.$t("m.serviceConfig['服务名称']"),prop:"name","min-width":"200",width:e.changeFrom.name?"300":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.hasPermission(["service_manage"],e.$store.state.project.projectAuthActions.concat(t.row.auth_actions))?[t.row.id!==e.changeFrom.name?i("span",{staticClass:"bk-lable-primary",attrs:{title:t.row.name},on:{click:function(i){return e.changeEntry(t.row,"edit")}}},[e._v("\n                                "+e._s(t.row.name)+"\n                                "),i("i",{directives:[{name:"show",rawName:"v-show",value:e.tableHoverId===t.row.id,expression:"tableHoverId === props.row.id"}],staticClass:"bk-itsm-icon icon-itsm-icon-six",on:{click:function(i){return i.stopPropagation(),e.handleChange("name",t.row)}}})]):i("div",{staticClass:"hover-show-icon"},[i("bk-input",{model:{value:e.editValue,callback:function(t){e.editValue=t},expression:"editValue"}}),e._v(" "),i("div",{staticClass:"operation"},[i("i",{staticClass:"bk-itsm-icon icon-itsm-icon-fill-fit",on:{click:function(i){return e.submitEditService("name",t.row)}}}),e._v(" "),i("i",{staticClass:"bk-itsm-icon icon-itsm-icon-three-one",on:{click:e.closeEdit}})])],1)]:i("span",{directives:[{name:"cursor",rawName:"v-cursor"}],staticClass:"bk-lable-primary text-permission-disable",attrs:{":title":t.row.name},on:{click:function(i){return e.onServicePermissonCheck(["service_manage"],t.row)}}},[e._v("\n                            "+e._s(t.row.name)+"\n                        ")])]}}])}),e._v(" "),i("bk-table-column",{attrs:{label:e.$t("m.serviceConfig['类型']"),width:e.changeFrom.serviceType?"250":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.id!==e.changeFrom.serviceType?[e._l(e.serviceTypesMap,(function(s,a){return[t.row.key===s.key?i("span",{key:a,attrs:{title:s.name}},[e._v("\n                                    "+e._s(s.name)+"\n                                    "),i("i",{directives:[{name:"show",rawName:"v-show",value:e.tableHoverId===t.row.id,expression:"tableHoverId === props.row.id"}],staticClass:"bk-itsm-icon icon-itsm-icon-six",on:{click:function(i){return e.handleChange("key",t.row)}}})]):e._e()]}))]:i("div",{staticClass:"hover-show-icon"},[i("bk-select",{staticStyle:{width:"150px"},attrs:{placeholder:e.$t("m.serviceConfig['请选择服务类型']"),clearable:!1,searchable:"","font-size":"medium"},model:{value:e.editValue,callback:function(t){e.editValue=t},expression:"editValue"}},e._l(e.serviceTypeList,(function(e){return i("bk-option",{key:e.key,attrs:{id:e.key,name:e.name}})})),1),e._v(" "),i("div",{staticClass:"operation"},[i("i",{staticClass:"bk-itsm-icon icon-itsm-icon-fill-fit",on:{click:function(i){return e.submitEditService("key",t.row)}}}),e._v(" "),i("i",{staticClass:"bk-itsm-icon icon-itsm-icon-three-one",on:{click:e.closeEdit}})])],1)]}}])}),e._v(" "),i("bk-table-column",{attrs:{label:e.$t("m.common['创建人']")},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{attrs:{title:t.row.creator}},[e._v(e._s(t.row.creator||"--"))])]}}])}),e._v(" "),i("bk-table-column",{attrs:{label:e.$t("m.common['更新人']")},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{attrs:{title:t.row.updated_by}},[e._v(e._s(t.row.updated_by||"--"))])]}}])}),e._v(" "),i("bk-table-column",{attrs:{label:e.$t("m.serviceConfig['更新时间']"),width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{attrs:{title:t.row.update_at}},[e._v(e._s(t.row.update_at||"--"))])]}}])}),e._v(" "),i("bk-table-column",{attrs:{label:e.$t("m.serviceConfig['关联目录']"),width:e.changeFrom.bounded_catalogs?"250":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.id!==e.changeFrom.bounded_catalogs?i("span",{attrs:{title:t.row.bounded_catalogs[0]}},[e._v(e._s(t.row.bounded_catalogs[0]||"--")),i("i",{directives:[{name:"show",rawName:"v-show",value:e.tableHoverId===t.row.id,expression:"tableHoverId === props.row.id"}],staticClass:"bk-itsm-icon icon-itsm-icon-six",on:{click:function(i){return e.handleChange("catalog_id",t.row)}}})]):i("div",{staticClass:"hover-show-icon"},[i("bk-cascade",{staticStyle:{width:"250px"},attrs:{list:e.dirList,clearable:"","check-any-level":!0,"ext-popover-cls":"custom-cls"},on:{change:e.handleChangeTree}}),e._v(" "),i("div",{staticClass:"operation"},[i("i",{staticClass:"bk-itsm-icon icon-itsm-icon-fill-fit",on:{click:function(i){return e.submitEditService("catalog_id",t.row)}}}),e._v(" "),i("i",{staticClass:"bk-itsm-icon icon-itsm-icon-three-one",on:{click:e.closeEdit}})])],1)]}}])}),e._v(" "),i("bk-table-column",{attrs:{label:e.$t("m.serviceConfig['状态']"),width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"bk-status-color",class:{"bk-status-gray":!t.row.is_valid}}),e._v(" "),i("span",{staticStyle:{"margin-left":"5px"},attrs:{title:t.row.is_valid?e.$t("m.serviceConfig['启用']"):e.$t("m.serviceConfig['关闭']")}},[e._v("\n                            "+e._s(t.row.is_valid?e.$t('m.serviceConfig["启用"]'):e.$t('m.serviceConfig["关闭"]'))+"\n                        ")])]}}])}),e._v(" "),i("bk-table-column",{attrs:{label:e.$t("m.serviceConfig['操作']"),width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.hasPermission(["service_manage"],t.row.auth_actions.concat(e.$store.state.project.projectAuthActions))?i("router-link",{staticClass:"bk-button-text bk-primary",attrs:{"data-test-id":"service_link_linkToSLA",to:{name:"projectServiceSla",params:{id:t.row.id},query:{project_id:e.$store.state.project.id,catalog_id:e.$route.query.catalog_id}}}},[e._v("SLA")]):i("bk-button",{directives:[{name:"cursor",rawName:"v-cursor"}],staticClass:"btn-permission-disable",attrs:{text:"",theme:"primary"},on:{click:function(i){return e.onServicePermissonCheck(["service_manage"],t.row)}}},[e._v("\n                            SLA\n                        ")]),e._v(" "),e.hasPermission(["service_manage"],t.row.auth_actions.concat(e.$store.state.project.projectAuthActions))?i("bk-button",{attrs:{"data-test-id":"service_button_editService",theme:"primary",text:""},on:{click:function(i){return e.changeEntry(t.row,"edit")}}},[e._v("\n                            "+e._s(e.$t('m.serviceConfig["编辑"]'))+"\n                        ")]):i("bk-button",{directives:[{name:"cursor",rawName:"v-cursor"}],staticClass:"btn-permission-disable",attrs:{text:"",theme:"primary"},on:{click:function(i){return e.onServicePermissonCheck(["service_manage"],t.row)}}},[e._v("\n                            "+e._s(e.$t('m.serviceConfig["编辑"]'))+"\n                        ")]),e._v(" "),e.hasPermission(["service_manage"],t.row.auth_actions.concat(e.$store.state.project.projectAuthActions))?i("bk-button",{attrs:{"data-test-id":"service_button_editService",theme:"primary",text:""},on:{click:function(i){return e.changeEntry(t.row,"clone")}}},[e._v("\n                            "+e._s(e.$t('m.serviceConfig["克隆"]'))+"\n                        ")]):i("bk-button",{directives:[{name:"cursor",rawName:"v-cursor"}],staticClass:"btn-permission-disable",attrs:{text:"",theme:"primary"},on:{click:function(i){return e.onServicePermissonCheck(["service_manage"],t.row)}}},[e._v("\n                            "+e._s(e.$t('m.serviceConfig["克隆"]'))+"\n                        ")]),e._v(" "),i("bk-popover",{attrs:{placement:"bottom",theme:"light"}},[i("i",{staticClass:"bk-itsm-icon icon-move-new"}),e._v(" "),i("div",{staticStyle:{"white-space":"normal"},attrs:{slot:"content"},slot:"content"},[e.hasPermission(["service_manage"],t.row.auth_actions.concat(e.$store.state.project.projectAuthActions))?[i("bk-button",{staticStyle:{"font-size":"12px"},attrs:{"data-test-id":"service_button_deleteService3",theme:"primary",text:""},on:{click:function(i){return e.deleteOne(t.row)}}},[e._v("\n                                        "+e._s(e.$t('m.serviceConfig["删除"]'))+"\n                                    ")])]:i("bk-button",{directives:[{name:"cursor",rawName:"v-cursor"}],staticClass:"btn-permission-disable",staticStyle:{"font-size":"12px"},attrs:{"data-test-id":"service_button_deleteService1",text:"",theme:"primary"},on:{click:function(i){return e.onServicePermissonCheck(["service_manage"],t.row)}}},[e._v("\n                                    "+e._s(e.$t('m.serviceConfig["删除"]'))+"\n                                ")]),e._v(" "),i("bk-button",{staticStyle:{"font-size":"12px",display:"block"},attrs:{"data-test-id":"service_button_deleteService3",theme:"primary",text:""},on:{click:function(i){return e.exportService(t.row)}}},[e._v("\n                                    "+e._s(e.$t('m["导出"]'))+"\n                                ")])],2)])]}}])})],1)],1),e._v(" "),i("bk-dialog",{attrs:{width:"800",title:"导入服务",theme:"primary","auto-close":!1,"mask-close":!1},on:{confirm:e.importConfirm,cancel:e.closeImport},model:{value:e.isImportServiceShow,callback:function(t){e.isImportServiceShow=t},expression:"isImportServiceShow"}},[i("bk-form",{ref:"importForm",attrs:{id:"importForm"}},[i("bk-form-item",{attrs:{label:"选择目录",required:""}},[i("bk-cascade",{attrs:{list:e.dirList,clearable:"","check-any-level":!0,"ext-popover-cls":"custom-cls"},on:{change:e.handleChangeTree},model:{value:e.importCatalogId,callback:function(t){e.importCatalogId=t},expression:"importCatalogId"}})],1),e._v(" "),i("bk-form-item",{attrs:{label:"选择文件",required:""}},[i("bk-button",{staticClass:"bk-btn-file",staticStyle:{width:"100px"}},[i("input",{ref:"importInput",staticClass:"bk-input-file",attrs:{type:"file"},on:{change:e.handleFile}}),e._v("\n                        "+e._s(e.$t("m['选择文件']"))+"\n                        "),i("span",{staticClass:"bk-input-tip"},[e._v(e._s(e.$t("m['仅支持json文件！']")))])])],1),e._v(" "),0!==e.importFileNameList.length?e._l(e.importFileNameList,(function(t,s){return i("div",{key:s,staticClass:"file-list"},[e._v(e._s(t)+"\n                        "),i("i",{staticClass:"bk-itsm-icon icon-itsm-icon-three-one",on:{click:e.closeFile}})])})):e._e(),e._v(" "),e.isCheckImport?i("p",{staticClass:"import-error-tip"},[e._v(e._s(e.errorName)+"为必选项!")]):e._e()],2)],1)],1)],1)},a=[];s._withStripped=!0},"5Uk1":function(e,t,i){"use strict";i("Pu27")},"8+0e":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=v(i("m1cH")),a=v(i("gDS+")),r=v(i("14Xm")),n=v(i("D3Ub")),o=v(i("GQeE")),c=v(i("vDqi")),l=v(i("+qVm")),d=v(i("Ah+g")),u=v(i("0hVY")),h=v(i("PaSM")),m=i("CeR/"),p=v(i("fnP/"));function v(e){return e&&e.__esModule?e:{default:e}}t.default={name:"ServiceList",components:{NavTitle:l.default,searchInfo:d.default,treeInfo:p.default},mixins:[u.default,h.default],data:function(){return{treeInfo:{node:{}},rules:{},importCatalogId:[],isCheckImport:!1,isHasFile:!1,importFileNameList:[],errorName:"",formData:{name:"",desc:"",key:"",catalog_id:""},dirList:[],serviceTypeList:[],isBasicFormEditting:!1,isSubmitting:!1,isHiddenDirectory:!1,trueStatus:!0,falseStatus:!1,isDataLoading:!1,serviceTypesMap:[],dataList:[],checkList:[],pagination:{current:1,count:10,limit:10},moreSearch:[{name:this.$t('m.serviceConfig["服务名称"]'),type:"input",typeKey:"name",value:"",placeholder:this.$t('m.serviceConfig["请输入服务名"]')},{name:this.$t('m.serviceConfig["类型"]'),type:"select",typeKey:"key",value:"",list:[]},{name:this.$t('m.serviceConfig["服务级别"]'),type:"select",typeKey:"sla",value:"",list:[]}],addList:[],lineList:[],processInfo:{isShow:!1,title:this.$t('m.serviceConfig["流程预览"]'),position:{top:150},draggable:!0,loading:!0},changeFrom:{name:"",serviceType:"",bounded_catalogs:""},editValue:"",tableHoverId:"",isImportServiceShow:!1}},watch:{"treeInfo.node":function(){this.getList(1)},importCatalogId:function(e){0!==e.length&&(this.isCheckImport=!1)},isImportServiceShow:function(e){e||(this.importFileNameList=[])}},created:function(){this.rules.name=this.checkCommonRules("name").name,this.rules.directory_id=this.checkCommonRules("required").required,this.rules.key=this.checkCommonRules("required").required},mounted:function(){this.getServiceTypes(),this.getList(),this.getSlaList(),this.getServiceDirectory()},methods:{cellMouseEnter:function(e){this.tableHoverId=e.id},cellMouseLeave:function(e){this.tableHoverId=""},handleChangeTree:function(e){this.editValue=e[e.length-1]},closeFile:function(){this.importFileNameList=[]},handleFile:function(e){var t=e.target.value.split("\\").slice(-1);0!==t.length&&""!==t[0]?(this.importFileNameList.push(t[0]),this.isCheckImport=!1):this.importFileNameList=[]},closeImport:function(){this.isCheckImport=!1,this.isImportServiceShow=!1},importConfirm:function(){var e=this,t=new FormData;return t.append("file",this.$refs.importInput.files[0]),t.append("catalog_id",this.importCatalogId.slice(-1)),t.append("project_key",this.$route.query.project_id),0===this.importCatalogId.length?(this.isCheckImport=!0,void(this.errorName=this.$t('m["目录"]'))):0===this.importFileNameList.length?(this.isCheckImport=!0,void(this.errorName=this.$t('m["文件"]'))):(this.isImportServiceShow=!1,void this.$store.dispatch("serviceEntry/importService",t).then((function(t){e.$bkMessage({message:t.message,theme:"success"}),e.importCatalogId=[],e.isImportServiceShow=!1,e.isCheckImport=!1,e.getList(1)})))},importService:function(){this.isImportServiceShow=!0},exportService:function(e){window.open(window.SITE_URL+"api/service/projects/"+e.id+"/export/")},handleChange:function(e,t){switch(e){case"name":this.changeFrom.name=t.id,this.changeFrom.serviceType="",this.changeFrom.bounded_catalogs="",this.editValue=t.name;break;case"key":this.changeFrom.name="",this.changeFrom.serviceType=t.id,this.changeFrom.bounded_catalogs="",this.editValue=t.key;break;case"catalog_id":this.changeFrom.name="",this.changeFrom.serviceType="",this.changeFrom.bounded_catalogs=t.id}},closeEdit:function(){this.changeFrom.name="",this.changeFrom.serviceType="",this.changeFrom.bounded_catalogs=""},submitEditService:function(e,t){var i=this,s=t;s[e]=this.editValue;var a={catalog_id:s.catalog_id,id:s.id,key:s.key,name:s.name,project_key:s.project_key,desc:""};this.$store.dispatch("serviceEntry/updateService",a).then((function(e){i.$bkMessage({message:i.$t('m.serviceConfig["修改成功"]'),theme:"success"}),i.editValue="",i.closeEdit(),i.getList()}))},getList:function(e){var t=this;void 0!==e&&(this.pagination.current=e),this.checkList=[];var i={page:this.pagination.current,page_size:this.pagination.limit,project_key:this.$store.state.project.id,ordering:"-update_at",catalog_id:this.$route.query.catalog_id||this.treeInfo.node.id};this.moreSearch.forEach((function(e){""!==e.value&&e.typeKey&&(i[e.typeKey]=Array.isArray(e.value)?e.value.join(","):e.value)})),this.treeInfo.node.id&&(this.isDataLoading=!0,this.$store.dispatch("catalogService/getServices",i).then((function(e){null!==e.data&&(0,o.default)(e.data).length>0?(t.dataList=e.data.items,t.dataList.forEach((function(e,i){t.$set(e,"checkStatus",!1)})),t.pagination.current=e.data.page,t.pagination.count=e.data.count):t.dataList=[]})).catch((function(e){(0,m.errorHandler)(e,t)})).finally((function(){t.isDataLoading=!1})))},getServiceDirectory:function(){var e=this;return(0,n.default)(r.default.mark((function t(){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("serviceCatalog/getTreeData",{show_deleted:!0,project_key:e.$store.state.project.id}).then((function(t){e.dirList=t.data[0]&&t.data[0].children?t.data[0].children:t.data})).catch((function(t){(0,m.errorHandler)(t,e)}));case 2:case"end":return t.stop()}}),t,e)})))()},onBasicFormSubmit:function(){var e=this;this.$refs.basicForm.validate().then((0,n.default)(r.default.mark((function t(){var i;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=JSON.parse((0,a.default)(e.formData))).id=e.serviceId||void 0,i.project_key=e.$store.state.project.id,e.isSubmitting=!0,t.next=6,e.createService(i);case 6:e.isSubmitting=!1;case 7:case"end":return t.stop()}}),t,e)}))))},onBasicFormCancel:function(){this.isBasicFormEditting=!1},createService:function(e){var t=this;this.$store.dispatch("serviceEntry/createService",e).then((function(e){t.$bkMessage({message:t.$t('m.deployPage["保存成功"]'),theme:"success"}),t.$router.push({name:"projectServiceEdit",params:{type:"new",step:"basic"},query:{serviceId:e.data.id,project_id:t.$store.state.project.id,fromCatalog:t.treeInfo.node.id}}),t.isBasicFormEditting=!1})).catch((function(e){(0,m.errorHandler)(e,t)}))},getServiceTypes:function(){var e=this;this.$store.dispatch("getCustom").then((function(t){e.serviceTypeList=t.data,e.serviceTypesMap=t.data,e.moreSearch[1].list=t.data})).catch((function(t){(0,m.errorHandler)(t,e)}))},getSlaList:function(){var e=this,t={is_enabled:!0,project_key:this.$store.state.project.id};this.$store.dispatch("slaManagement/getProtocolsList",{params:t}).then((function(t){e.slaList=t.data,e.moreSearch[2].list=t.data,e.moreSearch[2].list.forEach((function(t){e.$set(t,"key",t.id)}))})).catch((function(t){(0,m.errorHandler)(t,e)}))},disabledFn:function(e,t){return!e.bounded_catalogs[0]},onServiceCreatePermissonCheck:function(){if(this.hasPermission(["service_create"],this.$store.state.project.projectAuthActions))this.$router.push({name:"projectServiceEdit",params:{type:"new",step:"basic"},query:{project_id:this.$route.query.project_id,catalog_id:this.$route.query.catalog_id}});else{var e=this.$store.state.project.projectInfo,t={project:[{id:e.key,name:e.name}]};this.applyForPermission(["service_create"],this.$store.state.project.projectAuthActions,t)}},changeEntry:function(e,t){var i=this;return(0,n.default)(r.default.mark((function s(){var a,n;return r.default.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(a=e.id,"clone"!==t){s.next=15;break}return s.prev=2,s.next=5,i.$store.dispatch("serviceEntry/cloneService",e.id);case 5:n=s.sent,a=n.data.id,n.data&&n.data.id&&i.$router.push({name:"projectServiceEdit",params:{type:"edit",step:"basic"},query:{serviceId:a,project_id:i.$store.state.project.id,catalog_id:i.$route.query.catalog_id}}),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(2),i.$bkMessage({theme:"warning",message:s.t0.data.message});case 13:s.next=16;break;case 15:i.$router.push({name:"projectServiceEdit",params:{type:"edit",step:"basic"},query:{serviceId:a,project_id:i.$store.state.project.id,catalog_id:i.$route.query.catalog_id}});case 16:case"end":return s.stop()}}),s,i,[[2,10]])})))()},onServicePermissonCheck:function(e,t){var i=this.$store.state.project.projectInfo,a={service:[{id:t.id,name:t.name}],project:[{id:i.key,name:i.name}]};this.applyForPermission(e,[].concat((0,s.default)(this.$store.state.project.projectAuthActions),(0,s.default)(t.auth_actions)),a)},deleteCheck:function(){var e=this;this.$bkInfo({type:"warning",title:this.$t('m.serviceConfig["确认删除服务？"]'),subTitle:this.$t('m.serviceConfig["服务一旦删除，对应的服务将不可用。请谨慎操作。"]'),confirmFn:function(){var t=e.checkList.map((function(e){return e.id})).join(",");e.secondClick||(e.secondClick=!0,e.$store.dispatch("serviceEntry/batchDeleteService",{id:t}).then((function(t){e.$bkMessage({message:e.$t('m.serviceConfig["删除成功"]'),theme:"success"}),e.getList(1)})).catch((function(t){(0,m.errorHandler)(t,e)})).finally((function(){e.secondClick=!1})))}})},deleteOne:function(e){var t=this;this.$bkInfo({type:"warning",title:this.$t('m.serviceConfig["确认删除服务？"]'),subTitle:this.$t('m.serviceConfig["服务一旦删除，对应的服务将不可用。请谨慎操作。"]'),confirmFn:function(){var i=e.id;t.secondClick||(t.secondClick=!0,t.$store.dispatch("serviceEntry/deleteService",i).then((function(e){t.$bkMessage({message:t.$t('m.serviceConfig["删除成功"]'),theme:"success"}),1===t.dataList.length&&(t.pagination.current=1===t.pagination.current?1:t.pagination.current-1),t.getList()})).catch((function(e){(0,m.errorHandler)(e,t)})).finally((function(){t.secondClick=!1})))}})},searchContent:function(){this.getList(1)},clearSearch:function(){this.moreSearch.forEach((function(e){e.value=""})),this.getList(1)},searchMore:function(){this.$refs.searchInfo.searchMore()},handlePageChange:function(e){this.pagination.current=e,this.getList()},handlePageLimitChange:function(){this.pagination.limit=arguments[0],this.getList()},changeCheck:function(e){this.$refs.serviceTable.toggleRowSelection(e,e.checkStatus),e.checkStatus?this.checkList.some((function(t){return t.id===e.id}))||this.checkList.push(e):this.checkList=this.checkList.filter((function(t){return t.id!==e.id}))},handleSelectAll:function(e){var t=this;this.dataList.forEach((function(i){!i.bounded_catalogs[0]&&t.hasPermission(["service_manage"],[].concat((0,s.default)(t.$store.state.project.projectAuthActions),(0,s.default)(i.auth_actions)))&&(i.checkStatus=!!e.length)})),this.checkList=e.filter((function(e){return t.hasPermission(["service_manage"],[].concat((0,s.default)(t.$store.state.project.projectAuthActions),(0,s.default)(e.auth_actions)))}))},handleSelect:function(e,t){this.checkList=e},processShow:function(e){var t=this,i=e.workflow;this.processInfo.isShow=!this.processInfo.isShow,this.processInfo.loading=!0,c.default.all([this.$store.dispatch("deployCommon/getNodeVersion",{id:i}),this.$store.dispatch("deployCommon/getLineVersion",{id:i})]).then(c.default.spread((function(e,i){t.addList=e.data;for(var s=0;s<t.addList.length;s++)t.addList[s].indexInfo=s;t.lineList=i.data.items}))).finally((function(){t.processInfo.loading=!1}))},hiddenTree:function(){this.isHiddenDirectory=!this.isHiddenDirectory}}}},Pu27:function(e,t,i){},pdRj:function(e,t,i){"use strict";i.r(t);var s=i("/2XR"),a=i("wnDa");for(var r in a)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("5Uk1");var n=i("KHd+"),o=Object(n.a)(a.default,s.a,s.b,!1,null,"1d2091ef",null);o.options.__file="src/views/service/serviceList.vue",t.default=o.exports},wnDa:function(e,t,i){"use strict";i.r(t);var s=i("8+0e"),a=i.n(s);for(var r in s)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return s[e]}))}(r);t.default=a.a}}]);