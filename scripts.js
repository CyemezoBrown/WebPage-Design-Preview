document.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(value)
    {
        document.querySelector('#error').innerHTML = "Whoops! It looks like you forgot to add your email";
    }
    return false;
})