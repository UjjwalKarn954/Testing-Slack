// https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketIntelligentTieringConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#bucket S3BucketIntelligentTieringConfiguration#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#name S3BucketIntelligentTieringConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#status S3BucketIntelligentTieringConfiguration#status}
  */
  readonly status?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#filter S3BucketIntelligentTieringConfiguration#filter}
  */
  readonly filter?: S3BucketIntelligentTieringConfigurationFilter[];
  /**
  * tiering block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#tiering S3BucketIntelligentTieringConfiguration#tiering}
  */
  readonly tiering: S3BucketIntelligentTieringConfigurationTiering[];
}
export interface S3BucketIntelligentTieringConfigurationFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#prefix S3BucketIntelligentTieringConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#tags S3BucketIntelligentTieringConfiguration#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}

function s3BucketIntelligentTieringConfigurationFilterToTerraform(struct?: S3BucketIntelligentTieringConfigurationFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
  }
}

export interface S3BucketIntelligentTieringConfigurationTiering {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#access_tier S3BucketIntelligentTieringConfiguration#access_tier}
  */
  readonly accessTier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#days S3BucketIntelligentTieringConfiguration#days}
  */
  readonly days: number;
}

function s3BucketIntelligentTieringConfigurationTieringToTerraform(struct?: S3BucketIntelligentTieringConfigurationTiering): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_tier: cdktf.stringToTerraform(struct!.accessTier),
    days: cdktf.numberToTerraform(struct!.days),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html aws_s3_bucket_intelligent_tiering_configuration}
*/
export class S3BucketIntelligentTieringConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_s3_bucket_intelligent_tiering_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html aws_s3_bucket_intelligent_tiering_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketIntelligentTieringConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketIntelligentTieringConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_intelligent_tiering_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._name = config.name;
    this._status = config.status;
    this._filter = config.filter;
    this._tiering = config.tiering;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string ) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: S3BucketIntelligentTieringConfigurationFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: S3BucketIntelligentTieringConfigurationFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // tiering - computed: false, optional: false, required: true
  private _tiering: S3BucketIntelligentTieringConfigurationTiering[];
  public get tiering() {
    return this.interpolationForAttribute('tiering') as any;
  }
  public set tiering(value: S3BucketIntelligentTieringConfigurationTiering[]) {
    this._tiering = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringInput() {
    return this._tiering
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      filter: cdktf.listMapper(s3BucketIntelligentTieringConfigurationFilterToTerraform)(this._filter),
      tiering: cdktf.listMapper(s3BucketIntelligentTieringConfigurationTieringToTerraform)(this._tiering),
    };
  }
}
