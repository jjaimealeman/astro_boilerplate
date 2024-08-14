import { defineDb, defineTable, column } from 'astro:db'

// Define the database configuration
// https://astro.build/db/config

// FUNCTION-BASED STRUCTURE (DEFINETABLE)
// Defining the authors table
const Authors = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		name: column.text(),
		createdAt: column.date({ default: new Date() }),
		updatedAt: column.date({ default: new Date() })
	}
})

// Defining the posts table
const Posts = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		title: column.text(),
		content: column.text(),
		authorId: column.number({ references: () => Authors.columns.id, indexed: true }),
		createdAt: column.date({ default: new Date() }),
		updatedAt: column.date({ default: new Date() })
	}
})

// Defining the users table
const Users = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		name: column.text(),
		email: column.text(),
		createdAt: column.date({ default: new Date() }),
		updatedAt: column.date({ default: new Date() })
	}
})

// Defining the comments table
const Comments = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		userId: column.number({ references: () => Users.columns.id, indexed: true }),
		postId: column.number({ references: () => Posts.columns.id, indexed: true }),
		body: column.text(),
		likes: column.number(),
		flagged: column.boolean(),
		published: column.date(),
		metadata: column.json(),
		createdAt: column.date({ default: new Date() }),
		updatedAt: column.date({ default: new Date() })
	}
})

export default defineDb({
	tables: {
		authors: Authors,
		posts: Posts,
		users: Users,
		comments: Comments
	}
})