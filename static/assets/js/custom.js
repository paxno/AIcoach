// 设置默认深色模式
document.addEventListener("DOMContentLoaded", function () {
  // 检查是否有保存的主题偏好
  if (!localStorage.getItem("theme")) {
    // 如果没有保存的偏好，设置为深色模式
    localStorage.setItem("theme", "dark");
    document.body.classList.add("night");
  } else if (localStorage.getItem("theme") === "dark") {
    // 如果保存的是深色模式，应用深色样式
    document.body.classList.add("night");
  }
});
