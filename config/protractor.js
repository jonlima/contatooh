exports.config = {
	specs: ['../test/e2e/**/*Spec.js'],
	onPrepare: function(){
		browser.driver.get('http://localhost:3000');
		browser.wait(function(){
			return browser.driver.isElementPresent(by.id('entrar'));
		});
		browser.driver.findElement(by.id('entrar')).click();
		browser.driver.findElement(by.id('login_field')).sendKeys('jonatha.lima14@gmail.com');
		browser.driver.findElement(by.id('password')).sendKeys('jon12345');
		browser.driver.findElement(by.name('commit')).click();
	}
};