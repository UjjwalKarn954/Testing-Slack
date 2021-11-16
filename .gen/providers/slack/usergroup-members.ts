// https://www.terraform.io/docs/providers/slack/r/usergroup_members.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UsergroupMembersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members.html#members UsergroupMembers#members}
  */
  readonly members: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members.html#usergroup_id UsergroupMembers#usergroup_id}
  */
  readonly usergroupId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members.html slack_usergroup_members}
*/
export class UsergroupMembers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "slack_usergroup_members";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members.html slack_usergroup_members} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UsergroupMembersConfig
  */
  public constructor(scope: Construct, id: string, config: UsergroupMembersConfig) {
    super(scope, id, {
      terraformResourceType: 'slack_usergroup_members',
      terraformGeneratorMetadata: {
        providerName: 'slack'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._members = config.members;
    this._usergroupId = config.usergroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // members - computed: false, optional: false, required: true
  private _members: string[];
  public get members() {
    return this.getListAttribute('members');
  }
  public set members(value: string[]) {
    this._members = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members
  }

  // usergroup_id - computed: false, optional: false, required: true
  private _usergroupId: string;
  public get usergroupId() {
    return this.getStringAttribute('usergroup_id');
  }
  public set usergroupId(value: string) {
    this._usergroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usergroupIdInput() {
    return this._usergroupId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
      usergroup_id: cdktf.stringToTerraform(this._usergroupId),
    };
  }
}
