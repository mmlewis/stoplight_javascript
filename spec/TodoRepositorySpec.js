describe("todoRepository", function() {
  var todos = ["Breakfast", "Lunch", "Dinner"];
    
  beforeEach(function() {
	for (var i=0; i<todos.length; i++) { 
		//Add todo into repository.
	}
  });
  
  afterEach(function() {
	for (var i=0; i<todos.length; i++) { 
		//Remove the todo
	}
  });

  it("should be able to get a Todo with a given id", function() {
      expect("get the first todo.").toEqual("1. Breakfast - Completed");
  });  
  
  it("should be able to mark a Todo as completed", function(){
      //Mark the first todo as complete

      expect("get the first todo and see if it is completed or done").toEqual(true);
  });

  it("should return the current status with 0 done as no todos are marked as completed", function(){
	  expect("get the current status here").toEqual(0 + " done Todos of a total " + todos.length);
  });

  it("should return the current status with 1 done when 1 todo is marked as completed", function(){
	  //Mark the first todo as complete
	  
	  //assert that
	  expect("get the current status here").toEqual(1 + " done Todos of a total " + todos.length);
  });

});