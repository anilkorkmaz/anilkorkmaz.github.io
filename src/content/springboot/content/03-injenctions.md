#  Dependency Injections

## Autowired Annotation
- Field injection is not recommended.

```java
@Component
public class RestUser {

    @Autowired
    IUserService userService;
}

```

## Constructor Injection

- Spring team recommended.

```java
@Component
public class RestUser {

    private final IUserService userService;

    public RestUser(IUserService userService) {
        this.userService = userService;
    }
}

```
