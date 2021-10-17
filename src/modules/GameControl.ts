/*
 * @Authro: 9yc-ruizhu
 * @Date: 2021-09-09 17:04:03
 * @LastEditors: 9yc-ruizhu
 * @LastEditTime: 2021-09-10 15:36:15
 * @Description: 
 */
import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

//游戏控制器
class GameControl {
    //定义三个属性
    private snake: Snake;
    private food: Food;
    private scorePanel: ScorePanel;

    //记录蛇移动的方向
    private _direction: string = "";
    //记录游戏是否结束
    private isLive: boolean = true;

    get direction() {
        return this._direction;
    }

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
        
    }

    init(): void {
        document.addEventListener("keydown", this.keydownHandler.bind(this));
        this.run();
    }

    //键盘按下响应函数
    keydownHandler(event: KeyboardEvent): void {
        this._direction = event.key;
    }

    //控制蛇移动的方法
    run(): void {
        let snakeX = this.snake.X; //current pos
        let snakeY = this.snake.Y; //current pos

        switch(this._direction) {
            case "ArrowUp":
            case "Up":
                snakeY -= 10;
                break;
            case "ArrowDown":
            case "Down":
                snakeY += 10;
                break;
            case "ArrowLeft":
            case "Left":
                snakeX -= 10;
                break;
            case "ArrowRight":
            case "Right":
                snakeX += 10;
                break;
        }

        //检查蛇是否迟到食物
        this.hasEaten(snakeX, snakeY)
            
        //修改
        try {
            this.snake.X = snakeX;
            this.snake.Y = snakeY;
        } catch(e) {
            alert(e);
            this.isLive = false;
        }

        //定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    hasEaten(x: number, y: number): void {
        if(x === this.food.X && y === this.food.Y) {
            //食物位置重置
            this.food.change();
            //分数增加
            this.scorePanel.addScore();
            //蛇长度增加
            this.snake.addBody();
        } 
    }
}

export default GameControl;