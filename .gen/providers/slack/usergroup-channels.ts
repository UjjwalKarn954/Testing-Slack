// https://www.terraform.io/docs/providers/slack/r/usergroup_channels.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UsergroupChannelsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_channels.html#channels UsergroupChannels#channels}
  */
  readonly channels: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_channels.html#usergroup_id UsergroupChannels#usergroup_id}
  */
  readonly usergroupId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/slack/r/usergroup_channels.html slack_usergroup_channels}
*/
export class UsergroupChannels extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "slack_usergroup_channels";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/slack/r/usergroup_channels.html slack_usergroup_channels} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UsergroupChannelsConfig
  */
  public constructor(scope: Construct, id: string, config: UsergroupChannelsConfig) {
    super(scope, id, {
      terraformResourceType: 'slack_usergroup_channels',
      terraformGeneratorMetadata: {
        providerName: 'slack'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._channels = config.channels;
    this._usergroupId = config.usergroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channels - computed: false, optional: false, required: true
  private _channels: string[];
  public get channels() {
    return this.getListAttribute('channels');
  }
  public set channels(value: string[]) {
    this._channels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      channels: cdktf.listMapper(cdktf.stringToTerraform)(this._channels),
      usergroup_id: cdktf.stringToTerraform(this._usergroupId),
    };
  }
}
