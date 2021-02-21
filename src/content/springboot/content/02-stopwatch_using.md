#  Spring Boot StopWatch Using

## Basic
 
```java
    public void methodRunnedTimeCalculation() throws InterruptedException{
        StopWatch stopWatch = new StopWatch();
        stopWatch.start();
        Thread.sleep(500);
        stopWatch.stop();
        System.out.println("Total time MS : "+ stopWatch.getTotalTimeMillis());
        System.out.println("Total time Second : "+ stopWatch.getTotalTimeSeconds());

```

## More Advance

```java
    public void methodRunnedTimeCalculation() throws InterruptedException{
        StopWatch stopWatch = new StopWatch();
        stopWatch.start("Task A");
        Thread.sleep(500);
        stopWatch.stop();
        stopWatch.start("Task B");
        Thread.sleep(300);
        stopWatch.stop();
        stopWatch.start("Task C");
        Thread.sleep(200);
        stopWatch.stop();
        System.out.println(stopWatch.prettyPrint());
    }
```

- Console Output
```
Total time MS : 1000
Total time Second : 1.000258043
StopWatch '': running time = 1000258043 ns
---------------------------------------------
ns         %     Task name
---------------------------------------------
500087873  050%  Task A
300070010  030%  Task B
200100160  020%  Task C
```