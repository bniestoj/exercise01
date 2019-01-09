var allPersons = [];

var Person = {
    firstName: "John",
    lastName : "Doe",
  };

window.onload = () => {

}

function generateList(tab) {
    tab.sort(function (a, b) {
        if (a.firstName < b.firstName) {
            return -1;
        }
        if (a.firstName > b.firstName){
            return 1;
        }
        return 0;
      });

      



}