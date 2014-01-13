describe("demo", function () {

  describe("test object", function () {

    it("says hello", function () {
      var hello = test.hello();
      expect(hello).toEqual("hello");
    });

    it("says goodbye", function () {
      var goodbye = test.goodbye();
      expect(goodbye).toEqual("goodbye");
    });

    it ("says later", function () {
      var later = test.later();
      expect(later).toEqual("later");
    });

    it("says take care", function () {
      var takeCare = test.takeCare();
      expect(takeCare).toEqual("take care");
    });

  });

  describe("demo object", function () {

    var demoTest = new demo();
  });
  
});