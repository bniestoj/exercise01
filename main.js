var allPersons = [];

var Person = {
  firstName: "John",
  lastName: "Doe",
};

window.onload = () => {

}

function generateList(tab) {
  tab.sort(function (a, b) {
    if (a.firstName < b.firstName) {
      return -1;
    }
    if (a.firstName > b.firstName) {
      return 1;
    }
    return 0;
  });
  for (var i = 0; i < tab.length; i++) {
    $('ul').append('li').text(tab[i].firstName + ' ' + tab[i].lastName);

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
  allPersons.push(Person);
  generateList(allPersons);
}

