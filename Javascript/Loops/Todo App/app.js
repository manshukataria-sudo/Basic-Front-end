const toDo=[];
let flag=true;
while(flag==true){
    let req=prompt("...ENTER HERE ...");
    if(req=="list" && toDo.length==0){
            console.log("...Your to-Do list is empty...");
    }
    else if(req=="list"){
        console.log("...To-Do list...")
        for(ele of toDo){
            console.log(ele);
        }
    }
    else if(req=="add"){
        let task=prompt("...Enter your to-Do to add...");
        toDo.push(task);
        console.log("...To-Do added successfully...");
    }
    else if(req=="delete" && toDo.length==0){
        console.log("...Your to-Do list is empty...");
    }
    else if(req=="delete"){
        console.log("...To-Do list...")
        for(ele of toDo){
            console.log(ele);
        }
        let task=prompt("...Enter your to-Do to delete : ");
        for(let i=0;i<toDo.length;i++){
            if(toDo[i]==task){
                toDo.splice(i,1);
                break;
            }
        }
        console.log(`...${task} deleted successfully...`);
    }
    else if(req=="quit"){
        console.log("...Quit Successfully...");
        flag=false;
    }
    else{
        console.log("...INVALID REQUEST! Try Again...");
    }
}
