"use strict";(self.webpackChunksoapbox_fe=self.webpackChunksoapbox_fe||[]).push([[39],{1190:function(o,t,e){e.r(t),e.d(t,{default:function(){return q}});var n,r,s,a,i=e(1019),c=e(1018),u=e(24),l=e.n(u),p=(e(1),e(3)),d=e.n(p),f=e(5),h=e.n(f),Z=e(4),v=e(1797),b=e(1017),m=e(1021),y=e(2),g=e(1267),_=e(12),w=e(17),I=e(10),M=e(15),C=e(1259),j=e(25),k=e(46),L=e(16),O=(n=function(o,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e])},n(o,t)},function(o,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=o}n(o,t),o.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),P=(0,v.vU)({heading:{id:"column.followers",defaultMessage:"Followers"}}),q=(0,y.$j)((function(o,t){var e=t.params,n=(t.withReplies,e.username||""),r=o.get("me"),s=(o.getIn(["accounts",-1,"username"])||"").toLowerCase()===n.toLowerCase(),a=(0,I.N$)(o.get("instance")),i=-1;if(s)i=null;else{var c=(0,_.XO)(o,n);i=c?c.getIn(["id"],null):-1}var u=(0,w.qn)(o,i,"followers"),l=o.getIn(["relationships",i,"blocked_by"],!1);return{accountId:i,unavailable:r!==i&&l&&!a.blockersVisible,isAccount:!!o.getIn(["accounts",i]),accountIds:o.getIn(["user_lists","followers",i,"items"]),hasMore:!!o.getIn(["user_lists","followers",i,"next"]),diffCount:u}}))(r=(0,b.ZP)((a=s=function(o){function t(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=o.apply(this,t)||this;return(0,c.Z)(n,"handleLoadMore",l()((function(){n.props.accountId&&-1!==n.props.accountId&&n.props.dispatch((0,M.tu)(n.props.accountId))}),300,{leading:!0})),n}return O(t,o),t.prototype.componentDidMount=function(){var o=this.props,t=o.params.username,e=o.accountId;e&&-1!==e?(this.props.dispatch((0,M.$G)(e)),this.props.dispatch((0,M.__)(e))):this.props.dispatch((0,M.UL)(t))},t.prototype.componentDidUpdate=function(o){var t=this.props,e=t.accountId,n=t.dispatch;e&&-1!==e&&e!==o.accountId&&e&&(n((0,M.$G)(e)),n((0,M.__)(e)))},t.prototype.render=function(){var o=this.props,t=o.intl,e=o.accountIds,n=o.hasMore,r=o.diffCount,s=o.isAccount,a=o.accountId,c=o.unavailable;return s||-1===a?-1!==a&&e?c?(0,i.Z)(L.Z,{},void 0,(0,i.Z)("div",{className:"empty-column-indicator"},void 0,(0,i.Z)(m.Z,{id:"empty_column.account_unavailable",defaultMessage:"Profile unavailable"}))):(0,i.Z)(L.Z,{heading:t.formatMessage(P.heading)},void 0,(0,i.Z)(j.Z,{scrollKey:"followers",hasMore:n,diffCount:r,onLoadMore:this.handleLoadMore,emptyMessage:(0,i.Z)(m.Z,{id:"account.followers.empty",defaultMessage:"No one follows this user yet."})},void 0,e.map((function(o){return(0,i.Z)(k.Z,{id:o,withNote:!1},o)})))):(0,i.Z)(L.Z,{},void 0,(0,i.Z)(C.Z,{})):(0,i.Z)(L.Z,{},void 0,(0,i.Z)(g.Z,{}))},t}(Z.ZP),(0,c.Z)(s,"propTypes",{intl:d().object.isRequired,params:d().object.isRequired,dispatch:d().func.isRequired,accountIds:h().orderedSet,hasMore:d().bool,diffCount:d().number,isAccount:d().bool,unavailable:d().bool}),r=a))||r)||r}}]);
//# sourceMappingURL=followers-9d7e998a1e78839fc302.chunk.js.map