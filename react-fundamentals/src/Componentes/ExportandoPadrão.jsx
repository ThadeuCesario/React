import React from 'react';

export const BoaTarde = props => `Testando componente: ${props.teste}`;

export const BoaNoite = props => `Testando componente: ${props.testeDois}`;

export default {BoaTarde, BoaNoite};

/**
 * Podemos exportar multiplos elementos como default e acessá-los utilizando a notação ponto
 * no arquivo principal.
 * Então exportamos como default as funções BoaTarde e BoaNoite
 * e acessamos como <Multi.BoaTarde /> e <Multi.BoaNoite /> dentro do index.js;
 */