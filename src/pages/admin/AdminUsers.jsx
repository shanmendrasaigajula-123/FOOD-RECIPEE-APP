import DashNav from "../../components/DashNav";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../../context/ToastContext";

export default function AdminUsers() {
  const { users, deleteUser } = useAuth();
  const showToast = useToast();

  const handleDelete = (u) => {
    if (!window.confirm(`Remove the account of ${u.name} (${u.email})?`)) return;
    deleteUser(u.email);
    showToast("User removed.");
  };

  return (
    <>
      <DashNav admin />

      <section className="admin-recipes-page">
        <div className="admin-heading">
          <p>ADMIN MODULE</p>
          <h1>Registered Users</h1>
          <span>
            {users.length} {users.length === 1 ? "user" : "users"} signed up on this browser.
          </span>
        </div>

        <div className="admin-list-section">
          {users.length === 0 ? (
            <p className="admin-empty">No users have signed up yet.</p>
          ) : (
            users.map((u) => (
              <div className="admin-recipe-item" key={u.email}>
                <div className="admin-recipe-info">
                  <h3>{u.name}</h3>
                  <p>{u.email}</p>
                </div>
                <div className="admin-recipe-actions">
                  <button className="admin-delete-btn" onClick={() => handleDelete(u)}>
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <footer className="dashboard-footer">
        <p>© 2026 Foodie Recipe App | Admin Module</p>
      </footer>
    </>
  );
}
