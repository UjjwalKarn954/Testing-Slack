import { App, TerraformStack, TerraformVariable } from 'cdktf';
import { SlackProvider } from './.gen/providers/slack'
import { AwsProvider } from './.gen/providers/aws';
import { Construct } from 'constructs';



class MyStack extends TerraformStack {
    constructor(scope: Construct, name: string) {
      super(scope, name);
      const stack = new MyStack(app, 'TestingSlack');
    const slackToken = new TerraformVariable(stack, 'SLACK_TOKEN', {
    type: 'string'
   });
new SlackProvider(stack, "slack", {
  token: slackToken.stringValue
});
    }   
}

const app = new App();
app.synth();