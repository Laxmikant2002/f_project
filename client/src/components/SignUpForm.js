import React from 'react';

const SignUpForm = () => {
  return (
    <form>
      <div>
        <label>Full Name:</label>
        <input type="text" name="fullName" required />
      </div>
      <div>
        <label>Aadhaar Number:</label>
        <input type="text" name="aadhaarNumber" required />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" name="location" required />
      </div>
      <div>
        <label>Mobile Number:</label>
        <input type="text" name="mobileNumber" required />
      </div>
      <div>
        <label>Email Address:</label>
        <input type="email" name="email" required />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input type="date" name="dob" required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" required />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" required />
      </div>
      <div>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};

export default SignUpForm;