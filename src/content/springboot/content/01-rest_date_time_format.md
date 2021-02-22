#  Spring Boot Rest RequestParam DateTimeFormat 
 
```java
@GetMapping("/basic")
public String getTime(@RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH-mm-ss") LocalDateTime date) {

//  Get startDate in "yyyy-MM-dd'T'HH-mm-ss" format 
    return date.toString;

}

```