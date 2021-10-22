(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={head:"section_head__t8q79",section:"section_section__1X7Wx"}},14:function(t,e,n){t.exports={headFilter:"filter_headFilter__3ZFin",inputFilter:"filter_inputFilter__2Khh-"}},31:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),i=n(12),s=n.n(i),l=n(1);function u(t){var e=t.title,n=t.children;return Object(l.jsxs)("section",{className:s.a.section,children:[Object(l.jsx)("h2",{className:s.a.head,children:e}),n]})}var d=n(3),b=n(33),j=n(4),m={addContact:Object(j.b)("contacts/add",(function(t,e){return{payload:{id:Object(b.a)(),name:t,number:e}}})),deleteContact:Object(j.b)("contacts/delete"),doFilter:Object(j.b)("contacts/filter")},f=n(6),O=n.n(f);function h(){var t=Object(d.c)((function(t){return t})).contacts,e=Object(d.b)();return Object(l.jsxs)("form",{className:O.a.form,onSubmit:function(n){return function(n){n.preventDefault();var a=n.currentTarget,c=a.name,r=a.number;t.items.find((function(t){return t.name.toLowerCase()===c.value.toLowerCase()}))?alert("".concat(c.value," is already in your contacts!")):e(m.addContact(c.value,r.value)),c.value="",r.value=""}(n)},children:[Object(l.jsxs)("label",{className:O.a.labelForm,children:["Name",Object(l.jsx)("input",{className:O.a.inputForm,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(l.jsxs)("label",{className:O.a.labelForm,children:["Number",Object(l.jsx)("input",{className:O.a.inputForm,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(l.jsx)("button",{className:O.a.buttonForm,type:"submit",children:"Add contact"})]})}var p=n(9),x=n.n(p),_=n(7),v=n.n(_);function F(){var t=Object(d.c)((function(t){return t})).contacts,e=Object(d.b)(),n=""===t.filter.trim(),a=t.filter;return Object(l.jsx)("ul",{children:n?t.items.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(l.jsxs)("li",{id:n,className:v.a.contactItem,children:[a,": ",c,Object(l.jsx)("button",{className:v.a.delete,type:"button",id:n,onClick:function(t){e(m.deleteContact(t.target.id))},children:"Delete"})]},n)})):function(){var e=a.toLowerCase();return t.items.filter((function(t){return t.name.toLowerCase().includes(e)}))}().map((function(t){var n=t.id,a=t.name,c=t.number;return Object(l.jsxs)("li",{id:n,className:v.a.contactItem,children:[a,": ",c,Object(l.jsx)("button",{className:v.a.delete,type:"button",id:n,onClick:function(t){e(m.deleteContact(t.target.id))},children:"Delete"})]},n)}))})}F.propTypec={contacts:x.a.array,onDeleteContact:x.a.func};var C=n(14),y=n.n(C);function N(){var t=Object(d.b)();return Object(l.jsxs)("label",{children:[Object(l.jsx)("h3",{className:y.a.headFilter,children:"Find contacts by name"}),Object(l.jsx)("input",{className:y.a.inputFilter,type:"text",onChange:function(e){return t(m.doFilter(e.target.value))}})]})}function g(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{title:"Phonebook",children:Object(l.jsx)(h,{})}),Object(l.jsxs)(u,{title:"Contacts",children:[Object(l.jsx)(N,{}),Object(l.jsx)(F,{})]})]})}var k,w=n(16),A=n(5),q=n(17),z=n.n(q),I=n(10),L=n(18),D=n(2),J=Object(j.c)([],(k={},Object(I.a)(k,m.addContact,(function(t,e){var n=e.payload;return[].concat(Object(L.a)(t),[n])})),Object(I.a)(k,m.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),k)),S=Object(j.c)("",Object(I.a)({},m.doFilter,(function(t,e){return e.payload}))),Z=Object(D.b)({items:J,filter:S}),B={key:"contacts",storage:z.a,blacklist:["filter"]},M=Object(j.a)({reducer:{contacts:Object(A.g)(B,Z)},middleware:function(t){return t({serializableCheck:{ignoredActions:[A.a,A.f,A.b,A.c,A.d,A.e]}})},devTools:!1}),T=Object(A.h)(M);o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(d.a,{store:M,children:Object(l.jsx)(w.a,{loading:null,persistor:T,children:Object(l.jsx)(g,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"form_form__awxH0",labelForm:"form_labelForm__3a028",inputForm:"form_inputForm__3V2SF",buttonForm:"form_buttonForm__1BkqK"}},7:function(t,e,n){t.exports={contactItem:"contacts_contactItem__Ga5oJ",delete:"contacts_delete__2MSLq"}}},[[31,1,2]]]);
//# sourceMappingURL=main.cc54681e.chunk.js.map