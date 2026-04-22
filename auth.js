(function(){
  const user = JSON.parse(localStorage.getItem("current_user") || "null");

  if(!user){
    alert("Chưa đăng nhập!");
    location.href = "login.html";
    return;
  }

  const page = location.pathname.split("/").pop().toLowerCase();

  if(!user.pages || !user.pages.includes(page)){
  alert("Bạn không có quyền vào trang này!");
  if(user.pages && user.pages.length > 0){
    location.href = user.pages[0];
  } else {
    location.href = "login.html";
  }
  return;
}

  document.addEventListener("DOMContentLoaded", ()=>{
    // Ẩn tab Users nếu không phải admin
    document.querySelectorAll(".admin-only").forEach(el=>{
      if(user.role !== "admin"){
        el.style.display = "none";
      }
    });

    // Ẩn tab không có quyền
    const allowed = user.pages.map(p=>p.toLowerCase());
    document.querySelectorAll(".tabs a").forEach(a=>{
      const p = a.getAttribute("href")?.toLowerCase();
      if(p && !allowed.includes(p)){
        a.style.display = "none";
      }
    });
  });
})();
