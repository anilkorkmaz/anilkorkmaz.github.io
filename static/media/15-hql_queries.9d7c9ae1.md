#  HQL Queries

* To review the TABLE structure, see **Entity Relations** page

## Join
```java
  @Query("select g from Group g join g.users gu where gu.user.id = :userId")
  List<Group> findAllGroupsByUserId(Long userId);
```

## Fetch
```java
  @Query("select g from Group g join fetch g.users gu ")
  List<Group> findAllGroups();
```

## Null check
```java
  @Query("select gu from Group g join g.users gu left join fetch gu.user where g.id = :groupId and (:lastUserId is null or gu.user.id <:lastUserId) order by gu.user.id desc")
  List<GroupUser> findGroupUsersByAdminStatus(Long groupId, Long lastUserId, Pageable pageable);

```

# In clouse for Enum
```java
  @Query("select g from Group g join g.users gu where gu.user.id = :userId and (COALESCE(:groupType, null) is null or g.type in (:groupType)) ")
  List<Group> findAllGroupsByUser(@Param("userId") Long userId,
                                  @Param("groupType") List<GroupType> groupType);
```

# Empty check

```java
  @Query("select g from Group g join g.users gu where g.privacy='OPEN' and (:#{#userIds.isEmpty()} = true or gu.user.id in :userIds)")
  List<Group> findAllGroupsByUserId(List<Long> userIds);
```