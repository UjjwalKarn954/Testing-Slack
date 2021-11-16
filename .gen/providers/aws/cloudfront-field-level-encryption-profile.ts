// https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontFieldLevelEncryptionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html#comment CloudfrontFieldLevelEncryptionProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html#name CloudfrontFieldLevelEncryptionProfile#name}
  */
  readonly name: string;
  /**
  * encryption_entities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html#encryption_entities CloudfrontFieldLevelEncryptionProfile#encryption_entities}
  */
  readonly encryptionEntities: CloudfrontFieldLevelEncryptionProfileEncryptionEntities[];
}
export interface CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html#items CloudfrontFieldLevelEncryptionProfile#items}
  */
  readonly items?: string[];
}

function cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsToTerraform(struct?: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export interface CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html#provider_id CloudfrontFieldLevelEncryptionProfile#provider_id}
  */
  readonly providerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html#public_key_id CloudfrontFieldLevelEncryptionProfile#public_key_id}
  */
  readonly publicKeyId: string;
  /**
  * field_patterns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html#field_patterns CloudfrontFieldLevelEncryptionProfile#field_patterns}
  */
  readonly fieldPatterns: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns[];
}

function cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsToTerraform(struct?: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    public_key_id: cdktf.stringToTerraform(struct!.publicKeyId),
    field_patterns: cdktf.listMapper(cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsToTerraform)(struct!.fieldPatterns),
  }
}

export interface CloudfrontFieldLevelEncryptionProfileEncryptionEntities {
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html#items CloudfrontFieldLevelEncryptionProfile#items}
  */
  readonly items?: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems[];
}

function cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesToTerraform(struct?: CloudfrontFieldLevelEncryptionProfileEncryptionEntities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsToTerraform)(struct!.items),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html aws_cloudfront_field_level_encryption_profile}
*/
export class CloudfrontFieldLevelEncryptionProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudfront_field_level_encryption_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html aws_cloudfront_field_level_encryption_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontFieldLevelEncryptionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontFieldLevelEncryptionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_field_level_encryption_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._comment = config.comment;
    this._name = config.name;
    this._encryptionEntities = config.encryptionEntities;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // caller_reference - computed: true, optional: false, required: false
  public get callerReference() {
    return this.getStringAttribute('caller_reference');
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string;
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string ) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // encryption_entities - computed: false, optional: false, required: true
  private _encryptionEntities: CloudfrontFieldLevelEncryptionProfileEncryptionEntities[];
  public get encryptionEntities() {
    return this.interpolationForAttribute('encryption_entities') as any;
  }
  public set encryptionEntities(value: CloudfrontFieldLevelEncryptionProfileEncryptionEntities[]) {
    this._encryptionEntities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionEntitiesInput() {
    return this._encryptionEntities
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      name: cdktf.stringToTerraform(this._name),
      encryption_entities: cdktf.listMapper(cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesToTerraform)(this._encryptionEntities),
    };
  }
}
