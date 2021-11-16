// https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChimeVoiceConnectorOriginationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#disabled ChimeVoiceConnectorOrigination#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#voice_connector_id ChimeVoiceConnectorOrigination#voice_connector_id}
  */
  readonly voiceConnectorId: string;
  /**
  * route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#route ChimeVoiceConnectorOrigination#route}
  */
  readonly route: ChimeVoiceConnectorOriginationRoute[];
}
export interface ChimeVoiceConnectorOriginationRoute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#host ChimeVoiceConnectorOrigination#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#port ChimeVoiceConnectorOrigination#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#priority ChimeVoiceConnectorOrigination#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#protocol ChimeVoiceConnectorOrigination#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#weight ChimeVoiceConnectorOrigination#weight}
  */
  readonly weight: number;
}

function chimeVoiceConnectorOriginationRouteToTerraform(struct?: ChimeVoiceConnectorOriginationRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    priority: cdktf.numberToTerraform(struct!.priority),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html aws_chime_voice_connector_origination}
*/
export class ChimeVoiceConnectorOrigination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_chime_voice_connector_origination";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html aws_chime_voice_connector_origination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChimeVoiceConnectorOriginationConfig
  */
  public constructor(scope: Construct, id: string, config: ChimeVoiceConnectorOriginationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_chime_voice_connector_origination',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._disabled = config.disabled;
    this._voiceConnectorId = config.voiceConnectorId;
    this._route = config.route;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable;
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable ) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled
  }

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

  // route - computed: false, optional: false, required: true
  private _route: ChimeVoiceConnectorOriginationRoute[];
  public get route() {
    return this.interpolationForAttribute('route') as any;
  }
  public set route(value: ChimeVoiceConnectorOriginationRoute[]) {
    this._route = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled: cdktf.booleanToTerraform(this._disabled),
      voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
      route: cdktf.listMapper(chimeVoiceConnectorOriginationRouteToTerraform)(this._route),
    };
  }
}
