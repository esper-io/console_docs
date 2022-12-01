# How to Set Up OIDC in Okta?

This guide provides steps for setting up OpenID Connect (OIDC) for the Esper console using the Okta identity provider. 

**To access SSO, you will need the following:**
- Enterprise Administrator access to the Esper console 
- Administrative access to Okta

**In this article:**
- Do I Need OIDC SSO? 
- Creating an OIDC Integration in Okta 
- Setting Up OIDC in Esper 
- Granting Access to Users

### Do I Need OIDC SSO? 

Not all organizations will need OIDC SSO. Other methods, such as email and password, are available in Esper. 

### Creating an OIDC Integration in Okta 

**Step 1 Creating an Esper App in Okta**

Log in to an Okta account with administrative access. Go to the Applications tab, and select **‘Create App Integration’**. 

Choose “OIDC” and “Single-Page Application.” 

![The new app integration screen in Okta. OIDC and Single-Page Application are chosen](./images/oidcokta/create-oidc-app-in-okta.png)

Then press **Next**. 

On the next screen, name the integration and optionally upload a logo.  

For Grant type, choose “Implicit (hybrid).” 

![The OIDC with the name as Esper and the Grant type chosen as "Implicit"](./images/oidcokta/new-single-page-app-in-okta.png)


You might notice that the “Sign-in redirect URI” points to a localhost URI. We will update this in Step 2.

![The option to 'skip group assignment for now' is enabled.](./images/oidcokta/skip-group-assignments.png)

Leave the Controlled access as “Skip group assignment for now.” It may be updated later. Then press **Save.** 

On the next screen, copy the Client ID to a secure document. 

![The General OIDC tab in Okta. The Client ID is highlighted. The Grant type is enabled to "Implicit"](./images/oidcokta/general-OIDC-details.png)

### Setting Up OIDC in Esper 

**Step 2 Setting Up a Connection for OIDC** 

To add an OIDC SSO,  click on your profile section and select Single Sign-on (SSO). Then click on **+Add New Connection**. 

Choose OIDC, and name the connection. 

![The SSO setup screen in Esper. OIDC is chosen. The Connection Naem, the Issuer URL, and Client ID are filled out.](./images/oidcokta/add-new-sso-connection-oidc-in-esper.png)

Then, insert the “Client ID” from Step 1. 

Your [Okta Issuer URL](https://support.okta.com/help/s/article/What-is-theIssuerlocated-under-the-OpenID-Connect-ID-Token-app-settings-used-for?language=en_US#:~:text=By%20default%2C%20the%20Issuer%20is,auth.oktaice.com%20) will look something like this: 

```https://{yourOktaOrg}/.well-known/openid-configuration?client_id={ClientId)```

Press **Continue.** 

Copy the "Callback ID".

**Step 3 Adding OIDC Credentials** 

In Okta, go to the application and **Edit** the General Settings section. 

Input the Callback ID from Esper into the “Login” > “Sign-in redirect URI.” 

![The login setup screen in Okta. The Sign In Redirect URL is filled out.](./images/oidcokta/sign-in-redirect-in-okta.png)

Then press **Save**. 

Back in Esper, select the checkbox “I have copied the service provider information over to the SSO provider.” 

![The copy confirmation option is enabled in Esper](./images/oidcokta/copy-confirmation.png)

Then press **Confirm**. 

Once you’ve set up OIDC SSO, you’ll also need to add users to Esper and Okta. 

**Step 4 Granting Access to Users**

You’ll need to add users to both Esper and Okta so they can successfully log in. 

In Okta, under the app’s Assignments tab, select “Assign” > “Assign to People.” 

![The Assignments tab in Okta. The Assign button has been pressed and drop-down shows with the option to assign to people or groups.](./images/oidcokta/assignments-in-okta.png)

Locate the users you want to assign. and press **Assign** next to their names.  You will need to use the same email addresses in Okta as you do in Esper.

![In Okta, a user is being assigned to the app.](./images/oidcokta/user-being-assigned.png)

Once you’ve assigned the users, press **Done**. 

In Esper, you may invite users by clicking on the “Send SSO Invites.” This option becomes available once you’ve set up SSO. 

![In Esper, shows a button to Send SSO Invites. Another button says Switch to Only SSO](./images/oidcokta/authentication-sso-invites-and-switch.png)

If you’d like to “Switch to Only SSO,” be sure that at least one user has successfully logged in using SSO. 

::: warning
You may be locked out of the account if you select “Switch to Only SSO” without having a user who has logged in using SSO previously.
::: 

You may also invite users via User Management. 

## How to Accept the SSO Invite 

Invited users will receive an invitation in their inbox. Once they click on the invitation link, they should choose the SSO login method. Choosing another login method (such as password or Google) will not satisfy the SSO criteria. 

![Esper email invitation. Andi is waving.](./images/oidcokta/esper-email.png)
