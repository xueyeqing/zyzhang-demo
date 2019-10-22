## 常见命令
    新建工程 ---------------   ng new xxx
    新建module -------------   ng g m xxx
    新建compoment ----------   ng g c xxx
    新建directive ----------   ng generate directive xxx
    新建service ------------   ng generate service xxx

## Pipe管道----（dateFormat）
    <p>{{'2016-01-24 14:23:45' | dateFormat: 'YYYY-MM-DD h:mm:ss'}}</p>
    <p>{{1571727995000 | dateFormat: 'YYYY-MM-DD h:mm:ss'}}</p>

## Directive指令

   ### 外部点击触发事件----（clickOutside）
    <p style="cursor: pointer" (clickOutside)="outSide()">clickOutside（点我以外的区域会触发）</p>
    
## 打包组件和模块发布到npm，并使用
   ![](https://github.com/xueyeqing/zyzhang-demo/blob/master/src/assets/one.png)
   ![](https://github.com/xueyeqing/zyzhang-demo/blob/master/src/assets/two.png)
   ![](https://github.com/xueyeqing/zyzhang-demo/blob/master/src/assets/three.png)

