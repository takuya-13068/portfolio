// Canvas 処理
window.addEventListener('load', init); //ロード完了後にinitが実行されるように、ロードイベントを登録
window.addEventListener('DOMContentLoaded', function(){ ///キー入力イベントを登録
    window.addEventListener("keydown", function(e){
    });
});

function init(){
    ctx2d = document.getElementById('myCanvas').getContext('2d');
    
    console.log(ctx2d.width);
    tick();
}

function tick(){
    ctx2d.fillStyle = 'rgba(0,0,0,1)'
    //ctx2d.fillRect(40,40,40,40);

    requestAnimationFrame(tick); 
}
