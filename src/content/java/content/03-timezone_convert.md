# Converting Date Types

## Convert from Date to LocalDateTime

```java
    public static LocalDateTime convertLocalDateTimeForTimeZone(LocalDateTime localDateTime
            , String sourceTimezone, String destinationTimezone) {
        try {

            ZoneId zoneId = ZoneId.of(sourceTimezone);

            ZonedDateTime gmtPlus1 = localDateTime.atZone( zoneId );

            ZonedDateTime destinationZonedDateTime = gmtPlus1
                    .withZoneSameInstant( ZoneId.of(destinationTimezone));

            return destinationZonedDateTime.toLocalDateTime();
        } catch (Exception e) {
            return null;
        }
    }

```

- Example : **now = 12.00** and its time zone **GMT**. We want to convert **GMT+3**,  the method return **15:00**.
