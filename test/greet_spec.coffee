greet  = require "../"
name   = "x_x"
describe 'greet', ->
    it "should greet a person by name", ->
    	expect(greet(name)).to.eql("hello, x_x")
      
    it "should greet a person flirtatiously if drunk", ->
    	expect(greet(name,true)).to.eql("hello x_x, you look sexy today")
    
