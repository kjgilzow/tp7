  function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {
    this.recipeName = recipeName;
    this.contributorName = contributorName;
    this.imageURL = imageURL;
    this.ingredientsURL = ingredientsURL;
    this.equipmentURL = equipmentURL;
    this.directionsURL = directionsURL;

    this.displayRecipe = function() {

      document.querySelector("#title").innerHTML = this.recipeName;
      document.querySelector("#contributor").innerHTML = this.contributorName;
      document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imageURL + ")";
      loadFileInto(this.ingredients, "#ingredients ul");
      loadFileInto(this.equipment, "#equipment ul");
      loadFileInto(this.directions, "#directions ol");

    }
  }

  MapleBrownSugarCookies = new Recipe("Maple Brown Sugar Cookies", "Kailin Gilzow", "cookies.jpg", "ingredients.html", "equipment.html", "instructions.html")




  window.onload = function() {

    document.querySelector("#firstRecipe").onclick = function () {
      MapleBrownSugarCookies.displayRecipe();
    }
    
  }








  //tp6 js and ajax

 /* function loadFileInto(fromFile, whereTo) {

    // creating a new XMLHttpRequest object
    ajax = new XMLHttpRequest();

    // defines the GET/POST method, source, and async value of the AJAX object
    ajax.open("GET", fromFile, true);

    // provides code to do something in response to the AJAX request
    ajax.onreadystatechange = function() {
      if ((this.readyState == 4) && (this.status == 200)) {
        document.querySelector(whereTo).innerHTML += this.responseText;

      } else if ((this.readyState == 4) && (this.status != 200)) {
        console.log("Error: " + this.responseText);
      }

    } // end ajax.onreadystatechange function

    // initiate request and wait for response
    ajax.send();

  }
  */