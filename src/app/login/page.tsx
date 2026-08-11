export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const params = await searchParams; const error = params.error === "1";
  return (<html><body style={{margin:0,fontFamily:"Arial,sans-serif",background:"#f9fafb",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh"}}>
    <div style={{background:"#fff",padding:"40px",borderRadius:"12px",boxShadow:"0 1px 3px rgba(0,0,0,.1)",width:"100%",maxWidth:"380px"}}>
      <h1 style={{margin:"0 0 4px",fontSize:"20px",fontWeight:700,color:"#111827"}}>HappyCo Tracker</h1>
      <p style={{margin:"0 0 24px",fontSize:"14px",color:"#6b7280"}}>Enter the access password to continue.</p>
      {error && <p style={{margin:"0 0 16px",color:"#dc2626",fontSize:"13px"}}>Incorrect password. Try again.</p>}
      <form method="POST" action="/api/auth">
        <input name="password" type="password" placeholder="Password" autoFocus style={{width:"100%",padding:"10px 12px",border:"1px solid #d1d5db",borderRadius:"6px",fontSize:"14px",boxSizing:"border-box" as const,marginBottom:"12px",display:"block"}} />
        <button type="submit" style={{width:"100%",padding:"10px",background:"#22c55e",color:"#fff",border:"none",borderRadius:"6px",fontSize:"14px",fontWeight:600,cursor:"pointer"}}>Access Tracker</button>
      </form></div></body></html>);
}
