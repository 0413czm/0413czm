window.onload = function() {
  // 渲染主页con_left数据
  $('.content-box .con_left ul').html(template('indexTmp',indexData));
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 左右切换选项
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
    autoplay: true
  })              
}


