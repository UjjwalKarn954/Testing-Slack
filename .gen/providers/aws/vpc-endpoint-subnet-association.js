"use strict";
// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html
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
exports.VpcEndpointSubnetAssociation = void 0;
var cdktf = require("cdktf");
function vpcEndpointSubnetAssociationTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html aws_vpc_endpoint_subnet_association}
*/
var VpcEndpointSubnetAssociation = /** @class */ (function (_super) {
    __extends(VpcEndpointSubnetAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html aws_vpc_endpoint_subnet_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointSubnetAssociationConfig
    */
    function VpcEndpointSubnetAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpc_endpoint_subnet_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._subnetId = config.subnetId;
        _this._vpcEndpointId = config.vpcEndpointId;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(VpcEndpointSubnetAssociation.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointSubnetAssociation.prototype, "subnetId", {
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        set: function (value) {
            this._subnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointSubnetAssociation.prototype, "subnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointSubnetAssociation.prototype, "vpcEndpointId", {
        get: function () {
            return this.getStringAttribute('vpc_endpoint_id');
        },
        set: function (value) {
            this._vpcEndpointId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointSubnetAssociation.prototype, "vpcEndpointIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcEndpointId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointSubnetAssociation.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcEndpointSubnetAssociation.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(VpcEndpointSubnetAssociation.prototype, "timeoutsInput", {
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
    VpcEndpointSubnetAssociation.prototype.synthesizeAttributes = function () {
        return {
            subnet_id: cdktf.stringToTerraform(this._subnetId),
            vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
            timeouts: vpcEndpointSubnetAssociationTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    VpcEndpointSubnetAssociation.tfResourceType = "aws_vpc_endpoint_subnet_association";
    return VpcEndpointSubnetAssociation;
}(cdktf.TerraformResource));
exports.VpcEndpointSubnetAssociation = VpcEndpointSubnetAssociation;
