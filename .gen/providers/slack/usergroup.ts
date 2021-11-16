// https://www.terraform.io/docs/providers/slack/r/usergroup.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UsergroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup.html#auto_type Usergroup#auto_type}
  */
  readonly autoType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup.html#description Usergroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup.html#handle Usergroup#handle}
  */
  readonly handle: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup.html#name Usergroup#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/slack/r/usergroup.html slack_usergroup}
*/
export class Usergroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "slack_usergroup";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/slack/r/usergroup.html slack_usergroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UsergroupConfig
  */
  public constructor(scope: Construct, id: string, config: UsergroupConfig) {
    super(scope, id, {
      terraformResourceType: 'slack_usergroup',
      terraformGeneratorMetadata: {
        providerName: 'slack'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoType = config.autoType;
    this._description = config.description;
    this._handle = config.handle;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_type - computed: false, optional: true, required: false
  private _autoType?: string | undefined; 
  public get autoType() {
    return this.getStringAttribute('auto_type');
  }
  public set autoType(value: string | undefined) {
    this._autoType = value;
  }
  public resetAutoType() {
    this._autoType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTypeInput() {
    return this._autoType
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // handle - computed: false, optional: false, required: true
  private _handle?: string; 
  public get handle() {
    return this.getStringAttribute('handle');
  }
  public set handle(value: string) {
    this._handle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handleInput() {
    return this._handle
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // team_id - computed: true, optional: false, required: false
  public get teamId() {
    return this.getStringAttribute('team_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_type: cdktf.stringToTerraform(this._autoType),
      description: cdktf.stringToTerraform(this._description),
      handle: cdktf.stringToTerraform(this._handle),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
