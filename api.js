

export async function getVans(url){
  
  const res= await fetch(url);
  if(!res.ok){
    throw{
      message:"there was an error!",
      status:res.status,
      statusText: res.statusText
    };
  }
  const data= await res.json();
  return data.vans;
  
  
}