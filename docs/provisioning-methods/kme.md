# How to Onboard a Device Using KME?

Samsung Knox Mobile Enrollment (KME) is an onboarding method offered by Samsung for its devices. Upon first boot or factory reset, KME forces Samsung devices to enroll into Esper. Follow the steps below to onboard a device using KME.

Step 1: Navigate and log in to the [Knox Mobile Enrollment (KME)](https://central.samsungknox.com/login-navigator) portal.

![](https://lh4.googleusercontent.com/1VoFYI3JmvioavBwlsSJHkoFMDGW0xG4-qH3SNdFWTimurlyGz91Yi30KsRkW8C1lcY5d5K7AtR1QdUUaOaFpOoz_dAzr4HGV48jTA0dSCJyif8v_MbVZc1pyr8dYCI-88EzgDA_)

Step 2: Select the Knox Mobile Enrollment Portal to launch the Console.

![](https://lh5.googleusercontent.com/j0PzUC_CRvdyQrlbR12UUHNN3mNXkDUxNL2hlLiIHV6DUOaWLAi27_-FwAygaTpin0vx466epmgLTSuuvdt7eCyYDkCrD35flf1joPzJJ71Z4FSUbAK49IyAn3dd6SEM7d_mFcJo)

You will be taken to the device page, where you can see all the devices added to your KME portal by the reseller.

![](https://lh4.googleusercontent.com/eaVFh7m84Lx-qb0GtbEQmx4AuDNZydST4XFDaNHG1lDIC0AaAnp43pCky2Hm04tB00G8-b_yR2ykF1Vy60k6c6sIrvyUJx4xEeNiJHCzsQOkNQBa9mS9XbdcVOmSl8vC33t2GTbm)

Note: If you don’t see a device here, please contact your reseller and get the devices added to the KME portal.

Step 3: Select Profile from the left menu. Click Create Profile.

![](https://lh4.googleusercontent.com/l3Vn0JPa1R173yTjUNNOJ06-Yz3T2R2QDoaUX1Dt6QfnwL6lI_oKBN80474SiliwOsF2x6gfVCsDk8sfgNbfXXLFpy7BnO_BuAEZllFfqAYY-8FisX_O3nmFbadDohq8kkyRlxQO)

Step 4: Select Android Enterprise.

![](https://lh4.googleusercontent.com/gZ5GM9whAU0VA61j7ixlJda3QJxdXw862xF860Pn2ZNtEpZlwc6gk9WMNJsz15nHSIWZP-wvijfUROyEoqbRxFMHpVNnEffIRVlbm7NFOygEaiR4ONtFUEVr4IFNtdNEfE28kCO3)

Step 5: Fill in the Profile details. Enter the Profile name and optional description.

![](https://lh5.googleusercontent.com/-g4NyyYW-uAiopaQTkR4kmzfyKe-l_duVJX4DM0m3cHtoGdljNW__Bkm-qaa5H2lmBH5C2HZjhsCOi8NZzA4A5ezUFh83ZYfVep-O8VCIBcgnMKfWiAmvyL2QSa54tbeFKoNxZXx)

Under the MDM Information, select ‘Force Device Owner enrollment.’ In the Pick our MDM drop-down, select the 'Other' option. To enter the MDM Agent APK link, you can enter the default Esper Agent link ([https://play.google.com/managed/downloadManagingApp?identifier=esper](https://play.google.com/managed/downloadManagingApp?identifier=esper)) from Google Play. If you are using a custom Esper Agent, please contact [Esper](https://support.esper.io/s/) for the URL for the APK. Click Continue when done.

Step 6: You will be taken to the Android enterprise profile settings screen.

![](https://lh3.googleusercontent.com/zpsWulvVTWN7bOU8p67RqFF22x8wiWILZy-F_yr8JiBvFIhSBqrayiApNblChcZmJ7K0ZvUMFBjt81m8b6UlF9EIRPPypv5I8Qr1P3m8Wo0CAOwj8rbIZKlTtbv0xG7e2VNkDXZd)

To enter the Custom JSON data, go to the Esper Console and navigate to the template.

![](https://lh6.googleusercontent.com/IMEuflokKBbenz6AzLejZdD71jPMAeFFgrJh-roTlA07WEvHrxflVUZsV_w8yPJUmUXFAQjD308LJvpkoeaEFdUOddscN3UCOQntAPauW2tnOczK9hAYt4NQNOy1vKREQZ-qyzFL)

Copy the contents of the Admin Extra Bundle from the downloaded Config file and paste it into the Custom JSON data. Under device settings> System applications, select ‘Leave all system app enabled.’ Enter the company name and click Create.

The created profile will be displayed on the profile screen.

![](https://lh4.googleusercontent.com/jreYVb_zHLhUt96VQsy93gWVKFpW8D_YnBz_7ZvxikEQI4O3a8_2kapfGaUr3q385xQyvP8gP0N-xk4GrKzUdSM2QU3QKVm9BAb53H6sHyp7i-PTNJYj0KyUHlV4j5ciHlf-PFWC)

If you click the profile name, you will be able to edit and save the created profile.

Step 7: Click on the ellipsis and choose Configure devices from the drop-down.

![](https://lh5.googleusercontent.com/XnvV5KPt4GVC4H5RioF2bLgOpIC3jEpzUNsUMsyaZ6FkCWlXTMAXAJrwoK5qx25qAWRX-CFS59jO7mgx52k2JlHN_XdQiLrUmCdzrvDDGWPymxhIaVf3Bfq7w9vun0HA3ONDoyT3)

Step 8: Select the profile you just created from the drop-down and click Save.

![](https://lh5.googleusercontent.com/lO0UDqUQAAeFIUTeRZIdZ7oGO_Bi8OMGvL8e9XMDhsNl7gRo3O7uVlYkH-_HYCpiCG4eB-UN_wAS2vj4_cbeVp8wLap1RqRPu14s3I98IU3GhVsyFZhWcuI2-Hse2yao8RTcOTUp)

The profile will be added to the device and displayed on the device screen.

![](https://lh4.googleusercontent.com/9al2LehrA5QSOokx2tGiVqQuLOXFxKpSErW4RQ6K5-gZMCY728TUfuj-2p2sqA1RZTEPUdRt79xxlHtN28vqsQiHPXdPs3_2OEHptZM5W1dzt3LamhPMw_ZVj86K-kgGK2MkcQiq)

When you factory reset the device, you will go through the Android standard setup process on the device. If you connect to the internet during this setup process the Knox profile will be found and it will automatically start the provisioning process after a few license/onboarding prompts.