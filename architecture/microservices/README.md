# Django
- N+1
- Saga pattern
- Outbox Pattern
- Eventloop in fastapi
- fastapi and django

---

# N+1
- N+1 query problem is a classic database performance issue that occurs when an object relational mapper (ORM) like Django's fetch related objects lazily in a loop instead of in a sigle efficient query.
- It get its name from the total number of database queries executed.
    - 1 query to fetch N Primary records
    - N Additional queries (one per record) to fetch their related data inside a loop.
- If you have 10 records you make 11 queries. If you have 10000 records you make 10001 queries, which drastically slows down your application.

--- 
- e.g., Imagine a simple blogging app with two models: Author and Book.
 
```
from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=100)

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)

``` 

- The problematic code (N+1 Queries)
- Suppose you want to print each books title along with its authors name:
-
```
books = Book.objects.all()

for book in books: 
    print(f"{book.title} by {book.author.name}")

```
- Book.objects.all() executes 1 query to grap all books.
- For every book in the loop accessing book.author.name triggers django to exectue 1 new query to fetch that specific author from the database.
- If there are 100 books, Django executes 1 + 100 queries.

- How to fix in Django?
- Django provides tow main methods to eliminate N+1 queries by prejoining or pre-fetching related data.
- Use select_related() performs SQL Join directly in the database, fetching the primary and related records in a single query.
- 
```
books = Book.objects.select_related('author').all()

for book in books:
    print(f"{book.title} by {book.author.name}")

```
- Use prefetch_related() for ManyToManyField and reverse ForeignKey
- prefetech_related() executes seperate sql queries and joins the results in python memory. It is designed for multi valued relationships where sql joins would cause massive, duplicate result sets.
- If an author has many books and you want to loop over authors and list their books

```
authors = Author.objects.prefetch_related('book_set').all()

for author in authors:
    for book in author.book_Set.all():
        print(f"{author.name} wrote {book.title}")
```
- Total queries executed : 2, regardless of 10 or 10000 authors.
---


# References
- One to One relationships
- Many to Many relationships











































