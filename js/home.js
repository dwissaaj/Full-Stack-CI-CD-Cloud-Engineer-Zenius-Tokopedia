//ON CLICK FOR CART
var z = 0
function increment(){
    z++;
    document.getElementById('cart-number').innerHTML = z;
    $(document).ready(function(){
        $("#cart-popup").show()
    })
}


//FORM FOR DISCOUNT EMAIL
var formEmail = ""
var check = "gmail.com"
$(document).ready(function(){
    $("#form-disc-send").click(function(){
        formEmail = $("#form-disc-email").val();

    })
})

function email(){
    if(!formEmail.includes(check)){
        $("#disc-success").hide();
        $("#disc-failed").show().delay(3000).fadeOut();
    }else if(formEmail.includes(check)){
        $("#disc-success").show().delay(3000).fadeOut();
        $("#disc-failed").hide();
        console.log(formEmail)
    }else {
        alert("error")
    }
}

//FORM FOR NUMBER
var formNumber = ""
$(document).ready(function(){
    $("#form-disc-send").click(function(){
        formNumber = $("#form-disc-number").val();
        formNumber.toString()
        console.log(formNumber.length)
    })
})

function number(){
    if(formNumber < 12){
        $("#disc-number-failed").show().delay(3000).fadeOut();
    } else {
    }
}


$(document).ready(function(){
    $("#form-disc-send").click(function(){
        email();
        number();
    })
})



//LOGIN SUBMIT FORM

const form = document.getElementById('form');
const error = document.getElementById('error');
const emailForm = document.getElementById('formEmail');
const passEmail = document.getElementById('formPass');
const thanks = document.getElementById('thanks');

emailForm.oninvalid = invalid;
formPass.oninvalid = invalid;
form.onsubmit = submit;

function invalid(event) {
  error.removeAttribute('hidden');
}

function submit(event) {
  form.setAttribute('hidden', '');
  thanks.removeAttribute('hidden');

  event.preventDefault();
}