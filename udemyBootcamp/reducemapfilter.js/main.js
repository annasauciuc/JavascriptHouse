//.map()
// What you have
var officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" }
];
// What you need
[20, 24, 56, 88];
//**** Using .forEach():

var officersIds = [];
officers.forEach(function(officer) {
  officersIds.push(officer.id);
});

//*****.map():

var officersIds = officers.map(function(officer) {
  return officer.id;
});
//ES6
const officersIds = officers.map(officer => officer.id);

//.reduce()
var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22
  }
];
var totalYears = pilots.reduce(function(accumulator, pilot) {
  return accumulator + pilot.years;
}, 0);
//ES6
const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

//Now let’s say I want to find which pilot is the most experienced one. For that, I can use reduce as well:

var mostExpPilot = pilots.reduce(function(oldest, pilot) {
  return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});
//.filter()
var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels"
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire"
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire"
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels"
  }
];
var rebels = pilots.filter(function(pilot) {
  return pilot.faction === "Rebels";
});
var empire = pilots.filter(function(pilot) {
  return pilot.faction === "Empire";
});
//ES6
const rebels = pilots.filter(pilot => pilot.faction === "Rebels");
const empire = pilots.filter(pilot => pilot.faction === "Empire");
