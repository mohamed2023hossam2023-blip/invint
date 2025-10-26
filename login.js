
window.onbeforeunload = function() {
    sessionStorage.clear();
};

document.getElementById("loginForm").onsubmit = function(e) {
    e.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    sessionStorage.setItem("loginEmail", email);
    sessionStorage.setItem("loginPassword", password);

    // رسالة بعد التسجيل
    alert("تم التسجيل بنجاح!");

    // التحويل مباشرة بعد إغلاق الرسالة
    window.location.href = "index.html";
}
