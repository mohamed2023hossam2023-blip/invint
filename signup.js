
window.onbeforeunload = function() {
    sessionStorage.clear();
};

document.getElementById("signupForm").onsubmit = function(e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    sessionStorage.setItem("signupName", name);
    sessionStorage.setItem("signupEmail", email);
    sessionStorage.setItem("signupPassword", password);

    // رسالة بعد التسجيل
    alert("تم انشاء الحساب بنجاح");

    // التحويل مباشرة بعد إغلاق الرسالة
    window.location.href = "login.html";
}