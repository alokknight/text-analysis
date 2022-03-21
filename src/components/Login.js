import React from 'react'

export default function Login() {
    return (
<div>
<div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				{/* <img style= "align:center"; src="{{request.scheme}}://{{request.META.HTTP_HOST}}/static/img/smartservelogo.jpg" alt="smartserve"width="50" height="50"></img> */}
				{/* <b><font size="6"face="verdana"color="green" style="text-align:center;">Event</font>
					<font size="6"face="verdana"color="white">Management</font>
					<font size="6"face="verdana"color="blue">System</font>
                </b> */}
                Event ManageMent
			</div>

			<div className="card-body">
				<form method="post" action="">

					<div className="input-group form-group">
						<input type="email"
                        className="form-control"
                        placeholder = "Username@gmail.com"
                        name="username"/>
					</div>

					<div className="input-group form-group">
						<input type="password"
                        className="form-control"
                        placeholder="password"
                        name='password'/>
					</div>

					<div className="form-group">
						<input type="submit"
                        className="btn float-right login_btn"
                        name="validate"
                        value="login"
                        onclick=""/>
					</div>
				</form>
			</div>

			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					<a href="/signup">Sign Up</a>
				</div>


				<div className="d-flex justify-content-center">
					<a href="{{request.scheme}}://{{request.META.HTTP_HOST}}/forget_password/">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
  )
}
