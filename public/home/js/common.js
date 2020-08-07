// 表单数据处理
function serializeToJson(form) {
    var result = {};
    // [{name:"name",vaule:"input"},{...,...}]
    var f = form.serializeArray();
    f.forEach(function (item) {
        result[item.name] = item.value;
    });
    // {email:"input",password:"input"}
    return result;
};