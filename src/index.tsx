import { render } from 'solid-js/web';
import { router } from '~utils';

import '~style/index.scss';

import { Home } from '~page/Home';
import { MerchGallery } from '~page/MerchGallery';

const application = router({
  '*': <Home />,
  'merch-gallery': <MerchGallery />,
});

render(
  application,
  document.getElementById('root'),
);
