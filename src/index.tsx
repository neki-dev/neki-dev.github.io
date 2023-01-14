import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';

import '~style/index.scss';

import { Home } from '~page/Home';
import { Merch } from '~page/Merch';

const root = document.getElementById('root');

render(() => (
  <Router>
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/merch" component={Merch} />
    </Routes>
  </Router>
), root);
