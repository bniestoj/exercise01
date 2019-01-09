var allPersons = [];



window.onload = () => {

}

function generateList(tab) {
    var $ul = $('<ul></ul>');
    tab.sort(function (a, b) {
        if (a.lastName < b.lastName) {
            return -1;
        }
        if (a.lastName > b.lastName){
            return 1;
        }
        return 0;
      });
      $('ul').remove();
      $('section').append($ul);
      for (var i =0; i <tab.length; i++){
        $('ul').append($("<li>").text(tab[i].firstName + ' ' + tab[i].lastName));

  }




}

function addPerson() {
  var $input = $('#name');
  var name = $input.val();
  var $input = $('#lastname');
  var lastname = $input.val();
  var Person = {
    firstName: name,
    lastName: lastname
  };
  console.log(Person.firstName);
  console.log(name);
  allPersons.push(Person);
  
  generateList(allPersons);
}

