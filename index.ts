const w : number = window.innerWidth 
const h : number = window.innerHeight
const parts : number = 5  
const scGap : number = 0.02 / parts 
const strokeFactor : number = 90 
const sizeFactor : number = 4.6 
const backColor : string = "#bdbdbd"
const colors : Array<string> = ["#4CAF50", "#F44336", "#2196F3", "#009688", "#3F51B5"] 
const delay : number = 20 
const rot : number = Math.PI / 2

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.divideScale(scale, i, n)) * n 
    }

    static sinify(scale : number) : number {
        return Math.sin(scale * Math.PI)
    }
}