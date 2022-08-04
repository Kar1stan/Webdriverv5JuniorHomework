const assert = require('assert')
const GithubAutoTest = require('../pageobjects/main.page')
describe('webdriver.io page', () => {
    /*
    it('should have the right title',() => {
        browser.url('https://v5.webdriver.io/');
        const title = browser.getTitle();
        assert.strictEqual(title,'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
    it('should demonstrate the addValue command',() => {
        browser.url('https://v5.webdriver.io/');
        let input=$('#search_input_react');
        input.addValue('test');
        browser.pause(4000);
        input.addValue('123');
        browser.pause(2000);
        value=input.getValue();
        assert(value==='test123');
    })
    it('should demonstrate the setValue command',() => {
        browser.url('https://v5.webdriver.io/');
        const elem=$('#search_input_react');
        elem.setValue('test123');
        browser.pause(2000);
    })
    it('should demonstrate the getAttribute command',() => {
        browser.url('https://v5.webdriver.io/');
        const input=$('#search_input_react');
        let attr=input.getAttribute('title');
        console.log("Title attribute is:"+ attr);

        input.setValue('test123');
        attr=input.getAttribute('value');
        console.log("Value attribute is:"+ attr);
    })
    
    it('should demonstrate the getLocation function',() => {
        browser.url('https://v5.webdriver.io/');
        const logo=$('#search_input_react');
        const location =logo.getLocation();
        console.log(location);

        const xlocation =logo.getLocation('x');
        console.log("XLocation:"+xlocation);
        
    })
    it('should demonstrate the getText function',() => {
       browser.url('https://v5.webdriver.io/');
       const blogButton=$('[href="/blog/"]');
       console.log("Text for element:"+blogButton.getText());
   })
   ----Homework #9----
   it('should add the text into the Search',() => {
    browser.url('https://v5.webdriver.io/docs/api.html');
    let input=$('#search_input_react');
        input.addValue('test is DONE!');
        browser.pause(5000);
        console.log("Value was added");
    })
   it('should have the API Docs',async () => {
    await browser.url('https://v5.webdriver.io/docs/api.html');
    const title = await browser.getTitle();
    assert.strictEqual(title,'APIDocs·WebdriverIO');
    const JSONWireProtocol=$('[href="https://www.selenium.dev/documentation/legacy/json_wire_protocol/"]');
    console.log("Needing content is:"+ JSONWireProtocol.getText());
    })
    ------------------
   it('it should detect if an element is clickable',() => {
    browser.url('https://v5.webdriver.io/');
    const blogButton=$('[href="/blog/"]');
    let clickable=blogButton.isClickable();
    console.log("is clickable?:"+clickable);
   })
   it('it should detect if an element is displayed',() => {
    browser.url('https://v5.webdriver.io/');
    const blogButton=$('[href="/blog/"]');
    let isDisplayed=blogButton.isDisplayed();
    console.log("is Displayed?:"+isDisplayed);
   })
   it('it should detect if an element is visible',() => {
    browser.url('https://v5.webdriver.io/');
    let isBlogDisplayedInViewport=$('[href="/blog/"]').isDisplayedInViewport();
    let isGithubDisplayedInViewport=$('#footer[href="https://github.com"]').isDisplayedInViewport();
    console.log("isBlogDisplayedInViewport:"+isBlogDisplayedInViewport);
    console.log("isGithubDisplayedInViewport:"+isGithubDisplayedInViewport);
   })
   it('it should detect if an element is enabled',() => {
    browser.url('https://v5.webdriver.io/');
    const blogButton=$('[href="/blog/"]');
    let isEnabled=blogButton.isEnabled();
    console.log("is Enabled?:"+isEnabled);
   })
   it('it should detect the focus of an element',() => {
    browser.url('https://v5.webdriver.io/');
    const input=$('#search_input_react');
    console.log("search.isFocused() before click:"+input.isFocused());
    input.click();
    console.log("search.isFocused() after click:"+input.isFocused());
   })
   it('should move to element',() => {
    browser.url('https://v5.webdriver.io/');
    const GithubLink=$('#footer[href="https://github.com"]');
    GithubLink.scrollIntoView();
   })
   it('should save a screenshot of the browser view',() => {
    browser.url('https://v5.webdriver.io/');
    const elem=$('#footer[href="https://github.com"]');
    elem.saveScreenshot('elemScreenshot.png');
   })
   it('should switch to another view',() => {
    browser.url('https://google.com');
    browser.newWindow("https://v5.webdriver.io/");
    browser.switchWindow("google.com");
   })
   it('should wait until',() => {
    browser.url("https://v5.webdriver.io/");
    browser.waitUntil(()=>{
        return $('[href="/blog/"]').isDisplayed();
        },5000,'blog is not displayed'
    );
   })
   it('should get html for certain elements',() => {
    browser.url("https://v5.webdriver.io/docs/api.html");
    var outerHTML=$('.siteNavGroupActive').getHTML();
    console.log("outerHTML:"+outerHTML);
    var innerHTML=$('.siteNavGroupActive').getHTML(false);
    console.log("innerHTML:"+innerHTML);
   })
   it('Homework #14',() => {
    browser.url('https://v5.webdriver.io/docs/api.html');
    browser.newWindow("https://www.selenium.dev/documentation/legacy/json_wire_protocol/");
    browser.switchWindow("https://www.selenium.dev/documentation/legacy/json_wire_protocol/");
    const LinkDisplay=$('strong a[href="/SeleniumHQ/selenium/wiki"]');
    let isDisplayed=LinkDisplay.isDisplayed();
    console.log("JSONWire protocol isDisplayed?:"+isDisplayed);
    browser.switchWindow('https://v5.webdriver.io/docs/api.html');
    browser.waitUntil(()=>{
        return $('.postHeaderTitle').getText();
        },5000,'API Docs are not displayed'
    );
    const title_elem=$('.postHeaderTitle');
    title_elem.saveScreenshot('titleScreenshot.png');
    const LinkTwitter=$('#footer[href=" https://twitter.com/webdriverio"]');
    var isDisplayedTwitter=LinkTwitter.isDisplayed();
    console.log("Twitter link bafore scroll isDisplayed?:"+isDisplayedTwitter);
    var isDisplayedTwitterViewport=LinkTwitter.isDisplayedInViewport();
    console.log("Twitter link bafore scroll Viewport isDisplayed?:"+isDisplayedTwitterViewport);
    LinkTwitter.scrollIntoView();
    console.log("Twitter link after scroll isDisplayed?:"+isDisplayedTwitter);
    console.log("Twitter link after scroll Viewport isDisplayed?:"+isDisplayedTwitterViewport);
    const blog=$('[href="/blog/"]');
    console.log("Blog isFocused before click:"+blog.isFocused());
    blog.click();
    console.log("Blog isFocused after click:"+blog.isFocused());
    });
    -----Homework17-----
    Introduction
    //*[contains(text(),"API Docs") and @href]
    Protocols
    //*[contains(text(),"Webdriver Protocol") and @href]
    //*[contains(text(),"Apium") and @href]
    //*[contains(text(),"JSON Wire Protocol") and @href]
    //*[contains(text(),"Mobile JSON Wire Protocol") and @href]
    //*[contains(text(),"Chromium") and @href]
    //*[contains(text(),"Sauce Labs") and @href]
    //*[contains(text(),"Selenium Standalone") and @href]
    Locators
    //*[contains(text(),"v4.webdriver.io") and @href]
    Examples 
    //*[contains(text(),"Contribute") and @href]
    [class="anchor"][id*="examples"]p or //*[contains(text(),"Each command documentation usually comes with an example that demonstrates its usage in WebdriverIO's testrunner (in sync mode).") and p]
    Docs
    //*[contains(text(),"Getting Started") and @href]
    //*[contains(text(),"API Reference") and @href]
    //*[contains(text(),"Help") and @href]
    Community
    //*[contains(text(),"Stack Overflow") and @href or @target]
    //*[contains(text(),"Support Chat") and @href]
    //*[contains(text(),"Twitter") and @href or @target]
    More
    //*[contains(text(),"Blog") and @href]
    //*[contains(text(),"Github") and @href]
    //*[contains(text(),"Twitter") and @href]
    [class="widget"]a
    --------------------
    */
    it('Homework #29 Display',async () => {  
       await browser.url('https://github.com/');
       await GithubAutoTest.setHeaderCheck();
    });
    it('Homework #29 setUserHeader',async () => { 
       await browser.url('https://github.com/');
       await GithubAutoTest.setUserHeader('decevmber@gmail.com','ventura4Zq',"BotXchburlyanov","n");
        //There's no create account because of Github security(human confirmation that you are not a bot by choosing random star).
    }); 
    it('Homework #29 Pricing',async () => {
       await browser.url('https://github.com/');
       await GithubAutoTest.PricingPlans("KirborisConchaM8-boop","axelopatrei34@gmail.com","FadXCZ14501x","webdriverio");
       //Can't locate elements within details=open(was trying use webdriverio page,Selectors,dropdowns nothing had worked,course didn't help either)so used switchWindows.
    });
    it('Homework #29 Enterprise',async () => {
        await browser.url('https://github.com/');
        await GithubAutoTest.FreeEnterprise("KirborisConchaM8-boop","axelopatrei34@gmail.com","FadXCZ14501x","067896662");
    });
    it('Homework #29 Careers',async () => {
        await browser.url('https://github.com/');
        await GithubAutoTest.GithubCareers();
    });
    it('Homework #29 setUserIn',async () => {
        await browser.url('https://github.com/');
        await GithubAutoTest.setUserIn("FadXCZ1450","KirborisConchaM8");
         //There's no reset password because of Github security.
    });
})