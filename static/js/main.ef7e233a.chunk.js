(this["webpackJsonpto-do-list-2"]=this["webpackJsonpto-do-list-2"]||[]).push([[0],{12:function(t,e,o){},14:function(t,e,o){"use strict";o.r(e);var n=o(1),s=o.n(n),r=o(7),c=o.n(r),i=o(2),d=(o(12),o(5)),a=o(0);function l(t){var e=Object(n.useState)(""),o=Object(i.a)(e,2),s=o[0],r=o[1],c=Object(n.useRef)(null);Object(n.useEffect)((function(){c.current.focus()}));return Object(a.jsx)("div",{id:"add-todo-form-container",children:Object(a.jsxs)("form",{className:"task-form",onSubmit:function(e){r(s.trim()),e.preventDefault(),function(){var e=Date.now();t.setTodosArr([].concat(Object(d.a)(t.todosArr),[{text:s,id:parseInt(e),isCompleted:!1}]))}(),r("")},children:[Object(a.jsx)("input",{type:"text",value:s,placeholder:"Description Here",name:"description",className:"form-input-box",onChange:function(t){r(t.target.value)},ref:c,maxLength:"50"}),Object(a.jsx)("button",{id:"add-todo-form-button",children:"Add New"})]})})}function j(t){var e=Object(n.useState)(t.prevText),o=Object(i.a)(e,2),s=o[0],r=o[1];return Object(a.jsx)("div",{className:t.isHidden?"todo-edit-form-hidden":"todo-edit-form-invisible",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(s.trim()),t.editTodoTaskText(s)},children:[Object(a.jsx)("label",{children:Object(a.jsx)("input",{type:"text",name:"text",placeholder:"Add changes here",value:s,onChange:function(t){r(t.target.value)},maxLength:"50"})}),Object(a.jsx)("input",{type:"submit",value:"Submit"}),Object(a.jsx)("button",{type:"button",onClick:t.hide,children:"Cancel"})]})})}function u(t){var e=Object(n.useState)(!0),o=Object(i.a)(e,2),s=o[0],r=o[1],c=function(e){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={text:e,id:t.task.id,isCompleted:o},s=t.todosArr.filter((function(e){return e.id!==t.task.id})),r=[n].concat(Object(d.a)(s));t.setTodosArr(r)},l=function(){r(!s)};return Object(a.jsxs)("li",{children:[Object(a.jsxs)("div",{className:"div-todo-text-btns-containers",children:[Object(a.jsx)("div",{className:t.task.isCompleted?"completed-text":"todo-text",onClick:function(){c(t.task.text,!t.task.isCompleted),console.log(t.task.isCompleted)},children:Object(a.jsx)("p",{children:t.task.text})}),Object(a.jsxs)("div",{className:"todo-buttons-div",children:[Object(a.jsx)("button",{onClick:function(){var e=t.todosArr.filter((function(e){return e.id!==t.task.id}));t.setTodosArr(e)},className:"todo-buttons",children:"\u2718"}),Object(a.jsx)("button",{className:"todo-buttons",onClick:l,children:"\u270e"})]})]}),Object(a.jsx)(j,{isHidden:s,hide:l,prevText:t.task.text,editTodoTaskText:function(t){c(t,!1),l()}})]})}function b(t){var e=t.todosArr.filter((function(t){return!1===t.isCompleted})).map((function(e){return Object(a.jsx)(u,{task:e,setTodosArr:t.setTodosArr,todosArr:t.todosArr},e.id)})),o=t.todosArr.filter((function(t){return!0===t.isCompleted})),n=o.map((function(e){return Object(a.jsx)(u,{task:e,setTodosArr:t.setTodosArr,todosArr:t.todosArr},e.id)})),s=Object(a.jsx)("h1",{id:"things-completed",children:0===o.length?"":"Completed"});return Object(a.jsxs)("div",{children:[Object(a.jsx)("ul",{children:e}),s,Object(a.jsx)("ul",{id:"completed-todos-ul",children:n})]})}var x=function(){var t=Object(n.useState)([]),e=Object(i.a)(t,2),o=e[0],s=e[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{children:Object(a.jsx)("h1",{children:"Things To Do List"})}),Object(a.jsx)(l,{setTodosArr:s,todosArr:o}),Object(a.jsx)("br",{}),Object(a.jsx)(b,{setTodosArr:s,todosArr:o})]})};c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ef7e233a.chunk.js.map