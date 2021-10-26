const selectTag = document.querySelectorAll("select")[0];

selectTag.addEventListener("change", function(){
    const gesamtBetrag = selectTag.value*20;
    document.querySelector('#gesamtOben').innerHTML = gesamtBetrag + ',00 €';
    document.querySelector('#gesamtUnten').innerHTML = gesamtBetrag + ',00 €';
    document.querySelector('.subtotal').classList.add('visible');
})

