import React, { useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '123-456-7890',
    email: 'john.doe@example.com',
  });
  const [newPassword, setNewPassword] = useState('');
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated user info:', user);
    console.log('New Password:', newPassword);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">User Profile</h2>
              {editMode ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="form-control"
                      value={user.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="form-control"
                      value={user.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="form-control"
                      value={user.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={user.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">New Password</label>
                    <input
                      type="password"
                      id="newPassword"
                      className="form-control"
                      value={newPassword}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-success w-100">Save Changes</button>
                </form>
              ) : (
                <div>
                  <p><strong>First Name:</strong> {user.firstName}</p>
                  <p><strong>Last Name:</strong> {user.lastName}</p>
                  <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <button onClick={() => setEditMode(true)} className="btn btn-warning w-100 mt-3">Edit Profile</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
