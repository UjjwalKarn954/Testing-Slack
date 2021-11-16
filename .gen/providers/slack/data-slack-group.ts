// https://www.terraform.io/docs/providers/slack/d/group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSlackGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/group.html#group_id DataSlackGroup#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/group.html#purpose DataSlackGroup#purpose}
  */
  readonly purpose?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/group.html#topic DataSlackGroup#topic}
  */
  readonly topic?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/slack/d/group.html slack_group}
*/
export class DataSlackGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "slack_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/slack/d/group.html slack_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSlackGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataSlackGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'slack_group',
      terraformGeneratorMetadata: {
        providerName: 'slack'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._groupId = config.groupId;
    this._purpose = config.purpose;
    this._topic = config.topic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId: string;
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_archived - computed: true, optional: false, required: false
  public get isArchived() {
    return this.getBooleanAttribute('is_archived');
  }

  // is_ext_shared - computed: true, optional: false, required: false
  public get isExtShared() {
    return this.getBooleanAttribute('is_ext_shared');
  }

  // is_org_shared - computed: true, optional: false, required: false
  public get isOrgShared() {
    return this.getBooleanAttribute('is_org_shared');
  }

  // is_shared - computed: true, optional: false, required: false
  public get isShared() {
    return this.getBooleanAttribute('is_shared');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // purpose - computed: true, optional: true, required: false
  private _purpose?: string;
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  public resetPurpose() {
    this._purpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose
  }

  // topic - computed: true, optional: true, required: false
  private _topic?: string;
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      purpose: cdktf.stringToTerraform(this._purpose),
      topic: cdktf.stringToTerraform(this._topic),
    };
  }
}
