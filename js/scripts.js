$(document).ready(function() {
    $(".designClickable").click(function() {
      $("#designShowing").toggle();
      $("#designHidden").toggle();
    });
});

$(document).ready(function() {
    $(".developmentClickable").click(function() {
      $("#developmentShowing").toggle();
      $("#developmentHidden").toggle();
    });
});

$(document).ready(function() {
    $(".productClickable").click(function() {
      $("#productShowing").toggle();
      $("#productHidden").toggle();
    });
});

$(document).ready(function() {
    $("#blanks form").submit(function() {
        $(".person1").append("blah blah");
        $(".person2").append("blah blah");
        $(".animal").append("blah blah");
        $(".exclamation").append("blah blah");
        $(".verb").append("blah blah");
        $(".noun").append("blah blah");

        $("#story").show();
    });
});