import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as s3 from '@aws-cdk/aws-s3';
import * as lambda from '@aws-cdk/aws-lambda';


export class SecondappStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const tablename = 'mapping-table';
    const functionname = 'urlshortner';

    const s3bucket = new s3.Bucket(this, 'myfirstBucket', {
      versioned: true
    });

    const myTable = new dynamodb.Table(this, tablename, {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING }
    });

    const function = new lambda.Function(this, functionname, {
      
    });
  }
}
