#  Entity Relations
<div style="text-align:center"><img src="/content/springboot/relation.png" alt="relation" style="height:320px;"/></div>

```java
@Getter
@Setter
@Entity
public class Group {

    @Id
    @GenericField(sortable = Sortable.YES)
    private Long id;

    private String name;

    private GroupType type;

    @Enumerated(EnumType.STRING)
    private GroupPrivacy privacy;

    @OneToMany(mappedBy = "group", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<GroupUser> users = new ArrayList<>();
}
```

```java
public enum GroupPrivacy {
    OPEN, CLOSED
}
```

```java
@Getter
@Setter
@Entity
public class GroupUser  {

    @Id
    @GenericField(sortable = Sortable.YES)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    private Group group;

    private LocalDateTime joinDate;

}
```

```java
@Getter
@Setter
@Entity
public class User  {

    @Id
    @GenericField(sortable = Sortable.YES)
    private Long id;

    private String name;

    private String surname;

    private String fullName;

    @PrePersist
    protected void onBaseCreate() {
    setFullName(this.name + this.surname));
    }

    @PreUpdate
    protected void onBaseUpdate() {
    setFullName(this.name + this.surname));
    }
}
```
