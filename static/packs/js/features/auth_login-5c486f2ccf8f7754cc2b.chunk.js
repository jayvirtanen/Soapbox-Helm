"use strict";(self.webpackChunksoapbox_fe=self.webpackChunksoapbox_fe||[]).push([[15],{810:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var o,r,a=n(1019),i=n(1018),s=n(4),u=n(1017),c=n(2),f=n(1794),l=n(37),d=n(127),p=n(55),m=n(620),h=n(621),_=(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),b=(0,c.$j)((function(t){return{me:t.get("me"),isLoading:!1,standalone:(0,p.$W)(t)}}))(r=(0,u.ZP)(r=function(t){function e(e){var n=t.call(this,e)||this;return(0,i.Z)(n,"state",{isLoading:!1,mfa_auth_needed:!1,mfa_token:"",shouldRedirect:!1}),(0,i.Z)(n,"getFormData",(function(t){return Object.fromEntries(Array.from(t).map((function(t){return[t.name,t.value]})))})),(0,i.Z)(n,"handleSubmit",(function(t){var e=n.props,o=e.dispatch,r=e.intl,a=e.me,i=n.getFormData(t.target),s=i.username,u=i.password;o((0,l.Ib)(r,s,u)).then((function(t){var e=t.access_token;return o((0,l.TK)(e)).then((function(){return o((0,d.JI)())}))})).then((function(t){n.setState({shouldRedirect:!0}),"string"==typeof a&&o((0,l.yD)(t.id))})).catch((function(t){var e,o=null===(e=t.response)||void 0===e?void 0:e.data;"mfa_required"===(null==o?void 0:o.error)&&n.setState({mfa_auth_needed:!0,mfa_token:o.mfa_token}),n.setState({isLoading:!1})})),n.setState({isLoading:!0}),t.preventDefault()})),n.handleSubmit=n.handleSubmit.bind(n),n}return _(e,t),e.prototype.render=function(){var t=this.props.standalone,e=this.state,n=e.isLoading,o=e.mfa_auth_needed,r=e.mfa_token,i=e.shouldRedirect;return t?(0,a.Z)(f.l_,{to:"/auth/external"}):i?(0,a.Z)(f.l_,{to:"/"}):o?(0,a.Z)(h.Z,{mfa_token:r}):(0,a.Z)(m.Z,{handleSubmit:this.handleSubmit,isLoading:n})},e}(s.ZP))||r)||r},811:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var o,r,a=n(1019),i=n(1018),s=(n(1),n(4)),u=n(1797),c=n(1017),f=n(1021),l=n(2),d=n(1794),p=n(198),m=n(30),h=n(28),_=(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),b=(0,u.vU)({nicknameOrEmail:{id:"password_reset.fields.username_placeholder",defaultMessage:"Email or username"},confirmation:{id:"password_reset.confirmation",defaultMessage:"Check your email for confirmation."}}),v=(0,l.$j)()(r=(0,c.ZP)(r=function(t){function e(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var o=t.apply(this,e)||this;return(0,i.Z)(o,"state",{isLoading:!1,success:!1}),(0,i.Z)(o,"handleSubmit",(function(t){var e=o.props,n=e.dispatch,r=e.intl,a=t.target.nickname_or_email.value;o.setState({isLoading:!0}),n((0,p.c0)(a)).then((function(){o.setState({isLoading:!1,success:!0}),n(m.ZP.info(r.formatMessage(b.confirmation)))})).catch((function(t){o.setState({isLoading:!1})}))})),o}return _(e,t),e.prototype.render=function(){var t=this.props.intl;return this.state.success?(0,a.Z)(d.l_,{to:"/"}):(0,a.Z)(h.NA,{onSubmit:this.handleSubmit},void 0,(0,a.Z)("fieldset",{disabled:this.state.isLoading},void 0,(0,a.Z)(h.H_,{},void 0,(0,a.Z)(h.oi,{name:"nickname_or_email",label:t.formatMessage(b.nicknameOrEmail),placeholder:"me@example.com",required:!0}))),(0,a.Z)("div",{className:"actions"},void 0,(0,a.Z)("button",{name:"button",type:"submit",className:"btn button button-primary"},void 0,(0,a.Z)(f.Z,{id:"password_reset.reset",defaultMessage:"Reset password"}))))},e}(s.ZP))||r)||r}}]);
//# sourceMappingURL=auth_login-5c486f2ccf8f7754cc2b.chunk.js.map