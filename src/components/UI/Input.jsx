import React from 'react';
const Input = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

export default Input;
