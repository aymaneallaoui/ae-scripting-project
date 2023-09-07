import inquirer from "inquirer";
import ae from "after-effects";

const createComposition = new ae.Command((name, width, height) => {
  name = typeof name === "string" ? name : "New Comp";
  width = parseInt(width) || 1920;
  height = parseInt(height) || 1080;
  app.project.items.addComp(name, width, height, 1, 24, 10);
});

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Enter composition name:",
    },
    {
      type: "input",
      name: "width",
      message: "Enter width (default: 1920):",
    },
    {
      type: "input",
      name: "height",
      message: "Enter height (default: 1080):",
    },
  ])
  .then((answers) => {
    const { name, width, height } = answers;
    ae(createComposition, name, width, height);
  });
