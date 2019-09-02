const teamObj = require("./team.js");

test("should create an object when the team name and level being passed", () => {
  let obj = { teamName: "jay", level: 2, points: 0 };
  let assert = teamObj("jay", 2);
  expect(assert).toEqual(obj);
});
