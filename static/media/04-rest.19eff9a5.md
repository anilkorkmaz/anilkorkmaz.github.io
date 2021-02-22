#  Rest Controller

## Add the pom.xml dependency

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```
## Sample RestController

```java
@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class RestUser {

    // GetMapping should be used when there is no save or update process
    // Get request have not body
    @GetMapping("/")
    public List<Users> getUsers() {
        return userlist;
    }

    // PathVariable annotation may should be used get spesific request 
    @GetMapping("/{related-user-name}")
    public User getUserWithUsername(@PathVariable("related-user-name") String relatedUser) {
        // ...
        return user;
    }

    // RequestParam annotation usually should be used to filter the objects
    @GetMapping
    public List<Users> getUsersWithAge(@RequestParam int age) {
        // ...
        return userlist;
    }

    // PostMapping generally used for save data 
    @PostMapping("/")
    public User saveUser(@Valid @RequestBody User saveUser) {
        // ...
        return saveUser;
    }

    // PostMapping generally used for update data 
    @PutMapping("/")
    public User updateUser(@Valid @RequestBody User updateUser) {
        // ...
        return updateUser;
    }

    // PostMapping generally used for delete data 
    @DeleteMapping("/{related-user-name}")
    public void deleteUser(@PathVariable("related-user-name") String relatedUserName) {
    // ...
    }
```

