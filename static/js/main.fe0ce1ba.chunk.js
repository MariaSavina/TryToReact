(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},16:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),l=a.n(o),c=(a(15),a(16),a(17),a(1)),u=a(2),s=a(4),i=a(3),p=function(e){return r.a.createElement("div",null,e.couCou)},m=function(e){return r.a.createElement("button",{onClick:e.name},e.callIt)},v=(r.a.Component,r.a.Component,r.a.Component,r.a.Component,r.a.Component,r.a.Component,function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={styled:!1},e.letColored=function(){e.setState({styled:!0})},e.removeItem=function(){},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("ul",null,this.props.userslist.map((function(t,a){return r.a.createElement("li",{key:t.id,className:"usersBox"},r.a.createElement("div",null,a+1," -- ",t.name,r.a.createElement("button",{onClick:e.removeItem},"remove")))}))))}}]),a}(r.a.Component)),h=(r.a.Component,function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/users").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({isLoaded:!0,items:t}),console.log(e.state.items)}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded;e.items;return t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement("ul",{className:"usersBoxContent"},this.state.items.map((function(e){return r.a.createElement("li",{key:e.id,className:"usersBox"},r.a.createElement("div",null,r.a.createElement("div",null,e.login),r.a.createElement("img",{src:e.avatar_url,className:"avatarPic"})))}))):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component)),d=a(5),f=a.n(d),g=a(8),b=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:null},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.adviceslip.com/advice");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.slip,this.setState({data:n}),console.log(n);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return null===e?r.a.createElement("div",null,"Loading"):r.a.createElement("section",{className:"border py-5"},r.a.createElement("h1",{className:"lead"},"Advice"),r.a.createElement("blockquote",{className:"blockquote text-right"},r.a.createElement("p",{className:"mb-0"},e.advice)))}}]),a}(r.a.Component),C=(r.a.Component,r.a.Component,a(9)),E=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:e.props.defaultValue},e.onChange=function(t){e.setState({value:t.target.value},(function(){e.props.onChange(e.state.value,e.props.name)}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement("div",null,r.a.createElement("textarea",{value:e,onChange:this.onChange,placeholder:this.props.name,name:this.props.name}))}}]),a}(r.a.Component),y=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:!1},e.onToggle=function(){e.setState((function(e){return{value:!e.value}}),(function(){e.props.onChange(e.state.value,e.props.name)}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement("label",{style:{display:"block",marginBottom:10}},"checkbox",r.a.createElement("input",{checked:e,onChange:this.onToggle,name:this.props.name,type:"checkbox"}))}}]),a}(r.a.Component),j=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:!1},e.onChange=function(t){e.setState({value:t.target.value},(function(){e.props.onChange(e.state.value,e.props.name)}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement("label",{style:{display:"block",marginBottom:10}},"radio ",this.props.name,r.a.createElement("input",{checked:e,value:this.props.value,onChange:this.onChange,name:this.props.name,type:"radio"}))}}]),a}(r.a.Component),O=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.onChange=function(t){e.setState({value:t.target.value},(function(){e.props.onChange(e.state.value,e.props.name)}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.state;return r.a.createElement("select",{value:e,onChange:this.onChange,name:this.props.name},this.props.options.map((function(e){return r.a.createElement("option",{value:e.value},e.label)})))}}]),a}(r.a.Component);O.defaultProps={options:[]};r.a.Component;var k=[],w=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={valueInp:"",valueTarea:"",valueRan:"",id:0},e.handleChangeInp=function(t){e.setState({valueInp:t.target.value}),console.log(t.target.value)},e.handleChangeTarea=function(t){e.setState({valueTarea:t.target.value}),console.log(t.target.value)},e.handleChangeRan=function(t){e.setState({valueRan:t.target.value}),console.log(t.target.value)},e.addData=function(){console.log(e.state),k.push(e.state),e.setState({valueInp:"",valueTarea:"",valueRan:"",id:e.state.id+1}),console.log(k)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"name:"),r.a.createElement("input",{type:"text",value:this.state.valueInp,onChange:this.handleChangeInp}),r.a.createElement("div",null," description:"),r.a.createElement("textarea",{value:this.state.valueTarea,onChange:this.handleChangeTarea}),r.a.createElement("div",null,"duration:"),r.a.createElement("input",{type:"range",min:1,max:3,value:this.state.valueRan,onChange:this.handleChangeRan}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",onClick:this.addData},"add"))}}]),a}(r.a.Component),x=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("ul",null,this.props.dataTodo.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("div",null,e.valueInp," -- ",e.valueTarea," -- ",e.valueRan))}))))}}]),a}(r.a.Component);r.a.Component,r.a.Component,r.a.Component;var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",null,"GithubUsers"),r.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.fe0ce1ba.chunk.js.map