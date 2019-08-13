// 解析获取地址栏参数

function getSearch(k) {
    // 获取地址栏参数
    var str = location.search;

    // 对获取到的地址进行解码
    str = decodeURI(str);

    // 通过字符串截取,去掉 ?
    str = str.slice(1);

    // 通过 "=" 进行截取,切割成数组
    var arr = str.split('&');

    var obj = {};

    // 遍历数组,获取键值对
    arr.forEach(function (v, i) {
        var key = v.split('=')[0];
        var val = v.split('=')[1];
        obj[key] = val;
    })

    // 将需要获取的对应属性值返回
    return obj[k];

}