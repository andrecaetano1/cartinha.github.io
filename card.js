document.getElementById("date-form").addEventListener("submit",function(a){a.preventDefault();const b=document.getElementById("date-input").value;b==="2024-06-22"?(document.getElementById("form-container").style.display="none",document.getElementById("content").classList.remove("hidden")):document.getElementById("error-message").classList.remove("hidden")});