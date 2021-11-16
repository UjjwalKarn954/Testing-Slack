// https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChimeVoiceConnectorTerminationCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html#voice_connector_id ChimeVoiceConnectorTerminationCredentials#voice_connector_id}
  */
  readonly voiceConnectorId: string;
  /**
  * credentials block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html#credentials ChimeVoiceConnectorTerminationCredentials#credentials}
  */
  readonly credentials: ChimeVoiceConnectorTerminationCredentialsCredentials[];
}
export interface ChimeVoiceConnectorTerminationCredentialsCredentials {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html#password ChimeVoiceConnectorTerminationCredentials#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html#username ChimeVoiceConnectorTerminationCredentials#username}
  */
  readonly username: string;
}

function chimeVoiceConnectorTerminationCredentialsCredentialsToTerraform(struct?: ChimeVoiceConnectorTerminationCredentialsCredentials): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html aws_chime_voice_connector_termination_credentials}
*/
export class ChimeVoiceConnectorTerminationCredentials extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_chime_voice_connector_termination_credentials";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html aws_chime_voice_connector_termination_credentials} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChimeVoiceConnectorTerminationCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: ChimeVoiceConnectorTerminationCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_chime_voice_connector_termination_credentials',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._voiceConnectorId = config.voiceConnectorId;
    this._credentials = config.credentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // voice_connector_id - computed: false, optional: false, required: true
  private _voiceConnectorId: string;
  public get voiceConnectorId() {
    return this.getStringAttribute('voice_connector_id');
  }
  public set voiceConnectorId(value: string) {
    this._voiceConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceConnectorIdInput() {
    return this._voiceConnectorId
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials: ChimeVoiceConnectorTerminationCredentialsCredentials[];
  public get credentials() {
    return this.interpolationForAttribute('credentials') as any;
  }
  public set credentials(value: ChimeVoiceConnectorTerminationCredentialsCredentials[]) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
      credentials: cdktf.listMapper(chimeVoiceConnectorTerminationCredentialsCredentialsToTerraform)(this._credentials),
    };
  }
}
