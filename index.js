const changeColor = (() => {

    const eventHandler = () => {
        // Everytime time happens Event is called
        document.getElementById("change").addEventListener("click", changeBackgroundColor);
    };

    const changeBackgroundColor = () => {
      // Calls function to generate new color
      let colors = colorGenerator();

      // Update the new color to background
      document.getElementById("background").style.background=colors;

      //Showing the color on screen
      document.getElementById("hex-color").innerHTML=colors;
    };

    // Generates a random color everytime button is clickd
    const colorGenerator = () => {
          let letters = '0123456789ABCDEF';
          let color = '#';
          for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        };

    return{
      // Initialization Function
      init: () => {
        console.log("app started");

        // Calls the event Handler
        eventHandler()
      }
    };

})();

changeColor.init();
