#  Global Exception Handler

## Create a class and insert custom exception

```java
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class CustomException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    Map<String,Object> details = new HashMap<>();

    public CustomException(String message, Map<String, Object> details) {
        super(message);
        this.details = details;
    }
}

```

## Create a class and extends ResponseEntityExceptionHandler interface

- You can override ResponseEntityExceptionHandler methods 
- You can insert a custom exception handler

```java
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;

import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {

    // Override handleMethodArgumentNotValid() method and modify response 
    @Override
    public ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException e,
                                                               HttpHeaders headers, HttpStatus status,
                                                               WebRequest request){
        Map<String,String> validationErrors = new HashMap<>();
        e.getBindingResult().getFieldErrors().forEach(fieldError -> {
            validationErrors.put(fieldError.getField(),fieldError.getDefaultMessage());
        });
        return ResponseEntity.badRequest().body(validationErrors);

    }
    
    @ExceptionHandler(value = {ResourceNotFoundException.class})
    protected Map<String,Object> handleCustomException(CustomException exception
            , WebRequest request
            , HttpServletResponse response) {

        return exception.getDetails();
    }
}
```