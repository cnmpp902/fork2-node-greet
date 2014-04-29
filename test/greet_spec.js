var greet  = require("../"),
    name   = "x_x";
describe('greet', function(){
    it("should greet a person by name", function(){
	expect(greet(name)).to.eql("hello, x_x");
    });
    
    it("should greet a person flirtatiously if drunk", function(){
	expect(greet(name,true)).to.eql("hello x_x, you look sexy today");
    });
});
