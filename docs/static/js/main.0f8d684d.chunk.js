(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t.p+"static/media/gryffindor.050f7045.jpg"},24:function(e,a,t){e.exports=t.p+"static/media/slytherin.6301a0e9.jpg"},25:function(e,a,t){e.exports=t.p+"static/media/hufflepuff.1bbaff84.jpg"},26:function(e,a,t){e.exports=t.p+"static/media/ravenclaw.bbe51fc4.jpg"},28:function(e,a,t){e.exports=t(47)},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(20),s=t.n(c),l=(t(33),t(27)),i=t(2),m=t(3),o=t(5),u=t(4),h=t(12),f=t(6),p=(t(34),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.item,t=e.showHouse;return n.a.createElement("div",{className:"character-card"},n.a.createElement("div",{className:"character-image-container"},n.a.createElement("img",{src:a.image,alt:a.name,className:"character-image"})),n.a.createElement("div",{className:"character-info"},n.a.createElement("h2",{className:"character-name"},a.name),a.house?n.a.createElement("img",{src:t(a),alt:a.house,className:"character-house"}):n.a.createElement("p",null,"No Hogwarts house!")))}}]),a}(n.a.Component)),d=t(11),N=(t(35),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.characterData,t=e.filterName,r=e.showHouse;return n.a.createElement("ul",{className:"character-list"},a.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}).map(function(e){return n.a.createElement("li",{className:"character-list-item",key:e.id},n.a.createElement(d.b,{className:"character-link",to:"/characterdetails/".concat(e.id)},n.a.createElement(p,{item:e,showHouse:r})))}))}}]),a}(n.a.Component)),b=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.handleNameFilter,t=e.filterName;return n.a.createElement("div",{className:"filters"},n.a.createElement("label",{className:"filter-character-label",htmlFor:"filter-character"},"Filter by character here:"),n.a.createElement("input",{type:"text",className:"filter-character",if:"filter-character",value:t,onChange:a}))}}]),a}(n.a.Component),E=(t(44),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.characterData,t=e.filterName,r=e.handleNameFilter,c=e.showHouse;return n.a.createElement("div",{className:"home"},n.a.createElement("h1",{className:"main-title"},"Harry Potter Characters ",n.a.createElement("i",{className:"fas fa-quidditch"})),n.a.createElement(b,{filterName:t,handleNameFilter:r}),n.a.createElement("p",{className:"main-subtitle"},"Click on a character for more information!"),n.a.createElement(N,{characterData:a,filterName:t,showHouse:c}))}}]),a}(n.a.Component)),j=(t(45),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(m.a)(a,[{key:"componentWillUnmount",value:function(){this.props.clearFilter()}},{key:"render",value:function(){var e=this.props,a=e.match,t=e.characterData,r=e.showHouse,c=parseInt(a.params.id),s=t.find(function(e){return e.id===c});return n.a.createElement(n.a.Fragment,null,s?n.a.createElement("div",{className:"details"},n.a.createElement("img",{src:s.image,alt:s.name,className:"details-character-image"}),n.a.createElement("div",{className:"details-character-info"},s.house&&n.a.createElement("img",{src:r(s),alt:s.house,className:"details-character-house"}),n.a.createElement("h1",{className:"details-character-name"},"Name: ",s.name),n.a.createElement("p",{className:"character-birthyear"},"Birth year: ",s.yearOfBirth||"Unknown"),n.a.createElement("p",{className:"character-patronus"},"Patronus: ",s.patronus||"Unknown/none"),n.a.createElement("p",{className:"life-status"},"Status:",!0===s.alive?n.a.createElement("i",{className:"fas fa-heart"}):n.a.createElement("i",{className:"fas fa-skull-crossbones"})),n.a.createElement("small",{className:"key"},"KEY: Alive ",n.a.createElement("i",{className:"fas fa-heart"})," Dead ",n.a.createElement("i",{className:"fas fa-skull-crossbones"})))):n.a.createElement("p",{className:"error-message"},"I'm sorry, I don't have any info right now!"))}}]),a}(n.a.Component)),v=(t(46),t(10)),O=t(23),y=t.n(O),g=t(24),k=t.n(g),w=t(25),F=t.n(w),D=t(26),H=t.n(D),C=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).state={characterData:[],filterName:""},t.getData=t.getData.bind(Object(h.a)(t)),t.handleNameFilter=t.handleNameFilter.bind(Object(h.a)(t)),t.clearFilter=t.clearFilter.bind(Object(h.a)(t)),t}return Object(f.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;fetch("https://hp-api.herokuapp.com/api/characters").then(function(e){return e.json()}).then(function(a){var t=a.map(function(e,a){return Object(l.a)({},e,{id:a})});e.setState({characterData:t})})}},{key:"handleNameFilter",value:function(e){var a=e.currentTarget.value;this.setState({filterName:a})}},{key:"clearFilter",value:function(){this.setState({filterName:""})}},{key:"showHouse",value:function(e){var a=e.house.toLowerCase();return"gryffindor"===a?y.a:"slytherin"===a?k.a:"hufflepuff"===a?F.a:H.a}},{key:"render",value:function(){var e=this,a=this.state,t=a.characterData,r=a.filterName,c=this.handleNameFilter,s=this.showHouse;return n.a.createElement("div",{className:"app"},n.a.createElement("header",{className:"header"},n.a.createElement("nav",{className:"menu"},n.a.createElement("ul",{className:"menu-list"},n.a.createElement(d.b,{className:"menu-link",to:"/"},"Home")))),n.a.createElement("main",{className:"main-content"},n.a.createElement(v.c,null,n.a.createElement(v.a,{exact:!0,path:"/",render:function(){return n.a.createElement(E,{characterData:t,filterName:r,handleNameFilter:c,showHouse:s})}}),n.a.createElement(v.a,{path:"/characterdetails/:id",render:function(a){return n.a.createElement(j,{match:a.match,characterData:t,clearFilter:e.clearFilter,showHouse:s})}}))))}}]),a}(n.a.Component);s.a.render(n.a.createElement(d.a,null,n.a.createElement(C,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.0f8d684d.chunk.js.map