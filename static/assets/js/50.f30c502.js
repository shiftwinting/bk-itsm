(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"8kR6":function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return i}));var o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:this.projectDetailLoading},expression:"{ isLoading: projectDetailLoading }"}],staticClass:"project-page"},[this.$store.state.project.id&&!this.projectDetailLoading?e("router-view"):this._e()],1)},i=[];o._withStripped=!0},cHwr:function(t,e,r){"use strict";r.r(e);var o=r("8kR6"),i=r("zddo");for(var c in i)["default"].indexOf(c)<0&&function(t){r.d(e,t,(function(){return i[t]}))}(c);r("vO+r");var n=r("KHd+"),a=Object(n.a)(i.default,o.a,o.b,!1,null,"146d869c",null);a.options.__file="src/views/project/index.vue",e.default=a.exports},nzjD:function(t,e,r){},"vO+r":function(t,e,r){"use strict";r("nzjD")},vXch:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=u(r("14Xm")),i=u(r("D3Ub")),c=u(r("QbLZ")),n=r("L2JU"),a=r("CeR/"),s=u(r("0hVY"));function u(t){return t&&t.__esModule?t:{default:t}}e.default={name:"ProjectHome",mixins:[s.default],data:function(){return{projectDetailLoading:!1}},computed:(0,c.default)({},(0,n.mapState)({projectListLoading:function(t){return t.project.projectListLoading}})),watch:{"$store.state.project.id":function(t){t&&this.getProjectDetail()}},created:function(){this.$store.state.project.id!==this.$route.query.project_id&&""!==this.$route.query.project_id&&this.$store.commit("project/setProjectId",this.$route.query.project_id),this.getProjectList(),this.$store.state.project.id&&this.getProjectDetail()},methods:{getProjectDetail:function(){var t=this;return(0,i.default)(o.default.mark((function e(){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.projectDetailLoading=!0,e.next=4,t.$store.dispatch("project/getProjectDetail",t.$store.state.project.id);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),(0,a.errorHandler)(e.t0,t);case 9:return e.prev=9,t.projectDetailLoading=!1,e.finish(9);case 12:case"end":return e.stop()}}),e,t,[[0,6,9,12]])})))()},getProjectList:function(){var t=this;return(0,i.default)(o.default.mark((function e(){var r,i;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.$store.commit("project/setProjectListLoading",!0),e.next=4,t.$store.dispatch("project/getProjectAllList");case 4:r=e.sent,t.$store.commit("project/setProjectList",r.data),0===(i=t.$store.state.project.projectList.filter((function(t){return t.auth_actions.includes("project_view")}))).length&&t.$router.replace({name:"ProjectGuide"}),t.$store.state.project.id||0===i.length||(t.$store.commit("project/setProjectId",i[0].key),t.$store.dispatch("project/changeDefaultProject",i[0].key),t.$router.replace({name:"projectTicket",query:{project_id:i[0].key}})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),(0,a.errorHandler)(e.t0,t);case 14:return e.prev=14,t.$store.commit("project/setProjectListLoading",!1),e.finish(14);case 17:case"end":return e.stop()}}),e,t,[[0,11,14,17]])})))()}}}},zddo:function(t,e,r){"use strict";r.r(e);var o=r("vXch"),i=r.n(o);for(var c in o)["default"].indexOf(c)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(c);e.default=i.a}}]);