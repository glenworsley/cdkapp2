import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import Secondapp = require('../lib/secondapp-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Secondapp.SecondappStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
