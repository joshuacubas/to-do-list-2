(this["webpackJsonpto-do-list-2"]=this["webpackJsonpto-do-list-2"]||[]).push([[0],{12:function(t,e,o){},14:function(t,e,o){"use strict";o.r(e);var s=o(1),n=o.n(s),r=o(7),c=o.n(r),i=o(2),d=(o(12),o(5)),a=o(0);function l(t){var e=Object(s.useState)(""),o=Object(i.a)(e,2),n=o[0],r=o[1],c=Object(s.useRef)(null);Object(s.useEffect)((function(){c.current.focus()}));return Object(a.jsx)("div",{id:"add-todo-form-container",children:Object(a.jsxs)("form",{className:"task-form",onSubmit:function(e){e.preventDefault(),r(n.trim()),""!==n&&(!function(){var e=Date.now();t.setTodosArr([].concat(Object(d.a)(t.todosArr),[{text:n,id:parseInt(e),isCompleted:!1}]))}(),r(""))},children:[Object(a.jsx)("input",{type:"text",value:n,placeholder:"Description Here",name:"description",className:"form-input-box",onChange:function(t){r(t.target.value)},ref:c,maxLength:"50"}),Object(a.jsx)("button",{id:"add-todo-form-button",children:"Add New"})]})})}function u(t){var e=Object(s.useState)(t.prevText),o=Object(i.a)(e,2),n=o[0],r=o[1];return Object(a.jsx)("div",{className:t.isHidden?"todo-edit-form-hidden":"todo-edit-form-invisible",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(n.trim()),t.editTodoTaskText(n)},children:[Object(a.jsx)("label",{children:Object(a.jsx)("input",{type:"text",name:"text",placeholder:"Add changes here",value:n,onChange:function(t){r(t.target.value)},maxLength:"50",className:"edit-form-textboxes"})}),Object(a.jsx)("button",{type:"button",onClick:t.hide,className:"edit-form-buttons",children:"Cancel"}),Object(a.jsx)("input",{type:"submit",value:"Submit",className:"edit-form-buttons"})]})})}function j(t){var e=Object(s.useState)(!0),o=Object(i.a)(e,2),n=o[0],r=o[1],c=function(e){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s={text:e,id:t.task.id,isCompleted:o},n=t.todosArr.filter((function(e){return e.id!==t.task.id})),r=[s].concat(Object(d.a)(n));t.setTodosArr(r)},l=function(){r(!n)};return Object(a.jsxs)("li",{children:[Object(a.jsxs)("div",{className:"div-todo-text-btns-containers",children:[Object(a.jsx)("div",{className:t.task.isCompleted?"completed-text":"todo-text",onClick:function(){c(t.task.text,!t.task.isCompleted),console.log(t.task.isCompleted)},children:Object(a.jsx)("p",{children:t.task.text})}),Object(a.jsxs)("div",{className:"todo-buttons-div",children:[Object(a.jsx)("button",{className:"todo-buttons",onClick:l,children:"\u270e"}),Object(a.jsx)("button",{onClick:function(){var e=t.todosArr.filter((function(e){return e.id!==t.task.id}));t.setTodosArr(e)},className:"todo-buttons",children:"\u2718"})]})]}),Object(a.jsx)(u,{isHidden:n,hide:l,prevText:t.task.text,editTodoTaskText:function(t){c(t,!1),l()}})]})}function b(t){var e=t.todosArr.filter((function(t){return!1===t.isCompleted})).map((function(e){return Object(a.jsx)(j,{task:e,setTodosArr:t.setTodosArr,todosArr:t.todosArr},e.id)})),o=t.todosArr.filter((function(t){return!0===t.isCompleted})),s=o.map((function(e){return Object(a.jsx)(j,{task:e,setTodosArr:t.setTodosArr,todosArr:t.todosArr},e.id)})),n=Object(a.jsx)("h1",{id:"things-completed",children:0===o.length?"":"Completed"});return Object(a.jsxs)("div",{children:[Object(a.jsx)("ul",{children:e}),n,Object(a.jsx)("ul",{id:"completed-todos-ul",children:s})]})}var x=function(){var t=Object(s.useState)([]),e=Object(i.a)(t,2),o=e[0],n=e[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{children:Object(a.jsx)("h1",{children:"Things To Do"})}),Object(a.jsx)(l,{setTodosArr:n,todosArr:o}),Object(a.jsx)(b,{setTodosArr:n,todosArr:o})]})};c.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.20a4aadf.chunk.js.map