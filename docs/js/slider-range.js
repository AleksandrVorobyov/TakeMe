$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 20,
      max: 2000,
      values: [ 200, 1500 ],
      slide: function( event, ui ) {
        $( "#slider-price-number-min" ).val( "$" + ui.values[ 0 ] );
        $( "#slider-price-number-max" ).val( "$" + ui.values[ 1 ] );
      }
    });
    $( "#slider-price-number-min" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ));
    $( "#slider-price-number-max" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ));
  } );