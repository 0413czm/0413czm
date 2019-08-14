// message 从message.json中拿到
console.log(message);

$('.content-box .con_left ul').html(template('msgTmp',message));