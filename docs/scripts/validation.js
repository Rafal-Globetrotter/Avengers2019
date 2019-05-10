function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  $(".button").click(function() {
      var errorMessage = "";
      var fieldsMissing = "";

       if ($("#email").val() == "") {
           fieldsMissing += "<br>Email";
       }

       if ($("#first-name").val() == "") {
        fieldsMissing += "<br>First Name";
    }

    if ($("#last-name").val() == "") {
        fieldsMissing += "<br>Last Name";
    }

    if ($("#password").val() == "") {
        fieldsMissing += "<br>Password";
    }

    if (fieldsMissing != "") {
        errorMessage += "<p>The following field(s) are missing:" + fieldsMissing;
    }



 if (isEmail($("#email").val()) == false) {
          errorMessage += "<p>Your email address is Not valid</p>";
      };
       
       if (errorMessage != "") {
           $("#errorMessage").html(errorMessage);

       }else {

        $("#successMessage").show();
        $("#errorMessage").hide();
       }

  });

  const button = document.querySelector('.button').addEventListener('click', stop); 
  function stop(e) {

    console.log('jaja');

     e.preventDefault();

  }