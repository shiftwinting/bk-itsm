(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8okI":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n("oF3Q")),i=c(n("sk9p")),o=c(n("P2sY")),a=c(n("EJiy")),s=c(n("FyfS")),d=c(n("gHt9"));function c(e){return e&&e.__esModule?e:{default:e}}t.default={name:"bk-tree",components:{CollapseTransition:d.default},props:{data:{type:Array,default:function(){return[]}},parent:{type:Object,default:function(){return null}},multiple:{type:Boolean,default:!1},nodeKey:{type:String,default:"id"},draggable:{type:Boolean,default:!0},dragSort:{type:Boolean,default:!0},hasBorder:{type:Boolean,default:!1},dragAfterExpanded:{type:Boolean,default:!0},isDeleteRoot:{type:Boolean,default:!1},emptyText:{type:String,default:function(){return this.$t('m.serviceConfig["暂无数据"]')}},tpl:Function},data:function(){return{halfcheck:!0,isBorder:this.hasBorder,bkTreeDrag:{},visibleStatus:[],isEmpty:!1,searchFlag:!1,isDragSort:this.dragSort}},watch:{data:function(){this.initTreeData()},dragSort:function(e){this.isDragSort=!!e},hasBorder:function(e){this.isBorder=!!e}},mounted:function(){var e=this;this.$on("childChecked",(function(t,n){if(t.children&&t.children.length){var r=!0,i=!1,o=void 0;try{for(var a,d=(0,s.default)(t.children);!(r=(a=d.next()).done);r=!0){var c=a.value;c.disabled||e.$set(c,"checked",n),e.$emit("on-check",c,n)}}catch(e){i=!0,o=e}finally{try{!r&&d.return&&d.return()}finally{if(i)throw o}}}})),this.$on("parentChecked",(function(t,n){if(t.disabled||e.$set(t,"checked",n),!t.parent)return!1;var r=t.parent.children.some((function(e){return e.checked})),i=t.parent.children.every((function(e){return e.checked}));if(e.halfcheck){if(i?e.$set(t.parent,"halfcheck",!1):r?e.$set(t.parent,"halfcheck",!0):e.$set(t.parent,"halfcheck",!1),!n&&r)return e.$set(t.parent,"halfcheck",!0),!1;e.$emit("parentChecked",t.parent,n)}else n&&i&&e.$emit("parentChecked",t.parent,n),n||e.$emit("parentChecked",t.parent,n)})),this.$on("on-check",(function(t,n){e.$emit("parentChecked",t,n),e.$emit("childChecked",t,n),e.$emit("dropTreeChecked",t,n)})),this.$on("toggleshow",(function(t,n){e.$set(t,"visible",n),e.visibleStatus.push(t.visible),e.visibleStatus.every((function(e){return!e}))?e.isEmpty=!0:n&&t.parent&&(e.searchFlag=!1,e.$emit("toggleshow",t.parent,n))})),this.$on("cancelSelected",(function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=(0,s.default)(e.$children);!(t=(i=o.next()).done);t=!0){var a=i.value,d=!0,c=!1,l=void 0;try{for(var h,f=(0,s.default)(a.data);!(d=(h=f.next()).done);d=!0){var u=h.value;a.$set(u,"selected",!1)}}catch(e){c=!0,l=e}finally{try{!d&&f.return&&f.return()}finally{if(c)throw l}}a.$children&&a.$emit("cancelSelected",a)}}catch(e){n=!0,r=e}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}})),this.initTreeData()},destroyed:function(){this.$delete(window,"bkTreeDrag")},methods:{gid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))},setDragNode:function(e,t){window.bkTreeDrag={},window.bkTreeDrag[e]=t},getDragNode:function(e){return window.bkTreeDrag[e]},hasInGenerations:function(e,t){if(e.hasOwnProperty("children")&&e.children){var n=!0,r=!1,i=void 0;try{for(var o,a=(0,s.default)(e.children);!(n=(o=a.next()).done);n=!0){var d=o.value;if(d===t)return!0;if(d.children)return this.hasInGenerations(d,t)}}catch(e){r=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}return!1}},isDragSortHolder:function(e,t){if(e.hasOwnProperty("children")&&e.children){var n=!0,r=!1,i=void 0;try{for(var o,a=(0,s.default)(e.children);!(n=(o=a.next()).done);n=!0){var d=o.value;if(d[this.nodeKey]===t[this.nodeKey])return!1;if(d.children)return this.isDragSortHolder(d,t)}}catch(e){r=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}return!0}},setNodeIcon:function(e){return e.children&&e.children.length?e.expanded?e.openedIcon:e.closedIcon:e.icon},drop:function(e,t){var n=this;t.preventDefault(),t.stopPropagation();var r=t.dataTransfer.getData("gid"),i=this.getDragNode(r);if(i.parent===e||null===i.parent||i===e)return!1;if(this.hasInGenerations(i,e))return!1;if(this.isDragSort){if(i.parent[this.nodeKey]!==e.parent[this.nodeKey])return;var o=i.parent.children.findIndex((function(e){return e[n.nodeKey]===i[n.nodeKey]})),a=e.parent.children.findIndex((function(t){return t[n.nodeKey]===e[n.nodeKey]}));i.parent.children.splice(o,1,e),e.parent.children.splice(a,1,i)}else{var s=i.parent.children;e.children&&-1===e.children.indexOf(i)?(e.children.push(i),e.children.length&&this.isShowIcon&&(this.$set(e,"openedIcon",this.openedIcon),this.$set(e,"closedIcon",this.closedIcon)),s.splice(s.indexOf(i),1),this.isShowIcon&&(i.parent.children&&i.parent.children.length?(this.$set(i.parent,"openedIcon",this.openedIcon),this.$set(i.parent,"closedIcon",this.closedIcon)):this.$set(i.parent,"icon",this.nodeIcon)),e.children[e.children.length-1].parent=e):(this.isShowIcon&&(this.$set(e,"openedIcon",this.openedIcon),this.$set(e,"closedIcon",this.closedIcon)),this.$set(e,"children",[i]),s.splice(s.indexOf(i),1)),this.$set(e,"expanded",this.dragAfterExpanded)}this.$emit("on-drag-node",{dragNode:i,targetNode:e,currentParent:i.parent||{}})},drag:function(e,t){var n=this.gid();this.setDragNode(n,e),t.dataTransfer.setData("gid",n)},dragover:function(e){e.preventDefault(),e.stopPropagation()},initTreeData:function(){var e=!0,t=!1,n=void 0;try{for(var r,i=(0,s.default)(this.data);!(e=(r=i.next()).done);e=!0){var o=r.value;this.$set(o,"parent",this.parent),o.children&&o.children.length?(o.hasOwnProperty("disabled")&&this.$delete(o,"disabled"),o.hasOwnProperty("icon")&&this.$delete(o,"icon")):(o.hasOwnProperty("openedIcon")&&this.$delete(o,"openedIcon"),o.hasOwnProperty("closedIcon")&&this.$delete(o,"closedIcon")),this.multiple?o.hasOwnProperty("selected")&&this.$delete(o,"selected"):o.hasOwnProperty("checked")&&this.$delete(o,"checked")}}catch(e){t=!0,n=e}finally{try{!e&&i.return&&i.return()}finally{if(t)throw n}}},expandNode:function(e){this.$set(e,"expanded",!e.expanded),e.async&&!e.children&&this.$emit("async-load-nodes",e),e.children&&e.children.length&&this.$emit("on-expanded",e,e.expanded)},onExpanded:function(e){e.children&&e.children.length&&this.$emit("on-expanded",e,e.expanded)},triggerExpand:function(e){(!e.parent||e.children&&e.children.length||e.async)&&this.expandNode(e)},asyncLoadNodes:function(e){e.async&&!e.children&&this.$emit("async-load-nodes",e)},isLeaf:function(e){return!(e.children&&e.children.length)&&e.parent&&!e.async},addNode:function(e,t){var n={};if(this.$set(e,"expanded",!0),void 0===t)throw new ReferenceError("newNode is required but undefined");if("object"===(void 0===t?"undefined":(0,a.default)(t))&&!t.hasOwnProperty("name"))throw new ReferenceError("the name property is missed");if("object"===(void 0===t?"undefined":(0,a.default)(t))&&!t.hasOwnProperty(this.nodeKey))throw new ReferenceError("the nodeKey property is missed");"object"===(void 0===t?"undefined":(0,a.default)(t))&&t.hasOwnProperty("name")&&t.hasOwnProperty(this.nodeKey)&&(n=(0,o.default)({},t)),this.isLeaf(e)?(this.$set(e,"children",[]),e.children.push(n)):e.children.push(n),this.$emit("addNode",{parentNode:e,newNode:t})},addNodes:function(e,t){var n=!0,r=!1,i=void 0;try{for(var o,a=(0,s.default)(t);!(n=(o=a.next()).done);n=!0){var d=o.value;this.addNode(e,d)}}catch(e){r=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}},onClick:function(e){this.$emit("on-click",e)},onIcon:function(e){this.$emit("on-icon",e)},onCheck:function(e,t){this.$emit("on-check",e,t)},nodeCheckStatusChange:function(e,t){this.$emit("dropTreeChecked",e,t)},onDragNode:function(e){this.$emit("on-drag-node",e)},delNode:function(e,t){if(null==e){if(!this.isDeleteRoot)throw new ReferenceError("the root element can't deleted!");this.data.splice(0,1)}else e.children.splice(e.children.indexOf(t),1);this.$emit("delNode",{parentNode:e,delNode:t})},changeCheckStatus:function(e,t){this.$emit("on-check",e,t.target.checked)},nodeSelected:function(e){var t=function e(t){return"UL"===t.$parent.$el.nodeName?e(t=t.$parent):t}(this);if(!this.multiple){var n=!0,r=!1,i=void 0;try{for(var o,a=(0,s.default)(t.data||[]);!(n=(o=a.next()).done);n=!0){var d=o.value;this.$set(d,"selected",!1),this.$emit("cancelSelected",t)}}catch(e){r=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}}this.$set(e,"selected",!e.selected),this.$emit("on-click",e)},iconSelected:function(e,t){var n=function e(t){return"UL"===t.$parent.$el.nodeName?e(t=t.$parent):t}(this);if(!this.multiple){var r=!0,i=!1,o=void 0;try{for(var a,d=(0,s.default)(n.data||[]);!(r=(a=d.next()).done);r=!0){var c=a.value;this.$set(c,"selected",!1),this.$emit("cancelSelected",n)}}catch(e){i=!0,o=e}finally{try{!r&&d.return&&d.return()}finally{if(i)throw o}}}this.$set(e,"selected",!e.selected),this.$emit("on-click",e);var l={node:e,event:t};this.$emit("on-icon",l)},nodeDataHandler:function(e,t,n){t=t||this.data;var a=[],d=n,c=!0,l=!1,h=void 0;try{for(var f,u=(0,s.default)(t);!(c=(f=u.next()).done);c=!0){var p=f.value,v=!0,g=!1,m=void 0;try{for(var y,$=(0,s.default)((0,r.default)(e));!(v=(y=$.next()).done);v=!0){var k=y.value,x=(0,i.default)(k,2),_=x[0],b=x[1];if(p[_]===b)if(d.length&&d){var w={};if("[object Array]"===Object.prototype.toString.call(d))for(var I=0;I<d.length;I++)p.hasOwnProperty(d[I])&&(w[d[I]]=p[d[I]]);"[object String]"===Object.prototype.toString.call(d)&&(w[d]=p[d]),p.children&&p.children.length||a.push(w)}else{var C=(0,o.default)({},p);delete C.parent,C.children&&C.children.length||a.push(C)}}}catch(e){g=!0,m=e}finally{try{!v&&$.return&&$.return()}finally{if(g)throw m}}p.children&&p.children.length&&(a=a.concat(this.nodeDataHandler(e,p.children,d)))}}catch(e){l=!0,h=e}finally{try{!c&&u.return&&u.return()}finally{if(l)throw h}}return a},getNode:function(e){return this.multiple?this.nodeDataHandler({checked:!0},this.data,e):this.nodeDataHandler({selected:!0},this.data,e)},searchNode:function(e,t){t=t||this.data;var n=!0,r=!1,i=void 0;try{for(var o,a=(0,s.default)(t);!(n=(o=a.next()).done);n=!0){var d,c=o.value,l=!!e&&("function"==typeof e?e(c):c.name.indexOf(e)>-1);if(this.$set(c,"searched",l),this.$set(c,"visible",!1),this.$emit("toggleshow",c,!e||l),c.children&&c.children.length)l&&this.$set(c,"expanded",!0),this.searchFlag=!0,(d=this.visibleStatus).splice.apply(d,[0,this.visibleStatus.length].concat([])),this.searchNode(e,c.children)}}catch(e){r=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}}}}},FIIM:function(e,t,n){},IAUg:function(e,t,n){"use strict";n("FIIM")},S4BJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"bk-tree",class:{"bk-has-border-tree":e.isBorder}},e._l(e.data,(function(t,r){return!t.hasOwnProperty("visible")||t.visible?n("li",{key:t[e.nodeKey]?t[e.nodeKey]:t.name,class:{leaf:e.isLeaf(t),"tree-first-node":!e.parent&&0===r,"tree-only-node":!e.parent&&1===e.data.length,"tree-second-node":!e.parent&&1===r,single:!e.multiple},on:{drop:function(n){return e.drop(t,n)},dragover:function(t){return e.dragover(t)}}},[n("div",{class:["tree-drag-node",e.multiple?"":"tree-singe"],attrs:{draggable:e.draggable},on:{dragstart:function(n){return e.drag(t,n)}}},[!t.parent||t.children&&t.children.length||t.async?n("span",{class:["bk-icon","tree-expanded-icon",t.expanded?"icon-down-shape":"icon-right-shape"],on:{click:function(n){return n.stopPropagation(),e.expandNode(t)}}}):e._e(),e._v(" "),e.multiple&&!t.nocheck?n("label",{class:[t.halfcheck?"bk-form-half-checked":"bk-form-checkbox","bk-checkbox-small","mr5"]},[e.multiple?n("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"item.checked"}],attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:Array.isArray(t.checked)?e._i(t.checked,null)>-1:t.checked},on:{change:[function(n){var r=t.checked,i=n.target,o=!!i.checked;if(Array.isArray(r)){var a=e._i(r,null);i.checked?a<0&&e.$set(t,"checked",r.concat([null])):a>-1&&e.$set(t,"checked",r.slice(0,a).concat(r.slice(a+1)))}else e.$set(t,"checked",o)},function(n){return n.stopPropagation(),e.changeCheckStatus(t,n)}]}}):e._e()]):e._e(),e._v(" "),n("div",{staticClass:"tree-node",on:{click:function(n){return e.triggerExpand(t)}}},[t.icon||t.openedIcon||t.closedIcon?n("span",{staticClass:"node-icon bk-icon",class:e.setNodeIcon(t)}):e._e(),e._v(" "),t.loading&&t.expanded?n("div",{staticClass:"bk-spin-loading bk-spin-loading-mini bk-spin-loading-primary loading"},[n("div",{staticClass:"rotate rotate1"}),e._v(" "),n("div",{staticClass:"rotate rotate2"}),e._v(" "),n("div",{staticClass:"rotate rotate3"}),e._v(" "),n("div",{staticClass:"rotate rotate4"}),e._v(" "),n("div",{staticClass:"rotate rotate5"}),e._v(" "),n("div",{staticClass:"rotate rotate6"}),e._v(" "),n("div",{staticClass:"rotate rotate7"}),e._v(" "),n("div",{staticClass:"rotate rotate8"})]):e._e(),e._v(" "),n("span",{staticClass:"node-title",class:{"node-selected":t.selected},staticStyle:{"padding-right":"16px","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis",width:"calc(100% - 50px)",position:"absolute",top:"0",left:"42px"},attrs:{title:t.name},on:{click:function(n){return e.nodeSelected(t)}}},[e._v(e._s(t.name))]),e._v(" "),void 0!==t.service_count?n("span",{staticClass:"bk-tree-count"},[e._v(e._s(t.service_count))]):e._e(),e._v(" "),n("i",{staticClass:"bk-icon icon-more bk-tree-point",class:{"bk-point-selected":t.selected},on:{click:function(n){return n.stopPropagation(),e.iconSelected(t,n)}}})])]),e._v(" "),n("collapse-transition",[e.isLeaf(t)?e._e():n("bk-tree",{directives:[{name:"show",rawName:"v-show",value:t.expanded,expression:"item.expanded"}],attrs:{"drag-after-expanded":e.dragAfterExpanded,draggable:e.draggable,"drag-sort":e.dragSort,tpl:e.tpl,data:t.children,halfcheck:e.halfcheck,parent:t,"is-delete-root":e.isDeleteRoot,multiple:e.multiple},on:{dropTreeChecked:e.nodeCheckStatusChange,"async-load-nodes":e.asyncLoadNodes,"on-expanded":e.onExpanded,"on-click":e.onClick,"on-check":e.onCheck,"on-icon":e.onIcon,"on-drag-node":e.onDragNode}})],1)],1):e._e()})),0)},i=[];r._withStripped=!0},Sh1J:function(e,t,n){"use strict";n.r(t);var r=n("evv+"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=i.a},VKFn:function(e,t,n){n("bBy9"),n("FlQf"),e.exports=n("ldVq")},"Vm/S":function(e,t,n){"use strict";n.r(t);var r=n("S4BJ"),i=n("oz8L");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("evKu");var a=n("KHd+"),s=Object(a.a)(i.default,r.a,r.b,!1,null,"6cc0203d",null);s.options.__file="src/views/service/directoryCom/commonTree/tree.vue",t.default=s.exports},evKu:function(e,t,n){"use strict";n("uBXD")},"evv+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n("Vm/S")),i=s(n("PaSM")),o=n("CeR/"),a=s(n("0hVY"));function s(e){return e&&e.__esModule?e:{default:e}}t.default={name:"treeInfo",components:{tree:r.default},mixins:[i.default,a.default],props:{treeInfo:{type:Object,default:function(){return{node:{}}}}},data:function(){return{isTreeLoading:!1,firstStatus:!1,clickSecond:!1,searchWord:"",treeList:[],expandIdList:[],addDirectory:{optType:"add",show:!1,title:"",width:600,formInfo:{parent__id:"",parent___name:"",name:"",desc:""}},rules:{},parentIds:[]}},computed:{showMore:function(){return this.$store.state.serviceCatalog.treeMore}},mounted:function(){this.getTreeList(),this.rules.name=this.checkCommonRules("name").name},methods:{getTreeList:function(){var e=this;this.isTreeLoading=!0,this.$store.dispatch("serviceCatalog/getTreeData",{show_deleted:!0,project_key:this.$store.state.project.id}).then((function(t){e.treeList=t.data,e.getTreeParentId(t.data,e.$route.query.catalog_id),e.firstStatus||(e.treeInfo.node=e.treeList[0]),e.treeList.forEach((function(t){e.recordCheckFn(t),e.firstStatus||e.$set(t,"selected",!0)})),e.firstStatus=!0,e.treeInfo.node.id&&e.treeList.forEach((function(t){e.getNodeTree(t)})),1!==e.$route.query.catalog_id&&(e.treeList[0].selected=!1)})).catch((function(t){(0,o.errorHandler)(t,e)})).finally((function(){e.isTreeLoading=!1}))},getTreeParentId:function(e,t){for(var n=this,r=0;r<e.length;r++){var i=e[r];i.id===t?i.route.forEach((function(e){n.parentIds.push(e.id)})):i.children&&i.children.length>0&&this.getTreeParentId(i.children,t)}},nodeClick:function(e){this.treeInfo.node=e,this.$route.query.catalog_id=e.id,this.$store.commit("serviceCatalog/changeTreeOperat",!1)},iconNode:function(e){this.treeInfo.node=e.node,this.$store.commit("serviceCatalog/changeTreeOperat",!0);var t=this.$refs.treeOperat;window.innerHeight-108<=e.event.pageY?t.style.top=e.event.pageY-240+"px":t.style.top=e.event.pageY-144+"px"},hidden:function(e){var t=this.$refs.treeTree;t&&!t.contains(e.target)&&this.$store.commit("serviceCatalog/changeTreeOperat",!1)},nodeExpand:function(e,t){for(var n=-1,r=0;r<this.expandIdList.length;r++)e.id===this.expandIdList[r]&&(n=r);t?-1===n&&this.expandIdList.push(e.id):-1!==n&&this.expandIdList.splice(n,1)},recordCheckFn:function(e){var t=this;this.expandIdList.forEach((function(t){t===e.id&&(e.expanded=!0)})),this.treeInfo.node.id===e.id&&this.$set(e,"selected",!0),null===e.children||e.children&&!e.children.length||e.children.forEach((function(e){t.recordCheckFn(e)}))},getNodeTree:function(e){var t=this;this.parentIds.includes(e.id)&&this.$set(e,"expanded",!0),this.$route.query.catalog_id===e.id&&1!==e.id&&(this.$set(e,"expanded",!0),this.$set(e,"selected",!0)),null===e.children||e.children&&!e.children.length||e.children.forEach((function(n){n.parent_id===e.id&&t.$route.query.catalog_id===n.id&&t.$set(e,"expanded",!0),t.getNodeTree(n)}))},searchInfo:function(){this.$refs.tree5.searchNode(this.searchWord)},clearInfo:function(){this.searchWord="",this.$refs.tree5.searchNode(this.searchWord)},openAdd:function(e){if(this.hasPermission(["catalog_create"],this.$store.state.project.projectAuthActions))"3"!==String(this.treeInfo.node.level)&&(this.treeInfo.node.id?(this.toggleDialog("add"),this.addDirectory.optType="add",this.addDirectory.formInfo={parent__id:"root"===e?1:this.treeInfo.node.id,parent___name:this.treeInfo.node.name,name:"",desc:""}):this.$bkMessage({message:this.$t('m.serviceConfig["请选择父级目录再进行新增"]'),theme:"warning"}));else{var t=this.$store.state.project.projectInfo,n={project:[{id:t.key,name:t.name}]};this.applyForPermission(["catalog_create"],this.$store.state.project.projectAuthActions,n)}},toggleDialog:function(e){"add"===e?this.addDirectory.title=this.$t('m.serviceConfig["新增服务目录"]'):"update"===e&&(this.addDirectory.title=this.$t('m.serviceConfig["编辑服务目录"]')),this.addDirectory.show=!this.addDirectory.show,this.$refs.dynamicForm.clearError()},submitAdd:function(){var e=this;this.$refs.dynamicForm.validate().then((function(t){var n=e.addDirectory.formInfo;n.project_key=e.$store.state.project.id,e.clickSecond||(e.clickSecond=!0,"add"===e.addDirectory.optType?e.$store.dispatch("serviceCatalog/create",n).then((function(t){e.$bkMessage({message:e.$t('m.serviceConfig["新增目录成功"]'),theme:"success"}),e.getTreeList(),e.toggleDialog()})).catch((function(t){(0,o.errorHandler)(t,e)})).finally((function(){e.clickSecond=!1})):"update"===e.addDirectory.optType&&(""===e.addDirectory.formInfo.parent__id&&delete e.addDirectory.formInfo.parent__id,e.$store.dispatch("serviceCatalog/update",n).then((function(t){e.$bkMessage({message:e.$t('m.serviceConfig["更新目录成功"]'),theme:"success"}),e.getTreeList(),e.toggleDialog()})).catch((function(t){(0,o.errorHandler)(t,e)})).finally((function(){e.clickSecond=!1}))))}),(function(e){}))},openUpdate:function(){if(this.hasPermission(["catalog_edit"],this.$store.state.project.projectAuthActions))this.treeInfo.node.id?(this.addDirectory.optType="update",this.addDirectory.formInfo={parent__id:this.treeInfo.node.parent_id,parent___name:this.treeInfo.node.parent_name,id:this.treeInfo.node.id,name:this.treeInfo.node.name,desc:this.treeInfo.node.desc},this.toggleDialog("update")):this.$bkMessage({message:this.$t('m.serviceConfig["请选择需要编辑的目录"]'),theme:"warning"});else{var e=this.$store.state.project.projectInfo,t={project:[{id:e.key,name:e.name}]};this.applyForPermission(["catalog_edit"],this.$store.state.project.projectAuthActions,t)}},openDelete:function(){var e=this;if(this.hasPermission(["catalog_delete"],this.$store.state.project.projectAuthActions))this.treeInfo.node.id?this.treeInfo.node.children&&this.treeInfo.node.children.length?this.$bkMessage({message:this.$t('m.serviceConfig["请先删除子目录"]'),theme:"warning"}):this.$bkInfo({type:"warning",title:this.$t('m.serviceConfig["确认删除此服务目录？"]'),subTitle:this.$t('m.serviceConfig["服务目录一旦删除，此服务目录将不可用，请谨慎操作。"]'),confirmFn:function(){e.clickSecond||(e.clickSecond=!0,e.$store.dispatch("serviceCatalog/delete",e.treeInfo.node.id).then((function(t){e.$bkMessage({message:e.$t('m.serviceConfig["删除目录成功"]'),theme:"success"}),e.getTreeList(),e.firstStatus=!1})).catch((function(t){(0,o.errorHandler)(t,e)})).finally((function(){e.clickSecond=!1})))}}):this.$bkMessage({message:this.$t('m.serviceConfig["请选择要删除的目录"]'),theme:"warning"});else{var t=this.$store.state.project.projectInfo,n={project:[{id:t.key,name:t.name}]};this.applyForPermission(["catalog_delete"],this.$store.state.project.projectAuthActions,n)}},onDragNode:function(){var e=this;if(!(arguments[0].currentParent.children.length<=1||this.clickSecond)){this.clickSecond=!0;var t={new_order:arguments[0].currentParent.children.map((function(e){return e.id}))},n=arguments[0].dragNode.id;this.$store.dispatch("serviceCatalog/moveNode",{params:t,id:n}).then((function(e){})).catch((function(t){(0,o.errorHandler)(t,e)})).finally((function(){e.clickSecond=!1}))}}}}},"fnP/":function(e,t,n){"use strict";n.r(t);var r=n("kd9L"),i=n("Sh1J");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("IAUg");var a=n("KHd+"),s=Object(a.a)(i.default,r.a,r.b,!1,null,"322db743",null);s.options.__file="src/views/service/directoryCom/treeInfo.vue",t.default=s.exports},gHt9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={"before-enter":function(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.height="0",e.style.paddingTop=0,e.style.paddingBottom=0},enter:function(e){e.dataset.oldOverflow=e.style.overflow,0!==e.scrollHeight?(e.style.height=e.scrollHeight+"px",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.height="",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},"after-enter":function(e){e.style.height="",e.style.overflow=e.dataset.oldOverflow},"before-leave":function(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.height=e.scrollHeight+"px",e.style.overflow="hidden"},leave:function(e){0!==e.scrollHeight&&(e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0)},"after-leave":function(e){e.style.height="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom}};t.default={name:"CollapseTransition",functional:!0,render:function(e,t){var n=t.children;return e("transition",{on:r},n)}}},"k/8l":function(e,t,n){e.exports={default:n("VKFn"),__esModule:!0}},kd9L:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bk-tree-info",on:{click:e.hidden}},[n("div",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:e.isTreeLoading},expression:"{ isLoading: isTreeLoading }"}],staticClass:"bk-tree-content"},[n("div",{staticStyle:{overflow:"hidden"}},[n("div",{staticClass:"bk-tree-addService"},[n("span",[e._v("服务目录")]),e._v(" "),n("i",{staticClass:"bk-itsm-icon icon-jia-2",on:{click:function(t){return e.openAdd("root")}}})]),e._v(" "),n("div",{staticClass:"bk-tree-search"},[n("bk-input",{staticClass:"bk-tree-input",attrs:{"data-test-id":"directory-input-search",placeholder:e.$t("m.serviceConfig['请输入搜索关键字']"),clearable:!0,"right-icon":"bk-icon icon-search"},on:{enter:e.searchInfo,clear:e.clearInfo},model:{value:e.searchWord,callback:function(t){e.searchWord=t},expression:"searchWord"}})],1)]),e._v(" "),n("div",{staticClass:"bk-tree-div",attrs:{id:"treeOther"}},[n("div",{ref:"treeTree"},[n("tree",{ref:"tree5",staticClass:"bk-tree-class",attrs:{data:e.treeList,"node-key":"id","has-border":!0},on:{"on-click":e.nodeClick,"on-expanded":e.nodeExpand,"on-icon":e.iconNode,"on-drag-node":e.onDragNode}})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showMore,expression:"showMore"}],ref:"treeOperat",staticClass:"bk-tree-more"},[n("ul",[n("li",{directives:[{name:"cursor",rawName:"v-cursor",value:{active:!e.hasPermission(["catalog_create"],e.$store.state.project.projectAuthActions),zIndex:3001},expression:"{ active: !hasPermission(['catalog_create'], $store.state.project.projectAuthActions), zIndex: 3001 }"}],class:{"bk-disabled-add":"3"===String(e.treeInfo.node.level),"text-permission-disable":!e.hasPermission(["catalog_create"],e.$store.state.project.projectAuthActions)},attrs:{"data-test-id":"directoty-li-addCatalogue",title:e.$t("m.serviceConfig['新增']")},on:{click:e.openAdd}},[n("span",[e._v(e._s(e.$t('m.serviceConfig["新增"]')))])]),e._v(" "),n("li",{directives:[{name:"cursor",rawName:"v-cursor",value:{active:!e.hasPermission(["catalog_edit"],e.$store.state.project.projectAuthActions)},expression:"{ active: !hasPermission(['catalog_edit'], $store.state.project.projectAuthActions) }"}],class:{"text-permission-disable":!e.hasPermission(["catalog_edit"],e.$store.state.project.projectAuthActions)},attrs:{"data-test-id":"directoty-li-editCatalogue",title:e.$t("m.serviceConfig['编辑']")},on:{click:e.openUpdate}},[n("span",[e._v(e._s(e.$t('m.serviceConfig["编辑"]')))])]),e._v(" "),n("li",{directives:[{name:"cursor",rawName:"v-cursor",value:{active:!e.hasPermission(["catalog_delete"],e.$store.state.project.projectAuthActions)},expression:"{ active: !hasPermission(['catalog_delete'], $store.state.project.projectAuthActions) }"}],class:{"text-permission-disable":!e.hasPermission(["catalog_delete"],e.$store.state.project.projectAuthActions)},attrs:{"data-test-id":"directoty-li-delCatalogue",title:e.$t("m.serviceConfig['删除']")},on:{click:e.openDelete}},[n("span",[e._v(e._s(e.$t('m.serviceConfig["删除"]')))])])])])])]),e._v(" "),n("bk-dialog",{attrs:{width:"480",value:e.addDirectory.show,title:e.addDirectory.title,"mask-close":!1},on:{"update:value":function(t){return e.$set(e.addDirectory,"show",t)},confirm:e.submitAdd,cancel:e.toggleDialog}},[n("bk-form",{ref:"dynamicForm",attrs:{"label-width":200,"form-type":"vertical",model:e.addDirectory.formInfo,rules:e.rules}},[1!==e.addDirectory.formInfo.parent__id?n("bk-form-item",{attrs:{label:e.$t("m.serviceConfig['父级目录']"),required:!0}},[n("bk-input",{attrs:{disabled:""},model:{value:e.addDirectory.formInfo.parent___name,callback:function(t){e.$set(e.addDirectory.formInfo,"parent___name","string"==typeof t?t.trim():t)},expression:"addDirectory.formInfo.parent___name"}})],1):e._e(),e._v(" "),n("bk-form-item",{attrs:{label:e.$t("m.serviceConfig['目录名称']"),required:!0,"error-display-type":"normal",property:"name"}},[n("bk-input",{attrs:{maxlength:120,"show-word-limit":!0,placeholder:e.$t("m.serviceConfig['请输入目录名称']")},model:{value:e.addDirectory.formInfo.name,callback:function(t){e.$set(e.addDirectory.formInfo,"name","string"==typeof t?t.trim():t)},expression:"addDirectory.formInfo.name"}})],1),e._v(" "),n("bk-form-item",{attrs:{label:e.$t("m.serviceConfig['目录描述']")}},[n("bk-input",{attrs:{placeholder:e.$t("m.serviceConfig['请输入目录描述']"),type:"textarea",rows:3,maxlength:255},model:{value:e.addDirectory.formInfo.desc,callback:function(t){e.$set(e.addDirectory.formInfo,"desc",t)},expression:"addDirectory.formInfo.desc"}})],1)],1)],1)],1)},i=[];r._withStripped=!0},ldVq:function(e,t,n){var r=n("QMMT"),i=n("UWiX")("iterator"),o=n("SBuE");e.exports=n("WEpk").isIterable=function(e){var t=Object(e);return void 0!==t[i]||"@@iterator"in t||o.hasOwnProperty(r(t))}},oz8L:function(e,t,n){"use strict";n.r(t);var r=n("8okI"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=i.a},sk9p:function(e,t,n){"use strict";t.__esModule=!0;var r=o(n("k/8l")),i=o(n("FyfS"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if(Array.isArray(e))return e;if((0,r.default)(Object(e)))return function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var s,d=(0,i.default)(e);!(r=(s=d.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&d.return&&d.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}},uBXD:function(e,t,n){}}]);