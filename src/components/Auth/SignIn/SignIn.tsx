import { 
    Button,
    Checkbox,
    Input
  } from '@salesforce/design-system-react';
import './SignIn.css';

interface ChildProps {
    authModeChange: Function
}

export default function SignIn(props: ChildProps) {
    return (
        <div className="slds-modal__content user-profile-form-content" id="modal-content-id-3">
            <div className="slds-grid slds-wrap slds-grid_reverse"  style={{backgroundColor: '#36b24b'}}>
                <div className="slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-p-vertical_xx-large slds-p-horizontal_large user-profile-box-1 sessionNoExists">
                    <div className="slds-text-heading_small slds-text-align_center">
                        <p className="slds-text-heading_medium slds-p-bottom_small slds-text-color_inverse"><b>Hello Friend</b></p>
                        <p className="slds-p-horizontal_xx-large slds-text-color_inverse">Help us tailor your experience.</p>
                        <div className="slds-p-horizontal_large slds-p-top_small">
                            <Button label="CREATE ACCOUNT"  variant="base" inverse responsive onClick={props.authModeChange} />
                        </div>
                    </div>
                </div>
                <div className="slds-col slds-size_1-of-1 slds-p-vertical_medium slds-p-horizontal_medium user-profile-box-2 slds-medium-size_6-of-12" style={{backgroundColor: '#f2f2f2'}}>
                    <form name="loginform" id="loginform">
                        <div className="slds-text-body_small slds-text-align_center">
                            <div className="sessionNoExists">
                                <p className="slds-text-heading_medium"><b>Sign in</b></p>
                            </div>
                            
                            <div className="slds-m-around_small slds-p-horizontal_x-medium">
                                <div className="slds-form-element slds-text-align_left slds-m-bottom_x-small">
                                    <Input id="base-id" className="slds-p-top_small" label="Email" placeholder="Email..." required />
                                    {/* <div className="slds-form-element__help d-none">Enter a valid email</div> */}
                                </div>
                                
                                <div className="slds-form-element slds-text-align_left slds-m-bottom_x-small">
                                <Input id="base-id" className="slds-p-top_small" label="Password" placeholder="Password..." required />
                                    {/* <div className="slds-form-element__help d-none">Enter the password</div> */}
                                </div>
                            </div>

                            <div className="slds-m-horizontal_medium slds-clearfix">
                                <div className="slds-float_left slds-form-element">
                                    <Checkbox
                                        assistiveText={{
                                            label: 'Default',
                                        }}
                                        id="checkbox-example"
                                        labels={{
                                            label: 'Keep me signed in',
                                        }}
                                    />
                                </div>
                                <div className="slds-float_right">
                                    <p className="slds-text-body_small" style={{lineHeight: '22px'}}><a className="forgot-password" href="#">Forgot password?</a></p>
                                </div>
                            </div>
                            <div className="slds-m-around_small slds-p-horizontal_large">
                                <Button label="SIGN IN" className="slds-button slds-button_brand slds-text-body_small button-green caps slds-p-horizontal_xx-large loginButton" style={{backgroundColor: "#4BC076"}} />
                            </div>
                            <p className="slds-p-horizontal_large signin-process slds-text-body_small" style={{lineHeight: '22px'}}>
                                By continuing you agree to our{' '}
                                <a className="terms-of-services" target="_blank" href="/terms-of-services/">
                                    Terms of Services
                                </a> and {' '}
                                <a className="privacy-policy" target="_blank" href="/privacy-policy/">
                                    Privacy Policy
                                </a>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
