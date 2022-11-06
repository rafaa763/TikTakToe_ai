const turn= document.getElementById("player_turn");
turn.innerHTML="X Turn";
var player="X";


var position=[1,2,3,4,5,6,7,8,9];
var left_position=[1,2,3,4,5,6,7,8,9];
var game_over=false;
var restart_but=document.getElementById("restart_button");
restart_but.addEventListener("click",restart);


function restart(){
    player="X";
    game_over=false;
    for(Element in position){
        var cel=parseInt(Element,10)+1;
        position[cel-1]=cel;
        left_position[cel-1]=cel;
        document.getElementById(cel).innerHTML="";
}
    turn.innerHTML="X Turn";
}
function dosome(cell){

    var index=position.indexOf(cell);
    

    if(player=="X"&&index!=-1&&game_over==false){
        position_mangement(index);
        document.getElementById(cell).innerHTML="X";
        turn.innerHTML="O Turn";
        player="O";
        


}
    else if(player=="O"&&index!=-1&&game_over==false){
        position_mangement(index);
        document.getElementById(cell).innerHTML="O";
    
        turn.innerHTML="X Turn";
        player="X";
}
    if(verifywin()=="X"||verifywin()=="O"){
        turn.innerHTML=verifywin()+" win";
        game_over=true;
}

}
function verifywin(){
    switch(true){
        case (position[0]==position[1] && position[0]==position[2]) :
            return position[0];
            break;
        case (position[3]==position[4] && position[3]==position[5]) :
            return position[3];
            break;
        case (position[6]==position[7] && position[6]==position[8]) :
            return position[6]; 
            break;   
        case (position[0]==position[3] && position[0]==position[6]) :
            return position[0];
            break;
        case (position[1]==position[4] && position[1]==position[7]) :
            return position[1];
            break;
        case (position[2]==position[5] && position[2]==position[8] ):
            return position[2];
            break;
        case (position[0]==position[4] && position[0]==position[8]) :
            return position[0];
            break;
        case (position[2]==position[4] && position[2]==position[6]) :
            return position[2];
            break; 
}
    
}
function ai_play(left_position,player){


}
function position_mangement(index){

    left_position.splice(left_position.indexOf(position[index]),1);
    position.splice(index,1,player);
    console.log(position+"\n"+left_position);

}