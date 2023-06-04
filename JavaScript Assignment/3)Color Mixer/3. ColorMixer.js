function colorMixer(color1, color2) {
    let outputColor;
  
    switch (color1) {
      case "red":
        switch (color2) {
          case "blue":
            outputColor = "purple";
            break;
          case "yellow":
            outputColor = "orange";
            break;
          default:
            console.log("Invalid color combination");
            return;
        }
        break;
      case "blue":
        switch (color2) {
          case "red":
            outputColor = "purple";
            break;
          case "yellow":
            outputColor = "green";
            break;
          default:
            console.log("Invalid color combination");
            return;
        }
        break;
      case "yellow":
        switch (color2) {
          case "red":
            outputColor = "orange";
            break;
          case "blue":
            outputColor = "green";
            break;
          default:
            console.log("Invalid color combination");
            return;
        }
        break;
      default:
        console.log("Invalid color combination");
        return;
    }
  
    console.log(outputColor);
  }
  