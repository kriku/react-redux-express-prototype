import React from 'react';

export const required = value => (value ? undefined : 'Required');

export const Preprops = (p) => <pre> { JSON.stringify(p, null, 2) }</pre>
