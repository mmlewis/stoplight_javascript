describe("Stoplight", function() {
  it("should make the bottom light green", function() {
  		var fakeElement = $("<div/>");
      var stoplight = Stoplight("Red");
      stoplight.setColor(fakeElement,"green");
      expect(stoplight.getColor()).toBe("green");

      expect(fakeElement.css('background-color')).toBe("green");
  });

  it("should make the middle light yellow", function() {
  	var fakeElement = $("<div/>");
  	var stoplight = Stoplight("green");
  	stoplight.setColor(fakeElement,'yellow');
  	expect(stoplight.getColor()).toBe("yellow");

  	expect(fakeElement.css('background-color')).toBe("yellow");
  });

  it("should make the top light red", function() {
  	var fakeElement = $("<div/>");
  	var stoplight = Stoplight("green");
  	stoplight.setColor(fakeElement,'red');
  	expect(stoplight.getColor()).toBe("red");

  	expect(fakeElement.css('background-color')).toBe("red");
  });

});
