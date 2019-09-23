## SWBATs
- Review REST
- Review MVC
- Finish Deliverables
4 questions to ask when building out your Deliverables
  - Model
  - Routes
  - Controller
  - Views


### Deliverables
 - [ ] **As a site visitor, I should be able to see all of the books in my library**
  - Models
    - Yeah, create a book model
      - Class -> book.rb
      - Migrations -> migrate the book class
      `books table `
      - Relationships
        - no relations at this point.
      - Seed Data
        - adapter
  - Routes
  - Controller Action
  - Views
 - [ ] **As a site visitor, I should be able to view a specific book**
 - [ ] **As a site visitor, I should be able to create a new book**
 - [ ] **As a site visitor, update a specific book**
 - [ ] **As a site visitor, delete an existing book**

### Routes Summary
| CRUD | HTTP Verb  | Route  | Action  |  View | Used For |
|---|---|---|---|---|---|
| Create | GET &darr; | `/books/new`  | `new` |`new.erb`  |  |
| Create | POST | `/books`  |  `create` |redirect to show page| |
| Read |GET | `/books`  | `index`  | `index.html.erb`| |
| Read |GET | `/books/:id`| `show`| `show.html.erb` | |
| Update | GET &darr; | `/books/:id/edit`  | `edit`| `edit.html.erb` | |
| Update  | PATCH | `/books/:id`  | `update` | redirect back to show| |
| Delete  | "Button/Link" |  - |  - | |  |
| Delete | Delete |  `/books/:id` |  `destroy`| redirect_to index||
