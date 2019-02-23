
// Check off specific todos by clicking
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed')
})

// CLick on X to delete Todo
$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(600, function(){
        $(this).remove();
    });
    event.stopPropagation(); // stops the bubling effect
})

$("input[type='text']").on('keypress', function(e){
    if(e.which == 13) {
        let todoText = $(this).val()
        $(this).val('')
        $('ul').append(`<li><span><i class="far fa-trash-alt"></i></span> ${todoText}</li>`)
    }
})

$('.fa-plus').on('click', function(){
    $("input[type='text']").fadeToggle();
})