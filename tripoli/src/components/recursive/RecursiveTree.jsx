import React from 'react';

export default function RecursiveTree({ label, depth }) {
  if (depth <= 0) {
    return null;
  }

  return (
    <div>
      <div>{label}</div>
      <RecursiveTree label={`${label}-left`} depth={depth - 1} />
      <RecursiveTree label={`${label}-right`} depth={depth - 1} />
    </div>
  );
}