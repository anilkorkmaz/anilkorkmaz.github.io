# Math Expression Evaluator / Parser 

- Mxparser should be used for resolve math functions

## Mxparser should be used for resolve math functions

- Add the dependency if you used maven project
  
```xml
<dependency>
    <groupId>org.mariuszgromada.math</groupId>
    <artifactId>MathParser.org-mXparser</artifactId>
    <version>4.2.0</version>
</dependency>
```

- Or add the jar file your project.
<a href="https://mathparser.org/mxparser-hello-world/mxparser-hello-world-java/" target="_blank">More details</a>

## Mxparser Usage 

```java
public class MathParser {

    public static void main(String[] args) {

        System.out.println("^^^^^^^^^^^^^");
        MathParser.calculateWithExpression();
        System.out.println("^^^^^^^^^^^^^");
        MathParser.calculateWithArgument();
        System.out.println("^^^^^^^^^^^^^");
        MathParser.calculateWithExpression2();
    }

    public static void calculateWithArgument() {
        Function myFunction = new Function("At(b,h) = 1/2 * b * h");

        Argument b = new Argument("b = 3");
        Argument h = new Argument("h = 11");
        Expression expression = new Expression("At(b,h)", myFunction, b, h);

        String expressionString = expression.getExpressionString();
        Double value = expression.calculate();
        
        System.out.println(expressionString + " : " + value);
    }

    public static void calculateWithExpression() {
        Function myFunction = new Function("At(b,h) = 1/2 * b * h");
        Expression expression = new Expression("At(2,4)", myFunction);
        
        String expressionString = expression.getExpressionString();
        Double value = expression.calculate();
        
        System.out.println(expressionString + " : " + value);

    }

    public static void calculateWithExpression2() {
        String functionSting = "At(b,h) = 1/2 * b * h";

        Function myFunction = new Function(functionSting);
        String a = "20";
        String b = "18";
        String functionNameAndVariable = String.format("At(%s,%s)", a, b);

        Expression expression = new Expression(functionNameAndVariable, myFunction);
  
        String expressionString = expression.getExpressionString();
        Double value = expression.calculate();
        
        System.out.println(expressionString + " : " + value);

    }

}
```

* The console output

```
--- exec-maven-plugin:1.5.0:exec (default-cli) @ MathParser ---
^^^^^^^^^^^^^
At(2,4) : 4.0
^^^^^^^^^^^^^
At(b,h) : 16.5
^^^^^^^^^^^^^
At(20,18) : 180.0
```