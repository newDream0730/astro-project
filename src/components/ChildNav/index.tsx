import { ICON_SETTINGS_PATH } from '@components/config';
import { IconSettings } from '@salesforce/design-system-react';

import type { IChildNavItem } from '@components/types';

interface Props {
  navItems: IChildNavItem[];
}

export default function ChildNav(props: Props) {
  const { navItems } = props;

  return (
    <IconSettings iconPath={ICON_SETTINGS_PATH}>
      <div className="slds-grid slds-wrap">
        {navItems.map(item => (
          <div className=" slds-col slds-size_4-of-12" key={item.id} style={{ marginTop: '2rem' }}>
            <div className="slds-card">
              <a href={item.link} className="slds-text-link_reset">
                <div className="slds-p-around_medium">
                  <span className="slds-text-link">{item.label}</span>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </IconSettings>
  );
}
