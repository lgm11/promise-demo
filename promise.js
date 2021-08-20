class Promise2{
    queue1 = []//存放成功后调用的函数
    queue2 = []//存放失败后调用的函数
    constructor(fn){
      const resolve = () => {
        setTimeout(()=>{
          for(let i =0;i<this.queue1.length;i++){
            //成功后调用then存在队列里面的函数
            this.queue1[i]()
          }         
        })
      }
      const reject = () => {
        setTimeout(()=>{
          for(let i =0;i<this.queue2.length;i++){
            //失败后调用then存在队列里面的函数
            this.queue2[i]()
          }         
        })
      }
      fn(resolve,reject)
    }
    then(s,e){
      this.queue1.push(s)
      this.queue2.push(e)
      return this
    }
  }