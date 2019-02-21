
// Check off specific todos by clicking
$('li').on('click', function(){
    $(this).toggleClass('completed')
})

// CLick on X to delete Todo
$('span').on('click', function(event){
    $(this).parent().fadeOut(600, function(){
        $(this).remove();
    });
    event.stopPropagation(); // stops the bubling effect
})
