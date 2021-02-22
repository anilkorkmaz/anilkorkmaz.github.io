# Cast Object list

- Suppose you make a request to an api and return a response like the following 

```json
{
    "person":[
        {
            "name":"person0",
            "number":"5466186280"
        },
        {
            "name":"person1",
            "number":"5466186281"
        }
    ],
    "company":[
        {
            "name":"company0",
            "foundingDate":1995
        },
        {
            "name":"company1",
            "foundingDate":1996
        }
    ]

}
```

- You can convert the json to map 

```
Map<String, List<Object>> objectListMap
```

- Then create models for company and person

Company class
```java

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Company {
    private String name;
    private int foundingDate;
}
```

Person class
```java
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Person {
    private String name;
    private String number;
}
```
- Add jackson dependency to the pom for `ObjectMapper`

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.11.2</version>
</dependency>
```

- Use castListObject method

```java
public class CastArraylistExample {

    public static <T> List<T> castListObject(List<Object> list, Class<T> model) {
        final ObjectMapper mapper = new ObjectMapper();
        List<T> returnedList = new ArrayList<>();
        list.forEach(o -> {
            try {
                returnedList.add(mapper.convertValue(o, model));
            } catch (Exception e) {
                System.out.println(o.toString() + " cannot cast to "+ model.getSimpleName());
            }
        });
        return returnedList;

    }

    public static void main(String[] args) throws JsonProcessingException {
        // get the object with any service
        Map<String, List<Object>> objectListMap = someService.fetchObject();

        List<Object> objectList = objectListMap.get("company");
        List<Object> objectList2 = objectListMap.get("person");

        List<Company> companyList = castListObject(objectList, Company.class);
        List<Person> personList = castListObject(objectList2, Person.class);
        
    }

}
```