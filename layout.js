<script>
function loadLayout(currentPage){
  const user = JSON.parse(localStorage.getItem("current_user") || "null");
  if(!user) return;

  const tabs = [
    {page:"trucking.html",    label:"🚚 Trucking"},
    {page:"accountant.html",  label:"📒 Accountant"},
    {page:"performance.html", label:"📈 Performance"},
    {page:"overview.html",    label:"📊 Overview"},
    {page:"users.html",       label:"👤 Quản lý User", admin:true}
  ];

  let html = `<div class="tabs">`;

  tabs.forEach(t=>{
    // 🔒 Users page: chỉ admin mới thấy
    if(t.admin && user.role !== "admin") return;

    // 👤 User thường: chỉ thấy page được tick trong phân quyền
    if(user.role !== "admin"){
      if(!Array.isArray(user.pages) || !user.pages.includes(t.page)) return;
    }

    const active = currentPage === t.page ? "active" : "";
    html += `<a href="${t.page}" class="${active}">${t.label}</a>`;
  });

  html += `</div>`;
  document.getElementById("layout").innerHTML = html;
}
</script>
