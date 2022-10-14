"use strict";(self.webpackChunksoapbox_fe=self.webpackChunksoapbox_fe||[]).push([[37],{1151:function(t,o,n){n.r(o),n.d(o,{default:function(){return q}});var e,i,r,s,c,u,a,l=n(1019),p=n(1018),f=(n(1),n(0)),d=n(1021),g=n(35),y=n(3),_=n.n(y),m=n(5),h=n.n(m),v=n(4),Z=n(2),w=n(286),O=n(1259),b=n(21),j=n(31),N=n(90),P=n(190),k=n(12),S=(e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])},e(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}),C=(0,Z.$j)((function(){var t=(0,k.Tm)();return function(o,n){return{account:t(o,n.id)}}}))((s=r=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return S(o,t),o.prototype.render=function(){var t=this.props.account;return(0,l.Z)("div",{className:"account follow-recommendations-account"},void 0,(0,l.Z)("div",{className:"account__wrapper"},void 0,(0,l.Z)(N.Z,{className:"account__display-name account__display-name--with-note",title:t.get("acct"),href:t.get("url"),to:"/@".concat(t.get("acct"))},void 0,(0,l.Z)("div",{className:"account__avatar-wrapper"},void 0,(0,l.Z)(b.Z,{account:t,size:36})),(0,l.Z)(j.Z,{account:t}),(0,l.Z)("div",{className:"account__note"},void 0,t.get("note_plain").split(/(([.?!]+\s)|[．。？！\n•])/)[0])),(0,l.Z)("div",{className:"account__relationship"},void 0,(0,l.Z)(P.Z,{account:t}))))},o}(v.ZP),(0,p.Z)(r,"propTypes",{account:h().map.isRequired,intl:_().object.isRequired,dispatch:_().func.isRequired}),i=s))||i,D=function(){var t=function(o,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])},t(o,n)};return function(o,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=o}t(o,n),o.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}(),T=(0,Z.$j)((function(t){return{suggestions:t.getIn(["suggestions","items"]),isLoading:t.getIn(["suggestions","isLoading"])}}))((a=u=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return D(o,t),o.prototype.componentDidMount=function(){var t=this.props,o=t.dispatch;0===t.suggestions.size&&o((0,w.mO)(!0))},o.prototype.render=function(){var t=this.props,o=t.suggestions;return t.isLoading?(0,l.Z)("div",{className:"column-list"},void 0,(0,l.Z)(O.Z,{})):(0,l.Z)("div",{className:"column-list"},void 0,o.size>0?o.map((function(t){return(0,l.Z)(C,{id:t.get("account")},t.get("account"))})):(0,l.Z)("div",{className:"column-list__empty-message"},void 0,(0,l.Z)(d.Z,{id:"empty_column.follow_recommendations",defaultMessage:"Looks like no suggestions could be generated for you. You can try using search to look for people you might know or explore trending hashtags."})))},o}(v.ZP),(0,p.Z)(u,"propTypes",{dispatch:_().func.isRequired,suggestions:h().list,isLoading:_().bool}),c=a))||c,M=function(){var t=function(o,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])},t(o,n)};return function(o,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=o}t(o,n),o.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}(),R=function(t){function o(){for(var o=[],n=0;n<arguments.length;n++)o[n]=arguments[n];var e=t.apply(this,o)||this;return(0,p.Z)(e,"handleDone",(function(){e.props.onDone()})),e}return M(o,t),o.prototype.render=function(){return(0,l.Z)("div",{className:"scrollable follow-recommendations-container"},void 0,(0,l.Z)("div",{className:"column-title"},void 0,(0,l.Z)("h3",{},void 0,(0,l.Z)(d.Z,{id:"follow_recommendations.heading",defaultMessage:"Follow people you'd like to see posts from! Here are some suggestions."})),(0,l.Z)("p",{},void 0,(0,l.Z)(d.Z,{id:"follow_recommendations.lead",defaultMessage:"Posts from people you follow will show up in chronological order on your home feed. Don't be afraid to make mistakes, you can unfollow people just as easily any time!"}))),(0,l.Z)(T,{}),(0,l.Z)("div",{className:"column-actions"},void 0,(0,l.Z)(g.Z,{onClick:this.handleDone},void 0,(0,l.Z)(d.Z,{id:"follow_recommendations.done",defaultMessage:"Done"}))))},o}(f.Component),q=R},1204:function(t,o,n){n.r(o),n.d(o,{default:function(){return f}});var e,i,r=n(1019),s=n(1018),c=(n(1),n(0)),u=n(1794),a=n(16),l=n(1151),p=(e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])},e(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}),f=(0,u.EN)(i=function(t){function o(){for(var o=[],n=0;n<arguments.length;n++)o[n]=arguments[n];var e=t.apply(this,o)||this;return(0,s.Z)(e,"onDone",(function(){e.props.history.push("/")})),e}return p(o,t),o.prototype.render=function(){return(0,r.Z)(a.Z,{},void 0,(0,r.Z)(l.default,{onDone:this.onDone}))},o}(c.Component))||i},829:function(t,o,n){n.r(o);var e,i=n(1019),r=n(1018),s=n(3),c=n.n(s),u=n(5),a=n.n(u),l=n(4),p=n(1797),f=n(1021),d=n(1017),g=n(2),y=n(8),_=n(286),m=n(46),h=(e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])},e(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}),v=(0,p.vU)({dismissSuggestion:{id:"suggestions.dismiss",defaultMessage:"Dismiss suggestion"}}),Z=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return h(o,t),o.prototype.componentDidMount=function(){this.props.fetchSuggestions()},o.prototype.render=function(){var t=this.props,o=t.intl,e=t.dismissSuggestion,r=this.props.suggestions.slice(0,this.props.limit);return r.isEmpty()?null:(0,i.Z)("div",{className:"wtf-panel"},void 0,(0,i.Z)("div",{className:"wtf-panel-header"},void 0,(0,i.Z)(y.Z,{src:n(181),className:"wtf-panel-header__icon"}),(0,i.Z)("span",{className:"wtf-panel-header__label"},void 0,(0,i.Z)(f.Z,{id:"who_to_follow.title",defaultMessage:"Who To Follow"}))),(0,i.Z)("div",{className:"wtf-panel__content"},void 0,(0,i.Z)("div",{className:"wtf-panel__list"},void 0,r&&r.map((function(t){return(0,i.Z)(m.Z,{id:t.get("account"),actionIcon:n(18),actionTitle:o.formatMessage(v.dismissSuggestion),onActionClick:e},t.get("account"))})))))},o}(l.ZP);(0,r.Z)(Z,"propTypes",{suggestions:a().list.isRequired,fetchSuggestions:c().func.isRequired,dismissSuggestion:c().func.isRequired,intl:c().object.isRequired}),o.default=(0,d.ZP)((0,g.$j)((function(t){return{suggestions:t.getIn(["suggestions","items"])}}),(function(t){return{fetchSuggestions:function(){return t((0,_.mO)())},dismissSuggestion:function(o){return t((0,_.oi)(o.get("id")))}}}),null,{forwardRef:!0})(Z))}}]);
//# sourceMappingURL=follow_recommendations-3b120a3f2b71a126972e.chunk.js.map