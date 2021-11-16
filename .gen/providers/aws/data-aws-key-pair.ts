// https://www.terraform.io/docs/providers/aws/d/key_pair.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsKeyPairConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/key_pair.html#key_name DataAwsKeyPair#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/key_pair.html#key_pair_id DataAwsKeyPair#key_pair_id}
  */
  readonly keyPairId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/key_pair.html#tags DataAwsKeyPair#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/key_pair.html#filter DataAwsKeyPair#filter}
  */
  readonly filter?: DataAwsKeyPairFilter[];
}
export interface DataAwsKeyPairFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/key_pair.html#name DataAwsKeyPair#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/key_pair.html#values DataAwsKeyPair#values}
  */
  readonly values: string[];
}

function dataAwsKeyPairFilterToTerraform(struct?: DataAwsKeyPairFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/key_pair.html aws_key_pair}
*/
export class DataAwsKeyPair extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_key_pair";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/key_pair.html aws_key_pair} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsKeyPairConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsKeyPairConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_key_pair',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyName = config.keyName;
    this._keyPairId = config.keyPairId;
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string;
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string ) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName
  }

  // key_pair_id - computed: false, optional: true, required: false
  private _keyPairId?: string;
  public get keyPairId() {
    return this.getStringAttribute('key_pair_id');
  }
  public set keyPairId(value: string ) {
    this._keyPairId = value;
  }
  public resetKeyPairId() {
    this._keyPairId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairIdInput() {
    return this._keyPairId
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsKeyPairFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsKeyPairFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_name: cdktf.stringToTerraform(this._keyName),
      key_pair_id: cdktf.stringToTerraform(this._keyPairId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsKeyPairFilterToTerraform)(this._filter),
    };
  }
}