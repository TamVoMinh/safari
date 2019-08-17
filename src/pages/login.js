const { I } = inject();

/** page element identifier */
const input_userName = '#Username';
const input_password = '#Password';
const btn_login = 'form input[type=submit]';

const pageUrl = '/WebsiteProject_deploy/Login?ReturnUrl=%2f';

const pageBehaviors = {
  See_Login_Form(){
    I.seeElement(input_userName);
    I.seeElement(input_password);
  },
  Login_With(userName, password){

    I.fillField(input_userName, userName);
    I.fillField(input_password, password);
    I.click(btn_login)
  } 
}

module.exports =  [pageUrl, pageBehaviors];
