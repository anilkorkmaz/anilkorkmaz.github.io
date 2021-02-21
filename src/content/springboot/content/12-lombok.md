#  Lombok

## Add the pom.xml dependency

```xml
<!-- Lombok getter-setter-constructure -->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
</dependency>
```

## What is lombok

- *Project Lombok is a java library that automatically plugs into your editor and build tools, spicing up your java* 
<a href="https://www.projectlombok.org" target="_blank">More details</a>

## Some useful Annotations

- @Getter
- @Setter 
- @ToString
- @EqualsAndHashCode
- @Data -> contain @Getter/@Setter/@ToString/@EqualsAndHashCode/@AllArgsConstructor
- @NoArgsConstructor
- @RequiredArgsConstructor 
- @AllArgsConstructor
- @Log

## Model

```java
// no need getter, setters, ToString, EqualsAndHashCode and AllArgsConstructor
@Data
public class User implements Serializable {

    @Id
    private String uuid;

    private String userName;

    private String password;


}
```


## Serice

```java
@Service
@Log
public class UserService {
//    no need this blog
//    private Logger LOGGER = LoggerFactory.getLogger(LoggingAspect.class);
    public void doSomething() {
        log.error("Error");
        log.warn("warn");
        log.info("info");
        log.debug("debug");
        log.trace("trace");
    }
}
```