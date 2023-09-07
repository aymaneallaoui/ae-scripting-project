ae = require("after-effects");

var create_composition = new ae.Command((name) => {
  name = typeof name === "string" ? name : "New Comp";
  app.project.items.addComp(name, 1920, 1080, 1, 24, 10);
});

ae(create_composition, "First Comp");
