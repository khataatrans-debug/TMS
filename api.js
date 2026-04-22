// api.js – Wrapper gọi server (sau này gắn backend)
export async function apiGet(url){
  const res = await fetch(url,{credentials:"include"});
  if(!res.ok) throw new Error("API GET error");
  return await res.json();
}

export async function apiPost(url,data){
  const res = await fetch(url,{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    credentials:"include",
    body:JSON.stringify(data)
  });
  if(!res.ok) throw new Error("API POST error");
  return await res.json();
}
