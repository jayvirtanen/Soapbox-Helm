"use strict";(self.webpackChunksoapbox_fe=self.webpackChunksoapbox_fe||[]).push([[59],{1178:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var o,i,r=t(1019),a=t(1018),s=(t(1),t(0)),c=t(1797),l=t(1017),p=t(1021),d=t(2),u=t(1794),f=t(9),m=t(11),h=t(16),v=t(51),_=t(33),y=t(1171),Z=t(1175),g=(o=function(e,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},o(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}o(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),w=(0,c.vU)({title:{id:"column.remote",defaultMessage:"Federated timeline"}}),M=(0,d.$j)((function(e,n){var t=n.params.instance,o=(0,f.Gw)(e),i=o.getIn(["remote","other","onlyMedia"]),r="remote";return{timelineId:r,onlyMedia:i,hasUnread:e.getIn(["timelines","".concat(r).concat(i?":media":"",":").concat(t),"unread"])>0,instance:t,pinned:o.getIn(["remote_timeline","pinnedHosts"]).includes(t)}}))(i=(0,l.ZP)(i=(0,u.EN)(i=function(e){function n(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var o=e.apply(this,n)||this;return(0,a.Z)(o,"handleCloseClick",(function(e){o.props.history.push("/timeline/fediverse")})),(0,a.Z)(o,"handleLoadMore",(function(e){var n=o.props,t=n.dispatch,i=n.onlyMedia,r=n.instance;t((0,_.aT)(r,{maxId:e,onlyMedia:i}))})),o}return g(n,e),n.prototype.componentDidMount=function(){var e=this.props,n=e.dispatch,t=e.onlyMedia,o=e.instance;n((0,_.aT)(o,{onlyMedia:t})),this.disconnect=n((0,v.$O)(o,{onlyMedia:t}))},n.prototype.componentDidUpdate=function(e){if(e.onlyMedia!==this.props.onlyMedia){var n=this.props,t=n.dispatch,o=n.onlyMedia,i=n.instance;this.disconnect(),t((0,_.aT)(i,{onlyMedia:o})),this.disconnect=t((0,v.$O)(i,{onlyMedia:o}))}},n.prototype.componentWillUnmount=function(){this.disconnect&&(this.disconnect(),this.disconnect=null)},n.prototype.render=function(){var e=this.props,n=e.intl,o=e.onlyMedia,i=e.timelineId,a=e.instance,s=e.pinned;return(0,r.Z)(h.Z,{label:n.formatMessage(w.title),heading:a,transparent:!0},void 0,(0,r.Z)(Z.Z,{host:a}),!s&&(0,r.Z)("div",{className:"timeline-filter-message"},void 0,(0,r.Z)(m.Z,{src:t(18),onClick:this.handleCloseClick}),(0,r.Z)(p.Z,{id:"remote_timeline.filter_message",defaultMessage:"You are viewing the timeline of {instance}.",values:{instance:a}})),(0,r.Z)(y.Z,{scrollKey:"".concat(i,"_").concat(a,"_timeline"),timelineId:"".concat(i).concat(o?":media":"",":").concat(a),onLoadMore:this.handleLoadMore,emptyMessage:(0,r.Z)(p.Z,{id:"empty_column.remote",defaultMessage:"There is nothing here! Manually follow users from {instance} to fill it up.",values:{instance:a}})}))},n}(s.PureComponent))||i)||i)||i},1121:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var o=t(1019),i=t(1018),r=(t(1),t(3)),a=t.n(r),s=t(5),c=t.n(s),l=t(4),p=t(1797),d=t(1017),u=t(2),f=t(9),m=function(e){return(0,f.Gw)(e).getIn(["remote_timeline","pinnedHosts"])};function h(e){return function(n,t){var o=t(),i=m(o);return n((0,f.oz)(["remote_timeline","pinnedHosts"],i.add(e)))}}function v(e){return function(n,t){var o=t(),i=m(o);return n((0,f.oz)(["remote_timeline","pinnedHosts"],i.delete(e)))}}var _,y,Z,g,w=t(74),M=t(12),b=(_=function(e,n){return _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},_(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}_(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),I=(0,M.Go)(),O=(0,p.vU)({pinHost:{id:"remote_instance.pin_host",defaultMessage:"Pin {host}"},unpinHost:{id:"remote_instance.unpin_host",defaultMessage:"Unpin {host}"}}),P=(0,u.$j)((function(e,n){var t=n.host,o=(0,f.Gw)(e);return{instance:e.get("instance"),remoteInstance:I(e,t),pinned:o.getIn(["remote_timeline","pinnedHosts"]).includes(t)}}),null,null,{forwardRef:!0})(y=(0,d.ZP)((g=Z=function(e){function n(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var r=e.apply(this,n)||this;return(0,i.Z)(r,"handlePinHost",(function(e){var n=r.props,t=n.dispatch,o=n.host;t(n.pinned?v(o):h(o))})),(0,i.Z)(r,"makeMenu",(function(){var e=r.props,n=e.intl,o=e.host,i=e.pinned;return[{text:n.formatMessage(i?O.unpinHost:O.pinHost,{host:o}),action:r.handlePinHost,icon:t(i?655:656)}]})),r}return b(n,e),n.prototype.render=function(){var e=this.props,n=e.remoteInstance,i=e.pinned,r=this.makeMenu(),a=i?"thumbtack":"globe-w";return(0,o.Z)("div",{className:"wtf-panel instance-federation-panel"},void 0,(0,o.Z)("div",{className:"wtf-panel-header"},void 0,(0,o.Z)("i",{role:"img",alt:a,className:"fa fa-".concat(a," wtf-panel-header__icon")}),(0,o.Z)("span",{className:"wtf-panel-header__label"},void 0,(0,o.Z)("span",{},void 0,n.get("host"))),(0,o.Z)("div",{className:"wtf-panel__menu"},void 0,(0,o.Z)(w.Z,{items:r,src:t(199),direction:"right"}))))},n}(l.ZP),(0,i.Z)(Z,"propTypes",{intl:a().object.isRequired,host:a().string.isRequired,instance:c().map,remoteInstance:c().map,pinned:a().bool}),y=g))||y)||y},820:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var o,i,r,a,s=t(1019),c=t(1018),l=(t(1),t(3)),p=t.n(l),d=t(5),u=t.n(d),f=t(4),m=t(1797),h=t(1017),v=t(1021),_=t(2),y=t(1022),Z=t(74),g=t(1142),w=t(12),M=t(17),b=(o=function(e,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},o(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}o(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),I=(0,w.Go)(),O=(0,m.vU)({editFederation:{id:"remote_instance.edit_federation",defaultMessage:"Edit federation"}}),P=(0,_.$j)((function(e,n){var t=n.host,o=e.get("me"),i=e.getIn(["accounts",o]);return{instance:e.get("instance"),remoteInstance:I(e,t),isAdmin:(0,M.GJ)(i)}}),null,null,{forwardRef:!0})(i=(0,h.ZP)((a=r=function(e){function n(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var i=e.apply(this,n)||this;return(0,c.Z)(i,"handleEditFederation",(function(e){var n=i.props,t=n.dispatch,o=n.host;t((0,y.h7)("EDIT_FEDERATION",{host:o}))})),(0,c.Z)(i,"makeMenu",(function(){return[{text:i.props.intl.formatMessage(O.editFederation),action:i.handleEditFederation,icon:t(196)}]})),i}return b(n,e),n.prototype.render=function(){var e=this.props,n=e.remoteInstance,o=e.isAdmin,i=this.makeMenu();return(0,s.Z)("div",{className:"wtf-panel instance-federation-panel"},void 0,(0,s.Z)("div",{className:"wtf-panel-header"},void 0,(0,s.Z)("i",{role:"img",alt:"gavel",className:"fa fa-gavel wtf-panel-header__icon"}),(0,s.Z)("span",{className:"wtf-panel-header__label"},void 0,(0,s.Z)("span",{},void 0,(0,s.Z)(v.Z,{id:"remote_instance.federation_panel.heading",defaultMessage:"Federation Restrictions"}))),o&&(0,s.Z)("div",{className:"wtf-panel__menu"},void 0,(0,s.Z)(Z.Z,{items:i,src:t(199),direction:"right"}))),(0,s.Z)("div",{className:"wtf-panel__content"},void 0,(0,s.Z)(g.Z,{remoteInstance:n})))},n}(f.ZP),(0,c.Z)(r,"propTypes",{intl:p().object.isRequired,host:p().string.isRequired,instance:u().map,remoteInstance:u().map,isAdmin:p().bool}),i=a))||i)||i}}]);
//# sourceMappingURL=remote_timeline-1c3a887808a440b919c1.chunk.js.map