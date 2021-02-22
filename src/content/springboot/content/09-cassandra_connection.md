#  Spring Boot And Cassandra

## Add the pom.xml dependency

```xml
<!--Data-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<!-- Spring H2 Database -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-cassandra</artifactId>
</dependency>
```

## Add application.properties confifurations

```properties
# Cassandra Db connection
    spring.data.cassandra.keyspace-name=${oc.cassandra.keyspace}
    spring.data.cassandra.contact-points=${oc.cassandra.url}
    spring.data.cassandra.port=${oc.cassandra.port}
    #spring.data.cassandra.cluster-name=cassandra-cluster
    spring.data.cassandra.username=${oc.cassandra.username}
    spring.data.cassandra.password=${oc.cassandra.password}
    spring.data.cassandra.schema-action=create_if_not_exists

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
@Table("device_data")
public class DeviceData implements Serializable {

    private static final long serialVersionUID= 1L;

    @PrimaryKeyColumn(name="device_uuid",  type = PrimaryKeyType.PARTITIONED)
    private String deviceUuid;

    @PrimaryKeyColumn(name="device_location",  type = PrimaryKeyType.PARTITIONED)
    private String deviceLocation;

    @PrimaryKeyColumn(name="creation_date", type = PrimaryKeyType.CLUSTERED)
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime creationDate;

    @Column("device_version")
    private String controllerVersion;

    @Column("company_uuid")
    private String companyUuid;

    @Column("zone_uuid")
    private String zoneUid;

    @Column("sensor_values")
    private Map<String,String> sensorValues;

    public DeviceData() {
    }

    //getter and setter

}
```

## Create a Repository

```java
@Repository
public interface IDeviceDataRepository extends JpaRepository<DeviceData, Serializable> {
    List<DeviceData> findByDeviceUuidAndDeviceLocationAndCreationDateGreaterThan(String deviceUuid, String locationUuid, LocalDateTime beginDate);

    // aly
    default List<DeviceData> getDeviceDataAfterBeginDate(String deviceUuid, String locationUuid, LocalDateTime beginDate) {
        return findByDeviceUuidAndDeviceLocationAndCreationDateGreaterThan(String deviceUuid, String locationUuid, LocalDateTime beginDate);
    }
}
```
