var member1 = new Member("Ana", "Maria", 30, "sister", "female");
var member2 = new Member("Dorina", "Rautu", 60, "mother", "Female");
var member3 = new Member("Darius", "Andrei", 9, "brother", "male");
var member4 = new Member("Claudio", "Benitez", 30, "father", "male");
var member5 = new Member("Micaela", "Santana", 50, "sister in law", "female");
var hijo1 = new Member("Lorro", "Curro", 40, "cousin", "female");
var hijo2 = new Member("Khales", "Santana", 1, "sister", "female");
var hijo3 = new Member("Kiss", "Benitez", 10, "aunt", "female");
var hijo4 = new Member("Claudio", "Santana", 70, "grand-father", "male");
var family1 = new Family();
member1.addHijos(hijo1);
member2.addHijos(hijo2);

family1.addMembers(member1);
family1.addMembers(member2);
family1.addMembers(member3);
family1.addMembers(member4);
family1.addMembers(member5);

console.log("family", family1.getHijosByAge(10));
