import React from 'react';

function App({isCircle}) {
  let style = {width: '200px', height: '200px'}
  if (isCircle) {
    style = {width: '200px', height: '200px', borderRadius: '50%'}
  }

  return (
    <div style={style}></div>
  );
}

export default App;
