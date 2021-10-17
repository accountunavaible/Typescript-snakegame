/*
 * @Authro: 9yc-ruizhu
 * @Date: 2021-09-09 16:40:18
 * @LastEditors: 9yc-ruizhu
 * @LastEditTime: 2021-09-09 16:40:18
 * @Description: 
 */

//食物类
class Food {
    private element: HTMLElement;
    constructor() {
        this.element = document.querySelector("#food")!;
    }
    get X() {
        //食物X轴坐标
        return this.element.offsetLeft;
    }

    get Y() {
        //食物Y轴坐标
        return this.element.offsetTop;
    }

    //修改食物位置
    change():void {
        //随机位置 游戏屏幕 304x304, 最大 0 -294 / 0-290
        //蛇移动一次是10px, 食物坐标也是整10
        let x = Math.floor(Math.random()*29)*10;
        let y = Math.floor(Math.random()*29)*10;
        this.element.style.left = x + "px";
        this.element.style.top = y + "px";
    }
}


export default Food;