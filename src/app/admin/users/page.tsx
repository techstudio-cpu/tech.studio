export default function ManageUsersPage() {
  return (
    <div className="container section">
      <h1 className="section-title">User Management</h1>
      <p className="section-intro">Manage user roles and permissions for your website.</p>

      <div className="admin-actions">
        <a href="/admin/users/new" className="btn btn-primary">Add New User</a>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Placeholder for user rows */}
          <tr>
            <td>admin</td>
            <td>admin@techstudio.com</td>
            <td>Administrator</td>
            <td>
              <a href="/admin/users/edit/1" className="btn btn-sm btn-secondary">Edit</a>
              <button className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
