#  Spring Boot And Postgres

## Add the pom.xml dependency

```xml
<!--Data-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<!--Postgresql-->
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <scope>runtime</scope>
</dependency>
```

## Add application.properties confifurations

```properties
#Postgresql Db connection
    spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.PostgreSQLDialect
    spring.datasource.url=jdbc:postgresql://{postgres.url}
    spring.datasource.username={postgres.user}
    spring.datasource.password={postgres.pass}
    spring.datasource.initialization-mode=never
    ## Prevent the problem (Method org.postgresql.jdbc.PgConnection.createClob() is not yet implemented) .
    spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation=true

#Jpa Settings
    # ddl-auto options
    # validate= validate the schema, makes no changes to the database.
    # update= update the schema.
    # create= creates the schema, destroying previous data.
    # create-drop= drop the schema when the SessionFactory is closed explicitly, typically when the application is stopped.
    # none= does nothing with the schema, makes no changes to the database
    spring.jpa.hibernate.ddl-auto=none

    spring.jpa.properties.hibernate.show_sql=false
    spring.jpa.properties.hibernate.format_sql=false
    spring.jpa.open-in-view=false
```

## Create an entity

```java
@Entity
@Table(name = "user", schema = "public")
public class User implements Serializable {

    @Id
    private String uuid;

    private String userName;

    private String password;

    // getter and setters
}
```

## Create a Repository

```java
@Repository
public interface IUserRepository extends JpaRepository<User, String> {
    public User findByUuid(String userUuid);

    public User findByUserName(String userName);

}
```

## Create a Service (not required)

```java
@Service
@Transactional
public class UserService{

    private final IUserRepository userRepository;

    public UserService(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        // findAll is not defined IUserRepository but you should use it because of defined JpaRepository
        return userRepository.findAll();
    }

    public List<User> getAllUsers(String userName) {
        // findAll is not defined IUserRepository but you should use it because of defined JpaRepository
        return userRepository.findByUserName(userName);
    }
}
```