import { useState } from 'react';
import { 
    Button,
    Checkbox,
    Input,
    ProgressIndicator
  } from '@salesforce/design-system-react';
import './SignUp.css';

interface ChildProps {
    authModeChange: Function
}

const initialSteps = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
];

const EmailRegister = () => {
    return 
}

export default function SignUp(props: ChildProps) {

    const [steps, setSteps] = useState(initialSteps);
    const [completedSteps, setCompletedSteps] = useState([]);

    return (
        <div className="slds-modal__content user-profile-form-content" id="modal-content-id-3">
            <div className="slds-grid slds-wrap"  style={{backgroundColor: '#36b24b'}}>
                <div className="slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-p-vertical_xx-large slds-p-horizontal_large user-profile-box-1">
                    <div className="slds-text-heading_small slds-text-align_center">
                        <p className="slds-text-heading_medium slds-p-bottom_small slds-text-color_inverse">Already have an account?</p>
                        <div className="slds-p-horizontal_large slds-p-top_small">
                            <Button label="SING IN"  variant="base" inverse responsive onClick={props.authModeChange} />
                        </div>
                    </div>
                </div>
                <div className="slds-col slds-size_1-of-1 slds-p-vertical_medium slds-p-horizontal_medium user-profile-box-2 slds-medium-size_6-of-12" style={{backgroundColor: '#f2f2f2'}}>
                    <form name="loginform" id="loginform">
                        <div className="slds-text-body_small slds-text-align_center">
                            <div className="sessionNoExists">
                                <p className="slds-text-heading_medium"><b>Create an account</b></p>
                            </div>
                            <ProgressIndicator
                                id="progress-indicator"
                                completedSteps={completedSteps}
                                steps={steps}
                                className="slds-m-top_x-large"
                                // tooltipIsOpenSteps={stepsBasic.slice(0, 2)}
                            />
                            <div className="slds-m-around_small slds-p-horizontal_x-medium">
                                <div className="slds-form-element slds-text-align_left slds-m-bottom_x-small">
                                    <Input id="base-id" className="slds-p-top_small" label="Email" placeholder="Email..." required />
                                    {/* <div className="slds-form-element__help d-none">Enter a valid email</div> */}
                                </div>
                            </div>
                            <div className="slds-m-around_small slds-p-horizontal_large">
                                <Button label="CONTINUE" className="slds-button slds-button_brand slds-text-body_small slds-m-top_x-medium button-green caps slds-p-horizontal_xx-large loginButton" style={{backgroundColor: "#4BC076"}} />
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