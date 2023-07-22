import React from 'react';

export default function Section({ titulo, cuerpo }) {
  return (
    <section>
      <h2>{titulo}</h2>
      {cuerpo}
    </section>
  );
}
