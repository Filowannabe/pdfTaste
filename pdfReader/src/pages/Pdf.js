import React from 'react';

const LOCAL_USER = 'local.pdf'
function render() {
    return (
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <object data={require(`../docs/${LOCAL_USER}`)} type="application/pdf" width="100%" height="100%">
            </object>
        </div>
    );
}


export default render;
