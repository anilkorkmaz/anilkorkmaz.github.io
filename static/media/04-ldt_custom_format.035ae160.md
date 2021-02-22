# LocalDateTime To String with custom format

```java
    public static String localDateTimeCustomFormat(LocalDateTime dt,String format) {
        // format for example "yyyy-MM-dd'T'HH-mm-ss"
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(format);
        return dt.format(formatter);
    }

```
