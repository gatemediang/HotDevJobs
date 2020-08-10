(this["webpackJsonpspa-app"]=this["webpackJsonpspa-app"]||[]).push([[0],{157:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),o=t(19),s=t(7),m=t(11),i=t(12),u=t.n(i),p="make-request",E="get-data",b="error",d="update-has-next-page",g="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";function h(e,a){switch(a.type){case p:return{loading:!0,jobs:[]};case E:return Object(s.a)(Object(s.a)({},e),{},{loading:!1,jobs:a.payload.jobs});case b:return Object(s.a)(Object(s.a)({},e),{},{loading:!1,error:a.payload.error,jobs:[]});case d:return Object(s.a)(Object(s.a)({},e),{},{hasNextPage:a.payload.hasNextPage});default:return e}}var f=t(161),y=t(164),j=t(159),v=t(160),k=t(163),N=t(30),O=t.n(N);function x(e){var a=e.job,t=Object(n.useState)(!1),c=Object(m.a)(t,2),l=c[0],o=c[1];return r.a.createElement(y.a,{className:"mb-3"},r.a.createElement(y.a.Body,null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement(y.a.Title,null,a.title," - ",r.a.createElement("span",{className:"text-muted font-weight-light"},a.company)),r.a.createElement(y.a.Subtitle,{className:"text-muted mb-2"},new Date(a.created_at).toLocaleDateString()),r.a.createElement(j.a,{variant:"secondary",className:"mr-2"},a.type),r.a.createElement(j.a,{variant:"secondary"},a.location),r.a.createElement("div",{style:{wordBreak:"break-all"}},r.a.createElement(O.a,{source:a.how_to_apply}))),r.a.createElement("img",{className:"d-none d-md-block",height:"50",alt:a.company,src:a.company_logo})),r.a.createElement(y.a.Text,null,r.a.createElement(v.a,{onClick:function(){return o((function(e){return!e}))},variant:"primary"},l?"Hide Details":"View Details")),r.a.createElement(k.a,{in:l},r.a.createElement("div",{className:"mt-4"},r.a.createElement(O.a,{source:a.description})))))}var C=t(165);function w(e){var a=e.page,t=e.setPage,n=e.hasNextPage;function c(e){t((function(a){return a+e}))}return r.a.createElement(C.a,null,1!==a&&r.a.createElement(C.a.Prev,{onClick:function(){return c(-1)}}),1!==a&&r.a.createElement(C.a.Item,{onClick:function(){return t(1)}},"1"),a>2&&r.a.createElement(C.a.Ellipsis,null),a>2&&r.a.createElement(C.a.Item,{onClick:function(){return c(-1)}},a-1),r.a.createElement(C.a.Item,{active:!0},a),n&&r.a.createElement(C.a.Item,{onClick:function(){return c(1)}},a+1),n&&r.a.createElement(C.a.Next,{onClick:function(){return c(1)}}))}var P=t(162),T=t(51);function D(e){var a=e.params,t=e.onParamChange;return r.a.createElement(P.a,{className:"mb-4"},r.a.createElement(P.a.Row,{className:"align-items-end"},r.a.createElement(P.a.Group,{as:T.a},r.a.createElement(P.a.Label,null,"Description"),r.a.createElement(P.a.Control,{onChange:t,value:a.description,name:"description",type:"text"})),r.a.createElement(P.a.Group,{as:T.a},r.a.createElement(P.a.Label,null,"Location"),r.a.createElement(P.a.Control,{onChange:t,value:a.location,name:"location",type:"text"})),r.a.createElement(P.a.Group,{as:T.a,xs:"auto",className:"ml-2"},r.a.createElement(P.a.Check,{onChange:t,value:a.full_time,name:"full_time",id:"full-time",label:"Only Full Time",type:"checkbox",className:"mb-2"}))))}var S=function(){var e=Object(n.useState)({}),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(1),i=Object(m.a)(l,2),y=i[0],j=i[1],v=function(e,a){var t=Object(n.useReducer)(h,{jobs:[],loading:!0}),r=Object(m.a)(t,2),c=r[0],l=r[1];return Object(n.useEffect)((function(){var t=u.a.CancelToken.source();l({type:p}),u.a.get(g,{cancelToken:t.token,params:Object(s.a)({markdown:!0,page:a},e)}).then((function(e){l({type:E,payload:{jobs:e.data}})})).catch((function(e){u.a.isCancel(e)||l({type:b,payload:{error:e}})}));var n=u.a.CancelToken.source();return u.a.get(g,{cancelToken:n.token,params:Object(s.a)({markdown:!0,page:a+1},e)}).then((function(e){l({type:d,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){u.a.isCancel(e)||l({type:b,payload:{error:e}})})),function(){t.cancel(),n.cancel()}}),[e,a]),c}(t,y),k=v.jobs,N=v.loading,O=v.error,C=v.hasNextPage;return r.a.createElement(f.a,{className:"my-4"},r.a.createElement("h1",{className:"mb-4"},"HotDev Jobs"),r.a.createElement(D,{params:t,onParamChange:function(e){var a=e.target.name,t=e.target.value;j(1),c((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(o.a)({},a,t))}))}}),r.a.createElement(w,{page:y,setPage:j,hasNextPage:C}),N&&r.a.createElement("h1",null,"Loading..."),O&&r.a.createElement("h1",null,"Error. Try Refreshing."),k.map((function(e){return r.a.createElement(x,{key:e.id,job:e})})),r.a.createElement(w,{page:y,setPage:j,hasNextPage:C}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))},52:function(e,a,t){e.exports=t(157)}},[[52,1,2]]]);
//# sourceMappingURL=main.62f615f7.chunk.js.map