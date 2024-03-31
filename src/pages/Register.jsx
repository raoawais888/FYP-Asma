import React from 'react'
import MasterLyout from '../MasterLyout'
import Banner from '../components/Shared/Banner'

const Register = () => {
  return (
   <MasterLyout>
<Banner title="Register" image="url(images/contact_background.jpg)" />

<div className="contact_form_section mb-5">
		<div className="container pb-5">
			<div className="row">
				<div className="col">

					{/* <!-- Contact Form --> */}
					<div className="contact_form_container">
						<div className="contact_title text-center">Register</div>
						<form action="#" id="contact_form" className="contact_form text-center">
							<input type="text" id="contact_form_name" className="contact_form_name input_field" placeholder="Name" required="required" data-error="Name is required." />


							<input type="text" id="contact_form_email" className="contact_form_email input_field" placeholder="E-mail" required="required" data-error="Email is required." />

							<input type="text" id="contact_form_name" className="contact_form_name input_field" placeholder="Company Name" required="required" data-error="Name is required." />


							<input type="text" id="contact_form_email" className="contact_form_email input_field" placeholder="Company E-mail" required="required" data-error="Email is required." />


							<input type="text" id="contact_form_name" className="contact_form_name input_field" placeholder="Country" required="required" data-error="Name is required." />


							<input type="password" id="contact_form_email" className="contact_form_email input_field" placeholder="Password" required="required" data-error="Email is required." />

							
							<button type="submit" id="form_submit_button" className="form_submit_button button trans_200">send message<span></span><span></span><span></span></button>
						</form>
					</div>

				</div>
			</div>
		</div>
	</div>

   </MasterLyout>
  )
}

export default Register