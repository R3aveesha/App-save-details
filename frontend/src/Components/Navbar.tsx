

function Navbar() {
  return (
    <div>
      <div style={{display:'flex',justifyContent: 'center',marginTop:'10vh'}}>
      <button style={{backgroundColor: 'black',color: 'white',padding: '10px 20px',fontSize: '16px',border: 'none',borderRadius: '4px',}}>choose file</button>
      </div>
      <div style={{display:'flex',justifyContent: 'center',marginTop:'10vh'}}>
      <button style={{backgroundColor: '#0D9B95',color: 'white',padding: '10px 20px',fontSize: '16px',border: 'none',borderRadius: '4px',}}>upload !</button>
      </div>
      
    </div>
  )
}

export default Navbar