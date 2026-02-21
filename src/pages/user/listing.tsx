import { CONFIG } from 'src/config-global';

import { ListingView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Users - ${CONFIG.appName}`}</title>

      <ListingView />
    </>
  );
}
