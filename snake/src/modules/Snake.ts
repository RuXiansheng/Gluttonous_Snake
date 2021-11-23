class Snake{
    // 表示蛇的元素
    head:HTMLElement;
    // 蛇的身体包括身体
    bodies:HTMLCollection;
    //获取蛇容器
    element:HTMLElement;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div')! as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    //获取蛇头坐标
    get X():number{
       return this.head.offsetLeft;
    }
    get Y():number{
        return this.head.offsetTop;
    }
    set X(value){
        if(this.X === value){
            return;
        }

        //X 的范围
        if(value < 0 || value > 290){
            throw new Error('蛇撞墙了~~')
        }

        //
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            if (value > this.X){
                value = this.X - 10;
            }else {
                value = this.X + 10;
            }
        }

        // 移动身体
        this.moveBody();
        this.head.style.left = `${value}px`;
        this.checkHeadBody();
    }
    set Y(value){
        if(this.Y === value){
            return;
        }

        //Y 的范围
        if(value < 0 || value > 290){
            throw new Error('蛇撞墙了~~')
        }

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            if (value > this.Y){
                value = this.Y - 10;
            }else {
                value = this.Y + 10;
            }
        }
        // 移动身体
        this.moveBody();
        this.head.style.left = `${value}px`;
        this.checkHeadBody();
    }

    //蛇增加身体
    addBody(){
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }
    // 蛇移动身体的方法
    moveBody() {
        /*
        *   将后边的身体设置为前边身体的位置
        * */
        for (let i = this.bodies.length-1;i>=0;i--){
            let x = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i-1] as HTMLElement).offsetTop;



            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = `${x}px`;
            (this.bodies[i] as HTMLElement).style.top = `${y}px`;
        }
    }

    checkHeadBody(){
        for (let i = 0;i<this.bodies.length;i++){
            let bd = this.bodies[i] as HTMLElement
            if (this.X === bd.offsetLeft && this.Y === bd.offsetLeft){
                throw  new Error('撞到自己了')
            }
        }
    }
}


export default Snake;
