const {supperAccount, supperPwd} = require('./env');
Feature('Test Animal Group');

Scenario('Create new group', async (I, logInPage, animalGroupPage) => {

    await I.accessTo(logInPage).then(in_login_page => {
        in_login_page.I_See_Login_Form();
        in_login_page.I_Login_With(supperAccount, supperPwd);
    });

    await I.accessTo(animalGroupPage).then(in_animalgroup_page => {
        in_animalgroup_page.I_See_Group_Animal_Form();
        in_animalgroup_page.I_Create_New_Group(`auto_group_${Date.now()}`, 'group made by auto');
    });

});