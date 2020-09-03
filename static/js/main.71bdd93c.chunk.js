(this.webpackJsonpconnect_game=this.webpackJsonpconnect_game||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(16)},,,,,function(e,n,t){},function(e,n,t){},function(e,n){var t={checkVertical:function(e,n,t,r){for(var a=1,i=!1,o=!1,c=[[t,r]];a<7;)!o&&r+a<7&&e[t][r+a][0]===n?c.push([t,r+a]):o=!0,!i&&r-a>=0&&e[t][r-a][0]===n?c.push([t,r-a]):i=!0,a++;return c},checkDiagonalUp:function(e,n,t,r){for(var a,i=1,o=!1,c=[[t,r]];i<7;)!o&&t+i<7&&r-i>=0&&e[t+i][r-i][0]===n?c.push([t+i,r-i]):o=!0,!a&&t-i>=0&&r+i<7&&e[t-i][r+i][0]===n?c.push([t-i,r+i]):a=!0,i++;return c},checkDiagonalDown:function(e,n,t,r){for(var a=1,i=!1,o=!1,c=[[t,r]];a<7;)!o&&t+a<7&&r+a<7&&e[t+a][r+a][0]===n?c.push([t+a,r+a]):o=!0,!i&&t-a>=0&&r-a>=0&&e[t-a][r-a][0]===n?c.push([t-a,r-a]):i=!0,a++;return c},checkHorizontal:function(e,n,t,r){for(var a=1,i=!1,o=!1,c=[[t,r]];a<7;)!o&&t+a<7&&e[t+a][r][0]===n?c.push([t+a,r]):o=!0,!i&&t-a>=0&&e[t-a][r][0]===n?c.push([t-a,r]):i=!0,a++;return c}};e.exports=t},function(e,n){var t={returnDimentions:function(e){return e>840?["6rem","3rem","2.5rem","0.4rem"]:e>560&&e<840?["4rem","2rem","1.7rem","0.3rem"]:e>282&&e<560?["2rem","1rem","0.8rem","0.2rem"]:["1.5rem","0.75rem","0.6rem","0.1rem"]}};e.exports=t},function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(6),o=t.n(i),c=(t(12),t(1)),s=t(2),l=t(4),u=t(3),h=(t(13),t(14)),m=t(15),p=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).ToggleDisp=function(n){e.props.toggleDisp(n)},e}return Object(s.a)(t,[{key:"render",value:function(){var e=""===this.props.winner?"":this.props.winner+" has won";return a.a.createElement("div",{className:"play_disp"},a.a.createElement("p",{className:"win_disp"},e),a.a.createElement("button",{onClick:this.ToggleDisp},"Play"))}}]),t}(a.a.Component),f=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(e){var r;Object(c.a)(this,t),(r=n.call(this,e)).ToggleDisp=function(e){var n=new Array(7);n.fill(0),n.forEach((function(e,t){n[t]=new Array(7),n[t].fill(0),n[t].forEach((function(e,r){n[t][r]=[0,1]}))})),r.setState((function(e){return{showPlayDisp:!e.showPlayDisp,gameArray:n}}))},r.updateWindowDimensions=function(){console.log(window.innerWidth,window.innerHeight),r.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight})},r.FillCell=function(e,n){var t=m.returnDimentions(r.state.windowWidth);return a.a.createElement("svg",{width:t[0],height:t[0]},a.a.createElement("circle",{key:n,cx:t[1],cy:t[1],r:t[2],stroke:r.colors[e[1]],strokeWidth:t[3],fill:r.colors[e[0]]}))},r.AddCircleToRow=function(e,n){var t=r.state.gameArray,a=0;if(0===t[n][a][0]){for(;t[n][++a]&&0===t[n][a][0];);t[n][a-1][0]=r.state.playerNum,r.setState((function(e){return{gameArray:t,playerNum:1===e.playerNum?2:1,errorMessage:""}}),r.CheckForWinning(n,a-1))}else r.setState({errorMessage:"The column is full already"})},r.CheckForWinning=function(e,n){var t=r.state.playerNum,a=r.state.gameArray;r.checkFunctions=[function(){return h.checkHorizontal(a,t,e,n)},function(){return h.checkVertical(a,t,e,n)},function(){return h.checkDiagonalDown(a,t,e,n)},function(){return h.checkDiagonalUp(a,t,e,n)}],r.checkFunctions.forEach((function(e){var n=e();n.length>=4&&r.GameEnd(n)}))},r.GameEnd=function(e){var n=r.state.gameArray;e.forEach((function(e){n[e[0]][e[1]][1]=3})),r.setState((function(e){return{gameArray:n,isGameWon:!0,showPlayDisp:!0,playerNum:1===e.playerNum?2:1}}))};var i=new Array(7);return i.fill(0),i.forEach((function(e,n){i[n]=new Array(7),i[n].fill(0),i[n].forEach((function(e,t){i[n][t]=[0,1]}))})),r.colors=["white","black","red","yellow"],r.checkArr=[],r.checkFunctions=[],r.state={gameArray:i,playerNum:1,errorMessage:"",showPlayDisp:!0,isGameWon:!1,windowWidth:window.innerWidth,windowHeight:window.innerHeight},r}return Object(s.a)(t,[{key:"render",value:function(){var e=this,n=this.state.gameArray.map((function(n,t){return a.a.createElement("div",{class:"game_row",key:t,onClick:function(n){return e.AddCircleToRow(n,t)}},n.map((function(n,r){return a.a.createElement("div",{class:"game_cell",key:r},e.FillCell(n,t))})))}));return a.a.createElement("div",{class:"App"},this.state.showPlayDisp&&a.a.createElement(p,{toggleDisp:this.ToggleDisp,winner:this.state.isGameWon?this.colors[this.state.playerNum]:""}),!this.state.showPlayDisp&&a.a.createElement("div",{class:"player_disp",color:this.colors[this.state.playerNum]},"Player color: ",this.colors[this.state.playerNum]),a.a.createElement("div",{class:"game_display"},n),a.a.createElement("div",{class:"errr_display"},this.state.errorMessage))}},{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.71bdd93c.chunk.js.map