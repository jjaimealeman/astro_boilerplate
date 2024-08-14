import { defineDb, defineTable, column } from 'astro:db'

// Define the database configuration
// https://astro.build/db/config

// FUNCTION-BASED STRUCTURE (DEFINETABLE)
// Defining the users table
const Users = defineTable({
  columns: {
    id: column.number(),
    name: column.text(),
    email: column.text()
  }
});

// Defining the posts table
const Posts = defineTable({
  columns: {
    id: column.number(),
    title: column.text(),
    content: column.text(),
    author_id: column.number()
  }
});

// Defining the comments table
const Comments = defineTable({
  columns: {
    author: column.text(),
    body: column.text(),
    likes: column.number(),
    flagged: column.boolean(),
    published: column.date(),
    metadata: column.json()
  }
});

export default defineDb({
  tables: {
    users: Users,
    posts: Posts,
    comments: Comments
  }
});