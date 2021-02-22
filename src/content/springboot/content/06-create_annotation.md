#  Create new Annotation for validation

## Create new annotation

```java
import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Constraint(
        validatedBy = {UsernameCheckValidator.class}
)
@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
public @interface UsernameCheck {
    String message() default "Username have bad words";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}

```

## Create new Validator class that implements ConstraintValidator interface

```java
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class UsernameCheckValidator implements ConstraintValidator<UsernameCheck, String> {

    @Override
    public boolean isValid(String username, ConstraintValidatorContext constraintValidatorContext) {
        // And so on.. :)
        List<String> bannedWordList = Arrays.asList("nigga", "fuck", "penis");
        boolean isBannedWord = bannedWordList.stream().anyMatch(username::contains);

        return !isBannedWord;
    }

}
```

## Use the validator

```java
public class User {

    @UsernameCheck
    @NotBlank
    @Size(min = 3,max = 100)
    private String username;

}
```

## Validate when you want with @Valid annotation
```java
    @PostMapping("/")
    public User saveUser(@Valid @RequestBody User saveUser) {
        // ...
        return saveUser;
    }
```
