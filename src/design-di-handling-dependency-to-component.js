function MasterGreater(greeter) {
    this.greeter = greeter;
}

MasterGreater.prototype.hello = function (name) {
    return this.greeter.greet(name);
}

var Kitt = {
    greet: function (name) {
        return "Hello " + name + ", you may call me KITT.";
    }
};

var Hal9000 = {
    greet: function (name) {
        return "Hello " + name + ", you're looking well today.";
    }
};

var sc1 = new MasterGreater(Kitt);
var sc2 = new MasterGreater(Hal9000);

