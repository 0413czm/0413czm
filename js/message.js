// message 从message.json中拿到
console.log(message);

$('.content-box .con_left ul').html(template('msgTmp',message));

// 关闭模态框
$('.modal-header .shanchu').on('click',function (){
    $('.modal').css('display','none');
})
$('.replay').on('click',function (){
    $('.modal').css('display','block');
})