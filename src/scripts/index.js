import '../styles/index.scss';

var user = {
    Name: "Daniil",
    LastName: "Kravchenko",
    Age: 22,
    DOB: "28.05.1997",
    Height: 180,
    HasPet: true,
    FavoriteFood: "pizza, burgers, steak",
    userInformation: function () {
        console.log("Name:" + user.Name + " " + "LastName:" + user.LastName + " " + "Age:" + user.Age);
    }
};

console.log(user);
user.userInformation();

