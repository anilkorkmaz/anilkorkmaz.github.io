#  Spring Boot And Cassandra

## Add the pom.xml dependency

```xml
<!--Data-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<!-- H2 -->
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>
```

## Add application.properties confifurations

```properties
# H2 Db connection
    # This config provide to create files on root directory called devdb and h2 database store their data in it
    spring.datasource.url=jdbc:h2:./devdb
    spring.datasource.driverClassName=org.h2.Driver
    spring.h2.console.enabled=true
    #spring.h2.console.path=/h2console
    #spring.datasource.username=sa
    #spring.datasource.password=
    spring.h2.console.enabled=true
    spring.h2.console.settings.web-allow-others=true
    
#spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.H2Dialect

    #Jpa Settings
    #spring.jpa.hibernate.ddl-auto=none
    
    #spring.jpa.properties.hibernate.show_sql=false
    #spring.jpa.properties.hibernate.format_sql=false
    #spring.jpa.open-in-view=false
```

## Entity

```java
@Entity
public class UserModel {

    @Id
    @GeneratedValue
    private int id;

    private String username;

    private String displayName;

    private String password;

}
```

## Repository

- Extends JpaRepository, Same with postgresql and cassandra

```java
@Repository
public interface IUserRep extends JpaRepository<UserModel,Integer> {

    Optional<UserModel> findByUsername(String username);

}
```