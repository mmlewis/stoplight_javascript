describe("Stoplight", function() {
  it("should make the bottom light green", function() {
      var stoplight = Stoplight("red");
      stoplight.setColor("green");
      expect(stoplight.getColor()).toBe("green");
		//Add a method to change the color of the bottom cicle to green
		//Check that the color of the bottom circle is green

  });
});
