

function Signup() {
  return (
    <form>
      <div style={{ minHeight: '100vh', backgroundColor: '#f7fafc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold',marginRight:"100px" }}>Login now!</h1>
          <p style={{ paddingTop: '24px', paddingBottom: '24px' }}>
          </p>
        </div>
        <div style={{ flexShrink: 0, width: '100%', maxWidth: '384px', boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff' }}>
          <div style={{ padding: '24px' }}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px' }}>
                <span>Email</span>
              </label>
              <input type="email" placeholder="email" style={{ width: '100%', padding: '8px', border: '1px solid #e5e7eb', borderRadius: '4px' }} required />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px' }}>
                <span>Password</span>
              </label>
              <input type="password" placeholder="password" style={{ width: '100%', padding: '8px', border: '1px solid #e5e7eb', borderRadius: '4px' }} required />
              <label style={{ display: 'block', marginTop: '8px' }}>
                <a href="#" style={{ color: '#3b82f6', textDecoration: 'underline', cursor: 'pointer' }}>Forgot password?</a>
              </label>
            </div>
            <div style={{ marginTop: '24px' }}>
              <button style={{ padding: '12px 24px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signup;
