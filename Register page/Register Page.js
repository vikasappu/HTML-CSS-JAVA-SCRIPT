const  form = document.getElementById('form');
const  name = document.getElementById('name');
const  email = document.getElementById('email');
const  password  = document.getElementById('password');
const  pass = document.getElementById('pass');

function showError(input,message)
{
    const formc= input.parentElement;
    formc.className= 'form-c error';
    const small = formc.querySelector('small');
    small.innerText =message;
}
function showSucces(input)
{
    const  formc=input.parentElement;
    formc.className='form-c success';

}

function checkEmail(input)
{
    const  re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim()))
    {
        showSucces(input)
    }
    else
    {
        showError(input,'Email is Invalid')
    }
}

function  chechRequired(inputArr)
{
    inputArr.forEach(function (input)
    {
        if(input.value.trim()==='')
        {
            showError(input,`${getFieldName(input)} is required`)
        }
        else {
            showSucces(input);
        }
    });
}
function  checkLength(input,min,max)
{
    if(input.value.length < min)
    {
        showError(input,`${getFieldName(input)} must be atleast ${min} characters`)
    }
    else if (input.value.length > max)
    {
        showError(input,`${getFieldName(input)} must be less than ${max} characters`)
    }
    else
    {
        showSucces(input);
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function checkPasswordMatch(input1,input2)
{
    if(input1.value !== input2.value)
    {
        showError(input2,'Password do not Match')
    }
}

form.addEventListener('submit',function (e){
    e.preventDefault();

    chechRequired([name,email,password,pass]);
    checkLength(name,3,15);
    checkLength(password,6,15);
    checkEmail(email);
    checkPasswordMatch(password,pass);
});


