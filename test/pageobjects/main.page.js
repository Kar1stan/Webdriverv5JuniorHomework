const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class GithubAutoTest extends Page {
    get GithubProduct(){
        return $('nav').$('summary*=Product')
    }
    get GithubTeam(){
        return $('nav').$('=Team')
    }
    get GithubEnterprise(){
        return $('nav').$('=Enterprise')
    }
    get GithubExplore(){
        return $('nav').$('summary*=Explore')
    }
    get GithubMarketplace(){
        return $('nav').$('=Marketplace')
    }
    get GithubPricing(){
        return $('nav').$('summary*=Pricing')
    }
    get GithubEmail(){
        return $("#email")
    }
    get GithubButton(){
        return $('button*=Sign up for GitHub')
    }
    get GithubButtonContinue1(){
        return $("#email-container").$('button*=Continue')
    }
    get GithubButtonContinue2(){
        return $("#password-container").$('button*=Continue')
    }
    get GithubButtonContinue3(){
        return $("#username-container").$('button*=Continue')
    }
    get GithubButtonContinue4(){
        return $("#opt-in-container").$('button*=Continue')
    }
    get GithubPassword(){
        return $("#password")
    }
    get GithubLogin(){
        return $("#login")
    }
    get GithubYesorNo(){
        return $("#opt_in")
    }
    get GithubButtonSingIn(){
        return $("a*=Sign in")
    }
    get GithubSignInputLogin(){
        return $("#login_field")
    }
    get GithubSignInputPassword(){
        return $("#password")
    }
    get GithubSignInputSubmit(){
        return $('input[type="submit"]')
    }
    get GithubUpdateYourEmail(){
        return $("a*=update your email address")
    }
    get GithubForgotPassword(){
        return $("a*=Forgot password")
    }
    get GithubJoinfree(){
       return $("a*=Join for free")
    }
    get GithubFreeLogin(){
        return $("#user_login")
    }
    get GithubFreeEmail(){
        return $("#user_email")
    }
    get GithubFreePassword(){
        return $("#user_password")
    }
    get GithubFreeCheckbox(){
        return $("#all_emails")
    }
    get GithubFreeExplore(){
        return $("summary*=Explore")
    }
    get GithubExploreTopics(){
        return $("a*=Topics")
    }
    get GithubTopicsTitle(){
        return $("h1*=Topics")
    }
    get GithubExploreSearch(){
        return $('[name="q"]')
    }
    get GithubTypescript(){
        return $('a*=TypeScript')
    }
    get GithubWedriverio(){
        return  $('a*=webdriverio/') 
    }
    get GithubButtonEnterprise(){
        return  $('a*=Start a free trial') 
    }
    get GithubEnterpriseCloud(){
        return  $('h2*=Enterprise Cloud') 
    }
    get GithubEnterpriseServer(){
        return  $('h2*=Enterprise Server') 
    }
    get GithubEnterpriseServerName(){
        return  $('#contact_request_name') 
    }
    get GithubEnterpriseServerCompany(){
        return  $('#contact_request_organization_name') 
    }
    get GithubEnterpriseServerWorkemail(){
        return  $('#contact_request_email') 
    }
    get GithubEnterpriseServerPhone(){
        return  $('#contact_request_phone') 
    }
    get GithubEnterpriseServerAsure(){
        return  $('#contact_request_instance_type_azure') 
    }
    get GithubEnterpriseServerYes(){
        return  $('#questions_yes') 
    }
    get GithubEnterpriseServerTextarea(){
        return  $('[name="contact_request[comments]"]') 
    }
    get GithubEnterpriseServerAcceptTerms(){
        return  $('#contact_request_agreed_to_terms')
    }
    get GithubFooterCareers(){
        return  $('footer').$('a*=Careers')
    }
    get GithubCareersOpenpositions(){
        return  $('a*=Open positions')
    }
    get GithubPositionsBusiness(){
        return  $('#business-systems')
    }
    get GithubPositionsDesign(){
        return  $('#design')
    }
    get GithubPositionsEngineering(){
        return  $('#engineering')
    }
    get GithubPositionsFinance(){
        return  $('#finance')
    }
    get GithubPositionsHumanResources(){
        return  $('#human-resources')
    }
    get GithubPositionsLegal(){
        return  $('#legal')
    }
    get GithubPositionsOperations(){
        return  $('#operations')
    }
    get GithubPositionsProduct(){
        return  $('#product')
    }
    get GithubPositionsSales(){
        return  $('#sales')
    }
    get GithubPositionsSecurity(){
        return  $('#security')
    }
    get GithubPositionsSupport(){
        return  $('#support')
    }
    async setHeaderCheck(){
        await this.GithubProduct.moveTo();
        await this.GithubProduct.isDisplayed();
        await this.GithubTeam.moveTo();
        await this.GithubTeam.isDisplayed();
        await this.GithubEnterprise.moveTo();
        await this.GithubEnterprise.isDisplayed();
        await this.GithubExplore.moveTo();
        await this.GithubExplore.isDisplayed();
        await this.GithubMarketplace.moveTo();
        await this.GithubMarketplace.isDisplayed();
        await this.GithubPricing.moveTo();
        await this.GithubPricing.isDisplayed();
    }
    async setUserHeader(email,password,login,answer){
        await this.GithubButton.click();
        await browser.waitUntil(()=>{
            return this.GithubEmail.isDisplayed(true);
            },5000,'email is not displayed'
        );
        await this.GithubEmail.addValue(email);
        await browser.waitUntil(()=>{
            return this.GithubButtonContinue1.isClickable(true);
            },5000,'button is not displayed'
        );
        await this.GithubButtonContinue1.click();
        await browser.waitUntil(()=>{
            return this.GithubPassword.isDisplayed(true);
            },5000,'password is not displayed'
        );
        await this.GithubPassword.addValue(password);
        await browser.waitUntil(()=>{
            return this.GithubButtonContinue2.isClickable(true);
            },5000,'button is not displayed'
        );
        await this.GithubButtonContinue2.click();
        await browser.waitUntil(()=>{
            return this.GithubLogin.isDisplayed(true);
            },5000,'login is not displayed'
        );
        await this.GithubLogin.addValue(login);
        await browser.waitUntil(()=>{
            return this.GithubButtonContinue3.isClickable(true);
            },5000,'button is not displayed'
        );
        await this.GithubButtonContinue3.click();
        await browser.waitUntil(()=>{
            return this.GithubYesorNo.isDisplayed(true);
            },5000,'answer is not displayed'
        );
        await this.GithubYesorNo.addValue(answer);
        await browser.waitUntil(()=>{
            return this.GithubButtonContinue4.isClickable(true);
            },5000,'button is not displayed'
        );
        await this.GithubButtonContinue4.click();
    }
    async setUserIn(password,login){
        await this.GithubButtonSingIn.click();
        await this.GithubForgotPassword.click();
        await browser.newWindow("https://github.com/login");
        await browser.switchWindow("https://github.com/login");
        await this.GithubSignInputLogin.addValue(login);
        await this.GithubSignInputPassword.addValue(password);
        await expect(this.GithubSignInputLogin).toHaveValue('KirborisConchaM8');
        await expect(this.GithubSignInputPassword).toHaveValue('FadXCZ1450');
        await this.GithubSignInputSubmit.click();
        await browser.waitUntil(()=>{
            return this.GithubUpdateYourEmail.isClickable(true);
            },5000,'update is not exist anymore'
        );
        await this.GithubUpdateYourEmail.click();
        await browser.pause(5000);
    }
    async PricingPlans(login,email,password,driver){
        await this.GithubPricing.click();
        await browser.newWindow("https://github.com/pricing");
        await browser.switchWindow("https://github.com/pricing");
        await this.GithubJoinfree.click();
        await this.GithubFreeLogin.addValue(login);
        await this.GithubFreeEmail.addValue(email);
        await this.GithubFreePassword.addValue(password);
        await expect(this.GithubFreeCheckbox).not.toBeChecked()
        await this.GithubFreeCheckbox.click();
        await expect(this.GithubFreeLogin).toHaveValue('KirborisConchaM8-boop');
        await expect(this.GithubFreeEmail).toHaveValue('axelopatrei34@gmail.com');
        await expect(this.GithubFreePassword).toHaveValue('FadXCZ14501x');
        await browser.newWindow("https://github.com/pricing");
        await browser.switchWindow("https://github.com/pricing");
        await this.GithubFreeExplore.click();
        await browser.newWindow("https://github.com/explore");
        await browser.switchWindow("https://github.com/explore");
        await this.GithubTopicsTitle.isDisplayed();
        await this.GithubExploreSearch.addValue(driver);
        await browser.keys("Enter");
        await this.GithubTypescript.click();
        await this.GithubWedriverio.click();
        await expect(browser).toHaveUrl('https://github.com/webdriverio/webdriverio')
    }
    async FreeEnterprise(login,email,password,phone){
        await this.GithubButtonEnterprise.scrollIntoView();
        await this.GithubButtonEnterprise.click();
        await this.GithubEnterpriseCloud.click();
        await this.GithubFreeLogin.addValue(login);
        await this.GithubFreeEmail.addValue(email);
        await this.GithubFreePassword.addValue(password);
        await expect(this.GithubFreeCheckbox).not.toBeChecked()
        await this.GithubFreeCheckbox.click();
        await expect(this.GithubFreeLogin).toHaveValue('KirborisConchaM8-boop');
        await expect(this.GithubFreeEmail).toHaveValue('axelopatrei34@gmail.com');
        await expect(this.GithubFreePassword).toHaveValue('FadXCZ14501x');
        await browser.newWindow("https://github.com/organizations/enterprise_plan?ref_cta=Start%2520a%2520free%2520trial&ref_loc=billboard&ref_page=%2F");
        await browser.switchWindow("https://github.com/organizations/enterprise_plan?ref_cta=Start%2520a%2520free%2520trial&ref_loc=billboard&ref_page=%2F");
        await this.GithubEnterpriseServer.click();
        await this.GithubEnterpriseServerName.addValue(login);
        await this.GithubEnterpriseServerCompany.addValue(password);
        await this.GithubEnterpriseServerWorkemail.addValue(email);
        await this.GithubEnterpriseServerPhone.addValue(phone);
        await this.GithubEnterpriseServerAsure.click();
        await this.GithubEnterpriseServerYes.click();
        await this.GithubEnterpriseServerTextarea.setValue("What about Github request for the WebdriverIO?")
        await this.GithubEnterpriseServerAcceptTerms.click();
    }
    async GithubCareers(){
        await this.GithubFooterCareers.click();
        await this.GithubCareersOpenpositions.click();
        console.log( await this.GithubPositionsBusiness.getText());
        console.log( await this.GithubPositionsDesign.getText());
        console.log( await this.GithubPositionsEngineering.getText());
        console.log( await this.GithubPositionsFinance.getText());
        console.log( await this.GithubPositionsHumanResources.getText());
        console.log( await this.GithubPositionsLegal.getText());
        console.log( await this.GithubPositionsSales.getText());
        console.log( await this.GithubPositionsSecurity.getText());
        console.log( await this.GithubPositionsSupport.getText());
    }
}
module.exports = new GithubAutoTest();