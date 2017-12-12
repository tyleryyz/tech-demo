import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../../styles/bulma.css';

class SignUp extends Component {
	handleSignUp(e) {

    e.preventDefault();
    const email = e.target.elements.email.value;
		const password = e.target.elements.password.value;
		const lname = e.target.elements.lname.value;
		const fname = e.target.elements.fname.value;
		const permission = e.target.elements.permission.value;
		console.log(email);
		console.log(password);
		console.log(lname);
		console.log(fname);
		console.log(permission);

		fetch('/api/users', {
			method: 'POST',
			body: JSON.stringify({
				fname: fname,
				lname: lname,
				email: email,
				password: password,
				permission: permission

			})

		})
	       .then(function(response) {
	         return response.json()
	       }).then(function(body) {
	         console.log(body);
	       });


		<Link to="/Dashboard" />
	}
  render() {
    return (<form onSubmit={this.handleSignUp}>
      <div className="container">
        <div className="box">
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input className="input" name="fname" type="text" placeholder="First Name"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input className="input" name="lname" type="text" placeholder="Last Name"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" name="email" type="email" placeholder="Email input"/>
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" name="password" type="text" placeholder="Password"/>
            </div>
          </div>

          <div className="field">
					<div className="control">
						<label className="radio">
							<input type="radio" value="student" name="permission"/>
							Student
						</label>
						<label className="radio">
							<input type="radio" value="tutor" name="permission"/>
							Tutor
						</label>
						</div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button">Submit</button>
            </div>
						<div id="cancelButton">
            <div className="control">
              <Link to="/">Cancel</Link>
							</div>
            </div>
          </div>
        </div>
      </div>
    </form>);
  }
}

export default SignUp;
