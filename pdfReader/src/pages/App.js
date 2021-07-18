import React from 'react';

const iFrameStyle = {
    width: '90%',
    marginBottom: '15px',
    minWidth:'500px',
    height: '900px'
}
const btnStyle = {
    display: 'block',
    border: 'none',
    padding: '20px 30px',
    backgroundColor: '#da00f7',
    cursor: 'pointer',
    fontSize: '30px',
    color: 'white',
    margin: '0 150px',
    marginTop: '30%',
    textDecoration: 'none',
    borderRadius: '30px'
}
const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    textAlign: 'center',
    fontFamily: 'monospace'
}

const parragraphStyle = {
    fontSize: '18px'
}
function App() {
    return (
        <div style={containerStyle}>
            <div>
                <h2 >En caso no lo encuentre</h2>
                <p style={parragraphStyle}>Puedes ver nuestro catálogo y comunicarte con nosotros</p>
                <iframe src="./pdf" title="description" style={iFrameStyle}></iframe>
            </div>
            <div>
                <a style={btnStyle} href="./pdf" target="_blank">Ver catálogo</a>
            </div>
        </div>
    );
}
export default App;