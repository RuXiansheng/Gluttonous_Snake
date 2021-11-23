// 定义记分牌的类
class ScorePanel{
    // score和level用来记录分数和等级
    score:number = 0;
    level:number = 1;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;

    //限制等级变量
    maxLevel:number = 10;
    upScore:number = 10;

    constructor(maxLevel = 10,upScore = 10) {
        //分数和等级,在构造函数中进行初始化
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    //加分方法
    addScore(){
        this.scoreEle.innerHTML = ++this.score+'';
        //判断分数
        if(this.score % this.upScore === 0){
            this.addLevel()
        }
    }

    //等级提升方法
    addLevel(){
        if(this.level<this.maxLevel){
            this.levelEle.innerHTML = ++this.level+'';
        }
    }
}

export  default ScorePanel;