import { useState } from 'react';
import { 
  Combobox,
  Button,
  GlobalHeader, 
  SLDSGlobalHeader,
  IconSettings, 
  Popover,
  GlobalHeaderSearch, 
  GlobalHeaderProfile, 
  Modal,
  Checkbox,
  Input
} from '@salesforce/design-system-react';
import { signOut } from "@astro-auth/client";
import SignIn from '@components/Auth/SignIn/SignIn';
import SignUp from '@components/Auth/SignUp/SignUp';
import './Masthead.css';


const leadSourceOptions = [
	{ id: 1, label: 'Third Party Program', value: 'A0' },
	{ id: 2, label: 'Cold Call', value: 'B0' },
	{ id: 3, label: 'LinkedIn', value: 'C0' },
	{ id: 4, label: 'Direct Mail', value: 'D0' },
	{ id: 5, label: 'Other', value: 'E0' },
];

const opportunityTypeOptions = [
	{ id: 1, label: 'Add on Business', value: 'A0' },
	{ id: 2, label: 'Courtesy', value: 'B0' },
	{ id: 3, label: 'New Business', value: 'C0' },
	{ id: 4, label: 'Renewal', value: 'D0' },
	{ id: 5, label: 'Upgrade', value: 'E0' },
];

// Notifications content is currently the contents of a generic `Popover` with markup copied from https://www.lightningdesignsystem.com/components/global-header/#Notifications. This allows content to have tab stops and focus trapping. If you need a more specific/explicit `GlobalHeaderNotification` content, please create an issue.
const HeaderNotificationsCustomContent = (props: { items: any[] }) => (
  <ul id="header-notifications-custom-popover-content">
    {props.items.map(item => (
      <li
        className={`slds-global-header__notification ${item.unread ? 'slds-global-header__notification_unread' : ''}`}
        key={`notification-item-${item.id}`}>
        <div className="slds-media slds-has-flexi-truncate slds-p-around_x-small">
          <div className="slds-media__figure">
            <span className="slds-avatar slds-avatar_small">
              <img alt={item.name} src={`/assets/${item.avatar}.jpg`} title={`${item.name} avatar"`} />
            </span>
          </div>
          <div className="slds-media__body">
            <div className="slds-grid slds-grid_align-spread">
              <a href="#" className="slds-text-link_reset slds-has-flexi-truncate" onClick={event => event.preventDefault()}>
                <h3 className="slds-truncate" title={`${item.name} ${item.action}`}>
                  <strong>{`${item.name} ${item.action}`}</strong>
                </h3>
                <p className="slds-truncate" title={item.comment}>
                  {item.comment}
                </p>
                <p className="slds-m-top_x-small slds-text-color_weak">
                  {item.timePosted}{' '}
                  {item.unread ? (
                    <abbr className="slds-text-link slds-m-horizontal_xxx-small" title="unread">
                      ●
                    </abbr>
                  ) : null}
                </p>
              </a>
            </div>
          </div>
        </div>
      </li>
    ))}
  </ul>
);
HeaderNotificationsCustomContent.displayName = 'HeaderNotificationsCustomContent';

// Profile content is currently the contents of a generic `Popover` with markup copied from https://www.lightningdesignsystem.com/components/global-header/. This allows content to have tab stops and focus trapping. If you need a more specific/explicit `GlobalHeaderProfile` content, please create an issue.
const HeaderProfileCustomContent = (props: any) => (
  <div id="header-profile-custom-popover-content">
    <div className="slds-m-around_medium">
      <div className="slds-tile slds-tile_board slds-m-horizontal_small">
        <p className="tile__title slds-text-heading_small">User</p>
        <div className="slds-tile__detail">
          <p className="slds-truncate">
            <a className="slds-m-right_medium" href="#">
              Settings
            </a>
            <button
              onClick={() => {
                signOut("/");
              }}
            >
              Log Out
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
);
HeaderProfileCustomContent.displayName = 'HeaderProfileCustomContent';

export default function Header(props: any) {
  // const [favoritesActionSelected, changefavoritesActionSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  return (
    
    <IconSettings iconPath="assets/icons">
      <div style={{display: 'flex', alignItems: 'center'}}>
        <SLDSGlobalHeader
          logoSrc="assets/header-icon.ico"
          onSkipToContent={() => {
            console.log('>>> Skip to Content Clicked');
          }}
          onSkipToNav={() => {
            console.log('>>> Skip to Nav Clicked');
          }}>
          <GlobalHeaderSearch
            combobox={
              <Combobox
                assistiveText={{ label: 'Search' }}
                events={{
                  onSelect: () => {
                    console.log('>>> onSelect');
                  },
                }}
                id="header-search-custom-id"
                labels={{ placeholder: 'Search Salesforcee' }}
                options={[
                  { id: 'email', label: 'Email' },
                  { id: 'mobile', label: 'Mobile' },
                ]}
              />
            }
          />
          
        </SLDSGlobalHeader>
        {/* <div className='slds-m-right_x-large' style={{display: "flex"}}>
          <Button label="Add/Suggest" variant="brand" className='slds-m-right_small' responsive />
          <Button 
            label="Login"
            onClick={() => setIsOpen(true)}
          />
          <Modal
						isOpen={isOpen}
						onRequestClose={() => setIsOpen(false)}
					>
							{
                authMode === "signin" ? (
                  <SignIn authModeChange={changeAuthMode} />
                ) : (
                  <SignUp authModeChange={changeAuthMode} />
                )
              }
					</Modal>
        </div> */}
        <GlobalHeaderProfile
          popover={<Popover body={<HeaderProfileCustomContent />} id="header-profile-popover-id" />}
          userName="User"
        />
      </div>
    </IconSettings>
  );
}
Header.displayName = 'GlobalHeaderExample';
