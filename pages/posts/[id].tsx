import { Client } from '@notionhq/client';
import { useEffect } from 'react';

export const getStaticPaths = async () => {
	const notion = new Client({
		auth: process.env.NOTION_API_KEY,
	});

	const myDatabase = await notion.databases.query({
		database_id: '3a28ac5f17214860a01d4af3b3c42dea',
	});
	const paths = myDatabase.results.map((page) => {
		if (!('properties' in page)) return;
		const { id, created_time: createdTime, properties, url } = page;
		return { params: { id } };
	});
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }: { params: any }) => {
	const notion = new Client({ auth: process.env.NOTION_API_KEY });
	const post = await notion.blocks.children.list({
		block_id: params.id,
		page_size: 50,
	});
	const res = post.results.map((block: any) => ({
		text: block[block.type].rich_text[0].text.content,
	}));
	return { props: { post: res } };
};

const Post = ({ post }: { post: any }) => {
	return (
		<>
			{post.map(({ text }: any) => (
				<div key={text}>{text}</div>
			))}
		</>
	);
};

export default Post;
