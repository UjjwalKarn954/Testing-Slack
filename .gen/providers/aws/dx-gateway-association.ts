// https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DxGatewayAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#allowed_prefixes DxGatewayAssociation#allowed_prefixes}
  */
  readonly allowedPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#associated_gateway_id DxGatewayAssociation#associated_gateway_id}
  */
  readonly associatedGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#associated_gateway_owner_account_id DxGatewayAssociation#associated_gateway_owner_account_id}
  */
  readonly associatedGatewayOwnerAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#dx_gateway_id DxGatewayAssociation#dx_gateway_id}
  */
  readonly dxGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#proposal_id DxGatewayAssociation#proposal_id}
  */
  readonly proposalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#vpn_gateway_id DxGatewayAssociation#vpn_gateway_id}
  */
  readonly vpnGatewayId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#timeouts DxGatewayAssociation#timeouts}
  */
  readonly timeouts?: DxGatewayAssociationTimeouts;
}
export interface DxGatewayAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#create DxGatewayAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#delete DxGatewayAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#update DxGatewayAssociation#update}
  */
  readonly update?: string;
}

function dxGatewayAssociationTimeoutsToTerraform(struct?: DxGatewayAssociationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html aws_dx_gateway_association}
*/
export class DxGatewayAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_dx_gateway_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html aws_dx_gateway_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DxGatewayAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DxGatewayAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_gateway_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowedPrefixes = config.allowedPrefixes;
    this._associatedGatewayId = config.associatedGatewayId;
    this._associatedGatewayOwnerAccountId = config.associatedGatewayOwnerAccountId;
    this._dxGatewayId = config.dxGatewayId;
    this._proposalId = config.proposalId;
    this._vpnGatewayId = config.vpnGatewayId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_prefixes - computed: true, optional: true, required: false
  private _allowedPrefixes?: string[];
  public get allowedPrefixes() {
    return this.getListAttribute('allowed_prefixes');
  }
  public set allowedPrefixes(value: string[]) {
    this._allowedPrefixes = value;
  }
  public resetAllowedPrefixes() {
    this._allowedPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPrefixesInput() {
    return this._allowedPrefixes
  }

  // associated_gateway_id - computed: true, optional: true, required: false
  private _associatedGatewayId?: string;
  public get associatedGatewayId() {
    return this.getStringAttribute('associated_gateway_id');
  }
  public set associatedGatewayId(value: string) {
    this._associatedGatewayId = value;
  }
  public resetAssociatedGatewayId() {
    this._associatedGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedGatewayIdInput() {
    return this._associatedGatewayId
  }

  // associated_gateway_owner_account_id - computed: true, optional: true, required: false
  private _associatedGatewayOwnerAccountId?: string;
  public get associatedGatewayOwnerAccountId() {
    return this.getStringAttribute('associated_gateway_owner_account_id');
  }
  public set associatedGatewayOwnerAccountId(value: string) {
    this._associatedGatewayOwnerAccountId = value;
  }
  public resetAssociatedGatewayOwnerAccountId() {
    this._associatedGatewayOwnerAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedGatewayOwnerAccountIdInput() {
    return this._associatedGatewayOwnerAccountId
  }

  // associated_gateway_type - computed: true, optional: false, required: false
  public get associatedGatewayType() {
    return this.getStringAttribute('associated_gateway_type');
  }

  // dx_gateway_association_id - computed: true, optional: false, required: false
  public get dxGatewayAssociationId() {
    return this.getStringAttribute('dx_gateway_association_id');
  }

  // dx_gateway_id - computed: false, optional: false, required: true
  private _dxGatewayId: string;
  public get dxGatewayId() {
    return this.getStringAttribute('dx_gateway_id');
  }
  public set dxGatewayId(value: string) {
    this._dxGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dxGatewayIdInput() {
    return this._dxGatewayId
  }

  // dx_gateway_owner_account_id - computed: true, optional: false, required: false
  public get dxGatewayOwnerAccountId() {
    return this.getStringAttribute('dx_gateway_owner_account_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // proposal_id - computed: false, optional: true, required: false
  private _proposalId?: string;
  public get proposalId() {
    return this.getStringAttribute('proposal_id');
  }
  public set proposalId(value: string ) {
    this._proposalId = value;
  }
  public resetProposalId() {
    this._proposalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proposalIdInput() {
    return this._proposalId
  }

  // vpn_gateway_id - computed: false, optional: true, required: false
  private _vpnGatewayId?: string;
  public get vpnGatewayId() {
    return this.getStringAttribute('vpn_gateway_id');
  }
  public set vpnGatewayId(value: string ) {
    this._vpnGatewayId = value;
  }
  public resetVpnGatewayId() {
    this._vpnGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayIdInput() {
    return this._vpnGatewayId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DxGatewayAssociationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DxGatewayAssociationTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedPrefixes),
      associated_gateway_id: cdktf.stringToTerraform(this._associatedGatewayId),
      associated_gateway_owner_account_id: cdktf.stringToTerraform(this._associatedGatewayOwnerAccountId),
      dx_gateway_id: cdktf.stringToTerraform(this._dxGatewayId),
      proposal_id: cdktf.stringToTerraform(this._proposalId),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
      timeouts: dxGatewayAssociationTimeoutsToTerraform(this._timeouts),
    };
  }
}
