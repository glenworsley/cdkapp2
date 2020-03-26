#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SecondappStack } from '../lib/secondapp-stack';

const app = new cdk.App();
new SecondappStack(app, 'SecondappStack');
