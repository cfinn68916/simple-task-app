function init () {
    "use strict";
    function ById(em){
        return document.getElementById(em)
    }
    let n=0;
    function subm(){
        let v=ById("add").value;
        const para=document.createElement("li");
        const node=document.createTextNode(''+n+':'+v);
        para.setAttribute("id",''+n);
        para.appendChild(node);
        ById("div1").appendChild(para);
        n=n+1;
    }
    function del(){
        v=ById("removeid").value
        ById(v).remove();
    }
    ById("sm").addEventListener("click",subm)
    ById("rm").addEventListener("click",del)
};
