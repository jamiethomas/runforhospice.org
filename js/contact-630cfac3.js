jQuery(function(s){s("#contactForm").submit(function(){var e=s("#email").val(),t=s("#name").val(),a=s("#phone").val(),n=s("#message").val();return s.ajax({url:"https://formspree.io/webmaster@runforhospice.org",method:"POST",data:{_subject:"RunForHospice.org Message From: "+t,name:t,email:e,phone:a,message:n},dataType:"json"}).done(function(){s("#success").html("<div class='alert alert-success'>"),s("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),s("#success > .alert-success").append("<strong>Your message has been sent. </strong>"),s("#success > .alert-success").append("</div>"),s("#contactForm").trigger("reset")}).fail(function(){alert("Error sending message.")}),!1})}),$("#name").focus(function(){$("#success").html("")});