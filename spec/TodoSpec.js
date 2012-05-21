var TWU = TWU || {};

describe("Todo", function() {
  beforeEach(function() { 
     //create a todo task with an id, name and completed = false by default.
  });

  it("should be able to return the details", function() {
    expect(todo1.details()).toEqual("1. Breakfast - Incomplete");
    expect(todo2.details()).toEqual("2. Lunch - Incomplete");
  });
  
  it("should be able to be marked as Completed", function() {
	  //complete the task here
      expect(todo.isCompleted()).toEqual(true);
  });

});
