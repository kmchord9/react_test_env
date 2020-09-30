import React from 'react';

const LinkButton = ({url, label}) => {
<button onClick={`location.href=${url}`}>{label}</button>
}

export default LinkButton;