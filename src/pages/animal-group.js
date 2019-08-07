const { I } = inject();

const input_groupName = '#Name';
const input_groupDesc = '#Description';
const select_animal_list = '#bootstrap-duallistbox-nonselected-list_ANIMALCODES';
const option_1st_animal = `${select_animal_list} option:nth-child(1)`;
const option_2nd_animal = `${select_animal_list} option:nth-child(2)`;

const btn_add_new_group = 'form input[type=submit]';
const btn_move_right = 'form .form-group button.move';
url = '/AnimalGroup/create';

module.exports =  [
  url,
  {
    I_See_Group_Animal_Form(){
      I.seeElement(input_groupName);
      I.seeElement(input_groupDesc);
      I.seeElement(btn_add_new_group);
      I.seeElement(select_animal_list);
      I.seeElement(option_1st_animal);
      I.seeElement(option_2nd_animal);
    },
    I_Create_New_Group(name, desc, concretes ){
  
      I.fillField(input_groupName, name);
      I.fillField(input_groupDesc, desc);

      (concretes||[option_1st_animal, option_2nd_animal]).map(concreteOption => {
        I.click(concreteOption);
        I.click(btn_move_right)
      });

      I.click(btn_add_new_group);
    } 
  }
];
