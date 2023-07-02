document.getElementById("prestadoresBtn").addEventListener("click", ()=>{
    localStorage.setItem("prestadores", document.getElementById("prestadores").value.replace(/\\n?\s*/g, ""))
})
document.getElementById("consumidoresBtn").addEventListener("click", ()=>{
    localStorage.setItem("consumidores", document.getElementById("consumidores").value.replace(/\\n?\s*/g, ""))
})
document.getElementById("servicosBtn").addEventListener("click", ()=>{
    localStorage.setItem("servicos", document.getElementById("servicos").value.replace(/\\n?\s*/g, ""))
})