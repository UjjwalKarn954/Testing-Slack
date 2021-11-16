"use strict";
// https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.VpcDhcpOptionsAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html aws_vpc_dhcp_options_association}
*/
var VpcDhcpOptionsAssociation = /** @class */ (function (_super) {
    __extends(VpcDhcpOptionsAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html aws_vpc_dhcp_options_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcDhcpOptionsAssociationConfig
    */
    function VpcDhcpOptionsAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpc_dhcp_options_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._dhcpOptionsId = config.dhcpOptionsId;
        _this._vpcId = config.vpcId;
        return _this;
    }
    Object.defineProperty(VpcDhcpOptionsAssociation.prototype, "dhcpOptionsId", {
        get: function () {
            return this.getStringAttribute('dhcp_options_id');
        },
        set: function (value) {
            this._dhcpOptionsId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcDhcpOptionsAssociation.prototype, "dhcpOptionsIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dhcpOptionsId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcDhcpOptionsAssociation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcDhcpOptionsAssociation.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcDhcpOptionsAssociation.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    VpcDhcpOptionsAssociation.prototype.synthesizeAttributes = function () {
        return {
            dhcp_options_id: cdktf.stringToTerraform(this._dhcpOptionsId),
            vpc_id: cdktf.stringToTerraform(this._vpcId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    VpcDhcpOptionsAssociation.tfResourceType = "aws_vpc_dhcp_options_association";
    return VpcDhcpOptionsAssociation;
}(cdktf.TerraformResource));
exports.VpcDhcpOptionsAssociation = VpcDhcpOptionsAssociation;
