#  Entity Relations

## Add EnableScheduling Annotation to Main SpringBootApplication class

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

public enum GroupPrivacy {
    OPEN, CLOSED
}

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

@Getter
@Setter
@Entity
public class User  {

    @Id
    @GenericField(sortable = Sortable.YES)
    private Long id;

    @KeywordField(searchable = Searchable.YES, sortable = Sortable.YES, normalizer = "lowercase")
    private String name;

    @KeywordField(searchable = Searchable.YES, sortable = Sortable.YES, normalizer = "lowercase")
    private String surname;

    @ToString.Include
    @KeywordField(searchable = Searchable.YES, sortable = Sortable.YES, normalizer = "lowercase")
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
