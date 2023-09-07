const fs = require("fs");
const curves = require("ae-export-curves");

// The function will read the current opened project
// and exports chosen property curves
curves({
  // Choose the composition you want to export
  composition: "Comp 1",
  // You can set a decimal precision
  precision: 5,
  properties: {
    // First item of the array is the layer you want to access to
    // then, just chain sub-properties until you reach the one you want to export
    rotation: ["Black Solid 1", "Transform", "Rotation"],
  },
})
  .then((json) => {
    fs.writeFile("output.json", JSON.stringify(json), (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((err) => console.log(err));
