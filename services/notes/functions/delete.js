import handler from '../libs/handler-lib';
import dynamoDb from '../libs/dynamodb-lib';

// eslint-disable-next-line no-unused-vars
export const main = handler(async (event, context) => {
	const params = {
		TableName: process.env.tableName,
		Key: {
			userId: event.requestContext.identity.cognitoIdentityId,
			noteId: event.pathParameters.id,
		},
	};

	await dynamoDb.delete(params);

	return { status: true };
});