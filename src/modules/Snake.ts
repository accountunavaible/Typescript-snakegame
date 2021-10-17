/*
 * @Authro: 9yc-ruizhu
 * @Date: 2021-09-09 16:43:10
 * @LastEditors: 9yc-ruizhu
 * @LastEditTime: 2021-09-10 15:37:28
 * @Description: 
 */
class Snake {
    private head: HTMLElement;
    private bodies: HTMLCollection; //包括蛇头的
    private element: HTMLElement; //蛇的容器
    constructor() {
        this.element = document.getElementById("snake")!;
        this.head = document.querySelector("#snake > div")!;
        this.bodies = this.element!.getElementsByTagName("div")!;
    }

    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    set X(value: number) {
        if(this.X === value) {
            return;
        } 

        if(value <0 || value > 290) {
            throw new Error("蛇撞墙了!");
        }

        //修改X的时候，不能掉头，往左走不能让其往右走，往右不能往左
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if(value > this.X) {
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }
        }

        this.moveBody();

        this.head.style.left = value +"px";
        this.hitSelf();
    }

    set Y(value: number) {
        if(this.Y === value) {
            return;
        }

        if(value <0 || value > 290) {
            throw new Error("蛇撞墙了!");
        }

        //修改X的时候，不能掉头，往左走不能让其往右走，往右不能往左
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if(value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }

        this.moveBody();

        this.head.style.top = value + "px";
        this.hitSelf();
    }

    //蛇增加身体的方法
    addBody(): void {
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }

    //蛇身移动
    moveBody(): void {
        //后边身体设置为前边身体位置
        //遍历获取所有身体
        for(let i = this.bodies.length -1; i > 0; i--) {
            //获取前面身体位置
            let prevX = (this.bodies[i -1] as HTMLElement).offsetLeft;
            let prevY = (this.bodies[i-1] as HTMLElement).offsetTop;

            //将值设置到当前位置
            (this.bodies[i] as HTMLElement).style.left = prevX + "px";
            (this.bodies[i] as HTMLElement).style.top = prevY + "px";
        }
    }

    hitSelf(): void {
        for(let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error("撞到自己了~~");
            }
        }
    }
}


export default Snake;