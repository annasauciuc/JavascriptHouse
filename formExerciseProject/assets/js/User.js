function User(firstName, lastName, username, email, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.username = username;
  this.email = email;
  this.address = address;
  this.kids = [];

  this.addKid = function(kid) {
    console.log(" adding hijo", kid);
    this.kids.push(kid);
  };

  this.numberOfKids = function() {
    return this.kids.length;
  };
  this.oldestKid = function() {
    return this.kids.reduce(function(oldest, child) {
      return (parseInt(oldest.age) || 0) > parseInt(child.age) ? oldest : child;
    }, {});
  };
  this.youngestKid = function() {
    return this.kids.reduce(function(young, child) {
      return (parseInt(young.age) || 0) &&
        parseInt(young.age) > 0 < parseInt(child.age)
        ? young
        : child;
    }, {});
  };

  this.completeName = function() {
    return this.firstName + " " + this.lastName;
  };
}
