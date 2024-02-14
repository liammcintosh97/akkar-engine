class _Time {
  constructor(){
    this.renderTime = 0
    this.time = 0
    this.frames = 0
    this.deltaTime = 0
  }

  tick(_time){
    this.frames++
    this.renderTime = _time - this.time
    this.time = _time
    this.deltaTime =  this.renderTime / 1000
  }

  getTimeFraction = (duration)=>{
    let timeFraction = this.renderTime / duration;
    if (timeFraction > 1) timeFraction = 1;

    return timeFraction
  }
}
  
const Time = new _Time()
export default Time