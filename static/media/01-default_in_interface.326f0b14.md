# Java, Default usage in Interface 

```java
public interface SomeInterface {

    List<RawValue> findByDeviceUuidAndControllerUuidAndCreationDateGreaterThanAndCreationDateLessThan(LocalDateTime beginDate, LocalDateTime finishDate);

    default List<RawValue> getRawValueBetweenDate(LocalDateTime beginDate, LocalDateTime finishDate) {
        return findBySenderDeviceUuidAndControllerUuidAndCreationDateGreaterThanAndCreationDateLessThan(beginDate,finishDate);
    }
}

```


- <a href="https://dzone.com/articles/interface-default-methods-java" target="_blank">More details -> dzone</a>