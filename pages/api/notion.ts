// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {
	APIErrorCode,
	Client,
	ClientErrorCode,
	isNotionClientError,
	NotionClientError,
} from '@notionhq/client';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

// interface Database {
//   id: string;
//   createdTime: string;
//   properties: Extract<QueryDatabaseResponse['results'][0], 'propert';
//   url: string;
// }

// type Data =  Database| NotionClientError;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// Initializing a client
	// try {
	// 	const notion = new Client({
	// 		auth: process.env.NOTION_API_KEY,
	// 	});
	// 	const myDatabase = await notion.databases.query({
	// 		database_id: '3a28ac5f17214860a01d4af3b3c42dea',
	// 	});
	// 	;
	//   const database = myDatabase.results.map((page)=> {
	//     if (!("properties" in page)) return
	//     const {id, created_time: createdTime, properties, url} = page;
	//     return {id, createdTime, properties, url}
	//   })
	// 	// res.status(200).json(database);
	// } catch (error: unknown) {
	// 	if (isNotionClientError(error)) {
	// 		// error is now strongly typed to NotionClientError
	// 		switch (error.code) {
	// 			case ClientErrorCode.RequestTimeout:
	// 				// ...
	// 				break;
	// 			case APIErrorCode.ObjectNotFound:
	// 				// ...
	// 				break;
	// 			case APIErrorCode.Unauthorized:
	// 				// ...
	// 				break;
	// 			// ...
	// 			default:
	// 			// you could even take advantage of exhaustiveness checking
	// 		}
	// 		res.status(403).json(error);
	// 	}
	// }
}
