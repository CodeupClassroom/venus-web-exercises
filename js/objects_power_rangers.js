
//Person Constructor
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

var personArr = []
var jason = new Person("Jason", "Scott");
var kimberly = new Person("Kimberly", "Hart");
var trini = new Person("Trini", "Kwan");
var zack = new Person("Zack", "Taylor");
var billy = new Person("Billy", "Cranston");
var tommy = new Person("Tommy", "Oliver");
var bulk = new Person("Farkas", "Bulkmeier");
var skull = new Person("Eugene", "Skullovitch");

personArr.push(jason,kimberly,trini,zack,billy,tommy,bulk,skull);

//Power Ranger Constructor
function PowerRanger(person, color, zord){
    this.person = person;
    this.color = color;
    this.zord = zord;

    this.morphinTime = function(){
        console.log(

            this.person.firstName + " yells! It's Morphin Time!! \n" +
            this.zord.toUpperCase() + "!!!!" + "\n" +
            this.person.firstName +
            " morphs into The " + this.color + " Ranger"

        );
    }
}

var originalRangersArray = [];
var redRanger = new PowerRanger(jason, "Red", "Tyrannosaur");
var pinkRanger = new PowerRanger(kimberly, "Pink", "Pterodactyl");
var yellowRanger = new PowerRanger(trini, "Yellow","Saber Tooth Tiger");
var blackRanger = new PowerRanger(zack, "Black", "Mastodon");
var blueRanger = new PowerRanger(billy, "Blue","Triceratops");
var greenRanger = new PowerRanger(tommy,"Green","DragonZord");

originalRangersArray.push(redRanger, pinkRanger, yellowRanger, blackRanger, blueRanger, greenRanger);


function morphAllRangers(powerRangerTeam){
    powerRangerTeam.forEach(function (ranger){
        ranger.morphinTime();
    });
}

morphAllRangers(originalRangersArray);

