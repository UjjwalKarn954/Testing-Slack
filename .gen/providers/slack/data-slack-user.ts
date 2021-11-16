// https://www.terraform.io/docs/providers/slack/d/user.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSlackUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user.html#query_type DataSlackUser#query_type}
  */
  readonly queryType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user.html#query_value DataSlackUser#query_value}
  */
  readonly queryValue: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/slack/d/user.html slack_user}
*/
export class DataSlackUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "slack_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/slack/d/user.html slack_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSlackUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataSlackUserConfig) {
    super(scope, id, {
      terraformResourceType: 'slack_user',
      terraformGeneratorMetadata: {
        providerName: 'slack'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._queryType = config.queryType;
    this._queryValue = config.queryValue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // has_2fa - computed: true, optional: false, required: false
  public get has2Fa() {
    return this.getBooleanAttribute('has_2fa');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_admin - computed: true, optional: false, required: false
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }

  // is_bot - computed: true, optional: false, required: false
  public get isBot() {
    return this.getBooleanAttribute('is_bot');
  }

  // is_owner - computed: true, optional: false, required: false
  public get isOwner() {
    return this.getBooleanAttribute('is_owner');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // query_type - computed: false, optional: false, required: true
  private _queryType: string;
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType
  }

  // query_value - computed: false, optional: false, required: true
  private _queryValue: string;
  public get queryValue() {
    return this.getStringAttribute('query_value');
  }
  public set queryValue(value: string) {
    this._queryValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryValueInput() {
    return this._queryValue
  }

  // real_name - computed: true, optional: false, required: false
  public get realName() {
    return this.getStringAttribute('real_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      query_type: cdktf.stringToTerraform(this._queryType),
      query_value: cdktf.stringToTerraform(this._queryValue),
    };
  }
}
