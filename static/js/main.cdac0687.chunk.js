(this["webpackJsonplifestyle-app"]=this["webpackJsonplifestyle-app"]||[]).push([[0],{47:function(e,n,t){e.exports=t(61)},61:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(26),i=t.n(a),c=t(7),u=t(13),l=t(39),d=t(22),f=t(16),s=t(40),p=t.n(s);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(t,!0).forEach((function(n){Object(f.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var h={todo:[{id:0,title:"Zdoby\u0107 pierwsz\u0105 prac\u0119 jako frontend developer",deadline:"2020-01-01",important:!0,finishDate:null}],done:[]},g=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE_TASK":return b({},n,Object(f.a)({},t.itemType,Object(d.a)(n[t.itemType].filter((function(e){return e.id!==t.id})))));case"ADD_TASK":return b({},n,{todo:[].concat(Object(d.a)(n.todo),[{id:t.id,title:t.title,deadline:t.deadline,important:t.important,finishDate:null}])});case"CHANGE_TASK_STATUS":var r={todo:Object(d.a)(n.todo.filter((function(e){return e.id===t.id})))};return r=r.todo.shift(),b({},n,(e={},Object(f.a)(e,t.itemType,Object(d.a)(n[t.itemType].filter((function(e){return e.id!==t.id})))),Object(f.a)(e,"done",[].concat(Object(d.a)(n.done),[b({},r,{finishDate:(new Date).toISOString().slice(0,10)})])),e));default:return n}};function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(t,!0).forEach((function(n){Object(f.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var x={text:"",date:(new Date).toISOString().slice(0,10),checked:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE_TEXT_FORM":return O({},e,{text:n.text});case"UPDATE_DATE_FORM":return O({},e,{date:n.date});case"UPDATE_CHECKBOX_FORM":return O({},e,{checked:n.checked});default:return e}},y=Object(u.combineReducers)({taskReducer:g,formReducer:j}),E=Object(u.createStore)(y,Object(l.composeWithDevTools)()),w=t(17),k=t(18),T=t(20),D=t(19),z=t(21),S=t(25),C=t(9),P=t(3),A=t(2),F=t(14),_=t(15);function R(){var e=Object(P.a)(["\n  display: block;\n  width: 67px;\n  height: 67px;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &.active {\n    background-color: white;\n  }\n"]);return R=function(){return e},e}var M=A.d.button(R()),I=o.a.createContext("todo"),U=function(e){return function(n){return o.a.createElement(I.Consumer,null,(function(t){return o.a.createElement(e,Object.assign({},n,{cardContext:t}))}))}};function V(){var e=Object(P.a)(["\n  margin-bottom: 50px;\n  padding: 15px 20px;\n  border-radius: 5px;\n  color: black;\n  text-decoration: none;\n  font-size: ",";\n"]);return V=function(){return e},e}function K(){var e=Object(P.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding: 80px 10px;\n  width: 150px;\n  height: 100vh;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"]);return K=function(){return e},e}var N=A.d.div(K(),(function(e){var n=e.activeColor,t=e.theme;return n?t[n]:t.todo})),X=Object(A.d)(M)(V(),(function(e){return e.theme.fontSize.xl})),Z=function(e){var n=e.cardContext;return o.a.createElement(N,{activeColor:n},o.a.createElement(X,{as:S.b,to:"/todo",activeclass:"active"},o.a.createElement(F.a,{icon:_.b})),o.a.createElement(X,{as:S.b,to:"/done",activeclass:"active"},o.a.createElement(F.a,{icon:_.d})))};Z.defaultProps={cardContext:"todo"};var H=U(Z);function B(){var e=Object(P.a)(["\n  font-size: ",";\n  font-weight: ",";\n\n  &.active {\n    background-color: white;\n  }\n"]);return B=function(){return e},e}var G=A.d.h1(B(),(function(e){var n=e.theme;return e.big?n.fontSize.xl:n.fontSize.l}),(function(e){return e.theme.bold}));function J(){var e=Object(P.a)(["\n  font-size: ",";\n  font-weight: ",";\n"]);return J=function(){return e},e}var W=A.d.p(J(),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.light}));function q(){var e=Object(P.a)(["\n  padding: 15px 30px;\n  font-size: ",";\n  font-weight: ",";\n  background-color: ",";\n  border: none;\n  border-radius: 50px;\n\n  ::placeholder {\n    letter-spacing: 1px;\n    color: ",";\n  }\n"]);return q=function(){return e},e}var L=A.d.input(q(),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.regular}),(function(e){return e.theme.grey200}),(function(e){return e.theme.grey300}));function Q(){var e=Object(P.a)(["\n      background-color: ",";\n      width: 105px;\n      height: 30px;\n      font-size: 10px;\n    "]);return Q=function(){return e},e}function Y(){var e=Object(P.a)(["\n      background-color: ",";\n      width: 105px;\n      height: 30px;\n      font-size: 10px;\n    "]);return Y=function(){return e},e}function $(){var e=Object(P.a)(["\n  margin: 25px 0 0 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",';\n  width: 220px;\n  height: 47px;\n  border: none;\n  border-radius: 50px;\n  font-family: "Montserrat";\n  font-weight: 600;\n  font-size: 16px;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  ',"\n\n  ","\n"]);return $=function(){return e},e}var ee=A.d.button($(),(function(e){var n=e.activeColor,t=e.theme;return n?t[n]:t.todo}),(function(e){return e.secondary&&Object(A.c)(Y(),(function(e){return e.theme.grey200}))}),(function(e){return e.tertiary&&Object(A.c)(Q(),(function(e){return e.theme.todo}))}));function ne(){var e=Object(P.a)(["\n  margin: auto 0;\n"]);return ne=function(){return e},e}function te(){var e=Object(P.a)(["\n  padding: 15px 10px;\n  font-size: ",";\n  font-weight: ",";\n"]);return te=function(){return e},e}function re(){var e=Object(P.a)(["\n  display: flex;\n  justify-content: flex-start;\n"]);return re=function(){return e},e}function oe(){var e=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-basis: 40%;\n"]);return oe=function(){return e},e}function ae(){var e=Object(P.a)(["\n  z-index: 9999;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 40px 80px 100px;\n  right: 0;\n  top: 0;\n  height: 100vh;\n  width: 650px;\n  background-color: white;\n  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);\n  transform: translateX(",");\n  transition: all 0.4s ease-in-out;\n"]);return ae=function(){return e},e}var ie=A.d.form(ae(),(function(e){return e.isVisible?"0":"105%"})),ce=A.d.div(oe()),ue=A.d.div(re()),le=A.d.label(te(),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.regular})),de=Object(A.d)(L)(ne()),fe=Object(c.b)((function(e){return{title:e.formReducer.text,important:e.formReducer.checked,deadline:e.formReducer.date}}),(function(e){return{updateTextForm:function(n){return e(function(e){return{type:"UPDATE_TEXT_FORM",text:e}}(n))},updateCheckedForm:function(n){return e(function(e){return{type:"UPDATE_CHECKBOX_FORM",checked:e}}(n))},updateDateForm:function(n){return e(function(e){return{type:"UPDATE_DATE_FORM",date:e}}(n))},addTask:function(n,t,r){return e(function(e,n,t){return{type:"ADD_TASK",id:p.a.v4(),title:e,deadline:n,important:t}}(n,t,r))}}}))((function(e){var n=e.isVisible,t=e.updateTextForm,r=e.updateCheckedForm,a=e.updateDateForm,i=e.addTask,c=e.title,u=e.deadline,l=e.important,d=(new Date).toISOString().slice(0,10);return o.a.createElement(ie,{isVisible:n,onSubmit:function(e){e.preventDefault(),i(c,u,l),t(""),a(d),r(!1)}},o.a.createElement(G,{big:!0},"Dodaj nowe zadanie"),o.a.createElement(ce,null,o.a.createElement(L,{type:"text",placeholder:"Wpisz zadanie",value:c,onChange:function(e){return t(e.target.value)}}),o.a.createElement(ue,null,o.a.createElement(le,{htmlFor:"date"},"Termin wykonania:"),o.a.createElement(L,{type:"date",value:u,min:d,onChange:function(e){return a(e.target.value)}})),o.a.createElement(ue,null,o.a.createElement(de,{type:"checkbox",checked:l,id:"important",onChange:function(e){return r(e.target.checked)}}),o.a.createElement(le,{htmlFor:"important"},"Priorytet"))),o.a.createElement(ee,null,"Dodaj"))}));function se(){var e=Object(P.a)(["\n  position: fixed;\n  bottom: 40px;\n  right: 20px;\n  width: 55px;\n  height: 55px;\n  font-size: ",";\n  background-color: ",";\n  border-radius: 50%;\n  z-index: 10000;\n"]);return se=function(){return e},e}function pe(){var e=Object(P.a)(["\n  margin: 0;\n  font-size: ",";\n  font-weight: ",";\n\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"]);return pe=function(){return e},e}function me(){var e=Object(P.a)(["\n  margin: 0 0 10px;\n\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"]);return me=function(){return e},e}function be(){var e=Object(P.a)(["\n  padding: 50px 100px 0;\n  margin: 0 0 20px 0;\n"]);return be=function(){return e},e}function he(){var e=Object(P.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 100px;\n  padding: 50px 100px;\n"]);return he=function(){return e},e}var ge=A.d.div(he()),ve=A.d.div(be()),Oe=Object(A.d)(G)(me()),xe=Object(A.d)(W)(pe(),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.bold})),je=Object(A.d)(M)(se(),(function(e){return e.theme.fontSize.l}),(function(e){return e.theme.todo})),ye=function(e){function n(){var e,t;Object(w.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=Object(T.a)(this,(e=Object(D.a)(n)).call.apply(e,[this].concat(o)))).state={isNewItemFormVisible:!1},t.handleNewItemFormToggle=function(){t.setState((function(e){return{isNewItemFormVisible:!e.isNewItemFormVisible}}))},t}return Object(z.a)(n,e),Object(k.a)(n,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.cardContext,r=e.todo,a=this.state.isNewItemFormVisible;return o.a.createElement(o.a.Fragment,null,o.a.createElement(H,null),o.a.createElement(ve,null,o.a.createElement(Oe,{big:!0,as:"h1"},"todo"===t&&"Twoje zadania czekaj\u0105ce na realizacj\u0119","done"===t&&"Zadania zrealizowane"),o.a.createElement(xe,null,"todo"===t&&"liczba zada\u0144: ".concat(r.length))),o.a.createElement(ge,null,n),"todo"===t&&o.a.createElement(je,{onClick:this.handleNewItemFormToggle},o.a.createElement(F.a,{icon:_.c})),o.a.createElement(fe,{isVisible:a}))}}]),n}(r.Component);ye.defaultProps={cardContext:"todo"};var Ee=Object(c.b)((function(e){return{todo:e.taskReducer.todo}}))(U(ye));function we(){var e=Object(P.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]);return we=function(){return e},e}function ke(){var e=Object(P.a)(["\n  font-weight: ",";\n  font-size: ",";\n  color: ",";\n\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"]);return ke=function(){return e},e}function Te(){var e=Object(P.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 5px 0 0;\n"]);return Te=function(){return e},e}function De(){var e=Object(P.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return De=function(){return e},e}function ze(){var e=Object(P.a)(["\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n    "]);return ze=function(){return e},e}function Se(){var e=Object(P.a)(["\n      background-color: ",";\n    "]);return Se=function(){return e},e}function Ce(){var e=Object(P.a)(["\n  position: relative;\n  padding: 17px 30px;\n\n  ","\n\n  ","\n"]);return Ce=function(){return e},e}function Pe(){var e=Object(P.a)(["\n  min-height: 300px;\n  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.2);\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  display: grid;\n  grid-template-rows: 0.25fr 1fr;\n"]);return Pe=function(){return e},e}var Ae=A.d.div(Pe()),Fe=A.d.div(Ce(),(function(e){return e.colored&&Object(A.c)(Se(),(function(e){var n=e.activeColor,t=e.theme;return n?t[n]:t.todo}))}),(function(e){return e.flex&&Object(A.c)(ze())})),_e=A.d.div(De()),Re=Object(A.d)(G)(Te()),Me=Object(A.d)(W)(ke(),(function(e){return e.theme.bold}),(function(e){return e.theme.fontSize.m}),(function(e){return e.isImportant?"red":"black"})),Ie=A.d.div(we()),Ue=function(e){var n=e.cardContext,t=e.title,r=e.deadline,a=e.important,i=e.finishDate,c=e.id,u=e.removeTask,l=e.changeTaskStatus;return o.a.createElement(Ae,null,o.a.createElement(Fe,{colored:!0,activeColor:n},o.a.createElement(Re,null,"todo"===n&&"Zadanie do zrobienia",a&&o.a.createElement(F.a,{icon:_.a,color:"red"}),"done"===n&&"Zadanie wykonane")),o.a.createElement(Fe,{flex:!0},o.a.createElement(Me,{isImportant:a},t),o.a.createElement(Ie,null,o.a.createElement(W,null,"termin: ".concat(r)),o.a.createElement(W,null,"done"===n&&"wykonano: ".concat(i))),o.a.createElement(_e,null,o.a.createElement(ee,{secondary:!0,onClick:function(){return u(n,c)}},"Usu\u0144"),"todo"===n&&o.a.createElement(ee,{tertiary:!0,onClick:function(){return l(n,c)}},"Zrobione"))))};Ue.defaultProps={cardContext:"todo"};var Ve=Object(c.b)(null,(function(e){return{removeTask:function(n,t){return e(function(e,n){return{type:"REMOVE_TASK",itemType:e,id:n}}(n,t))},changeTaskStatus:function(n,t){return e(function(e,n){return{type:"CHANGE_TASK_STATUS",itemType:e,id:n}}(n,t))}}}))(U(Ue)),Ke=Object(c.b)((function(e){return{todo:e.taskReducer.todo}}))((function(e){var n=e.todo;return n.length>=2&&n.sort((function(e,n){return e.deadline>n.deadline?1:e.deadline<n.deadline?-1:0})),o.a.createElement(o.a.Fragment,null,o.a.createElement(Ee,{cardType:"todo"},n.map((function(e){return o.a.createElement(Ve,{cardType:"todo",id:e.id,key:e.id,title:e.title,deadline:e.deadline,important:e.important,finishDate:e.finishDate})}))))})),Ne=Object(c.b)((function(e){return{done:e.taskReducer.done}}))((function(e){var n=e.done;return n.length>=2&&n.sort((function(e,n){return e.finishDate<n.finishDate?1:e.finishDate>n.finishDate?-1:0})),o.a.createElement(o.a.Fragment,null,o.a.createElement(Ee,{cardType:"done"},n.map((function(e){return o.a.createElement(Ve,{cardType:"done",id:e.id,key:e.id,title:e.title,deadline:e.deadline,finishDate:e.finishDate})}))))})),Xe=t(44);function Ze(){var e=Object(P.a)(["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:300,600&display=swap');\n/* @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600,900&display=swap'); */\n\n*, *::before, *::after {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nhtml {\n  font-size: 62.5%; /* happy rems */\n}\n\nbody {\n  padding-left: 150px;\n  font-size: 1.6rem; /* happy rems */\n  font-family: 'Montserrat', sans-serif;\n}\n"]);return Ze=function(){return e},e}var He=Object(A.b)(Ze()),Be={todo:"#F8C61A",done:"#1AA3E9",grey100:"hsl(0, 0%, 96%)",grey200:"hsl(0, 0%, 90%)",grey300:"hsl(0, 0%, 50%)",black:"hsl(0, 0%, 0%)",light:300,bold:600,fontSize:{xxs:"1rem",xs:"1.2rem",s:"1.6rem",m:"2rem",l:"2.4rem",xl:"4rem"}},Ge=function(e){function n(){var e,t;Object(w.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=Object(T.a)(this,(e=Object(D.a)(n)).call.apply(e,[this].concat(o)))).state={pageType:"todo"},t.setCurrentPage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=["todo","done"],r=t.props.location.pathname,o=n.filter((function(e){return r.includes(e)})),a=Object(Xe.a)(o,1),i=a[0];e.pageType!==i&&t.setState({pageType:i})},t}return Object(z.a)(n,e),Object(k.a)(n,[{key:"componentDidMount",value:function(){this.setCurrentPage()}},{key:"componentDidUpdate",value:function(e,n){this.setCurrentPage(n)}},{key:"render",value:function(){var e=this.props.children,n=this.state.pageType;return o.a.createElement("div",null,o.a.createElement(I.Provider,{value:n},o.a.createElement(He,null),o.a.createElement(A.a,{theme:Be},e)))}}]),n}(r.Component),Je=Object(C.g)(Ge),We=function(e){function n(){return Object(w.a)(this,n),Object(T.a)(this,Object(D.a)(n).apply(this,arguments))}return Object(z.a)(n,e),Object(k.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(S.a,{basename:"/todo_app"},o.a.createElement(Je,null,o.a.createElement(C.d,null,o.a.createElement(C.b,{exact:!0,path:"/",render:function(){return o.a.createElement(C.a,{to:"/todo"})}}),o.a.createElement(C.b,{path:"/todo",component:Ke}),o.a.createElement(C.b,{path:"/done",component:Ne})))))}}]),n}(r.Component);i.a.render(o.a.createElement(c.a,{store:E},o.a.createElement(We,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.cdac0687.chunk.js.map