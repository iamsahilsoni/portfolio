(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(2),c=n.n(l),o=(n(12),n(3)),s=n(4),r=n(6),m=n(5),d=(n(13),n(14),n(15),function(e){var t=e.handleClick;return i.a.createElement("div",{className:"sidenav"},i.a.createElement("img",{src:"https://i.ibb.co/j8WDzdr/pic.jpg",className:"avatar",alt:"photo"}),i.a.createElement("h2",{className:"main-name"},"Sahil Soni"),i.a.createElement("p",{className:"subtitle"},"\u201cCourage Is a Love Affair with the Unknown\u201d\u2015 Osho"),i.a.createElement("div",{className:"section-list"},i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("about")}},"About Me"),i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("skills")}},"Skills"),i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("projects")}},"Projects")))}),u=(n(16),n(17),{heading:"About Me",quote:"I believe noone is born for something, we are what we want us to be !!",bio:"I can Code and it took me a year to realise that. \n\nActually i can do anything if i see something in it. \n\nWanna Chess ?\n\nLinkedIn : lialh4 \nIG : iamsahilsoni "}),h=function(e){return i.a.createElement("div",{className:"about-container"},u.bio)},p=(n(18),function(e){var t=e.skill;return i.a.createElement("div",{className:"skill-card"},t)}),f={heading:"Skills",quote:"Skills are just dedication for a week.",techSkills:["C++","C","CUDA","JavaScript","NodeJS","ReactJS","Python","HTML","CSS","OpenCV"],industryKnowledge:["Fresher !!!! Hire ME"],interpersonalSkills:["Communication","Teaching","Time Management","Problem Solving","Management"]},k=(n(19),function(){return i.a.createElement("div",{className:"skills-container"},i.a.createElement("h3",null,"Industry Knowledge"),i.a.createElement("div",{className:"industry-skill-container"},f.industryKnowledge.map((function(e){return i.a.createElement(p,{key:e,skill:e})}))),i.a.createElement("h3",null,"Tech Skills"),i.a.createElement("div",{className:"industry-skill-container"},f.techSkills.map((function(e){return i.a.createElement(p,{key:e,skill:e})}))),i.a.createElement("h3",null,"Interpersonal Skills"),i.a.createElement("div",{className:"industry-skill-container"},f.interpersonalSkills.map((function(e){return i.a.createElement(p,{key:e,skill:e})}))))}),E=(n(20),function(e){var t=e.project;return i.a.createElement("div",{className:"project-card"},i.a.createElement("p",null,i.a.createElement("b",null,"Name : ")," ",t.name),i.a.createElement("p",null,i.a.createElement("b",null,"Description : ")," ",t.description),i.a.createElement("p",null,i.a.createElement("b",null,"Link : ")," ",i.a.createElement("a",{href:t.link},t.link)," "))}),g={heading:"Projects",quote:"Projects are fun, if we are paid for it.\nNot a Pro in making Website. Problem Solving is my priority always.",projectList:[{name:"This App || React ",description:"Used React for making this Resume cum Portfolio. Simple App but i learnt about props and states and other important things. so basically i can make basic react website now.",link:"https://bit.ly/3jozZZg"},{name:"Face Attendance || OpenCV ",description:"After Learning Python, i came accross this cool Library OpenCV. So i thought of new features in this. Can be used by Teachers to record Attendance , just need one photo of Student, and Excel of students present along with time is generated.",link:"https://bit.ly/3eLoBmN"},{name:"Deep learning based image classification for intestinal hemorrhage || Research Paper || CNN || ML",description:"CNN model is trained with positive images of blood clot of intestine. Now with Camera inbuilt in capsule is used to click images and that images are sent to model to detect. Saves time. Conventional model requires doctor to examine each images captured.",link:"https://rdcu.be/b5BVO"}]},v=(n(21),function(){return i.a.createElement("div",{className:"projects-container"},i.a.createElement("div",{className:"industry-skill-container"},g.projectList.map((function(e){return i.a.createElement(E,{project:e})}))))}),b=function(e){var t=e.selectedHeading,n=e.selectedQuote,a=e.selectedSection;return i.a.createElement("div",{className:"section-container"},i.a.createElement("div",{className:"section-heading-container"},i.a.createElement("h1",{className:"main-heading"},t),i.a.createElement("p",{className:"main-quote"},n)),i.a.createElement("div",{className:!0},{about:i.a.createElement(h,null),skills:i.a.createElement(k,null),projects:i.a.createElement(v,null)}[a]))},N=function(e){var t=e.selectedHeading,n=e.selectedQuote,a=e.selectedSection,l=e.handleClick;return i.a.createElement("div",{className:"portfolio-container"},i.a.createElement("div",{className:"sidenav-container"},i.a.createElement(d,{handleClick:l})),i.a.createElement("div",{className:"main-section-container"},i.a.createElement(b,{selectedHeading:t,selectedQuote:n,selectedSection:a})))},S=function(e){Object(r.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleClick=function(t){e.setState({selectedSection:t,selectedHeading:e.state[t].heading,selectedQuote:e.state[t].quote})},e.state={selectedSection:"",selectedHeading:"",selectedQuote:"",about:u,skills:f,projects:g},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState({selectedSection:"about",selectedHeading:u.heading,selectedQuote:u.quote})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(N,{selectedHeading:this.state.selectedHeading,selectedQuote:this.state.selectedQuote,selectedSection:this.state.selectedSection,handleClick:this.handleClick}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.5c4b99ce.chunk.js.map