import React from 'react';

import {Footer} from './styles';

export default function FooterComponent() {
  return (
    <Footer>
      <h3>
        Powered by{' '}
        <a
          href="https://about-corona.net/documentation"
          target="_blank"
          rel="noopener noreferrer">
          ABOUT-CORONA.NET
        </a>
      </h3>
    </Footer>
  );
}
