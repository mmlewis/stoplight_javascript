describe("Stoplight", function() {
  it("should make the bottom light green", function() {
    stopLight.setColor("green");
    expect(stopLight.stopLightColor).toBe("green");
  });
});
