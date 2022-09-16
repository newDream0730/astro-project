import type { INavbarLink } from '@components/types';

import { GlobalNavigationBar, GlobalNavigationBarRegion, GlobalNavigationBarLink } from '@salesforce/design-system-react';
import { IconSettings } from '@salesforce/design-system-react';
import { useState, useEffect } from 'react';
import { ICON_SETTINGS_PATH } from '@components/config';

interface Props {
  navLinks: INavbarLink[];
}

const Navbar = (props: Props) => {
  const [pathname, setPathname] = useState('');

  const { navLinks } = props;

  const isActive = (itemHref: string): boolean => pathname.includes(itemHref);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <IconSettings iconPath={ICON_SETTINGS_PATH}>
      <GlobalNavigationBar>
        <GlobalNavigationBarRegion region="primary">
          {navLinks.map(item => (
            <GlobalNavigationBarLink key={item.linkLabel} href={item.href} label={item.linkLabel} active={isActive(item.href)} />
          ))}
        </GlobalNavigationBarRegion>
      </GlobalNavigationBar>
    </IconSettings>
  );
};

export default Navbar;
