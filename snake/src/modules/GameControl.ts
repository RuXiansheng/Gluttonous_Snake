import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

//游戏控制器,控制其他所有类
class GameControl {

    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;
    isLive = false;

    //创建一个属性来存储蛇的移动方向
    direction:string = ''
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    // 游戏的初始化方法,调用后游戏开始'
    init(){
        // 绑定键盘按下事件
        document.addEventListener("keydown",this.keydownHandle);
        //调用run
        this.run();
    }
    // 创建一个键盘按下的响应函数
    keydownHandle = (event:KeyboardEvent) =>{
        this.direction = event.key
    }

    // 蛇移动
    run(){
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction){
            case "ArrowUp":
                Y = Y - 10;
                break;
            case "ArrowDown":
                Y = Y + 10;
                break;
            case "ArrowLeft":
                X = X - 10;
                console.log(X)
                break;
            case "ArrowRight":
                X = X - 10;
                break;
        }

        this.checkEat(X,Y)
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        }catch (e:any){
            alert(e.message)
            this.isLive = false;
        }

        if(this.isLive){
            setTimeout(this.run.bind(this),300 -(this.scorePanel.level-1) * 300)
        }



    }
    // 定义一个方法,用来检测蛇是否吃到食物
    checkEat(x:number,y:number){
        if (x === this.food.X && y === this.food.Y){
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}
export default GameControl