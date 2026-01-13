
export default function AdminPage() {
  return (
    <div className="container section">
      <h1 className="section-title">Admin Panel</h1>
      <p className="section-intro">Manage your website's content, users, and settings from one place.</p>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">📝</div>
          <h3>Manage Services</h3>
          <p>Edit, add, or remove services offered on your website.</p>
          <a href="/admin/services" className="btn btn-secondary">Go to Services</a>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🖼️</div>
          <h3>Manage Templates</h3>
          <p>Update the list of available website templates in the Web Ocean.</p>
          <a href="/admin/templates" className="btn btn-secondary">Go to Templates</a>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h3>View Quotes</h3>
          <p>See and manage quote requests submitted by potential clients.</p>
          <a href="/admin/quotes" className="btn btn-secondary">Go to Quotes</a>
        </div>
        <div className="feature-card">
          <div className="feature-icon">👥</div>
          <h3>User Management</h3>
          <p>Manage user accounts, roles, and permissions.</p>
          <a href="/admin/users" className="btn btn-secondary">Go to Users</a>
        </div>
      </div>
    </div>
  );
}
