"use strict";
// https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html
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
exports.VpcIpv4CidrBlockAssociation = void 0;
var cdktf = require("cdktf");
function vpcIpv4CidrBlockAssociationTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html aws_vpc_ipv4_cidr_block_association}
*/
var VpcIpv4CidrBlockAssociation = /** @class */ (function (_super) {
    __extends(VpcIpv4CidrBlockAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html aws_vpc_ipv4_cidr_block_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcIpv4CidrBlockAssociationConfig
    */
    function VpcIpv4CidrBlockAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpc_ipv4_cidr_block_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._cidrBlock = config.cidrBlock;
        _this._vpcId = config.vpcId;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(VpcIpv4CidrBlockAssociation.prototype, "cidrBlock", {
        get: function () {
            return this.getStringAttribute('cidr_block');
        },
        set: function (value) {
            this._cidrBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcIpv4CidrBlockAssociation.prototype, "cidrBlockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cidrBlock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcIpv4CidrBlockAssociation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcIpv4CidrBlockAssociation.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcIpv4CidrBlockAssociation.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcIpv4CidrBlockAssociation.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcIpv4CidrBlockAssociation.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(VpcIpv4CidrBlockAssociation.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    VpcIpv4CidrBlockAssociation.prototype.synthesizeAttributes = function () {
        return {
            cidr_block: cdktf.stringToTerraform(this._cidrBlock),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            timeouts: vpcIpv4CidrBlockAssociationTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    VpcIpv4CidrBlockAssociation.tfResourceType = "aws_vpc_ipv4_cidr_block_association";
    return VpcIpv4CidrBlockAssociation;
}(cdktf.TerraformResource));
exports.VpcIpv4CidrBlockAssociation = VpcIpv4CidrBlockAssociation;
