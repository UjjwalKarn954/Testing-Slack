import { App, S3Backend, TerraformStack, TerraformVariable } from 'cdktf';
import { Construct } from 'constructs';



class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    const stack = new MyStack(app, 'TestingSlack');

    new S3Backend(this, {
      bucket: "",
      key: "/terraform.tfstate",
      region: "us-east-1",
    });
    
    new Conversation

  }
}

const app = new App();
app.synth();