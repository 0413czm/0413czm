// message 从message.json中拿到
console.log(message);

$('.content-box .con_left ul').html(template('msgTmp',message));

// 关闭模态框
$('.modal-header .shanchu').on('click',function (){
    $('.modal').css('display','none');
})
$('.title').on('click','.replay',function (){
    $(this).parent().parent().siblings('.text').find('.repay').css('display','block');
})
$('.repay .sendMessage').on('click',function (){
    $(this).parent().parent().css('display','none');
})