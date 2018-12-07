import { Selector } from 'testcafe'; // first import testcafe selectors

fixture`GitHub Repo Search App`// declare the fixture
    .page`localhost:8080`;  // specify the start page



test('Page loading', async t => {
    await t
        .expect(Selector('#app').exists).ok();
});

test('Page loading with react app', async t => {
    await t
        .expect(Selector('#GitHubSearchLayoutComponent').exists).ok();
});

test('Adding new element to favaurites', async t => {
    await t
        .typeText('#SearchField', 'tetris')
        .click(Selector('[class^="MuiSelect-select-246 MuiSelect-selectMenu-249 MuiI"]'))
        .click(Selector('li').withText('TypeScript'))
        .click(Selector('span').withText('ADD TO LIST'))
        .expect(Selector('h4').withText('tetris').exists).ok()
});

test('Removing element from favaurites', async t => {
    await t
        .typeText('#SearchField', 'tetris')
        .click(Selector('[class^="MuiSelect-select-246 MuiSelect-selectMenu-249 MuiI"]'))
        .click(Selector('li').withText('TypeScript'))
        .click(Selector('span').withText('ADD TO LIST'))
        .typeText('#SearchField', 'test-to-remove')
        .click(Selector('[class^="MuiSelect-select-246 MuiSelect-selectMenu-249 MuiI"]'))
        .click(Selector('li').withText('TypeScript'))
        .click(Selector('span').withText('ADD TO LIST'))
        .typeText('#SearchField', 'bootstrap')
        .click(Selector('[class^="MuiSelect-select-246 MuiSelect-selectMenu-249 MuiI"]'))
        .click(Selector('li').withText('TypeScript'))
        .click(Selector('span').withText('ADD TO LIST'))
        .click(Selector('.MuiSvgIcon-root-252').nth(2).find('path'))
        .expect(Selector('h4').withText('test-to-remove').exists).notOk()
});

test('Showing search result', async t => {
    await t
        .typeText('#SearchField', 'tetris')
        .click(Selector('[class^="MuiSelect-select-246 MuiSelect-selectMenu-249 MuiI"]'))
        .click(Selector('li').withText('TypeScript'))
        .click(Selector('span').withText('ADD TO LIST'))
        .click(Selector('h4').withText('tetris'))
        .expect(Selector('#ResultContainer').exists).ok()
});

test('Loading programming languages for searched repo', async t => {
    await t
        .typeText('#SearchField', 'tetris')
        .click(Selector('[class^="MuiSelect-select-246 MuiSelect-selectMenu-249 MuiI"]'))
        .click(Selector('[class^="MuiButtonBase-root-291 MuiListItem-root-303 MuiLis"][name="C"][data-value="c"]'))
        .click(Selector('span').withText('ADD TO LIST'))
        .click(Selector('h4').withText('tetris'))
        .click(Selector('.MuiSvgIcon-root-418').nth(2).find('path'))
        .expect(Selector(Selector('#LangContainertetris')).exists).ok()
});