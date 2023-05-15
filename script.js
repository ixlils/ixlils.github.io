$(document).ready(function() {

    // beregning av utslipp etter CO2-utslipp
    $('#co2').on('input', function() {
      var distanse = $('#distanse').val();
      var co2_utslipp = $(this).val();
      var utslipp_kg = (distanse * co2_utslipp / 1000).toFixed(2);
      $('#co2_kg').val(utslipp_kg);
    });
  
    // beregning av utslipp etter forbruk per mil
    $('#forbruk').on('input', function() {
      var distanse = $('#distanse').val();
      var forbruk = $(this).val();
      var drivstoff = $('#drivstoff').val();
      var utslipp_kg;
      if (drivstoff === 'bensin') {
        utslipp_kg = (distanse * forbruk * 2.32 / 10).toFixed(2);
      } else if (drivstoff === 'diesel') {
        utslipp_kg = (distanse * forbruk * 2.66 / 10).toFixed(2);
      }
      $('#utslipp_kg').val(utslipp_kg);
    });
  
    // tilbakestill skjemaet
    $('button').click(function() {
      $('input').val('');
    });
  
  });
  