"use strict";(self.webpackChunksoapbox_fe=self.webpackChunksoapbox_fe||[]).push([[20],{1116:function(t,n,o){o.r(n),o.d(n,{default:function(){return x}});var e,r,c,a,i,u=o(1019),p=o(1018),s=(o(1),o(320)),l=o(3),f=o.n(l),h=o(5),d=o.n(h),y=o(4),v=o(1017),_=o(2),m=o(1800),Z=o(50),b=o(21),k=o(36),g=o(0),w=o(1021),O=o(1794),C=o(8),I=(e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])},e(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}),j=(0,O.EN)(r=function(t){function n(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var e=t.apply(this,n)||this;return(0,p.Z)(e,"handleClick",(function(){var t,n=e.props.to;1===(null===(t=window.history)||void 0===t?void 0:t.length)?e.props.history.push(n||"/"):e.props.history.goBack()})),(0,p.Z)(e,"handleKeyUp",(function(t){"Enter"===t.key&&e.handleClick()})),e}return I(n,t),n.prototype.render=function(){return(0,u.Z)("button",{onClick:this.handleClick,onKeyUp:this.handleKeyUp,className:"column-back-button"},void 0,(0,u.Z)(C.Z,{id:"chevron-left",className:"column-back-button__icon",fixedWidth:!0}),(0,u.Z)(w.Z,{id:"column_back_button.label",defaultMessage:"Back"}))},n}(g.PureComponent))||r,R=o(12),E=o(17),P=o(55),q=o(1087),N=function(){var t=function(n,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])},t(n,o)};return function(n,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}(),x=(0,_.$j)((function(t,n){var o=n.params,e=(0,R.dq)(),r=t.getIn(["chats","items",o.chatId],(0,s.Map)()).toJS();return{me:t.get("me"),chat:e(t,r),displayFqn:(0,P.$X)(t)}}))(c=(0,v.ZP)((i=a=function(t){function n(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var e=t.apply(this,n)||this;return(0,p.Z)(e,"handleInputRef",(function(t){e.inputElem=t,e.focusInput()})),(0,p.Z)(e,"focusInput",(function(){e.inputElem&&e.inputElem.focus()})),(0,p.Z)(e,"markRead",(function(){var t=e.props,n=t.dispatch,o=t.chat;o&&n((0,Z.yb)(o.get("id")))})),e}return N(n,t),n.prototype.componentDidMount=function(){var t=this.props,n=t.dispatch,o=t.params;n((0,Z.Gg)(o.chatId)),this.markRead()},n.prototype.componentDidUpdate=function(t){var n=this;[function(){return n.props.chat},function(){return n.props.chat.get("unread")>0}].every((function(t){return t()}))&&this.markRead()},n.prototype.render=function(){var t=this.props,n=t.chat,o=t.displayFqn;if(!n)return null;var e=n.get("account");return(0,u.Z)(k.Z,{},void 0,(0,u.Z)("div",{className:"chatroom__back"},void 0,(0,u.Z)(j,{}),(0,u.Z)(m.rU,{to:"/@".concat(e.get("acct")),className:"chatroom__header"},void 0,(0,u.Z)(b.Z,{account:e,size:18}),(0,u.Z)("div",{className:"chatroom__title"},void 0,"@",(0,E.F7)(e,o)))),(0,u.Z)(q.Z,{chatId:n.get("id"),onSetInputRef:this.handleInputRef}))},n}(y.ZP),(0,p.Z)(a,"propTypes",{dispatch:f().func.isRequired,intl:f().object.isRequired,chat:d().map,displayFqn:f().bool,me:f().node}),c=i))||c)||c}}]);
//# sourceMappingURL=chat_room-489fff5225aec5d906d1.chunk.js.map