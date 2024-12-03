import r2wc from '@r2wc/react-to-web-component';
import { Counter } from './components/Counter/Counter';
import { Header } from './components/Header/Header';

// Convert React components to Web Components
const CounterElement = r2wc(Counter, {
  props: {
    // Add props if needed
  }
});

const HeaderElement = r2wc(Header, {
  props: {
    title: 'string'
  }
});

// Register Web Components
customElements.define('wc-counter', CounterElement);
customElements.define('wc-header', HeaderElement);