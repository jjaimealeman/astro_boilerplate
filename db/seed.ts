import { db, authors, users, posts, comments } from 'astro:db'

// https://astro.build/db/seed
export default async function () {
	// Seed the Authors table
	await db.insert(authors).values([
		{ id: 1, name: 'Kasim', createdAt: new Date(), updatedAt: new Date() },
		{ id: 2, name: 'Mina', createdAt: new Date(), updatedAt: new Date() }
	])

	// Seed the Users table
	await db.insert(users).values([
		{
			id: 1,
			name: 'Alice',
			email: 'alice@example.com',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{ id: 2, name: 'Bob', email: 'bob@example.com', createdAt: new Date(), updatedAt: new Date() }
	])

	// Seed the Posts table
	await db.insert(posts).values([
		{
			id: 1,
			title: 'My First Post',
			content: 'This is the content of my first post.',
			authorId: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id: 2,
			title: 'Another Day, Another Post',
			content: "Here's another post.",
			authorId: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		}
	])

	// Seed the Comments table
	await db.insert(comments).values([
		{
			id: 1,
			userId: 1,
			postId: 1,
			body: 'Great post!',
			likes: 5,
			flagged: false,
			published: new Date(),
			metadata: {},
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id: 2,
			userId: 2,
			postId: 1,
			body: 'Thanks for sharing.',
			likes: 3,
			flagged: false,
			published: new Date(),
			metadata: {},
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id: 3,
			userId: 1,
			postId: 2,
			body: 'Interesting thoughts!',
			likes: 2,
			flagged: false,
			published: new Date(),
			metadata: {},
			createdAt: new Date(),
			updatedAt: new Date()
		}
	])
}
