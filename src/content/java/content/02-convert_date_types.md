# Converting Date Types

## Convert from Date to LocalDateTime
```java
    public static LocalDateTime ConvertToLocalDateTimeFromDate(Date dateToConvert) {
        return new java.sql.Timestamp(
                dateToConvert.getTime()).toLocalDateTime();
    }

```

## Convert from LocalDateTime to Date
```java
    public static Date convertLocalDateTimeToDate(LocalDateTime dateToConvert) {
        return Date.from( dateToConvert.atZone( ZoneId.systemDefault()).toInstant());
    }
```

## Convert from LocalDateTime to Timestamp

```java
    public static Timestamp convertLocalDateTimeToDate(LocalDateTime dateToConvert) {
        return Timestamp.valueOf(dateToConvert);
    }
```

## Convert from Timestamp to LocalDateTime

```java
    public static Timestamp convertLocalDateTimeToDate(Timestamp timeStamp) {
        return timeStamp.toLocalDateTime().toLocalDate();
    }
```