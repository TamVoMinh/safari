const { I } = inject();

const input_userName = '#Username';
const input_password = '#Password';
const btn_login = 'form input[type=submit]';
const url = '/WebsiteProject_deploy/Login?ReturnUrl=%2f';

module.exports =  [
  url,
  {
    I_See_Login_Form(){
      I.seeElement(input_userName);
      I.seeElement(input_password);
    },
    I_Login_With(userName, password){
  
      I.fillField(input_userName, userName);
      I.fillField(input_password, password);
      I.click(btn_login)
    } 
  }
];
