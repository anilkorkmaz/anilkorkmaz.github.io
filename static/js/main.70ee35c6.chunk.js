(this.webpackJsonpAnilKorkmaz=this.webpackJsonpAnilKorkmaz||[]).push([[0],{131:function(e,t,a){},138:function(e,t,a){},519:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),c=a(68),s=a.n(c),d=(a(131),a(11)),o=a(2),m=a(0),r=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"cd "}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(d.b,{to:"/",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)(d.b,{to:"/java",children:"Java"})}),Object(m.jsx)("li",{children:Object(m.jsx)(d.b,{to:"/springboot",children:"Spring Boot Framework"})}),Object(m.jsx)("li",{children:Object(m.jsx)(d.b,{to:"/postgres",children:"Postgresql"})}),Object(m.jsx)("li",{children:Object(m.jsx)(d.b,{to:"/linux",children:"Linux"})}),Object(m.jsx)("li",{children:Object(m.jsx)(d.b,{to:"/git",children:"Git"})}),Object(m.jsx)("li",{children:Object(m.jsx)(d.b,{to:"/docker",children:"Docker"})}),Object(m.jsx)("li",{children:Object(m.jsx)(d.b,{to:"/reactjs",children:"React JS"})})]})]})},l=a(71),j=a.n(l),p=a(119),b=a(37),f=(a(138),a(120)),h=a.n(f),u=a(121),x=a.n(u),O=a(523),_=a(126),g=a(522),k={code:function(e){var t=e.language,a=e.value;return Object(m.jsx)(O.a,{style:g.a,language:t,children:a})}},v={overlay:{backgroundColor:"#282c34",opacity:"95%"},content:{top:"2%",left:"20%",right:"20%",bottom:"2%"}},y=function(e){return Object(m.jsxs)(h.a,{isOpen:e.modalIsOpen,onRequestClose:e.closeModal,style:v,contentLabel:e.contentLabel,ariaHideApp:!1,children:[Object(m.jsx)("div",{className:"close",onClick:e.closeModal,children:Object(m.jsx)(_.a,{})}),Object(m.jsx)(x.a,{allowDangerousHtml:!0,renderers:k,children:e.content,className:"modal"})]})},w=function(e){var t=Object(i.useState)(!1),a=Object(b.a)(t,2),n=a[0],c=a[1],s=Object(i.useState)(" "),d=Object(b.a)(s,2),o=d[0],r=d[1],l=Object(i.useState)(""),f=Object(b.a)(l,2),h=f[0],u=f[1],x=e.contentList,O=function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{fetch(t).then((function(e){return e.text()})).then((function(e){return r(e)})),c(!0)}catch(a){console.log("markdown read error"),c(!1)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"content",children:[0===x.length?Object(m.jsx)("p",{style:{color:"grey"},children:"Content not entered yet :("}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("input",{type:"text",onChange:function(e){u(e.target.value)},className:"searchbox",placeholder:"Search",autocomplete:"off"}),Object(m.jsx)("ol",{children:x.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())})).map((function(e){return Object(m.jsx)("li",{onClick:function(){O(e.mdfile)},children:e.name})}))})]}),Object(m.jsx)(y,{modalIsOpen:n,closeModal:function(){c(!1),r(" ")},contentLabel:"mdcontent",content:o})]})},C=a.p+"static/media/01-default_in_interface.326f0b14.md",S=a.p+"static/media/02-convert_date_types.9dad1d8a.md",L=a.p+"static/media/03-timezone_convert.1911b312.md",A=a.p+"static/media/04-ldt_custom_format.035ae160.md",D=a.p+"static/media/05-round-double_float_with_decimal.d4129852.md",R=a.p+"static/media/06-math_function_resolver.60056275.md",q=a.p+"static/media/07-object_equals.39f0a17c.md",F=a.p+"static/media/08-cast_object_list.2300b3c6.md",z=function(){var e=[{name:"Default usage in Interface",mdfile:C},{name:"Convert Date Types",mdfile:S},{name:"Time Zone Convert",mdfile:L},{name:"LocalDateTime Custom Format",mdfile:A},{name:"Round Double and Float with Decimal Place",mdfile:D},{name:"Math function calculator",mdfile:R},{name:"Null safe object equality",mdfile:q},{name:"Cast object list",mdfile:F}];return Object(m.jsx)(w,{contentList:e})},M=a.p+"static/media/01-rest_date_time_format.db44fce4.md",N=a.p+"static/media/02-stopwatch_using.172ec7af.md",P=a.p+"static/media/03-injenctions.bc0d71ed.md",B=a.p+"static/media/04-rest.19eff9a5.md",H=a.p+"static/media/05-validation.12fef780.md",T=a.p+"static/media/06-create_annotation.31ce858e.md",K=a.p+"static/media/07-global_exeption_handler.b772257a.md",E=a.p+"static/media/08-postgres_connection.e23025cb.md",I=a.p+"static/media/09-cassandra_connection.c0393c89.md",G=a.p+"static/media/10-h2_db_connection.f9a3f433.md",J=a.p+"static/media/11-execution_time_aop.5cc26449.md",W=a.p+"static/media/12-lombok.8eadd918.md",Z=a.p+"static/media/13-spring_task.652885de.md",U=function(){var e=[{name:"StopWatch Using",mdfile:N},{name:"Dependency Injection",mdfile:P},{name:"Rest Controller",mdfile:B},{name:"Rest DateTimeFormatter",mdfile:M},{name:"Validation and MethodArgumentNotValidException",mdfile:H},{name:"Create new Annotation for validation",mdfile:T},{name:"Global Exception Handler",mdfile:K},{name:"Spring Boot And Postgres",mdfile:E},{name:"Spring Boot And Cassandra",mdfile:I},{name:"Spring Boot And H2 Database",mdfile:G},{name:"Method execution time calculation with Annotation and AOP",mdfile:J},{name:"Lombok",mdfile:W},{name:"Spring task / Thread Executer",mdfile:Z}];return Object(m.jsx)(w,{contentList:e})},V=a.p+"static/media/01-psql_basics.efae0533.md",Q=a.p+"static/media/02-postgres_backup.e51448c2.md",X=a.p+"static/media/03-postgres_restore.eb159078.md",Y=a.p+"static/media/04-pgpass.00828ff5.md",$=a.p+"static/media/05-remote_psql_command.0e2e585e.md",ee=function(){var e=[{name:"Postgresql Psql basics",mdfile:V},{name:"Postgresql Backup",mdfile:Q},{name:"Postgresql Restore",mdfile:X},{name:"Pgpass -Run psql command without passoword",mdfile:Y},{name:"Run remote psql command with any user",mdfile:$}];return Object(m.jsx)(w,{contentList:e})},te=a.p+"static/media/01-user_management.77586250.md",ae=a.p+"static/media/02-bash_script_get_parameters.cdfc9a25.md",ie=a.p+"static/media/03-folder_or_file_size_command.1fde9719.md",ne=a.p+"static/media/04-zsh.cc840f3f.md",ce=a.p+"static/media/05-compress_extraxt_file.8e738fe7.md",se=a.p+"static/media/06-enable_ssh.544f2dca.md",de=a.p+"static/media/07-linux_usefull_files.b979b548.md",oe=a.p+"static/media/08-run_command_with_user.ac261ac0.md",me=a.p+"static/media/09-hide_grub.3750a406.md",re=a.p+"static/media/10-scp_command.eac60c52.md",le=a.p+"static/media/11-display_branch_name.5eed0897.md",je=a.p+"static/media/12-kill_port_process.c5242fc5.md",pe=a.p+"static/media/13-display_last_boot_logs.c0397ce2.md",be=a.p+"static/media/14-create_bootable_disk.6e7bb96c.md",fe=function(){var e=[{name:"Linux files that should be learned",mdfile:de},{name:"Linux User Management",mdfile:te},{name:"Get bash script parameters with name",mdfile:ae},{name:"Folder size command with deeph",mdfile:ie},{name:"Zsh / Oh My Zsh / Autocomplete from history",mdfile:ne},{name:"Compress and extract a file or a directory",mdfile:ce},{name:"Enable Ssh",mdfile:se},{name:"Run command as a user",mdfile:oe},{name:"Hide Grub",mdfile:me},{name:"Copy File with ssh , Scp",mdfile:re},{name:"Display Git Branch Name on Terminal",mdfile:le},{name:"Kill the active port\u2019s process",mdfile:je},{name:"Display logs during last boot",mdfile:pe},{name:"Create bootable disk",mdfile:be}];return Object(m.jsx)(w,{contentList:e})},he=function(){return Object(m.jsx)(w,{contentList:[]})},ue=a.p+"static/media/01-docker_basic.6f6b4b16.md",xe=a.p+"static/media/02-container_auto_restart.b1be5bbf.md",Oe=a.p+"static/media/03-dockerfile.a356919e.md",_e=a.p+"static/media/04-jdk_based_dockerfile.52ecf326.md",ge=a.p+"static/media/05-start_stop_all_container.ef628421.md",ke=a.p+"static/media/06-postgres_container_setup.ef7ac09f.md",ve=a.p+"static/media/07-keycloak_container_setup.d26856f8.md",ye=a.p+"static/media/08-rabbitmq_container_setup.e19cf276.md",we=function(){var e=[{name:"Docker Basics",mdfile:ue},{name:"Docker Container Auto Restart",mdfile:xe},{name:"DockerFile",mdfile:Oe},{name:"JDK Based DockerFile",mdfile:_e},{name:"Start Stop All containers",mdfile:ge},{name:"Sample Postgres Container setup",mdfile:ke},{name:"Sample Keycloak Container setup",mdfile:ve},{name:"Sample RabbitMq Container setup",mdfile:ye}];return Object(m.jsx)(w,{contentList:e})},Ce=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Notes To Myself"}),Object(m.jsx)("img",{src:"/anilkorkmaz.github.io/doge.gif",style:{maxWidth:"80%"},alt:"logo"}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{style:{fontWeight:600},children:"An\u0131l Korkmaz"})," - Software Developper",Object(m.jsx)("br",{}),Object(m.jsx)("p",{style:{fontWeight:300,display:"inline"},children:" anil.korkmaz@mail.com"})]}),Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/an%C4%B1l-korkmaz/",children:Object(m.jsx)("img",{src:"/anilkorkmaz.github.io/lnkedin.png",style:{width:"33px"},alt:"linkedin"})}),Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://twitter.com/AnilK0RKMAZ",children:Object(m.jsx)("img",{src:"/anilkorkmaz.github.io/tw.png",style:{width:"33px",marginLeft:"8px"},alt:"twitter"})})]})]})},Se=a.p+"static/media/01-react_hooks_useState.f14eff37.md",Le=a.p+"static/media/02-react_hooks_useEffects.47e0b1c5.md",Ae=a.p+"static/media/03-redux_with_hooks.3a8ceae5.md",De=function(){var e=[{name:"React Hooks -> useState",mdfile:Se},{name:"React Hooks -> useEffects",mdfile:Le},{name:"Redux With Hooks",mdfile:Ae}];return Object(m.jsx)(w,{contentList:e})},Re=function(){return Object(m.jsx)(d.a,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)("div",{className:"App-left",children:Object(m.jsx)(r,{})}),Object(m.jsx)("div",{className:"App-right",children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{exact:!0,path:"/",children:Object(m.jsx)(Ce,{})}),Object(m.jsx)(o.a,{path:"/java",children:Object(m.jsx)(z,{})}),Object(m.jsx)(o.a,{path:"/springboot",children:Object(m.jsx)(U,{})}),Object(m.jsx)(o.a,{path:"/postgres",children:Object(m.jsx)(ee,{})}),Object(m.jsx)(o.a,{path:"/linux",children:Object(m.jsx)(fe,{})}),Object(m.jsx)(o.a,{path:"/git",children:Object(m.jsx)(he,{})}),Object(m.jsx)(o.a,{path:"/docker",children:Object(m.jsx)(we,{})}),Object(m.jsx)(o.a,{path:"/reactjs",children:Object(m.jsx)(De,{})})]})})]})})})},qe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,524)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),c(e),s(e)}))};s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(Re,{})}),document.getElementById("root")),qe()}},[[519,1,2]]]);
//# sourceMappingURL=main.70ee35c6.chunk.js.map