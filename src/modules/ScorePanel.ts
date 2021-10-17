/*
 * @Authro: 9yc-ruizhu
 * @Date: 2021-09-09 16:40:24
 * @LastEditors: 9yc-ruizhu
 * @LastEditTime: 2021-09-10 14:26:06
 * @Description: 
 */
//游戏分数版
class ScorePanel {
    private score: number = 0;
    private _level: number = 1
    private maxLevel: number; //让用户设置最高等级,默认10
    private upScore: number; //多少分生一级

    private scoreSpan: HTMLElement;
    private levelSpan: HTMLElement;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.maxLevel = maxLevel;
        this.upScore = upScore;
        this.scoreSpan = document.querySelector("#score")!;
        this.levelSpan = document.querySelector("#level")!;
    }

    //设置加分方法
    addScore(): void {
        this.scoreSpan.innerHTML = ++this.score + "";
        //判断分数是多少
        if(this.score % this.upScore === 0) {
            this.levelUp();
        }
    }

    //升级方法
    levelUp(): void {
        if(this.level < this.maxLevel) {
            this.levelSpan.innerHTML = ++this._level + "";
        }
    }

    //获取level增加难度
    get level() {
        return this._level;
    }
}

export default ScorePanel;