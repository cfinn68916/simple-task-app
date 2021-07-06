function init () {
    "use strict";
    let used=[];
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
        
        
        const db=document.createElement("button");
        const bn=document.createTextNode('delete');
        db.appendChild(bn);
        db.setAttribute("id",'b'+n)
        para.appendChild(db);
        ById("div1").appendChild(para);
        used.push(n)
        const na=n;
        ById('b'+na).addEventListener("click",del2);
        n=n+1;
    }
    function del2(event){
        let id=event.srcElement.id;
        del_by_item(id)
        del_by_item(id.replace('b',''))
    }
    
    function del_by_item(v){
        let i=ById(v);
        if (i!=null){
            i.remove();
        }
    }
    function del(){
        let v=ById("removeid").value;
        del_by_item(v);
    }
    function del_all(){
        used.forEach(del_by_item)
        used=[];
    }
    ById("sm").addEventListener("click",subm)
    ById("rm").addEventListener("click",del)
    ById("rm_all").addEventListener("click",del_all)
};
