"use strict";(self.webpackChunksoapbox_fe=self.webpackChunksoapbox_fe||[]).push([[60],{1125:function(t,e,s){s.r(e),s.d(e,{default:function(){return st}});var n,a=s(1019),o=s(1018),i=s(24),c=s.n(i),r=(s(1),s(3)),u=s.n(r),l=s(5),d=s.n(l),p=s(4),f=s(1797),_=s(1017),g=s(1021),h=s(2),m=s(25),v=s(194),y=s(16),Z=s(1015),b=s(1020),M=s(7),C=s.n(M),w=s(0),O=s(1800),I=s(188),j=s(21),x=s(31),N=s(85),P=s(105),k=s(281),L=s(764),R=s(17),q=(s(6),s(320)),T=s(197),E=s(396),S=s(12),A=function(t,e){var s=(0,S.Tm)(),n=t.get("me"),a=e.get("params"),o=s(t,n),i=(0,q.Map)({account:o,content:a.get("text","").replace(new RegExp("\n","g"),"<br>"),created_at:a.get("scheduled_at"),id:e.get("id"),in_reply_to_id:a.get("in_reply_to_id"),media_attachments:e.get("media_attachments"),poll:a.get("poll"),sensitive:a.get("sensitive"),uri:"/scheduled_statuses/".concat(e.get("id")),url:"/scheduled_statuses/".concat(e.get("id")),visibility:a.get("visibility")});return(0,E.M)((0,T.f)(i))},K=s(1022),U=s(9),$=s(11),z=s(137),D=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function s(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}),H=(0,f.vU)({cancel:{id:"scheduled_status.cancel",defaultMessage:"Cancel"},deleteConfirm:{id:"confirmations.scheduled_status_delete.confirm",defaultMessage:"Cancel"},deleteHeading:{id:"confirmations.scheduled_status_delete.heading",defaultMessage:"Cancel scheduled post"},deleteMessage:{id:"confirmations.scheduled_status_delete.message",defaultMessage:"Are you sure you want to cancel this scheduled post?"}}),F=function(t){function e(){for(var e=[],s=0;s<arguments.length;s++)e[s]=arguments[s];var n=t.apply(this,e)||this;return(0,o.Z)(n,"handleCancelClick",(function(t){var e=n.props,s=e.status;(0,e.onCancelClick)(s)})),n}return D(e,t),e.prototype.render=function(){var t=this.props.intl;return(0,a.Z)("div",{className:"status__action-bar"},void 0,(0,a.Z)("div",{className:"status__button"},void 0,(0,a.Z)($.Z,{title:t.formatMessage(H.cancel),text:t.formatMessage(H.cancel),src:s(18),onClick:this.handleCancelClick})))},e}(p.ZP);(0,o.Z)(F,"propTypes",{status:d().map.isRequired,intl:u().object.isRequired,me:z.Z.me,onCancelClick:u().func.isRequired});var G,W,Y,B,J=(0,_.ZP)((0,h.$j)((function(t){return{me:t.get("me")}}),(function(t,e){var n=e.intl;return{onCancelClick:function(e){t((function(a,o){var i=(0,U.Gw)(o()).get("deleteModal");t(i?(0,K.h7)("CONFIRM",{icon:s(743),heading:n.formatMessage(H.deleteHeading),message:n.formatMessage(H.deleteMessage),confirm:n.formatMessage(H.deleteConfirm),onConfirm:function(){return t((0,v.Kl)(e.get("id")))}}):(0,v.Kl)(e.get("id")))}))}}}))(F)),Q=function(){var t=function(e,s){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])},t(e,s)};return function(e,s){if("function"!=typeof s&&null!==s)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");function n(){this.constructor=e}t(e,s),e.prototype=null===s?Object.create(s):(n.prototype=s.prototype,new n)}}(),V=["status","account"],X=(0,h.$j)((function(t,e){var s=t.getIn(["scheduled_statuses",e.statusId]);return{status:A(t,s)}}))(G=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Q(e,t),e.prototype.render=function(){var t=this.props,e=t.status,s=t.account,n=(0,b.Z)(t,V);if(!e.get("account"))return null;var o="/scheduled_statuses/".concat(e.get("id")),i=e.getIn(["account","pleroma","favicon"]),c=(0,R.ge)(e.get("account"));return(0,a.Z)("div",{className:"scheduled-status"},void 0,(0,a.Z)("div",{className:C()("status__wrapper","status__wrapper-".concat(e.get("visibility")),{"status__wrapper-reply":!!e.get("in_reply_to_id")}),tabIndex:this.props.muted?null:0},void 0,(0,a.Z)("div",{className:C()("status","status-".concat(e.get("visibility")),{"status-reply":!!e.get("in_reply_to_id"),muted:this.props.muted}),"data-id":e.get("id")},void 0,(0,a.Z)("div",{className:"status__expand",role:"presentation"}),(0,a.Z)("div",{className:"status__info"},void 0,(0,a.Z)(O.OL,{to:o,className:"status__relative-time"},void 0,(0,a.Z)(N.Z,{timestamp:e.get("created_at"),futureDate:!0})),i&&(0,a.Z)("div",{className:"status__favicon"},void 0,(0,a.Z)(O.rU,{to:"/timeline/".concat(c)},void 0,(0,a.Z)("img",{src:i,alt:"",title:c}))),(0,a.Z)("div",{className:"status__profile"},void 0,(0,a.Z)("div",{className:"status__avatar"},void 0,(0,a.Z)(O.OL,{to:"/@".concat(e.getIn(["account","acct"])),title:e.getIn(["account","acct"])},void 0,(0,a.Z)(j.Z,{account:e.get("account"),size:48}))),(0,a.Z)(O.OL,{to:"/@".concat(e.getIn(["account","acct"])),title:e.getIn(["account","acct"]),className:"status__display-name"},void 0,(0,a.Z)(x.Z,{account:e.get("account")})))),(0,a.Z)(k.Z,{status:e}),(0,a.Z)(P.Z,{status:e,expanded:!0,collapsable:!0}),e.get("media_attachments").size>0&&(0,a.Z)(I.Z,{compact:!0,media:e.get("media_attachments"),sensitive:e.get("sensitive")}),e.get("poll")&&(0,a.Z)(L.Z,{poll:e.get("poll")}),w.createElement(J,(0,Z.Z)({status:e,account:s},n)))))},e}(p.ZP))||G,tt=function(){var t=function(e,s){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])},t(e,s)};return function(e,s){if("function"!=typeof s&&null!==s)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");function n(){this.constructor=e}t(e,s),e.prototype=null===s?Object.create(s):(n.prototype=s.prototype,new n)}}(),et=(0,f.vU)({heading:{id:"column.scheduled_statuses",defaultMessage:"Scheduled Posts"}}),st=(0,h.$j)((function(t){return{statusIds:t.getIn(["status_lists","scheduled_statuses","items"]),isLoading:t.getIn(["status_lists","scheduled_statuses","isLoading"],!0),hasMore:!!t.getIn(["status_lists","scheduled_statuses","next"])}}))(W=(0,_.ZP)((B=Y=function(t){function e(){for(var e=[],s=0;s<arguments.length;s++)e[s]=arguments[s];var n=t.apply(this,e)||this;return(0,o.Z)(n,"handleLoadMore",c()((function(){n.props.dispatch((0,v.xj)())}),300,{leading:!0})),n}return tt(e,t),e.prototype.componentDidMount=function(){(0,this.props.dispatch)((0,v.fO)())},e.prototype.render=function(){var t=this.props,e=t.intl,s=t.statusIds,n=t.hasMore,o=t.isLoading,i=(0,a.Z)(g.Z,{id:"empty_column.scheduled_statuses",defaultMessage:"You don't have any scheduled statuses yet. When you add one, it will show up here."});return(0,a.Z)(y.Z,{icon:"calendar",heading:e.formatMessage(et.heading)},void 0,(0,a.Z)(m.Z,{scrollKey:"scheduled_statuses",emptyMessage:i,isLoading:o,hasMore:n},void 0,s.map((function(t){return(0,a.Z)(X,{statusId:t},t)}))))},e}(p.ZP),(0,o.Z)(Y,"propTypes",{dispatch:u().func.isRequired,statusIds:d().orderedSet.isRequired,intl:u().object.isRequired,hasMore:u().bool,isLoading:u().bool}),W=B))||W)||W}}]);
//# sourceMappingURL=scheduled_statuses-bea0bcb5301753d15df6.chunk.js.map