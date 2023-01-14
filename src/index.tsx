import { lazy } from 'solid-js';
import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';

import '~style/index.scss';

const Home = lazy(() => import('~page/Home'));
const Merch = lazy(() => import('~page/Merch'));

const root = document.getElementById('root');

render(() => (
  <Router>
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/merch" component={Merch} />
    </Routes>
  </Router>
), root);
