(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n,s,c,i,l,r,o,d,j=a(1),b=a.n(j),u=a(43),h=a.n(u),O=(a(105),a(4)),x=a(116),m=a(171),v=a(173),p=a(170),g=a(115),f=a(15),k=a(17),w=a(10),N=a(174),y=a(27),I=a(22),S=a(23),$=a(26),L=a(172),D=Object(L.a)(n||(n=Object($.a)(["\n  query allVids {\n    videos {\n      _id\n      title\n      cloudURL\n      likes\n      dislikes\n      views\n      publishDate\n      videoAuthor\n    }\n  }\n"]))),P=Object(L.a)(s||(s=Object($.a)(["\n  query singleVid($videoId: ID!) {\n    video(videoId: $videoId) {\n      _id\n      title\n      cloudURL\n      likes\n      dislikes\n      views\n      publishDate\n      likedBy\n      dislikedBy\n    }\n  }\n"]))),T=Object(L.a)(c||(c=Object($.a)(["\n  query myVids($videoAuthor: String!) {\n    myVideos(videoAuthor: $videoAuthor) {\n      _id\n      title\n      cloudURL\n      likes\n      dislikes\n      views\n      publishDate\n    }\n  }\n"]))),C=(Object(L.a)(i||(i=Object($.a)(["\n  query allUsers {\n    users {\n      _id\n      name\n      email\n      level\n    }\n  }\n"]))),Object(L.a)(l||(l=Object($.a)(["\n  query singleUser($id: ID!) {\n    user(_id: $id) {\n      name\n      email\n      level\n    }\n  }\n"]))),Object(L.a)(r||(r=Object($.a)(["\n  query allGenres {\n    genres {\n      name\n      videos\n    }\n  }\n"]))),Object(L.a)(o||(o=Object($.a)(["\n  query singleGenre($id: ID!) {\n    genre(_id: $id) {\n      name\n      videos\n    }\n  }\n"]))),Object(L.a)(d||(d=Object($.a)(["\n  query me {\n    me {\n      _id\n      name\n      level\n    }\n  }\n"]))),a(92)),_=a.n(C),U=(a(143),a(144),a(93)),H=a(29),V=a(62),B=a(63),F=a(94),A=new(function(){function e(){Object(V.a)(this,e)}return Object(B.a)(e,[{key:"getProfile",value:function(){return!!this.getToken()&&Object(F.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!(!e||this.isTokenExpired(e))}},{key:"isTokenExpired",value:function(e){return Object(F.a)(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),R=a(2),E=function(){var e=Object(N.a)(T,{variables:{videoAuthor:A.getProfile().data.name}}),t=e.loading,a=e.data,n=(null===a||void 0===a?void 0:a.myVideos)||[];return t?Object(R.jsx)("div",{children:"Loading..."}):Object(R.jsxs)("div",{children:[Object(R.jsxs)("h1",{className:"roboto-font2 video-title",children:[A.getProfile().data.name,"'s Videos"]}),n.map((function(e){return Object(R.jsx)(y.a,{children:Object(R.jsxs)(H.a,{className:"text-center my-3",children:[Object(R.jsx)(H.a.Header,{as:"h2",className:"video-title",children:e.title}),Object(R.jsxs)(H.a.Body,{className:"video-body",children:[Object(R.jsxs)(H.a.Title,{className:"roboto-font",children:[Object(R.jsx)("i",{className:"fas fa-calendar-alt"})," ",e.publishDate]}),Object(R.jsx)(f.b,{to:"/videos/".concat(e._id),children:Object(R.jsx)("video",{style:{width:660,height:"auto"},children:Object(R.jsx)("source",{src:e.cloudURL,type:"video/mp4"})})}),Object(R.jsxs)("div",{className:"roboto-font",children:[Object(R.jsx)("i",{className:"fas fa-user"}),"  ",A.getProfile().data.name]}),Object(R.jsx)("div",{children:Object(R.jsx)(f.b,{className:"delete-trash",to:"/videosCrud/".concat(e._id),children:Object(R.jsx)("i",{className:"fas fa-trash"})})})]})]})})}))]})},G=a(97),q=a(98);console.log(E);var z,Y,M,J,K,W,Q,X=function(){var e,t=Object(N.a)(D),a=t.loading,n=t.data,s=(null===n||void 0===n?void 0:n.videos)||[],c=(e={dots:!1,infinite:!0,autoplaySpeed:3e3,adaptiveHeight:!0,autoplay:!0,speed:500,centerPadding:"60px",slidesToShow:5},Object(w.a)(e,"adaptiveHeight",!0),Object(w.a)(e,"slidesToScroll",1),Object(w.a)(e,"responsive",[{breakpoint:1024,settings:{slidesToShow:5,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1}}]),e);return Object(R.jsx)(y.a,{fluid:!0,className:"content-warp",children:Object(R.jsxs)(I.a,{children:[Object(R.jsx)(S.a,{sm:9,children:a?Object(R.jsx)("div",{children:"Loading..."}):Object(R.jsx)("div",{class:"mt-ttl",children:Object(R.jsx)("div",{class:"ttl-filter mt-ttl flex",children:s.length?Object(R.jsxs)("div",{class:"ttl",children:[Object(R.jsx)("h2",{children:"Trending Porn Video"}),Object(R.jsx)(_.a,Object(O.a)(Object(O.a)({},c),{},{children:s&&s.map((function(e){return Object(R.jsx)("div",{children:Object(R.jsxs)(f.b,{to:"/videos/".concat(e._id),children:[Object(R.jsx)(U.a,{videoSrc:e.cloudURL,volume:.5,muted:!1,disablePictureInPicture:!1}),Object(R.jsxs)("div",{class:"LIKE-over",children:[Object(R.jsxs)("span",{className:"video-likes-wp",children:[Object(R.jsx)(G.a,{}),"   ",Object(R.jsx)("span",{className:"video-likes",children:e.likes})]}),Object(R.jsxs)("span",{className:"video-views-wp",children:[Object(R.jsx)(q.a,{}),"  ",Object(R.jsx)("span",{className:"video-likes",children:e.views})]})]})]})},e._id)}))})),Object(R.jsx)(f.b,{to:"/AllVideos",children:"About"}),Object(R.jsx)("h2",{children:"Best Hot Video"}),Object(R.jsx)(_.a,Object(O.a)(Object(O.a)({},c),{},{children:s&&s.map((function(e){return Object(R.jsx)("div",{children:Object(R.jsxs)(f.b,{to:"/videos/".concat(e._id),children:[Object(R.jsx)(U.a,{videoSrc:e.cloudURL,volume:.5,muted:!1,disablePictureInPicture:!1}),Object(R.jsxs)("div",{class:"LIKE-over",children:[Object(R.jsxs)("span",{className:"video-likes-wp",children:[Object(R.jsx)(G.a,{}),"   ",Object(R.jsx)("span",{className:"video-likes",children:e.likes})]}),Object(R.jsxs)("span",{className:"video-views-wp",children:[Object(R.jsx)(q.a,{}),"  ",Object(R.jsx)("span",{className:"video-likes",children:e.views})]})]})]})},e._id)}))}))]}):Object(R.jsx)("h3",{className:"roboto-font2",children:"No Videos Yet!"})})})}),Object(R.jsxs)(S.a,{sm:3,className:"aside",children:[Object(R.jsx)("div",{className:"ttl",children:Object(R.jsx)("h3",{children:"Trending Searches Hot video"})}),Object(R.jsx)("div",{className:"tags-cloud mt-block",children:Object(R.jsxs)("ul",{children:[Object(R.jsx)("li",{children:Object(R.jsx)("a",{className:"gradient-box",href:"videos/onlyfans",children:"OnlyFans"})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{class:"gradient-box",href:"videos/foursome",children:"Foursome"})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{class:"gradient-box",href:"videos/stripchat",children:"Stripchat"})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{class:"gradient-box",href:"videos/hot-falling-devil",children:"Hot Falling Devil"})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{class:"gradient-box",href:"videos/edging",children:"Edging"})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{class:"gradient-box",href:"videos/accidental",children:"Accidental"})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{class:"gradient-box",href:"videos/cum-fetish",children:"Cum Fetish"})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{class:"gradient-box",href:"videos/fake-boobs",children:"Fake Boobs"})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{class:"gradient-box",href:"videos/top",children:"Top"})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{class:"gradient-box",href:"videos/scottish",children:"Scottish"})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{class:"gradient-box",href:"videos/cherokee-d-ass",children:"Cherokee D Ass"})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{class:"gradient-box",href:"videos/post-orgasm",children:"Post Orgasm"})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{class:"gradient-box",href:"videos/fisting",children:"Fisting"})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{class:"gradient-box",href:"videos/honey-gold",children:"Honey Gold"})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{class:"gradient-box",href:"videos/husband",children:"Husband"})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{class:"gradient-box",href:"videos/natural",children:"Natural"})})]})}),Object(R.jsx)("div",{className:"mt-block adv-block no-desctop"})]})]})})},Z=a(24),ee=a.n(Z),te=a(39),ae=a(9),ne=a(176),se=Object(L.a)(z||(z=Object($.a)(["\n  mutation addUser($name: String!, $email: String!, $password: String!, $level: Int) {\n    addUser(name: $name, email: $email, password: $password, level: $level) {\n      token\n    }\n  }\n"]))),ce=Object(L.a)(Y||(Y=Object($.a)(["\n  mutation addVideo($title: String!, $cloudURL: String!, $videoAuthor: String!) {\n    addVideo(title: $title, cloudURL: $cloudURL, videoAuthor: $videoAuthor) {\n      _id\n      title\n      cloudURL\n      videoAuthor\n      publishDate\n    }\n  }\n"]))),ie=Object(L.a)(M||(M=Object($.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        name\n        level\n      }\n    }\n  }\n"]))),le=Object(L.a)(J||(J=Object($.a)(["\n  mutation videoMetrics($videoId: String, $views: Int) {\n    videoMetrics(videoId: $videoId, views: $views) {\n      views\n    }\n  }\n"]))),re=Object(L.a)(K||(K=Object($.a)(["\nmutation updateLikes($videoId: String, $user: String) {\n  updateLikes(videoId: $videoId, user: $user) {\n    _id\n    title\n    cloudURL\n    likes\n    dislikes\n    views\n    publishDate\n    likedBy\n    dislikedBy\n  }\n}\n"]))),oe=Object(L.a)(W||(W=Object($.a)(["\n  mutation updateDislikes($videoId: String, $user: String) {\n    updateDislikes(videoId: $videoId, user: $user) {\n      _id\n      title\n      cloudURL\n      likes\n      dislikes\n      views\n      publishDate\n      likedBy\n      dislikedBy\n    }\n  }\n"]))),de=Object(L.a)(Q||(Q=Object($.a)(["\n  mutation removeVideo($videoId: ID!) {\n    removeVideo(videoId: $videoId) {\n      _id\n      title\n      cloudURL\n      likes\n      dislikes\n      views\n      publishDate\n    }\n  }\n"]))),je=ce,be=function(){var e=Object(k.g)().videoId,t=Object(N.a)(P,{variables:{videoId:e}}),a=t.loading,n=t.data,s=Object(ne.a)(de),c=Object(ae.a)(s,2),i=c[0],l=(c[1].error,(null===n||void 0===n?void 0:n.video)||{});if(a)return Object(R.jsx)("div",{children:"Loading..."});function r(){return r=Object(te.a)(ee.a.mark((function e(t){var a,n;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=A.loggedIn()?A.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,i({variables:{videoId:t}});case 6:n=e.sent,n.data,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:if(a){e.next=15;break}return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[3,10]])}))),r.apply(this,arguments)}return Object(R.jsx)(y.a,{children:Object(R.jsxs)(H.a,{className:"text-center my-3",children:[Object(R.jsx)(H.a.Header,{as:"h2",className:"video-title",children:l.title}),Object(R.jsxs)(H.a.Body,{className:"video-body",children:[Object(R.jsxs)(H.a.Title,{className:"roboto-font",children:[" ",Object(R.jsx)("i",{className:"fas fa-calendar-alt"})," ",l.publishDate]}),Object(R.jsx)("video",{style:{width:660,height:"auto"},controls:!0,children:Object(R.jsx)("source",{src:l.cloudURL,type:"video/mp4"})}),Object(R.jsx)("h2",{className:"roboto-font",children:"Are you sure you want to delete your video? This action cannot be undone"}),Object(R.jsx)("div",{children:Object(R.jsx)("button",{className:"mb-3 button6",type:"submit",onClick:function(){!function(e){r.apply(this,arguments)}(e),window.location.assign("/")},children:"Delete"})})]})]})})},ue=function(){var e=Object(k.g)().videoId,t=-1,a="";A.getProfile()&&(t=A.getProfile().data.level,a=A.getProfile().data._id);var n=Object(ne.a)(le),s=Object(ae.a)(n,2),c=s[0],i=(s[1].error,Object(ne.a)(re)),l=Object(ae.a)(i,2),r=l[0],o=(l[1].err,Object(ne.a)(oe)),d=Object(ae.a)(o,2),j=d[0],b=(d[1].erro,Object(N.a)(P,{variables:{videoId:e}})),u=b.loading,h=b.data,O=!1;if(u)return Object(R.jsx)("div",{children:"Loading..."});var x=(null===h||void 0===h?void 0:h.video)||{};(x.likedBy.includes(a)||x.dislikedBy.includes(a))&&(O=!0);var m="";m=t>0?"Views: ".concat(x.views):"";var v=function(){var t=Object(te.a)(ee.a.mark((function t(){return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r({variables:{videoId:e,user:a}});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(te.a)(ee.a.mark((function t(){return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j({variables:{videoId:e,user:a}});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}();return function(){var t=x.views+1;try{c({variables:{videoId:e,views:t}})}catch(a){console.log(a)}}(),Object(R.jsx)("div",{children:Object(R.jsx)(y.a,{children:Object(R.jsxs)(H.a,{className:"text-center my-3",children:[Object(R.jsx)(H.a.Header,{as:"h2",className:"video-title",children:x.title}),Object(R.jsxs)(H.a.Body,{className:"video-body",children:[Object(R.jsx)(H.a.Title,{className:"roboto-font",children:x.publishDate}),Object(R.jsx)(H.a.Title,{className:"roboto-font",children:m}),Object(R.jsx)("video",{style:{width:660,height:"auto"},controls:!0,children:Object(R.jsx)("source",{src:x.cloudURL,type:"video/mp4"})}),Object(R.jsxs)("p",{className:"roboto-font",children:["Likes: ",x.likes]}),Object(R.jsxs)("p",{className:"roboto-font",children:[" Dislikes: ",x.dislikes]}),t>=0?Object(R.jsxs)("p",{children:[Object(R.jsx)("button",{className:"button6",disabled:O,onClick:function(){v(),O=!0},children:Object(R.jsx)("i",{className:"fas fa-thumbs-up"})}),Object(R.jsx)("button",{className:"button6",disabled:O,onClick:function(){p(),O=!0},children:Object(R.jsx)("i",{className:"fas fa-thumbs-down"})})]}):""]})]})})})},he=a(14),Oe=function(){var e=Object(j.useState)({name:"",email:"",password:""}),t=Object(ae.a)(e,2),a=t[0],n=t[1],s=Object(ne.a)(se),c=Object(ae.a)(s,2),i=c[0],l=c[1],r=l.error,o=l.data,d=function(e){var t=e.target,s=t.name,c=t.value;n(Object(O.a)(Object(O.a)({},a),{},Object(w.a)({},s,c)))},b=function(){var e=Object(te.a)(ee.a.mark((function e(t){var n,s;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,i({variables:Object(O.a)({},a)});case 4:n=e.sent,s=n.data,A.login(s.addUser.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsxs)("div",{children:[Object(R.jsx)("h1",{className:"login-header",children:"Signup"}),Object(R.jsx)(y.a,{className:"loginForm",children:Object(R.jsxs)(I.a,{className:"justify-content-md-center padding-login",children:[o?Object(R.jsxs)("p",{children:["Success!You may now head"," ",Object(R.jsx)(f.b,{to:"/",children:"back to the homepage."})]}):Object(R.jsxs)(he.a,{onSubmit:b,children:[Object(R.jsxs)(he.a.Group,{as:I.a,className:"mb-3",controlId:"formHorizontalEmail",children:[Object(R.jsx)(he.a.Label,{column:!0,sm:4,children:"Name"}),Object(R.jsx)(S.a,{sm:10,children:Object(R.jsx)(he.a.Control,{name:"name",type:"name",placeholder:"First, Last",value:a.name,onChange:d})})]}),Object(R.jsxs)(he.a.Group,{as:I.a,className:"mb-3",controlId:"formHorizontalEmail",children:[Object(R.jsx)(he.a.Label,{column:!0,sm:4,children:"Email"}),Object(R.jsx)(S.a,{sm:10,children:Object(R.jsx)(he.a.Control,{name:"email",type:"email",placeholder:"Enter email",value:a.email,onChange:d})})]}),Object(R.jsxs)(he.a.Group,{as:I.a,className:"mb-3",controlId:"formHorizontalPassword",children:[Object(R.jsx)(he.a.Label,{column:!0,sm:4,children:"Password"}),Object(R.jsx)(S.a,{sm:10,children:Object(R.jsx)(he.a.Control,{name:"password",type:"password",placeholder:"Password",value:a.password,onChange:d})})]}),Object(R.jsx)(he.a.Group,{as:I.a,className:"mb-3",children:Object(R.jsx)(S.a,{children:Object(R.jsx)("button",{type:"submit",className:"button6",children:"Sign up"})})})]}),r&&Object(R.jsx)("div",{className:"my-3 p-3 text-white",children:r.message})]})})]})},xe=function(e){var t=Object(j.useState)({email:"",password:""}),a=Object(ae.a)(t,2),n=a[0],s=a[1],c=Object(ne.a)(ie),i=Object(ae.a)(c,2),l=i[0],r=i[1],o=r.error,d=r.data,b=function(e){var t=e.target,a=t.name,c=t.value;s(Object(O.a)(Object(O.a)({},n),{},Object(w.a)({},a,c)))},u=function(){var e=Object(te.a)(ee.a.mark((function e(t){var a,c;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,l({variables:Object(O.a)({},n)});case 4:a=e.sent,c=a.data,A.login(c.login.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:s({email:"",password:""});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsxs)("div",{children:[Object(R.jsx)("h1",{className:"login-header",children:"Login"}),Object(R.jsx)(y.a,{className:"loginForm",children:Object(R.jsxs)(I.a,{className:"justify-content-md-center padding-login",children:[d?Object(R.jsxs)("p",{children:["Success! You may now head"," ",Object(R.jsx)(f.b,{to:"/",children:"back to the homepage."})]}):Object(R.jsxs)(he.a,{onSubmit:u,children:[Object(R.jsxs)(he.a.Group,{as:I.a,className:"mb-3",controlId:"formHorizontalEmail",children:[Object(R.jsx)(he.a.Label,{column:!0,sm:4,children:"Email"}),Object(R.jsx)(S.a,{sm:10,children:Object(R.jsx)(he.a.Control,{name:"email",type:"email",placeholder:"Enter email",value:n.email,onChange:b})})]}),Object(R.jsxs)(he.a.Group,{as:I.a,className:"mb-3",controlId:"formHorizontalPassword",children:[Object(R.jsx)(he.a.Label,{column:!0,sm:4,children:"Password"}),Object(R.jsx)(S.a,{sm:10,children:Object(R.jsx)(he.a.Control,{name:"password",type:"password",placeholder:"Password",value:n.password,onChange:b})})]}),Object(R.jsx)(he.a.Group,{as:I.a,className:"mb-3",children:Object(R.jsx)(S.a,{children:Object(R.jsx)("button",{type:"submit",className:"button6",children:"Sign in"})})})]}),o&&Object(R.jsx)("div",{className:"my-3 p-3 text-white",children:o.message})]})})]})},me=a(69),ve=a(117),pe=a(68),ge=a(112),fe=function(){var e=-1;A.getProfile()&&(e=A.getProfile().data.level);return Object(R.jsx)(b.a.Fragment,{children:A.loggedIn()?Object(R.jsxs)(R.Fragment,{children:[1===e||3===e?Object(R.jsxs)(f.b,{className:"nav-item nav-link",to:"/upload",children:[" ",Object(R.jsx)(ge.a,{}),"  Upload video"]}):"",Object(R.jsxs)(pe.a,{className:"d-inline mx-2",autoClose:"outside",children:[Object(R.jsxs)(pe.a.Toggle,{id:"dropdown-autoclose-outside",children:["Hello, ",A.getProfile().data.name]}),Object(R.jsxs)(pe.a.Menu,{children:[Object(R.jsxs)(pe.a.Item,{href:"#",children:[" ",1===e||3===e?Object(R.jsx)(f.b,{className:"nav-item nav-link",to:"/me",children:"View My Profile"}):""]}),Object(R.jsxs)(pe.a.Item,{href:"#",children:[" ",Object(R.jsx)(f.b,{className:"nav-item nav-link",onClick:function(e){e.preventDefault(),A.logout()},children:"Logout"})]})]})]})]}):Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(f.b,{className:"nav-item nav-link",to:"/login",children:"Login"})})})},ke=function(){A.getProfile()&&A.getProfile().data.level;return Object(R.jsx)("div",{className:"header-warp",children:Object(R.jsx)(me.a,{bg:"light",expand:"lg",fixed:"top",children:Object(R.jsxs)(y.a,{fluid:!0,children:[Object(R.jsx)(me.a.Brand,{href:"#",children:Object(R.jsx)("img",{src:"https://tiktits.com/assets/site/img/logo.svg",alt:""})}),Object(R.jsx)(me.a.Toggle,{"aria-controls":"navbarScroll"}),Object(R.jsxs)(me.a.Collapse,{id:"navbarScroll",children:[Object(R.jsx)(ve.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:Object(R.jsx)(f.b,{className:"nav-item nav-link",to:"/",children:"Home"})}),Object(R.jsx)(me.a.Collapse,{className:"justify-content-end",children:Object(R.jsx)(fe,{})})]})]})})})},we=function(){Object(k.f)(),Object(k.e)();return Object(R.jsx)("footer",{className:"w-100 mt-auto text-dark p-4",children:Object(R.jsx)("div",{className:"container text-center mb-5",children:Object(R.jsxs)("h4",{className:"footer-font",children:["\xa9 ",(new Date).getFullYear()," - NGUYENDAIDTVT2."]})})})};var Ne=function(){var e=Object(j.useState)(""),t=Object(ae.a)(e,2),a=t[0],n=t[1],s=Object(j.useState)(""),c=Object(ae.a)(s,2),i=c[0],l=c[1],r=Object(j.useState)(""),o=Object(ae.a)(r,2),d=(o[0],o[1],Object(ne.a)(je)),b=Object(ae.a)(d,2),u=b[0],h=(b[1].error,window.cloudinary.createUploadWidget({cloudName:"dporcepgm",uploadPreset:"tiktok_up"},(function(e,t){!e&&t&&"success"===t.event&&(console.log("Done! Here is the video info: ",t.info),l(t.info.secure_url))}))),O=function(){var e=Object(te.a)(ee.a.mark((function e(t){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{u({variables:{title:a,cloudURL:i,videoAuthor:A.getProfile().data.name}}),n(""),window.location.assign("/")}catch(s){console.error(s)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsxs)(y.a,{className:"upload-container justify-content-md-center",children:[Object(R.jsx)(I.a,{className:"justify-content-md-center upload-padding-top",children:Object(R.jsx)(he.a.Label,{children:"Upload Your Video"})}),Object(R.jsx)(I.a,{className:"justify-content-md-center",children:Object(R.jsx)("button",{id:"upload_widget",onClick:function(){h.open()},className:"cloudinary-button button6",children:"Upload"})}),Object(R.jsxs)(he.a,{children:[Object(R.jsx)(I.a,{className:"justify-content-md-center",children:Object(R.jsx)(S.a,{sm:5,children:Object(R.jsxs)(he.a.Group,{as:S.a,className:"upload-label",controlId:"formGridEmail",children:[Object(R.jsx)(he.a.Label,{children:"Video Title"}),Object(R.jsx)(he.a.Control,{onChange:function(e){n(e.target.value)},value:a})]})})}),Object(R.jsx)(I.a,{className:"justify-content-md-center",children:Object(R.jsx)("button",{className:"button6",type:"submit",onClick:O,children:"Submit"})})]})]})},ye=Object(x.a)({uri:"/graphql"}),Ie=Object(g.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(O.a)(Object(O.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),Se=new m.a({link:Ie.concat(ye),cache:new v.a});var $e=function(){return Object(R.jsx)(p.a,{client:Se,children:Object(R.jsxs)(f.a,{children:[Object(R.jsxs)("div",{className:"content-positioning",children:[Object(R.jsx)(ke,{}),Object(R.jsx)(k.a,{exact:!0,path:"/",children:Object(R.jsx)(X,{})}),Object(R.jsx)(k.a,{exact:!0,path:"/login",children:Object(R.jsx)(xe,{})}),Object(R.jsx)(k.a,{exact:!0,path:"/signup",children:Object(R.jsx)(Oe,{})}),Object(R.jsx)(k.a,{exact:!0,path:"/upload",children:Object(R.jsx)(Ne,{})}),Object(R.jsx)(k.a,{exact:!0,path:"/videos/:videoId",children:Object(R.jsx)(ue,{})}),Object(R.jsx)(k.a,{exact:!0,path:"/videosCrud/:videoId",children:Object(R.jsx)(be,{})}),Object(R.jsx)(k.a,{exact:!0,path:"/me",children:Object(R.jsx)(E,{})})]}),Object(R.jsx)(we,{})]})})},Le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,177)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};h.a.render(Object(R.jsx)(b.a.StrictMode,{children:Object(R.jsx)($e,{})}),document.getElementById("root")),Le()}},[[156,1,2]]]);
//# sourceMappingURL=main.8b801019.chunk.js.map