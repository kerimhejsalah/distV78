(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{A5DG:function(e,r,t){"use strict";t.r(r),t.d(r,"AddpatientModule",(function(){return B}));var i=t("ofXK"),s=t("tyNb"),c=t("PSD3"),a=t.n(c),n=t("3Pt+"),o=t("4c1C"),d=t("UE0P"),b=t("fXoL"),l=t("DJUr"),m=t("dNgK"),u=t("1EOM"),f=t("sYmb");function p(e,r){1&e&&(b.bc(0,"div"),b.Pc(1," First Name is required "),b.ac())}function v(e,r){if(1&e&&(b.bc(0,"div",31),b.Nc(1,p,2,0,"div",32),b.ac()),2&e){const e=b.mc();b.Jb(1),b.sc("ngIf",e.f.name.errors.required)}}function g(e,r){1&e&&(b.bc(0,"div"),b.Pc(1,"Last Name is required"),b.ac())}function h(e,r){if(1&e&&(b.bc(0,"div",31),b.Nc(1,g,2,0,"div",32),b.ac()),2&e){const e=b.mc();b.Jb(1),b.sc("ngIf",e.f.lastname.errors.required)}}function y(e,r){1&e&&(b.bc(0,"div"),b.Pc(1,"Title is required"),b.ac())}function P(e,r){if(1&e&&(b.bc(0,"div",31),b.Nc(1,y,2,0,"div",32),b.ac()),2&e){const e=b.mc();b.Jb(1),b.sc("ngIf",e.f.gender.errors.required)}}function w(e,r){1&e&&(b.bc(0,"div"),b.Pc(1,"Email is required"),b.ac())}function q(e,r){1&e&&(b.bc(0,"div"),b.Pc(1," Email must be a valid email address "),b.ac())}function N(e,r){if(1&e&&(b.bc(0,"div",31),b.Nc(1,w,2,0,"div",32),b.Nc(2,q,2,0,"div",32),b.ac()),2&e){const e=b.mc();b.Jb(1),b.sc("ngIf",e.f.email.errors.required),b.Jb(1),b.sc("ngIf",e.f.email.errors.email)}}function J(e,r){1&e&&(b.bc(0,"div"),b.Pc(1,"Password is required"),b.ac())}function C(e,r){if(1&e&&(b.bc(0,"div",31),b.Nc(1,J,2,0,"div",32),b.ac()),2&e){const e=b.mc();b.Jb(1),b.sc("ngIf",e.f.password.errors.required)}}function I(e,r){1&e&&(b.bc(0,"div"),b.Pc(1," adresse is required "),b.ac())}function T(e,r){if(1&e&&(b.bc(0,"div",31),b.Nc(1,I,2,0,"div",32),b.ac()),2&e){const e=b.mc();b.Jb(1),b.sc("ngIf",e.f.adresse.errors.required)}}function A(e,r){1&e&&(b.bc(0,"div"),b.Pc(1,"weight is required"),b.ac())}function E(e,r){if(1&e&&(b.bc(0,"div",31),b.Nc(1,A,2,0,"div",32),b.ac()),2&e){const e=b.mc();b.Jb(1),b.sc("ngIf",e.f.weight.errors.required)}}function S(e,r){1&e&&(b.bc(0,"div"),b.Pc(1," size is required "),b.ac())}function z(e,r){if(1&e&&(b.bc(0,"div",31),b.Nc(1,S,2,0,"div",32),b.ac()),2&e){const e=b.mc();b.Jb(1),b.sc("ngIf",e.f.size.errors.required)}}function M(e,r){1&e&&(b.bc(0,"div"),b.Pc(1," First birthday is required "),b.ac())}function U(e,r){if(1&e&&(b.bc(0,"div",31),b.Nc(1,M,2,0,"div",32),b.ac()),2&e){const e=b.mc();b.Jb(1),b.sc("ngIf",e.f.birthday.errors.required)}}function x(e,r){1&e&&(b.bc(0,"div"),b.Pc(1,"tel is required"),b.ac())}function L(e,r){if(1&e&&(b.bc(0,"div",31),b.Nc(1,x,2,0,"div",32),b.ac()),2&e){const e=b.mc();b.Jb(1),b.sc("ngIf",e.f.tel.errors.required)}}function O(e,r){1&e&&(b.bc(0,"div"),b.Pc(1,"ssn is required"),b.ac())}function k(e,r){if(1&e&&(b.bc(0,"div",31),b.Nc(1,O,2,0,"div",32),b.ac()),2&e){const e=b.mc();b.Jb(1),b.sc("ngIf",e.f.ssn.errors.required)}}const W=function(e){return{"is-invalid":e}},D=[{path:"",component:(()=>{class e{constructor(e,r,t,i,s,c){this.datepipe=e,this.formBuilder=r,this.AuthPatient=t,this.snackBar=i,this.DemandeService=s,this.router=c,this.emailValid="",this.validSpinner=!1,this.resultAdd=!1,this.testName=!1,this.testLastName=!1,this.testEmail=!1,this.testPassword=!1,this.testAdresse=!1,this.testGender=!1,this.testBirthday=!1,this.testTelephone=!1,this.testSsn=!1,this.patient={name:"",lastname:"",email:"",birthday:this.datepipe.transform(new Date,"yyyy-MM-dd"),ssn:"",adresse:"",tel:"",password:"",added_date:"",gender:"",account_state:!1,archived:!1,photo:"",weight:0,size:0,mailConfirmation:!1,consontement:""},this.submitted=!1,this.title="email-validation-tutorial",this.userEmails=new n.h({primaryEmail:new n.f("",[n.y.required,n.y.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),secondaryEmail:new n.f("",[n.y.required,n.y.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])})}ngOnInit(){this.registerForm=this.formBuilder.group({firstName:["",n.y.required],lastName:["",n.y.required],email:["",[n.y.required,n.y.email,n.y.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],password:["",[n.y.required,n.y.minLength(6)]]}),this.registerFormPat=this.formBuilder.group({name:["",n.y.required],lastname:["",n.y.required],birthday:["",n.y.required],tel:["",n.y.required],adresse:["",n.y.required],ssn:["",n.y.required],gender:["",n.y.required],email:["",[n.y.required,n.y.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],this.checkInUseEmail],password:["",[n.y.required,this.checkPassword]],confirmPassword:["",[n.y.required,this.checkPassword]],acceptTerms:[!1,n.y.requiredTrue],consontement:[!1,n.y.requiredTrue],mailConfirmation:[!1,n.y.requiredTrue],weight:[!1,n.y.required],size:[!1,n.y.required]},{validator:Object(d.a)("password","confirmPassword")}),this.registerForm=this.formBuilder.group({title:["",n.y.required],firstName:["",n.y.required],lastName:["",n.y.required],email:["",[n.y.required,n.y.email]],password:["",[n.y.required,n.y.minLength(6)]],confirmPassword:["",n.y.required],acceptTerms:[!1,n.y.requiredTrue]},{validator:Object(d.a)("password","confirmPassword")})}checkPassword(e){let r=e.value;return!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(r)&&r?{requirements:!0}:null}checkInUseEmail(e){let r=["tony@gmail.com"];return new o.Observable(t=>{setTimeout(()=>{let i=-1!==r.indexOf(e.value)?{alreadyInUse:!0}:null;t.next(i),t.complete()},4e3)})}createPatien(){this.AuthPatient.registerPatient(this.patient).subscribe(e=>{this.dataAddInvit=e;let r={doctor:localStorage.getItem("id_Pro"),patient:this.dataAddInvit._id,email:this.dataAddInvit.email,dataPatient:this.patient};this.DemandeService.AddCreatePatient(r).subscribe(e=>{e&&this.router.navigate(["/professionnel/contact"])})})}validEmail(){this.validSpinner=!0,this.AuthPatient.emailIsExist({email:this.patient.email}).subscribe(e=>{this.result=e,"Invalid Email"===this.result.res?setTimeout(()=>{this.resultAdd=!0,this.validSpinner=!1;const e=a.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",a.a.stopTimer),e.addEventListener("mouseleave",a.a.resumeTimer)}});"fr"===localStorage.getItem("langauage")?e.fire({icon:"success",title:"Le compte a \xe9t\xe9 cr\xe9\xe9"}):e.fire({icon:"success",title:"Account has been created"}),this.createPatien()},5e3):setTimeout(()=>{this.resultAdd=!1,this.validSpinner=!1;const e=a.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",a.a.stopTimer),e.addEventListener("mouseleave",a.a.resumeTimer)}});"fr"===localStorage.getItem("langauage")?e.fire({icon:"error",title:"L'email existe d\xe9j\xe0"}):e.fire({icon:"error",title:"Email is exist "})},5e3)})}get f(){return this.registerForm.controls}onSubmit(){this.submitted=!0,this.registerForm.invalid||alert("SUCCESS!! :-)\n\n"+JSON.stringify(this.registerForm.value,null,4))}onReset(){this.submitted=!1,this.registerForm.reset()}}return e.\u0275fac=function(r){return new(r||e)(b.Vb(i.e),b.Vb(n.e),b.Vb(l.a),b.Vb(m.a),b.Vb(u.a),b.Vb(s.f))},e.\u0275cmp=b.Pb({type:e,selectors:[["app-add-patient"]],decls:97,vars:81,consts:[[1,"col-md-12",2,"margin-top","-16px"],[1,"card","pt-3"],[1,"card-body"],[1,"card","m-3"],[1,"card-header",2,"color","black"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col-5"],[2,"color","black"],["type","text","formControlName","name",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","lastname",1,"form-control",3,"ngClass"],[1,"form-group","col"],["formControlName","gender",1,"form-control",3,"ngClass"],["value",""],["value","Mr"],["value","Mrs"],["value","Miss"],["value","Ms"],[1,"form-group"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],["type","text","formControlName","adresse",1,"form-control",3,"ngClass"],["type","number","formControlName","weight",1,"form-control",3,"ngClass"],["type","number","formControlName","size",1,"form-control",3,"ngClass"],["type","date","formControlName","birthday",1,"form-control",3,"ngClass"],["type","number","formControlName","tel",1,"form-control",3,"ngClass"],["type","number","formControlName","ssn",1,"form-control",3,"ngClass"],[1,"text-center"],[1,"btn","btn-primary","mr-1"],["type","reset",1,"btn","btn-secondary",3,"click"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(e,r){1&e&&(b.bc(0,"div",0),b.bc(1,"div",1),b.bc(2,"div",2),b.Wb(3,"br"),b.Wb(4,"br"),b.Wb(5,"br"),b.Wb(6,"br"),b.bc(7,"div",3),b.bc(8,"h5",4),b.Pc(9),b.nc(10,"translate"),b.ac(),b.bc(11,"div",2),b.bc(12,"form",5),b.ic("ngSubmit",(function(){return r.onSubmit()})),b.bc(13,"div",6),b.bc(14,"div",7),b.bc(15,"label",8),b.Pc(16),b.nc(17,"translate"),b.ac(),b.Wb(18,"input",9),b.Nc(19,v,2,1,"div",10),b.ac(),b.bc(20,"div",7),b.bc(21,"label",8),b.Pc(22),b.nc(23,"translate"),b.ac(),b.Wb(24,"input",11),b.Nc(25,h,2,1,"div",10),b.ac(),b.bc(26,"div",12),b.bc(27,"label",8),b.Pc(28,"Title"),b.ac(),b.bc(29,"select",13),b.Wb(30,"option",14),b.bc(31,"option",15),b.Pc(32,"Mr"),b.ac(),b.bc(33,"option",16),b.Pc(34,"Mrs"),b.ac(),b.bc(35,"option",17),b.Pc(36,"Miss"),b.ac(),b.bc(37,"option",18),b.Pc(38,"Ms"),b.ac(),b.ac(),b.Nc(39,P,2,1,"div",10),b.ac(),b.ac(),b.bc(40,"div",19),b.bc(41,"label",8),b.Pc(42),b.nc(43,"translate"),b.ac(),b.Wb(44,"input",20),b.Nc(45,N,3,2,"div",10),b.ac(),b.bc(46,"div",6),b.bc(47,"div",12),b.bc(48,"label",8),b.Pc(49),b.nc(50,"translate"),b.ac(),b.Wb(51,"input",21),b.Nc(52,C,2,1,"div",10),b.ac(),b.bc(53,"div",12),b.bc(54,"label",8),b.Pc(55),b.nc(56,"translate"),b.ac(),b.Wb(57,"input",22),b.Nc(58,T,2,1,"div",10),b.ac(),b.ac(),b.bc(59,"div",6),b.bc(60,"div",12),b.bc(61,"label",8),b.Pc(62),b.nc(63,"translate"),b.ac(),b.Wb(64,"input",23),b.Nc(65,E,2,1,"div",10),b.ac(),b.bc(66,"div",12),b.bc(67,"label",8),b.Pc(68),b.nc(69,"translate"),b.ac(),b.Wb(70,"input",24),b.Nc(71,z,2,1,"div",10),b.ac(),b.ac(),b.bc(72,"div",6),b.bc(73,"div",7),b.bc(74,"label",8),b.Pc(75),b.nc(76,"translate"),b.ac(),b.Wb(77,"input",25),b.Nc(78,U,2,1,"div",10),b.ac(),b.bc(79,"div",7),b.bc(80,"label",8),b.Pc(81),b.nc(82,"translate"),b.ac(),b.Wb(83,"input",26),b.Nc(84,L,2,1,"div",10),b.ac(),b.bc(85,"div",12),b.bc(86,"label",8),b.Pc(87,"SSN"),b.ac(),b.Wb(88,"input",27),b.Nc(89,k,2,1,"div",10),b.ac(),b.ac(),b.bc(90,"div",28),b.bc(91,"button",29),b.Pc(92),b.nc(93,"translate"),b.ac(),b.bc(94,"button",30),b.ic("click",(function(){return r.onReset()})),b.Pc(95),b.nc(96,"translate"),b.ac(),b.ac(),b.ac(),b.ac(),b.ac(),b.ac(),b.ac(),b.ac()),2&e&&(b.Jb(9),b.Qc(b.oc(10,35,"LISTPATIENT.CC")),b.Jb(3),b.sc("formGroup",r.registerFormPat),b.Jb(4),b.Qc(b.oc(17,37,"AUTH.NOM")),b.Jb(2),b.sc("ngClass",b.wc(59,W,r.submitted&&r.f.name.errors)),b.Jb(1),b.sc("ngIf",r.submitted&&r.f.name.errors),b.Jb(3),b.Qc(b.oc(23,39,"AUTH.PRENOM")),b.Jb(2),b.sc("ngClass",b.wc(61,W,r.submitted&&r.f.lastname.errors)),b.Jb(1),b.sc("ngIf",r.submitted&&r.f.lastname.errors),b.Jb(4),b.sc("ngClass",b.wc(63,W,r.submitted&&r.f.gender.errors)),b.Jb(10),b.sc("ngIf",r.submitted&&r.f.gender.errors),b.Jb(3),b.Qc(b.oc(43,41,"AUTH.EMAIL")),b.Jb(2),b.sc("ngClass",b.wc(65,W,r.submitted&&r.f.email.errors)),b.Jb(1),b.sc("ngIf",r.submitted&&r.f.email.errors),b.Jb(4),b.Qc(b.oc(50,43,"AUTH.MOTDEPASS")),b.Jb(2),b.sc("ngClass",b.wc(67,W,r.submitted&&r.f.password.errors)),b.Jb(1),b.sc("ngIf",r.submitted&&r.f.password.errors),b.Jb(3),b.Qc(b.oc(56,45,"AUTH.ADDRESS")),b.Jb(2),b.sc("ngClass",b.wc(69,W,r.submitted&&r.f.adresse.errors)),b.Jb(1),b.sc("ngIf",r.submitted&&r.f.adresse.errors),b.Jb(4),b.Rc("",b.oc(63,47,"AUTH.POID")," "),b.Jb(2),b.sc("ngClass",b.wc(71,W,r.submitted&&r.f.weight.errors)),b.Jb(1),b.sc("ngIf",r.submitted&&r.f.weight.errors),b.Jb(3),b.Qc(b.oc(69,49,"AUTH.SIZE")),b.Jb(2),b.sc("ngClass",b.wc(73,W,r.submitted&&r.f.size.errors)),b.Jb(1),b.sc("ngIf",r.submitted&&r.f.size.errors),b.Jb(4),b.Qc(b.oc(76,51,"AUTH.DATEN")),b.Jb(2),b.sc("ngClass",b.wc(75,W,r.submitted&&r.f.birthday.errors)),b.Jb(1),b.sc("ngIf",r.submitted&&r.f.birthday.errors),b.Jb(3),b.Qc(b.oc(82,53,"AUTH.TELE")),b.Jb(2),b.sc("ngClass",b.wc(77,W,r.submitted&&r.f.tel.errors)),b.Jb(1),b.sc("ngIf",r.submitted&&r.f.tel.errors),b.Jb(4),b.sc("ngClass",b.wc(79,W,r.submitted&&r.f.ssn.errors)),b.Jb(1),b.sc("ngIf",r.submitted&&r.f.ssn.errors),b.Jb(3),b.Qc(b.oc(93,55,"AUTH.ENR")),b.Jb(3),b.Rc(" ",b.oc(96,57,"AUTH.CLEAR")," "))},directives:[n.A,n.q,n.i,n.c,n.p,n.g,i.k,i.m,n.x,n.t,n.z,n.u],pipes:[f.c],styles:[".error[_ngcontent-%COMP%]{border:1px solid #f04c4c;color:#f04c4c}.card-to-add[_ngcontent-%COMP%]{border:10px dashed #ddd;border-radius:7px;background-color:initial;transform:scale(1.02);cursor:pointer}.card-to-add[_ngcontent-%COMP%]:hover{transform:scale(1.05);cursor:pointer}i[_ngcontent-%COMP%]{color:#ddd}"]}),e})()}];let F=(()=>{class e{}return e.\u0275mod=b.Tb({type:e}),e.\u0275inj=b.Sb({factory:function(r){return new(r||e)},imports:[[s.i.forChild(D)],s.i]}),e})();var H=t("FKr1");t("8LU1"),t("nLfN"),t("R1ws");let _=(()=>{class e{}return e.\u0275mod=b.Tb({type:e}),e.\u0275inj=b.Sb({factory:function(r){return new(r||e)},imports:[[H.j,i.c],H.j]}),e})(),B=(()=>{class e{}return e.\u0275mod=b.Tb({type:e}),e.\u0275inj=b.Sb({factory:function(r){return new(r||e)},imports:[[i.c,F,n.j,f.b,n.v,_]]}),e})()}}]);