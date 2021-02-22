# Round Double and Float with Decimal Place

## Float 

```java
    public static float floatRound(float d, int decimalPlace) {
        BigDecimal bd = new BigDecimal(Float.toString(d));
        bd = bd.setScale(decimalPlace, BigDecimal.ROUND_HALF_UP);
        return bd.floatValue();
    }
```
## Double 

```java
    public static double doubleRound(double d, int decimalPlace) {
        if (decimalPlace < 0) throw new IllegalArgumentException();
        long factor = (long) Math.pow(10, decimalPlace);
        d = d * factor;
        long tmp = Math.round(d);
        return (double) tmp / factor;
    }
```

- Example : **d = 5.685** and **decimalPlace = 2** the methods return **5.7**.
