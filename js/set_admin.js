// 设置管理员
$("#my_save_admin").click(function () {
    var name =  $("#name").val();
    var email = $("#email").val();

    $.ajax({
        type: 'POST',
        url: 'php/set_admin.php',
        data: {"name": name, "email": email},
        dataType:'json',
        success: function (res) {
            if (res){
                console.log(res)
                alert("更改成功！")
            }
        },
    });
});