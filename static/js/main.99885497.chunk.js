(this["webpackJsonpitrex-test"]=this["webpackJsonpitrex-test"]||[]).push([[0],{35:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){"use strict";s.r(t);var r,a,n=s(0),c=s.n(n),i=s(7),o=s.n(i),l=(s(35),s(9)),u=s(6),d=u.c,p=function(e){var t,s=e.users.page,r=e.users.perPage,a=s*r-r,n=a+r;return null===(t=e.users.users)||void 0===t?void 0:t.slice(a,n)},j=function(e){return{usersStatus:e.users.usersStatus}},b=function(e){return{page:e.users.page,perPage:e.users.perPage,totalItems:e.users.totalItems}},f=function(e){return e.users.sort},m=function(e){return e.users.states},_=s(11),v=s(16),h=s.n(v),O=s(28);!function(e){e.IDLE="IDLE",e.LOADING="LOADING",e.SUCCESS="SUCCESS",e.ERROR="ERROR"}(r||(r={})),function(e){e.BY_ID="id",e.BY_FIRST_NAME="firstName",e.BY_LAST_NAME="lastName",e.BY_EMAIL="email",e.BY_PHONE="phone",e.BY_STATE="state"}(a||(a={}));var g,x=s(29),N=s.n(x).a.create({baseURL:"https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/"}),S=function(){return N.get("react-test-api.json")},E=s(10),C=Object(E.b)("users/getUsers",Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),I={usersStatus:r.IDLE,states:[],sort:[{name:a.BY_ID,reversed:!1,sorted:!1,displayName:"id"},{name:a.BY_FIRST_NAME,reversed:!1,sorted:!1,displayName:"First name"},{name:a.BY_LAST_NAME,reversed:!1,sorted:!1,displayName:"Last name"},{name:a.BY_EMAIL,reversed:!1,sorted:!1,displayName:"Email"},{name:a.BY_PHONE,reversed:!1,sorted:!1,displayName:"Phone"},{name:a.BY_STATE,reversed:!1,sorted:!1,displayName:"State"}],page:1,perPage:20,totalItems:0,users:null,error:""},y=Object(E.c)({name:"users",initialState:I,reducers:{pageChanged:function(e,t){e.page=t.payload},usersSorted:function(e,t){var s=e.sort.find((function(e){return e.name===t.payload}));s.sorted=!0,s.reversed=!s.reversed,e.sort.forEach((function(s){var r,n;if(s.name!==t.payload&&(s.sorted=!1,s.reversed=!1),s.sorted)if(s.name===a.BY_STATE)null===(r=e.users)||void 0===r||r.sort((function(e,t){var s=e.adress.state.toUpperCase(),r=t.adress.state.toUpperCase();return s>r?-1:s<r?1:0}));else if(s.name===a.BY_ID){var c;null===(c=e.users)||void 0===c||c.sort((function(e,t){return t.id-e.id}))}else{var i;null===(i=e.users)||void 0===i||i.sort((function(e,t){var r=e[s.name].toUpperCase(),a=t[s.name].toUpperCase();return r>a?-1:r<a?1:0}))}s.reversed&&(null===(n=e.users)||void 0===n||n.reverse())}))},usersFiltered:function(e,t){var s,r;null===(s=e.users)||void 0===s||s.forEach((function(e){-1!==e.firstName.toUpperCase().indexOf(t.payload.name.toUpperCase())&&t.payload.states.includes(e.adress.state)?e.show=!0:e.show=!1})),null===(r=e.users)||void 0===r||r.sort((function(e,t){return Number(t.show)-Number(e.show)}))}},extraReducers:(g={},Object(_.a)(g,C.pending.toString(),(function(e,t){e.usersStatus=r.LOADING})),Object(_.a)(g,C.fulfilled.toString(),(function(e,t){var s;e.usersStatus=r.SUCCESS,e.totalItems=t.payload.length,e.users=t.payload,null===(s=e.users)||void 0===s||s.forEach((function(t){t.show=!0,e.states.includes(t.adress.state)||e.states.push(t.adress.state)}))})),Object(_.a)(g,C.rejected.toString(),(function(e,t){e.usersStatus=r.ERROR,e.error=t.error.message})),g)}),A=y.reducer,w=y.actions,B=w.pageChanged,P=w.usersSorted,L=w.usersFiltered,Y=s(2),R=function(e){var t=e.onSort,s=d(f);return Object(Y.jsx)("div",{className:"table__head-wrapper",children:s.map((function(e){return Object(Y.jsxs)("div",{onClick:function(){return t(e.name)},className:"table__cell table__cell-header ".concat(e.name===a.BY_EMAIL&&"table__cell-email"),children:[e.displayName," ",e.sorted?e.reversed?"\u2193":"\u2191":"\u21fe"]},e.name)}))})},k=(s(60),function(e){var t=e.user,s=e.even,r=e.setProfile;return Object(Y.jsxs)("div",{className:"table__row ".concat(s&&"table__row-dark"),onClick:function(){return r(t)},children:[Object(Y.jsx)("div",{className:"table__cell",children:t.id}),Object(Y.jsx)("div",{className:"table__cell",children:t.firstName}),Object(Y.jsx)("div",{className:"table__cell",children:t.lastName}),Object(Y.jsx)("div",{className:"table__cell table__cell-email",children:t.email}),Object(Y.jsx)("div",{className:"table__cell",children:t.phone}),Object(Y.jsx)("div",{className:"table__cell",children:t.adress.state})]})}),D=function(e){var t=e.users,s=e.onSort,r=e.setProfile;return Object(Y.jsxs)("div",{className:"table__wrapper",children:[Object(Y.jsx)(R,{onSort:s}),t.map((function(e,t){return e.show&&Object(Y.jsx)(k,{user:e,even:t%2!==0,setProfile:r},e.email)}))]})},U=(s(61),function(e){for(var t=e.page,s=e.perPage,r=e.totalItems,a=e.onChange,n=r/s,c=[],i=function(e){c.push(Object(Y.jsx)("div",{onClick:function(){return a(e)},className:"paginator__page-btn ".concat(e===t&&"paginator__active"),children:e},e))},o=1;o<=n;o++)i(o);return t>1&&c.unshift(Object(Y.jsx)("div",{onClick:function(){return a(t-1)},className:"paginator__page-btn paginator__active paginator__next",children:"Previos"},0)),t<n&&c.push(Object(Y.jsx)("div",{onClick:function(){return a(t+1)},className:"paginator__page-btn paginator__active paginator__next",children:"Next"},n+1)),Object(Y.jsx)("div",{className:"paginator__wrapper",children:Object(Y.jsx)("div",{className:"paginator__container",children:c})})}),T=s(30),M=(s(62),function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),s=t[0],r=t[1],a=Object(u.b)(),c=d(m),i=Object(n.useState)(c),o=Object(l.a)(i,2),p=o[0],j=o[1],b=c.map((function(e){return{value:e,label:e}}));return console.log(c),Object(n.useEffect)((function(){a(L({name:s,states:p}))}),[s,p]),Object(Y.jsxs)("div",{className:"filters__wrapper",children:[Object(Y.jsx)("input",{value:s,onChange:function(e){r(e.target.value)},placeholder:"Find by name"}),Object(Y.jsx)(T.a,{placeholder:"Filter by state",className:"filters__selector",options:b,isMulti:!0,onChange:function(e){if(console.log(e.length),0===e.length)j(c);else{var t=e.map((function(e){return e.value}));j(t)}}})]})}),F=(s(73),function(e){var t=e.profile;return Object(Y.jsxs)("div",{className:"profile__wrapper",children:[Object(Y.jsxs)("h1",{children:["Profile: ",t.firstName," ",t.lastName]}),Object(Y.jsxs)("h1",{children:["Description: ",t.description]}),Object(Y.jsxs)("h1",{children:["Adress: ",t.adress.streetAddress]}),Object(Y.jsxs)("h1",{children:["City: ",t.adress.city]}),Object(Y.jsxs)("h1",{children:["State: ",t.adress.state]}),Object(Y.jsxs)("h1",{children:["Index: ",t.adress.zip]})]})}),G=function(){var e=Object(u.b)(),t=d(p),s=Object(n.useState)(t?t[0]:null),a=Object(l.a)(s,2),c=a[0],i=a[1],o=d(j).usersStatus,f=d(b),m=f.page,_=f.perPage,v=f.totalItems;Object(n.useEffect)((function(){e(C())}),[e]);var h=Object(n.useCallback)((function(t){e(B(t))}),[]),O=Object(n.useCallback)((function(t){e(P(t))}),[]);return o===r.LOADING?Object(Y.jsx)("div",{children:"Loading..."}):Object(Y.jsxs)("div",{className:"App",children:[Object(Y.jsx)(M,{}),t&&Object(Y.jsx)(D,{users:t,onSort:O,setProfile:i}),Object(Y.jsx)(U,{totalItems:v,perPage:_,page:m,onChange:h}),c&&Object(Y.jsx)(F,{profile:c})]})},z=Object(E.a)({reducer:{users:A}});o.a.render(Object(Y.jsx)(c.a.StrictMode,{children:Object(Y.jsx)(u.a,{store:z,children:Object(Y.jsx)(G,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.99885497.chunk.js.map