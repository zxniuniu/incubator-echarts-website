function initValidator(){$("#login-form").validator().on("valid.bs.validator",function(n){""!==$("#email-input").val()&&""!==$("#password-input").val()&&$("#reg-btn,#login-btn").attr("disabled",!1)}).on("invalid.bs.validator",function(n){$("#reg-btn,#login-btn").attr("disabled",!0)})}function showLogin(){pipe.isLoggedIn?$("#user-dropdown-panel").slideToggle():$("#login-dropdown-panel").slideToggle()}function cancelLogin(){$("#login-dropdown-panel").slideUp()}function login(){var n=$("#email-input").val(),i=$("#password-input").val();isLoginFormValid(n,i)||alert("登录失败，请检查输入项！"),$.post("login",{email:n,password:i},function(n){log(n.name+"登录成功"),$("#login-dropdown-panel").slideUp(),$("#nav-avatar-img")[0].src=n.avatar,pipe.isLoggedIn=!0}).fail(function(n){alert("登录失败！"),console.error(n)})}function logout(){$.get("logout",{},function(n){n.success&&window.location.reload()})}function register(){var n=$("#email-input").val(),i=$("#password-input").val();isLoginFormValid(n,i)||alert("注册失败，请检查输入项！"),$.post("register",{email:n,password:i},function(n){$("#login-email").val($("#reg-email").val()),$("#login-pw").val($("#reg-pw").val()),login()}).fail(function(n){alert("注册失败！"),console.error(n)})}function isLoginFormValid(n,i){var o=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,a=/^[0-9A-Za-z_]{8,16}$/;return o.test(n)&&a.test(i)}$(document).ready(function(){initValidator()});