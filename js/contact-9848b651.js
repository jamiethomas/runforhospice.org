jQuery(function(e){e("#contactForm").submit(function(){var s=e("#email").val(),a=e("#name").val(),t=e("#phone").val(),n=e("#message").val();return e.ajax({type:"POST",url:"https://mandrillapp.com/api/1.0/messages/send.json",data:{key:"HHVGcPSuBI17AjCz70mi1w",message:{from_email:s,from_name:a,headers:{"Reply-To":s},subject:"RunForHospice.org Message From: "+a,text:n+"\n\n Phone: "+t,to:[{email:"webmaster@runforhospice.org",name:"RunForHospice.org Webmaster",type:"to"}]}}}).done(function(s){e("#success").html("<div class='alert alert-success'>"),e("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),e("#success > .alert-success").append("<strong>Your message has been sent. </strong>"),e("#success > .alert-success").append("</div>"),e("#contactForm").trigger("reset")}).fail(function(e){alert("Error sending message.")}),!1})}),$("#name").focus(function(){$("#success").html("")});