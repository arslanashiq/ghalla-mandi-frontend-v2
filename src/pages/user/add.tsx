import { CONFIG } from 'src/config-global';

import { AddView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Add Users - ${CONFIG.appName}`}</title>

      <AddView />
    </>
  );
}
