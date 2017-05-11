function highlight() {
	for (var a = $("#bs-example-navbar-collapse-1 a"), b = 0; b < a.length; b++) - 1 != window.location.href.indexOf(a[b].href) && $(a[b]).parent().addClass("active")
}
$(document).ready(function() {
	highlight(),
		$("#reg").validate({
			submitHandler: function() { //如果验证成功，则提交ajax
				$.ajax({
					url: '/users/regist', //提交到后台的一个路由地址
					type: 'post',
					dataType: 'json',
					data: {
						username: $('#inputSuccess1').val(),
						password: $('#regpassword').val(),
					},
					success: function(data) { //后台返回的json如{key:1,keyMain:'注册成功'}
						if (data.code == 0) { //注册成功
							//这里写注册成功后的代码逻辑
							console.log(data);
							alert(data.msg);
							self.location = '/index/login/';
						} else { //注册失败 后台返回的json如{key:0, keyMain:'注册失败'}
							//这里写注册失败后的代码逻辑
							console.log(data);
							alert(data.msg);
						}
					}
				});
			},
			rules: {
				name: {
					required: !0,
					rangelength: [2, 10],
				},
				password: {
					required: !0,
					rangelength: [6, 16]
				},
				"password-repeat": {
					required: !0,
					equalTo: "#regpassword"
				},
			},
			messages: {
				name: {
					required: "\u8bf7\u586b\u5199\u7528\u6237\u540d",
					rangelength: "\u7528\u6237\u540d\u957f\u5ea6\u9700\u57282-10\u4f4d\u4e4b\u95f4",
					remote: "\u7528\u6237\u540d\u5df2\u5b58\u5728"
				},
				password: {
					required: "\u8bf7\u8f93\u5165\u5bc6\u7801",
					rangelength: "\u5bc6\u7801\u957f\u5ea6\u57286\u4f4d\u523016\u4f4d\u4e4b\u95f4"
				},
				"password-repeat": {
					required: "\u8bf7\u518d\u6b21\u8f93\u5165\u5bc6\u7801\u786e\u8ba4",
					equalTo: "\u4e24\u6b21\u8f93\u5165\u5bc6\u7801\u4e0d\u4e00\u81f4"
				},
			},
			errorPlacement: function(a, b) {
				b.next().remove(),
					b.after('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>'),
					b.closest(".form-group").append(a)
			},
			highlight: function(a) {
				$(a).closest(".form-group").removeClass("has-success").addClass("has-error")
			},
			success: function(a) {
				var b = a.closest(".form-group").find("input");
				b.next().remove(),
					b.after('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>'),
					a.closest(".form-group").removeClass("has-error").addClass("has-success"),
					a.remove()
			}
		}),
		$("#login").validate({
			submitHandler: function() { //如果验证成功，则提交ajax
				$.ajax({
					url: '/users/login', //这里是提交到后台的一个路由地址，类似这样的是执行后台里控制器index下的login方法来处理登录提交
					type: 'post',
					dataType: 'json',
					data: {
						loginName: $('#inputSuccess3').val(),
						loginPassword: $('#loginpassword').val()
					},
					success: function(data) { //后台返回的json如{key:1,keyMain:'登录成功'}
						if (data.code == 0) { //登录成功
							//这里写登录成功后的代码逻辑
							console.log(data);
							self.location = '/index';
						} else { //登录失败 后台返回的json如{key:0, keyMain:'登录失败'}
							//这里写登录失败后的代码逻辑
							console.log(data);
							alert(data.msg);
						}
					}
				});
			},
			rules: {
				name: {
					required: !0,
					rangelength: [2, 10],
				},
				password: {
					required: !0,
					rangelength: [6, 16]
				}
			},
			messages: {
				name: {
					required: "\u8bf7\u8f93\u5165\u7528\u6237\u540d",
					rangelength: "\u7528\u6237\u540d\u957f\u5ea6\u9700\u57282-10\u4f4d\u4e4b\u95f4",
					remote: "\u7528\u6237\u540d\u4e0d\u5b58\u5728"
				},
				password: {
					required: "\u8bf7\u8f93\u5165\u5bc6\u7801",
					rangelength: "\u5bc6\u7801\u957f\u5ea6\u57286\u4f4d\u523016\u4f4d\u4e4b\u95f4"
				}
			},
			errorPlacement: function(a, b) {
				b.next().remove(),
					b.after('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>'),
					b.closest(".form-group").append(a)
			},
			highlight: function(a) {
				$(a).closest(".form-group").removeClass("has-success").addClass("has-error")
			},
			success: function(a) {
				var b = a.closest(".form-group").find("input");
				b.next().remove(),
					b.after('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>'),
					a.closest(".form-group").removeClass("has-error").addClass("has-success"),
					a.remove()
			}
		})
});

$("#tab_register").click(function(){
	$("#tab_register").css("color","#000000")
	$("#tab_login").css("color","#29A176")
})
$("#tab_login").click(function(){
	$("#tab_register").css("color","#29A176")
	$("#tab_login").css("color","#000000")
})
