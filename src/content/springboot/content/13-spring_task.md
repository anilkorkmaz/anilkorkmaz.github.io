#  Spring task / Thread Executer

## Add EnableScheduling Annotation to Main SpringBootApplication class

```java
@SpringBootApplication
@EnableScheduling
public class SummaryAgentApplication {

    public static void main(String[] args) {
        SpringApplication.run(SummaryAgentApplication.class, args);
    }

}
```


### Define an Executor

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.util.concurrent.Executor;

@Configuration
@EnableAsync
public class ExecutorConfig {

    @Bean("subsequently-data")
    public Executor taskExecutorA() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();

        // minimum number of threads can run at same time 
        executor.setCorePoolSize(10);
        // when the corePoolSize is reached the next task will be shift to the queue 
        executor.setQueueCapacity(30);
        // maximum threads run at same time
        executor.setMaxPoolSize(100);
        executor.setThreadNamePrefix("subsequently-data-");
        executor.initialize();
        return executor;
    }

}
```

## Cretate Task method with @Scheduled and @Async annotaion

```java
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * @author Anıl Korkmaz
 * @contact anil.korkmaz@mail.com
 */
@Component
@Slf4j
public class SubsequentlySentDataTask {

    // Cron Scheduled - every specified minuted 
    @Scheduled(cron = "0 3,13,23,33,43,53 * * * *")
    @Async("subsequently-data")
    public void processSubsequentlySentData() {
        try {
            log.info("Hello world");

        } catch (Exception e) {
            log.error("Bad day", e.getMessage());
        }
    }

}
```