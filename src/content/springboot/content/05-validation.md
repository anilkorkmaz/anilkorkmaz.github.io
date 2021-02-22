#  Validation in Spring Boot

## Add the pom.xml dependency

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

## Validate model or entity

```java
public class User{

    @NotEmpty(message = "ID cannot be empty")
    private int id;

    @NotBlank
    @Size(min = 3,max = 100)
    private String username;

    private String displayName;

    @NotBlank
    @Size(min = 6,max = 26)
    @Pattern(regexp ="^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$")
    private String password;

    @Email
    private String email;
}
```

## Check model with Valid anotation

```java
@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class RestUser {

    // If user is not valid, the method throw MethodArgumentNotValidException  
    @PostMapping("/")
    public User saveUser(@Valid @RequestBody User saveUser) {
        // ...
        return saveUser;
    }

```

## Catch MethodArgumentNotValidException and return error map

```java
@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class RestUser {

    @PostMapping("/")
    public User saveUser(@Valid @RequestBody User saveUser) {
        // ...
        return saveUser;
    }

    // If a post or put request is not valid, usually sent bad request status code to client
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String,String> handleValidationException(MethodArgumentNotValidException e){
        Map<String,String> validationErrors = new HashMap<>();
        e.getBindingResult().getFieldErrors().forEach(fieldError -> {
            validationErrors.put(fieldError.getField(),fieldError.getDefaultMessage());
        });
        return validationErrors;
    }

```