import { db, authors, users, posts, comments } from 'astro:db'

// https://astro.build/db/seed
export default async function () {
	// Seed the Authors table
	await db.insert(authors).values([
		{ id: 1, name: 'Jaime', createdAt: new Date(), updatedAt: new Date() },
		{ id: 2, name: 'Jaimito', createdAt: new Date(), updatedAt: new Date() }
	])

	// Seed the Users table
	await db.insert(users).values([
		{
			id: 1,
			name: 'Isabella',
			email: 'isabella@example.com',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{ id: 2, name: 'Olivia', email: 'olivia@example.com', createdAt: new Date(), updatedAt: new Date() }
	])

	// Seed the Posts table
	await db.insert(posts).values([
		{
			id: 1,
			title: 'My First Post',
			content: 'This is the content of my first post. It provides an introduction to the topics I will be discussing and sets the stage for future posts. Stay tuned for more updates and insights.',
			authorId: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id: 2,
			title: 'My Second Post',
			content: 'This is the content of my second post. In this post, I delve deeper into the subject matter, providing more detailed analysis and examples. I hope you find the information useful and engaging.',
			authorId: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id: 3,
			title: 'My Third Post',
			content: 'This is the content of my third post. Here, I explore new ideas and concepts that build upon the foundation laid in my previous posts. Stay tuned for more in-depth discussions.',
			authorId: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id: 4,
			title: 'My Fourth Post',
			content: 'This is the content of my fourth post. In this post, I share my latest thoughts and reflections on the topics I have been covering. I hope you find it insightful and thought-provoking.',
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
			body: 'Great post! I really enjoyed reading your insights on this topic. Your perspective is refreshing and thought-provoking. Keep up the good work!',
			likes: 5,
			flagged: false,
			published: new Date(),
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id: 2,
			userId: 2,
			postId: 1,
			body: 'Thanks for sharing this post. It provided a lot of valuable information and I learned a lot from it. Looking forward to more posts from you.',
			likes: 3,
			flagged: true,
			published: new Date(),
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id: 3,
			userId: 1,
			postId: 2,
			body: 'Interesting thoughts! I appreciate the depth of your analysis and the examples you provided. This post has given me a lot to think about.',
			likes: 2,
			flagged: false,
			published: new Date(),
			createdAt: new Date(),
			updatedAt: new Date()
		}
	])
}
