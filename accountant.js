// accountant.js – Logic cho trang Accountant
import {requireLogin} from "./auth.js";
import {renderMenu} from "./layout.js";

requireLogin();
renderMenu();

let data = JSON.parse(localStorage.getItem("TRUCKING_PLAN")||"[]");

function render(list=data){
  tbody.innerHTML="";
  list.forEach((r,i)=>{
    tbody.innerHTML+=`
      <tr>
        <td>${i+1}</td>
        <td>${r.planDate||""}</td>
        <td>${r.customer||""}</td>
        <td>${r.qty||""}</td>
        <td>${Number(r.price||0).toLocaleString("vi-VN")}</td>
        <td>${(r.qty*(Number(r.price)||0)).toLocaleString("vi-VN")}</td>
      </tr>`;
  });
}

window.doSearch = function(){
  const f=fromDate.value,t=toDate.value;
  render(data.filter(r=>{
    if(f && r.planDate<f) return false;
    if(t && r.planDate>t) return false;
    return true;
  }));
};

render();
