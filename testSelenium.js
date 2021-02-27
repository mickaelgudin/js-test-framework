function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

const webdriver = require('selenium-webdriver');
const chrome = require('chromedriver');

let driver = new webdriver.Builder()
.forBrowser('chrome')
.build();

driver.get('https://www.qwant.com/?l=fr');

sleep(3000);

driver.findElement(webdriver.By.name('q')).sendKeys('webdriver', webdriver.Key.RETURN);