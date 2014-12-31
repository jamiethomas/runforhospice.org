jQuery(function($)
{
  $("#contactForm").submit(function()
{
  var email = $("#email").val(); // get email field value
  var name = $("#name").val(); // get name field value
  var phone = $("#phone").val(); // get phone field value
  var msg = $("#message").val(); // get message field value
  $.ajax(
  {
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': 'HHVGcPSuBI17AjCz70mi1w',
      'message': {
        'from_email': email,
        'from_name': name,
        'headers': {
          'Reply-To': email
        },
        'subject': 'RunForHospice.org Message From: ' + name,
        'text': msg + '\n\n Phone: ' + phone,
        'to': [
      {
        'email': 'webmaster@runforhospice.org',
        'name': 'RunForHospice.org Webmaster',
        'type': 'to'
      }]
    }
  }
})
.done(function(response) {
  // Success message
  $('#success').html("<div class='alert alert-success'>");
  $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
  .append("</button>");
  $('#success > .alert-success')
  .append("<strong>Your message has been sent. </strong>");
  $('#success > .alert-success')
  .append('</div>');
  //clear all fields
  $('#contactForm').trigger("reset");
  /*
  alert('Your message has been sent. Thank you!'); // show success message
  $("#name").val(''); // reset field after successful submission
  $("#email").val(''); // reset field after successful submission
  $("#phone").val(''); // reset field after successful submission
  $("#message").val(''); // reset field after successful submission
  */
})
.fail(function(response) {
  alert('Error sending message.');
});
return false; // prevent page refresh
});
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
