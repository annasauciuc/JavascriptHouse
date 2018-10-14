function Family() {
  this.members = [];

  this.addMembers = function(member) {
    this.members.push(member);
  };

  this.getFemales = function() {
    var result = [];
    for (let i = 0; i < this.members.length; i++) {
      let member = this.members[i];
      if (member.sex.toLowerCase() == "female") {
        result.push(member);
      }
    }

    return result;
  };

  this.getMales = function() {
    var result = [];
    for (let i = 0; i < this.members.length; i++) {
      let member = this.members[i];
      if (member.sex.toLowerCase() == "male") {
        result.push(member);
      }
    }

    return result;
  };
  this.getMalesNumber = function() {
    var result = [];
    for (let i = 0; i < this.members.length; i++) {
      let member = this.members[i];
      if (member.sex.toLowerCase() == "male") {
        result.push(member.length);
      }
    }

    return result;
  };

  this.getFemaleNumber = function() {
    var result = [];
    for (let i = 0; i < this.members.length; i++) {
      let member = this.members[i];
      if (member.sex.toLowerCase() == "female") {
        result.push(member.length);
      }
    }

    return result;
  };

  this.getAdults = function() {
    var result = [];
    for (let i = 0; i < this.members.length; i++) {
      let member = this.members[i];
      if (member.age >= 18) {
        result.push(member);
      }
    }

    return result;
  };

  this.getAdultsAge = function(age) {
    var result = [];
    for (let i = 0; i < this.members.length; i++) {
      let member = this.members[i];
      if (member.age >= age) {
        result.push(member);
      }
    }

    return result;
  };

  this.getMembWithHijos = function() {
    var result = [];
    for (let i = 0; i < this.members.length; i++) {
      let member = this.members[i];
      if (member.hijos.length > 0) {
        result.push(member);
      }
    }
    console.log("result", result);
    return result;
  };

  this.getByNumbLength = function(numblenght) {
    var result = [];
    for (let i = 0; i < this.members.length; i++) {
      let member = this.members[i];
      if (member.name.length > numblenght) {
        result.push(member);
      }
    }
    console.log("result", result);
    return result;
  };
  this.getMembWithHijosByAge = function(age) {
    var result = [];

    for (let i = 0; i < this.members.length; i++) {
      let member = this.members[i];
      for (let j = 0; j < member.hijos.length; j++) {
        let hijo = member.hijos[j];
        if (hijo.age >= age) {
          result.push(member);
        }
      }
    }

    console.log("result", result);
    return result;
  };

  this.getHijosByAge = function(age) {
    var result = [];

    for (let i = 0; i < this.members.length; i++) {
      let member = this.members[i];
      for (let j = 0; j < member.hijos.length; j++) {
        let hijo = member.hijos[j];
        if (hijo.age >= age) {
          result.push(hijo);
        }
      }
    }

    console.log("result", result);
    return result;
  };
}
