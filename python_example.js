const { webkit } = require('playwright');

(async () => {
    const browser = await webkit.launch({ headless: false });
    // Create a page.
    const page = await browser.newPage();
    await page.goto('https://www.python.org');

    // Fill an input.
    await page.fill('#id-search-field', 'query');

    // Navigate implicitly by clicking a link.
    await page.click('#submit');

    await browser.close();
})();
