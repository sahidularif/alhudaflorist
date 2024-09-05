import * as React from 'react';

export const VerifyAccountEmailTemplate = ({ to, jwt }) => {
  
    return (
        <div>
            <h4>Verify account mail for <b>{to}</b></h4>
            <p>
                To verify your account, click on this link and follow the instructions:
            </p>
            <a href={`${process.env.NEXTAUTH_URL}/auth/activation/${jwt}`}>
                Click here to verify account
            </a>
        </div>
    )
};
