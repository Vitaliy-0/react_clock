(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),o=c(2),s=c(3),i=c(5),l=c(4),r=c(1),m=(c(12),c(13),c(0)),u=function(e){Object(i.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={clockName:e.props.name,date:new Date},e.timerId=setTimeout((function(){}),0),e}return Object(s.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.timerId=setInterval((function(){e.setState({date:new Date}),console.log(e.state.date.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(e,t){this.state.clockName=this.props.name,e.name!==this.props.name&&console.log("The Clock was renamed from ".concat(e.name)+" to ".concat(t.clockName))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.date,c=e.clockName;return Object(m.jsxs)("div",{className:"clock",children:[Object(m.jsx)("span",{className:"clock__name",children:c}),Object(m.jsxs)("span",{className:"clock__field",children:[": ",t.toLocaleTimeString()]})]})}}]),c}(r.Component),d=function(e){Object(i.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={clockName:"Current time",isClockVisible:!0},e.showClock=function(){e.setState({isClockVisible:!0})},e.hideClock=function(){e.setState({isClockVisible:!1})},e.setRandomName=function(){e.setState({clockName:Math.floor(100*Math.random())})},e}return Object(s.a)(c,[{key:"render",value:function(){var e=this.state,t=e.isClockVisible,c=e.clockName;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{className:"App__title",children:"React clock"}),Object(m.jsx)("div",{className:"App__clock",children:t&&Object(m.jsx)(u,{name:c})}),Object(m.jsxs)("div",{className:"buttonArea",children:[Object(m.jsx)("button",{className:"button",type:"button",onClick:this.showClock,disabled:t,children:"Show clock"}),Object(m.jsx)("button",{className:"button",type:"button",onClick:this.hideClock,disabled:!t,children:"Hide clock"}),Object(m.jsx)("button",{className:"button",type:"button",onClick:this.setRandomName,children:"Set random name"})]})]})}}]),c}(r.Component);a.a.render(Object(m.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.fa173521.chunk.js.map