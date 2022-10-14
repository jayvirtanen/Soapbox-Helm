"use strict";(self.webpackChunksoapbox_fe=self.webpackChunksoapbox_fe||[]).push([[7],{1131:function(t,e,a){a.d(e,{Z:function(){return w}});var n,o,i,s,r=a(1015),c=a(1019),l=a(1018),d=(a(1),a(7)),p=a.n(d),u=a(3),h=a.n(u),f=a(0),m=a(5),v=a.n(m),g=a(4),Z=a(2),y=a(9),_=a(270),b=a(8),M=a(103),I=a(84),O=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function a(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}),w=(0,Z.$j)((function(t){return{autoPlayGif:(0,y.Gw)(t).get("autoPlayGif"),displayMedia:(0,y.Gw)(t).get("displayMedia")}}))((s=i=function(t){function e(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];var n=t.apply(this,e)||this;return(0,l.Z)(n,"state",{visible:"hide_all"!==n.props.displayMedia&&!n.props.attachment.getIn(["status","sensitive"])||"show_all"===n.props.displayMedia,loaded:!1}),(0,l.Z)(n,"handleImageLoad",(function(){n.setState({loaded:!0})})),(0,l.Z)(n,"handleMouseEnter",(function(t){n.hoverToPlay()&&t.target.play()})),(0,l.Z)(n,"handleMouseLeave",(function(t){n.hoverToPlay()&&(t.target.pause(),t.target.currentTime=0)})),(0,l.Z)(n,"hoverToPlay",(function(){return!n.props.autoPlayGif&&-1!==["gifv","video"].indexOf(n.props.attachment.get("type"))})),(0,l.Z)(n,"handleClick",(function(t){0!==t.button||t.ctrlKey||t.metaKey||(t.preventDefault(),n.state.visible?n.props.onOpenMedia(n.props.attachment):n.setState({visible:!0}))})),n}return O(e,t),e.prototype.render=function(){var t,e=this.props,a=e.attachment,n=e.displayWidth,o=e.autoPlayGif,i=this.state,s=i.visible,l=i.loaded,d="".concat(Math.floor((n-4)/3)-4,"px"),u=d,h=a.get("status"),m=h.get("spoiler_text")||a.get("description"),v="";if("unknown"===a.get("type"));else if("image"===a.get("type")){var g=100*((a.getIn(["meta","focus","x"])||0)/2+.5),Z=100*((a.getIn(["meta","focus","y"])||0)/-2+.5);v=(0,c.Z)(M.Z,{src:a.get("preview_url"),alt:a.get("description"),style:{objectPosition:"".concat(g,"% ").concat(Z,"%")}})}else if(-1!==["gifv","video"].indexOf(a.get("type"))){var y={};(0,I.gn)()&&(y.playsInline="1"),o&&(y.autoPlay="1"),v=(0,c.Z)("div",{className:p()("media-gallery__gifv",{autoplay:o})},void 0,f.createElement("video",(0,r.Z)({className:"media-gallery__item-gifv-thumbnail","aria-label":a.get("description"),title:a.get("description"),role:"application",src:a.get("url"),onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,loop:!0,muted:!0},y)),(0,c.Z)("span",{className:"media-gallery__gifv__label"},void 0,"GIF"))}else if("audio"===a.get("type")){var O=a.get("remote_url")||"",w=O.lastIndexOf("."),L=O.substr(w+1).toUpperCase();v=(0,c.Z)("div",{className:"media-gallery__item-thumbnail"},void 0,(0,c.Z)("span",{className:"media-gallery__item__icons"},void 0,(0,c.Z)(b.Z,{id:"volume-up"})),(0,c.Z)("span",{className:"media-gallery__file-extension__label"},void 0,L))}return s||(t=(0,c.Z)("span",{className:"account-gallery__item__icons"},void 0,(0,c.Z)(b.Z,{id:"eye-slash"}))),(0,c.Z)("div",{className:"account-gallery__item",style:{width:d,height:u}},void 0,(0,c.Z)("a",{className:"media-gallery__item-thumbnail",href:h.get("url"),target:"_blank",onClick:this.handleClick,title:m},void 0,(0,c.Z)(_.Z,{hash:a.get("blurhash"),className:p()("media-gallery__preview",{"media-gallery__preview--hidden":s&&l})}),s&&v,!s&&t))},e}(g.ZP),(0,l.Z)(i,"propTypes",{attachment:v().map.isRequired,displayWidth:h().number.isRequired,onOpenMedia:h().func.isRequired,autoPlayGif:h().bool,displayMedia:h().string}),o=s))||o},1189:function(t,e,a){a.r(e),a.d(e,{default:function(){return j}});var n,o,i,s,r=a(1019),c=a(1018),l=(a(1),a(3)),d=a.n(l),p=a(0),u=a(5),h=a.n(u),f=a(4),m=a(1021),v=a(2),g=a(1800),Z=a(15),y=a(1022),_=a(36),b=a(1230),M=a(1259),I=a(1267),O=a(172),w=a(12),L=a(10),x=a(33),N=a(1131),P=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function a(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}),T=function(t){function e(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];var n=t.apply(this,e)||this;return(0,c.Z)(n,"handleLoadMore",(function(){n.props.onLoadMore(n.props.maxId)})),n}return P(e,t),e.prototype.render=function(){return(0,r.Z)(b.Z,{disabled:this.props.disabled,onClick:this.handleLoadMore})},e}(f.ZP);(0,c.Z)(T,"propTypes",{maxId:d().string,onLoadMore:d().func.isRequired});var j=(0,v.$j)((function(t,e){var a=e.params,n=(e.withReplies,a.username||""),o=t.get("me"),i=(t.getIn(["accounts",-1,"username"])||"").toLowerCase()===n.toLowerCase(),s=(0,L.N$)(t.get("instance")),r=-1,c=n;if(i)r=null;else{var l=(0,w.XO)(t,n);r=l?l.getIn(["id"],null):-1,c=l?l.getIn(["acct"],""):""}var d=t.getIn(["relationships",r,"blocked_by"],!1);return{accountId:r,unavailable:o!==r&&d&&!s.blockersVisible,accountUsername:c,isAccount:!!t.getIn(["accounts",r]),attachments:(0,w.Uq)(t,r),isLoading:t.getIn(["timelines","account:".concat(r,":media"),"isLoading"]),hasMore:t.getIn(["timelines","account:".concat(r,":media"),"hasMore"])}}))((s=i=function(t){function e(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];var n=t.apply(this,e)||this;return(0,c.Z)(n,"state",{width:323}),(0,c.Z)(n,"handleScrollToBottom",(function(){n.props.hasMore&&n.handleLoadMore(n.props.attachments.size>0?n.props.attachments.last().getIn(["status","id"]):void 0)})),(0,c.Z)(n,"handleScroll",(function(t){var e=t.target,a=e.scrollTop;150>e.scrollHeight-a-e.clientHeight&&!n.props.isLoading&&n.handleScrollToBottom()})),(0,c.Z)(n,"handleLoadMore",(function(t){n.props.accountId&&-1!==n.props.accountId&&n.props.dispatch((0,x.fe)(n.props.accountId,{maxId:t}))})),(0,c.Z)(n,"handleLoadOlder",(function(t){t.preventDefault(),n.handleScrollToBottom()})),(0,c.Z)(n,"handleOpenMedia",(function(t){if("video"===t.get("type"))n.props.dispatch((0,y.h7)("VIDEO",{media:t,status:t.get("status"),account:t.get("account")}));else{var e=t.getIn(["status","media_attachments"]),a=e.findIndex((function(e){return e.get("id")===t.get("id")}));n.props.dispatch((0,y.h7)("MEDIA",{media:e,index:a,status:t.get("status"),account:t.get("account")}))}})),(0,c.Z)(n,"handleRef",(function(t){t&&n.setState({width:t.offsetWidth})})),n}return P(e,t),e.prototype.componentDidMount=function(){var t=this.props,e=t.params.username,a=t.accountId;a&&-1!==a?(this.props.dispatch((0,Z.$G)(a)),this.props.dispatch((0,x.fe)(a))):this.props.dispatch((0,Z.UL)(e))},e.prototype.componentDidUpdate=function(t){var e=this.props,a=e.accountId,n=e.params;a&&-1!==a&&a!==t.accountId&&a&&(this.props.dispatch((0,Z.$G)(n.accountId)),this.props.dispatch((0,x.fe)(a)))},e.prototype.render=function(){var t=this,e=this.props,a=e.attachments,n=e.isLoading,o=e.hasMore,i=e.isAccount,s=e.accountId,c=e.unavailable,l=e.accountUsername,d=this.state.width;if(!i&&-1!==s)return(0,r.Z)(_.Z,{},void 0,(0,r.Z)(I.Z,{}));if(-1===s||!a&&n)return(0,r.Z)(_.Z,{},void 0,(0,r.Z)(M.Z,{}));var u=null;return!o||n&&0===a.size||(u=(0,r.Z)(b.Z,{visible:!n,onClick:this.handleLoadOlder})),c?(0,r.Z)(_.Z,{},void 0,(0,r.Z)("div",{className:"empty-column-indicator"},void 0,(0,r.Z)(m.Z,{id:"empty_column.account_unavailable",defaultMessage:"Profile unavailable"}))):(0,r.Z)(_.Z,{},void 0,(0,r.Z)(O.Z,{message:"@".concat(l)}),(0,r.Z)("div",{className:"slist slist--flex",onScroll:this.handleScroll},void 0,(0,r.Z)("div",{className:"account__section-headline"},void 0,(0,r.Z)("div",{style:{width:"100%",display:"flex"}},void 0,(0,r.Z)(g.OL,{exact:!0,to:"/@".concat(l)},void 0,(0,r.Z)(m.Z,{id:"account.posts",defaultMessage:"Posts"})),(0,r.Z)(g.OL,{exact:!0,to:"/@".concat(l,"/with_replies")},void 0,(0,r.Z)(m.Z,{id:"account.posts_with_replies",defaultMessage:"Posts and replies"})),(0,r.Z)(g.OL,{exact:!0,to:"/@".concat(l,"/media")},void 0,(0,r.Z)(m.Z,{id:"account.media",defaultMessage:"Media"})))),p.createElement("div",{role:"feed",className:"account-gallery__container",ref:this.handleRef},a.map((function(e,n){return null===e?(0,r.Z)(T,{maxId:n>0?a.getIn(n-1,"id"):null,onLoadMore:t.handleLoadMore},"more:"+a.getIn(n+1,"id")):(0,r.Z)(N.Z,{attachment:e,displayWidth:d,onOpenMedia:t.handleOpenMedia},"".concat(e.getIn(["status","id"]),"+").concat(e.get("id")))})),0===a.size&&(0,r.Z)("div",{className:"empty-column-indicator"},void 0,(0,r.Z)(m.Z,{id:"account_gallery.none",defaultMessage:"No media to show."})),u),n&&0===a.size&&(0,r.Z)("div",{className:"slist__append"},void 0,(0,r.Z)(M.Z,{}))))},e}(f.ZP),(0,c.Z)(i,"propTypes",{params:d().object.isRequired,dispatch:d().func.isRequired,attachments:h().list.isRequired,isLoading:d().bool,hasMore:d().bool,isAccount:d().bool,unavailable:d().bool}),o=s))||o},818:function(t,e,a){a.r(e);var n,o=a(1019),i=a(1018),s=(a(1),a(3)),r=a.n(s),c=a(5),l=a.n(c),d=a(4),p=a(1021),u=a(1017),h=a(2),f=a(1022),m=a(8),v=a(1259),g=a(12),Z=a(33),y=a(1131),_=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function a(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}),b=function(t){function e(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];var n=t.apply(this,e)||this;return(0,i.Z)(n,"state",{isLoading:!0}),(0,i.Z)(n,"handleOpenMedia",(function(t){if("video"===t.get("type"))n.props.dispatch((0,f.h7)("VIDEO",{media:t,status:t.get("status")}));else{var e=t.getIn(["status","media_attachments"]),a=e.findIndex((function(e){return e.get("id")===t.get("id")}));n.props.dispatch((0,f.h7)("MEDIA",{media:e,index:a,status:t.get("status"),account:t.get("account")}))}})),(0,i.Z)(n,"fetchMedia",(function(){var t=n.props.account;if(t){var e=t.get("id");n.props.dispatch((0,Z.fe)(e)).then((function(){return n.setState({isLoading:!1})})).catch((function(){}))}})),n}return _(e,t),e.prototype.componentDidMount=function(){this.fetchMedia()},e.prototype.componentDidUpdate=function(t){var e=t.account&&t.account.get("id");(this.props.account&&this.props.account.get("id"))!==e&&(this.setState({isLoading:!0}),this.fetchMedia())},e.prototype.renderAttachments=function(){var t=this,e=this.props.attachments.filter((function(t){return"public"===t.getIn(["status","visibility"])})).slice(0,9);return e.isEmpty()?(0,o.Z)("div",{className:"media-panel__empty"},void 0,(0,o.Z)(p.Z,{id:"media_panel.empty_message",defaultMessage:"No media found."})):(0,o.Z)("div",{className:"media-panel__list"},void 0,e.map((function(e,a){return(0,o.Z)(y.Z,{attachment:e,displayWidth:255,onOpenMedia:t.handleOpenMedia},"".concat(e.getIn(["status","id"]),"+").concat(e.get("id")))})))},e.prototype.render=function(){var t=this.props.account,e=this.state.isLoading;return(0,o.Z)("div",{className:"media-panel"},void 0,(0,o.Z)("div",{className:"media-panel-header"},void 0,(0,o.Z)(m.Z,{src:a(1236),className:"media-panel-header__icon"}),(0,o.Z)("span",{className:"media-panel-header__label"},void 0,(0,o.Z)(p.Z,{id:"media_panel.title",defaultMessage:"Media"}))),t&&(0,o.Z)("div",{className:"media-panel__content"},void 0,e?(0,o.Z)(v.Z,{}):this.renderAttachments()))},e}(d.ZP);(0,i.Z)(b,"propTypes",{account:l().map,attachments:l().list,dispatch:r().func.isRequired}),e.default=(0,u.ZP)((0,h.$j)((function(t,e){var a=e.account;return{attachments:(0,g.Uq)(t,a.get("id"))}}),null,null,{forwardRef:!0})(b))},1236:function(t,e,a){t.exports=a.p+"packs/icons/camera-8ed13eb2.svg"}}]);
//# sourceMappingURL=account_gallery-b4fd8d266906fffdd0e1.chunk.js.map