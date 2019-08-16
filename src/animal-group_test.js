const {supperAccount, supperPwd} = require('./env');
Feature('Test Animal Group');

Scenario('Create new group', async (I, logInPage, animalGroupPage) => {

    await I.goTo(logInPage).then(I => {
        I.See_Login_Form();
        I.Login_With(supperAccount, supperPwd);
    });

    await I.goTo(animalGroupPage).then(I => {
        I.See_Group_Animal_Form();
        I.Create_New_Group(`auto_group_${Date.now()}`, 'group made by auto');
    });
});