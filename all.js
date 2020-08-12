$(document).ready(function () {
    let list = $('.mqBankList');

    list.click(function (e) { 
        e.preventDefault();
        $(this).css({
            height: 540+'px',
        })
        
    });
});