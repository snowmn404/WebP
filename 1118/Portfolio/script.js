
const themeButton = document.getElementById("theme-toggle");

// 저장된 테마 적용
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// 다크 모드 전환
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
