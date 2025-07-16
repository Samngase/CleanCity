
// 🌐 Selenium WebDriver Test Script for CleanCity App (E2E Testing)

const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

(async function pickupFormTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost/index.html');
    await driver.findElement(By.id('requestId')).sendKeys('123456');
    await driver.findElement(By.id('location')).sendKeys('Nairobi West');
    await driver.findElement(By.id('phone')).sendKeys('0700123456');
    await driver.findElement(By.id('type')).sendKeys('Garbage');
    await driver.findElement(By.id('date')).sendKeys('2025-08-01');
    await driver.findElement(By.id('description')).sendKeys('Routine pickup');
    await driver.findElement(By.id('submit')).click();

    let successMsg = await driver.wait(until.elementLocated(By.id('message')), 5000);
    let text = await successMsg.getText();
    assert.strictEqual(text, 'Request successfully submitted');
    console.log('✅ Test passed.');
  } catch (e) {
    console.error('❌ Test failed.', e);
  } finally {
    await driver.quit();
  }
})();
