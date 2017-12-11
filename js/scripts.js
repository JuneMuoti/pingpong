$(document).ready(function() {
    $("form#pingpong").submit(function(event) {
      event.preventDefault();
    var inputtedNum = $("#number").val();

    var output = pingpong(inputtedNum);
    output.forEach(function(element){
    $("#list").append("<li>" +element );
  });
  $('#clear').click(function(event){
    $("#list").empty();
  })
});
});


  function pingpong(inputtedNum){
    var output=[];
    for (i=1; i<=inputtedNum;i++){
      if(i%15 === 0){
      output.push("pingpong");
    }
      else if (i%5 === 0) {
        output.push("pong");
      }
      else if (i%3 === 0) {
        output.push("ping")
      }
      else {
        output.push(i);
      }
    }

  return output;
}
