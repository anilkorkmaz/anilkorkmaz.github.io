(this.webpackJsonpAnilKorkmaz=this.webpackJsonpAnilKorkmaz||[]).push([[0],{131:function(e,t,a){},132:function(e,t,a){},139:function(e,t,a){},520:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),c=a(68),s=a.n(c),d=(a(131),a(132),a(11)),m=a(2),o=a(0),r=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"cd "}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/java",children:"Java"})}),Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/springboot",children:"Spring Boot Framework"})}),Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/postgres",children:"Postgresql"})}),Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/linux",children:"Linux"})}),Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/git",children:"Git"})}),Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/docker",children:"Docker"})}),Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/reactjs",children:"React JS"})})]})]})},l=a(71),j=a.n(l),p=a(119),f=a(37),b=(a(139),a(120)),h=a.n(b),u=a(121),x=a.n(u),O=a(524),_=a(126),g=a(523),k={code:function(e){var t=e.language,a=e.value;return Object(o.jsx)(O.a,{style:g.a,language:t,children:a})}},v={overlay:{backgroundColor:"#282c34",opacity:"95%"},content:{top:"2%",left:"20%",right:"20%",bottom:"2%"}},y=function(e){return Object(o.jsxs)(h.a,{isOpen:e.modalIsOpen,onRequestClose:e.closeModal,style:v,contentLabel:e.contentLabel,ariaHideApp:!1,children:[Object(o.jsx)("div",{className:"close",onClick:e.closeModal,children:Object(o.jsx)(_.a,{})}),Object(o.jsx)(x.a,{allowDangerousHtml:!0,renderers:k,children:e.content,className:"modal"})]})},w=function(e){var t=Object(i.useState)(!1),a=Object(f.a)(t,2),n=a[0],c=a[1],s=Object(i.useState)(" "),d=Object(f.a)(s,2),m=d[0],r=d[1],l=Object(i.useState)(""),b=Object(f.a)(l,2),h=b[0],u=b[1],x=e.contentList,O=function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{fetch(t).then((function(e){return e.text()})).then((function(e){return r(e)})),c(!0)}catch(a){console.log("markdown read error"),c(!1)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"content",children:[0===x.length?Object(o.jsx)("p",{style:{color:"grey"},children:"Content not entered yet :("}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{type:"text",onChange:function(e){u(e.target.value)},className:"searchbox",placeholder:"Search",autocomplete:"off"}),Object(o.jsx)("ol",{children:x.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())})).map((function(e){return Object(o.jsx)("li",{onClick:function(){O(e.mdfile)},children:e.name})}))})]}),Object(o.jsx)(y,{modalIsOpen:n,closeModal:function(){c(!1),r(" ")},contentLabel:"mdcontent",content:m})]})},C=a.p+"static/media/01-default_in_interface.326f0b14.md",S=a.p+"static/media/02-convert_date_types.9dad1d8a.md",L=a.p+"static/media/03-timezone_convert.1911b312.md",A=a.p+"static/media/04-ldt_custom_format.035ae160.md",D=a.p+"static/media/05-round-double_float_with_decimal.d4129852.md",R=a.p+"static/media/06-math_function_resolver.60056275.md",q=a.p+"static/media/07-object_equals.39f0a17c.md",F=a.p+"static/media/08-cast_object_list.2300b3c6.md",M=function(){var e=[{name:"Default usage in Interface",mdfile:C},{name:"Convert Date Types",mdfile:S},{name:"Time Zone Convert",mdfile:L},{name:"LocalDateTime Custom Format",mdfile:A},{name:"Round Double and Float with Decimal Place",mdfile:D},{name:"Math function calculator",mdfile:R},{name:"Null safe object equality",mdfile:q},{name:"Cast object list",mdfile:F}];return Object(o.jsx)(w,{contentList:e})},N=a.p+"static/media/01-rest_date_time_format.db44fce4.md",P=a.p+"static/media/02-stopwatch_using.172ec7af.md",B=a.p+"static/media/03-injenctions.bc0d71ed.md",z=a.p+"static/media/04-rest.19eff9a5.md",H=a.p+"static/media/05-validation.12fef780.md",T=a.p+"static/media/06-create_annotation.31ce858e.md",E=a.p+"static/media/07-global_exeption_handler.b772257a.md",K=a.p+"static/media/08-postgres_connection.e23025cb.md",I=a.p+"static/media/09-cassandra_connection.c0393c89.md",G=a.p+"static/media/10-h2_db_connection.f9a3f433.md",J=a.p+"static/media/11-execution_time_aop.5cc26449.md",W=a.p+"static/media/12-lombok.8eadd918.md",Z=a.p+"static/media/13-spring_task.652885de.md",U=a.p+"static/media/14-entiy_relations.f95ef2f6.md",V=function(){var e=[{name:"StopWatch Using",mdfile:P},{name:"Dependency Injection",mdfile:B},{name:"Rest Controller",mdfile:z},{name:"Rest DateTimeFormatter",mdfile:N},{name:"Validation and MethodArgumentNotValidException",mdfile:H},{name:"Create new Annotation for validation",mdfile:T},{name:"Global Exception Handler",mdfile:E},{name:"Spring Boot And Postgres",mdfile:K},{name:"Spring Boot And Cassandra",mdfile:I},{name:"Spring Boot And H2 Database",mdfile:G},{name:"Method execution time calculation with Annotation and AOP",mdfile:J},{name:"Lombok",mdfile:W},{name:"Spring task / Thread Executer",mdfile:Z},{name:"Entity relations",mdfile:U}];return Object(o.jsx)(w,{contentList:e})},Q=a.p+"static/media/01-psql_basics.efae0533.md",X=a.p+"static/media/02-postgres_backup.e51448c2.md",Y=a.p+"static/media/03-postgres_restore.eb159078.md",$=a.p+"static/media/04-pgpass.00828ff5.md",ee=a.p+"static/media/05-remote_psql_command.0e2e585e.md",te=function(){var e=[{name:"Postgresql Psql basics",mdfile:Q},{name:"Postgresql Backup",mdfile:X},{name:"Postgresql Restore",mdfile:Y},{name:"Pgpass -Run psql command without passoword",mdfile:$},{name:"Run remote psql command with any user",mdfile:ee}];return Object(o.jsx)(w,{contentList:e})},ae=a.p+"static/media/01-user_management.77586250.md",ie=a.p+"static/media/02-bash_script_get_parameters.cdfc9a25.md",ne=a.p+"static/media/03-folder_or_file_size_command.1fde9719.md",ce=a.p+"static/media/04-zsh.cc840f3f.md",se=a.p+"static/media/05-compress_extraxt_file.8e738fe7.md",de=a.p+"static/media/06-enable_ssh.544f2dca.md",me=a.p+"static/media/07-linux_usefull_files.b979b548.md",oe=a.p+"static/media/08-run_command_with_user.ac261ac0.md",re=a.p+"static/media/09-hide_grub.3750a406.md",le=a.p+"static/media/10-scp_command.eac60c52.md",je=a.p+"static/media/11-display_branch_name.5eed0897.md",pe=a.p+"static/media/12-kill_port_process.c5242fc5.md",fe=a.p+"static/media/13-display_last_boot_logs.c0397ce2.md",be=a.p+"static/media/14-create_bootable_disk.6e7bb96c.md",he=function(){var e=[{name:"Linux files that should be learned",mdfile:me},{name:"Linux User Management",mdfile:ae},{name:"Get bash script parameters with name",mdfile:ie},{name:"Folder size command with deeph",mdfile:ne},{name:"Zsh / Oh My Zsh / Autocomplete from history",mdfile:ce},{name:"Compress and extract a file or a directory",mdfile:se},{name:"Enable Ssh",mdfile:de},{name:"Run command as a user",mdfile:oe},{name:"Hide Grub",mdfile:re},{name:"Copy File with ssh , Scp",mdfile:le},{name:"Display Git Branch Name on Terminal",mdfile:je},{name:"Kill the active port\u2019s process",mdfile:pe},{name:"Display logs during last boot",mdfile:fe},{name:"Create bootable disk",mdfile:be}];return Object(o.jsx)(w,{contentList:e})},ue=function(){return Object(o.jsx)(w,{contentList:[]})},xe=a.p+"static/media/01-docker_basic.6f6b4b16.md",Oe=a.p+"static/media/02-container_auto_restart.b1be5bbf.md",_e=a.p+"static/media/03-dockerfile.a356919e.md",ge=a.p+"static/media/04-jdk_based_dockerfile.52ecf326.md",ke=a.p+"static/media/05-start_stop_all_container.ef628421.md",ve=a.p+"static/media/06-postgres_container_setup.ef7ac09f.md",ye=a.p+"static/media/07-keycloak_container_setup.d26856f8.md",we=a.p+"static/media/08-rabbitmq_container_setup.e19cf276.md",Ce=a.p+"static/media/09-docker_compese.3aa35c6f.md",Se=function(){var e=[{name:"Docker Basics",mdfile:xe},{name:"Docker Container Auto Restart",mdfile:Oe},{name:"DockerFile",mdfile:_e},{name:"JDK Based DockerFile",mdfile:ge},{name:"Start Stop All containers",mdfile:ke},{name:"Sample Postgres Container setup",mdfile:ve},{name:"Sample Keycloak Container setup",mdfile:ye},{name:"Sample RabbitMq Container setup",mdfile:we},{name:"Docker Compose",mdfile:Ce}];return Object(o.jsx)(w,{contentList:e})},Le=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Notes To Myself"}),Object(o.jsx)("img",{src:"/doge.gif",style:{maxWidth:"80%"},alt:"logo"}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{style:{fontWeight:600},children:"An\u0131l Korkmaz"})," - Software Developer",Object(o.jsx)("br",{}),Object(o.jsx)("p",{style:{fontWeight:300,display:"inline"},children:" anil.korkmaz@mail.com"})]}),Object(o.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/an%C4%B1l-korkmaz/",children:Object(o.jsx)("img",{src:"/lnkedin.png",style:{width:"33px"},alt:"linkedin"})}),Object(o.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://twitter.com/AnilK0RKMAZ",children:Object(o.jsx)("img",{src:"/tw.png",style:{width:"33px",marginLeft:"8px"},alt:"twitter"})})]})]})},Ae=a.p+"static/media/01-react_hooks_useState.f14eff37.md",De=a.p+"static/media/02-react_hooks_useEffects.47e0b1c5.md",Re=a.p+"static/media/03-redux_with_hooks.3a8ceae5.md",qe=function(){var e=[{name:"React Hooks -> useState",mdfile:Ae},{name:"React Hooks -> useEffects",mdfile:De},{name:"Redux With Hooks",mdfile:Re}];return Object(o.jsx)(w,{contentList:e})},Fe=function(){return Object(o.jsx)(d.a,{children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("div",{className:"App-left",children:Object(o.jsx)(r,{})}),Object(o.jsx)("div",{className:"App-right",children:Object(o.jsxs)(m.c,{children:[Object(o.jsx)(m.a,{exact:!0,path:"/",children:Object(o.jsx)(Le,{})}),Object(o.jsx)(m.a,{path:"/java",children:Object(o.jsx)(M,{})}),Object(o.jsx)(m.a,{path:"/springboot",children:Object(o.jsx)(V,{})}),Object(o.jsx)(m.a,{path:"/postgres",children:Object(o.jsx)(te,{})}),Object(o.jsx)(m.a,{path:"/linux",children:Object(o.jsx)(he,{})}),Object(o.jsx)(m.a,{path:"/git",children:Object(o.jsx)(ue,{})}),Object(o.jsx)(m.a,{path:"/docker",children:Object(o.jsx)(Se,{})}),Object(o.jsx)(m.a,{path:"/reactjs",children:Object(o.jsx)(qe,{})})]})})]})})})},Me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,525)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),c(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(Fe,{})}),document.getElementById("root")),Me()}},[[520,1,2]]]);
//# sourceMappingURL=main.66696a34.chunk.js.map