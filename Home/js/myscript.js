function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }  

  function myFunction2() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    const element = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = 'The text in first paragraph (index 0) is: ' + element[0].innerHTML;
  }  