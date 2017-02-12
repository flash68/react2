React.createObject
var Rol ="";
var login ="";

/*логин и пароль*/
var UserForm = React.createClass({
	render: function() {
		return (
			<div className="userform"> 
			 </div>
		);
	}
});
/*регистрация*/
var UserLoginForm = React.createClass({
	handleClick: function(e) {
		var pass=ReactDOM.findDOMNode(this.refs.pass).value;
		var login=ReactDOM.findDOMNode(this.refs.login).value;
		var n="0";
			for(var i in this.props.UserFormAdmins){
				if(pass == this.props.UserFormAdmins[i].pass && login == this.props.UserFormAdmins[i].name)
				{	n="1";
				Rol = this.props.UserFormAdmins[i].Rol;
						ReactDOM.render(
								<LoginForm />,
							document.getElementById('mount')
									);
				}
			}
			if(n=="0"){
			this.props.UserFormAdmins.push({
								id: 2,
								name: login,
								pass: pass,
								Rol: 'newuser'
							});
						//	console.log(this.props.UserFormAdmins[this.props.UserFormAdmins.length-1].Rol);
							var newname=this.props.UserFormAdmins[this.props.UserFormAdmins.length-1].name;
							var newpass=this.props.UserFormAdmins[this.props.UserFormAdmins.length-1].pass;
							var newrol=this.props.UserFormAdmins[this.props.UserFormAdmins.length-1].Rol;
							
			ReactDOM.render(
							<LoginForm Rol={this.state.newrol}/>,
							document.getElementById('mount')
									);
								}
    },
							
	render: function() {
		return (
			<div className="userloginform"> 
        <label>
          Login:<br/>
          <input className="login" ref ="login" type="text" /><br/>	
           Password: <br/>
           <input className="pass" ref="pass" type="Password" /><br/>
        </label><br/>
        <input className="vhod" onClick={this.handleClick} type="submit" value="Войти" /> <br/>        

			 </div>
		);
	}
});
/*место отображения логина и пароля*/
var LoginForm = React.createClass({
	render: function() {
		return (
			<div className="loginform" id="loginform"> 
					{Rol}
			 </div>
		);
	}
});

/*все приложение*/
var Form = React.createClass({
		getInitialState: function(){
				return{
					UserFormAdmins: [{
								id: 0,
								name: 'ad',
								pass: 'min',
								Rol: 'user'
							}, {
								id: 1,
								name: 'admin',
								pass: 'admin',
								Rol: 'admin'		
							}]
				};

		},

		render: function() {
		return (
			<div className="forma">
			<UserLoginForm UserFormAdmins={this.state.UserFormAdmins}/>
			<LoginForm />
			</div>
		);
	}
});

ReactDOM.render(
	    <Form />,
    document.getElementById('mount')
);