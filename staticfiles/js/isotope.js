$(document).ready(function() {
  // init Isotope - women-families.html
  var $grid = $(".women-projects").isotope({
    // options
  });
  // filter items on button click
  $(".women-btn-group").on("click", "button", function() {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue
    });
  });
  //images loaded
  $grid.imagesLoaded().progress(function() {
    $grid.isotope("layout");
  });
});

$(document).ready(function() {
  //----------------------------------------
  // init Isotope - professionals.html
  var $grid = $(".professional-courses").isotope({
    // options
  });
  // filter items on button click
  $(".professional-course-btn-group").on("click", "button", function() {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue
    });
  });
  //images loaded
  $grid.imagesLoaded().progress(function() {
    $grid.isotope("layout");
  });
});
