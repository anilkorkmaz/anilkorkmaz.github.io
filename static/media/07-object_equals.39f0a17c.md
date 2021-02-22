# Null safe object equality

- Use the `Objects.equals(p1,p2)` in `java.util.Objects`

## Example

```java
import java.util.Objects;

public class ObjectEquality {
    public static void main(String[] args) {
        int x = 3;
        Integer rx = 3;
        Integer nx = null;
        Integer n2x = null;
        Short sx = 3;

        System.out.println(Objects.equals(x,rx));
        System.out.println(Objects.equals(x,nx));
        System.out.println(Objects.equals(nx,n2x));
        System.out.println(Objects.equals(x,sx));

    }
}
```

## Output

```
true
false
true
false
```