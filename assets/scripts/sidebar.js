function generateSidebar(){
  h1s = document.getElementById('content').getElementsByTagName('h1');
  navhtml = ''
  for(i=0;i<h1s.length;i++){
    h1s[i].setAttribute('id','h_'+i)
    navhtml += `<button onclick='showsection("${'h_'+i}")'>${h1s[i].innerHTML}</button>`
  }
  document.getElementById('sidebar').innerHTML = navhtml;
}

function showsection(id){
  document.getElementById(id).scrollIntoView({behavior: "smooth"});
}
