import { useId, useMemo } from 'react';
import { BreadCrumb } from '@salesforce/design-system-react';
import { IconSettings } from '@salesforce/design-system-react';

import { BASE_SITE_URL, ICON_SETTINGS_PATH } from '@components/config';
import { capitalize } from '@utils/misc';

interface Props {
  location: URL;
}

const BreadCrumbs = (props: Props) => {
  const { location } = props;

  const id = useId();

  const trails: JSX.Element[] = useMemo(() => {
    const { protocol, host, pathname } = location;

    const pathnameWithoutBase = pathname.replace(RegExp(`/${BASE_SITE_URL}`), '');
    const pathnameSections = pathnameWithoutBase.split('/').slice(3).filter(Boolean);

    const trails = pathnameSections.map((section, idx) => {
      const pathname = `${idx === 0 ? '' : '/'}` + pathnameSections.slice(0, idx).join('/') + `/${section}`;
      const href = `${protocol}//${host}${BASE_SITE_URL ? BASE_SITE_URL : ''}/en${pathname}`;

      return (
        <a href={href} title={href}>
          {capitalize(section)}
        </a>
      );
    });

    if (trails.length <= 1) return [];
    return trails;
  }, []);

  return (
    <IconSettings iconPath={ICON_SETTINGS_PATH}>
      <BreadCrumb id={id} trail={trails} />
    </IconSettings>
  );
};

export default BreadCrumbs;
