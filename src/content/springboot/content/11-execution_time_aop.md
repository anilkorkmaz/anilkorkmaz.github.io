#  Method execution time calculation with Annotation and AOP

## Add the pom.xml dependency

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-aop</artifactId>
</dependency>
```

## Create new annotation

```java
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface LogExecutionTime {

}

```

## Create AOP class

- 
```java
@Aspect
@Component
public class LoggingAspect {

    private Logger LOGGER = LoggerFactory.getLogger(LoggingAspect.class);

    @Around("@annotation(cloud.cantek.ms.observer.observerms.logging.LogExecutionTime)")
    public Object methodTimeLogger(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        MethodSignature methodSignature = (MethodSignature) proceedingJoinPoint.getSignature();

        // Get intercepted method details
        String className = methodSignature.getDeclaringType().getSimpleName();
        String methodName = methodSignature.getName();

        // You may access the method parameters
        Object[] args = proceedingJoinPoint.getArgs();
        for (Object arg : args) {
            log.info(arg.toString());
        }

        // Measure method execution time
        StopWatch stopWatch = new StopWatch(className + "->" + methodName);
        stopWatch.start(methodName);
        Object result = proceedingJoinPoint.proceed();
        stopWatch.stop();
        // Log method execution time
        if (log.isInfoEnabled()) {
            log.info("Execution Time : "+ className + "->" + methodName +" "+ String.valueOf(stopWatch.getTotalTimeSeconds()));
        }
        return result;
    }
}
```

## Use the annotation above methods

```java
@LogExecutionTime
public String graylogTest() throws InterruptedException {
    Thread.sleep(1500);
    return "Success";
}
```
