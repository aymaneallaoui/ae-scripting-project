function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
import fs from "fs";
import inquirer from "inquirer";
import curves from "ae-export-curves";

const exportPropertyCurves = (composition, layer, properties) => {
  const propertyMap = {};

  properties.forEach((property) => {
    propertyMap[property] = [layer, "Transform", toTitleCase(property)];
  });

  curves({
    composition,
    precision: 5,
    properties: propertyMap,
  })
    .then((json) => {
      fs.writeFile("output.json", JSON.stringify(json), (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
    })
    .catch((err) => console.log(err));
};

inquirer
  .prompt([
    {
      type: "input",
      name: "composition",
      message: "Enter composition name:",
    },
    {
      type: "input",
      name: "layer",
      message: "Enter layer name:",
    },
    {
      type: "checkbox",
      name: "properties",
      message: "Select properties to export:",
      choices: ["rotation", "scale", "opacity", "y position", "x position"],
    },
  ])
  .then((answers) => {
    const { composition, layer, properties } = answers;
    exportPropertyCurves(composition, layer, properties);
  });
