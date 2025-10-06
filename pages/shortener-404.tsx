export default function Shortener404() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '72px', marginBottom: '20px', fontWeight: 'bold' }}>
        404
      </h1>
      <p style={{ fontSize: '24px', marginBottom: '10px' }}>
        Short link not found
      </p>
      <p style={{ fontSize: '16px', opacity: 0.8 }}>
        myli.in
      </p>
    </div>
  );
}