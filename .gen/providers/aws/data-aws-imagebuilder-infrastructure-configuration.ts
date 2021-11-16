// https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsImagebuilderInfrastructureConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html#arn DataAwsImagebuilderInfrastructureConfiguration#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html#resource_tags DataAwsImagebuilderInfrastructureConfiguration#resource_tags}
  */
  readonly resourceTags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html#tags DataAwsImagebuilderInfrastructureConfiguration#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}
export class DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs extends cdktf.ComplexComputedList {

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }

  // s3_key_prefix - computed: true, optional: false, required: false
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
}
export class DataAwsImagebuilderInfrastructureConfigurationLogging extends cdktf.ComplexComputedList {

  // s3_logs - computed: true, optional: false, required: false
  public get s3Logs() {
    return this.interpolationForAttribute('s3_logs') as any;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html aws_imagebuilder_infrastructure_configuration}
*/
export class DataAwsImagebuilderInfrastructureConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_imagebuilder_infrastructure_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html aws_imagebuilder_infrastructure_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsImagebuilderInfrastructureConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsImagebuilderInfrastructureConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_imagebuilder_infrastructure_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._arn = config.arn;
    this._resourceTags = config.resourceTags;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: false, required: true
  private _arn: string;
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_updated - computed: true, optional: false, required: false
  public get dateUpdated() {
    return this.getStringAttribute('date_updated');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_profile_name - computed: true, optional: false, required: false
  public get instanceProfileName() {
    return this.getStringAttribute('instance_profile_name');
  }

  // instance_types - computed: true, optional: false, required: false
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }

  // key_pair - computed: true, optional: false, required: false
  public get keyPair() {
    return this.getStringAttribute('key_pair');
  }

  // logging - computed: true, optional: false, required: false
  public logging(index: string) {
    return new DataAwsImagebuilderInfrastructureConfigurationLogging(this, 'logging', index);
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_tags - computed: true, optional: true, required: false
  private _resourceTags?: { [key: string]: string } | cdktf.IResolvable
  public get resourceTags(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('resource_tags') as any; // Getting the computed value is not yet implemented
  }
  public set resourceTags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._resourceTags = value;
  }
  public resetResourceTags() {
    this._resourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // sns_topic_arn - computed: true, optional: false, required: false
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable
  public get tags(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // terminate_instance_on_failure - computed: true, optional: false, required: false
  public get terminateInstanceOnFailure() {
    return this.getBooleanAttribute('terminate_instance_on_failure');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      resource_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._resourceTags),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
