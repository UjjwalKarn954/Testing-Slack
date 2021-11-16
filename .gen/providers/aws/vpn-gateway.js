"use strict";
// https://www.terraform.io/docs/providers/aws/r/vpn_gateway.html
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
exports.VpnGateway = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway.html aws_vpn_gateway}
*/
var VpnGateway = /** @class */ (function (_super) {
    __extends(VpnGateway, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway.html aws_vpn_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpnGatewayConfig = {}
    */
    function VpnGateway(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpn_gateway',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._amazonSideAsn = config.amazonSideAsn;
        _this._availabilityZone = config.availabilityZone;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpcId = config.vpcId;
        return _this;
    }
    Object.defineProperty(VpnGateway.prototype, "amazonSideAsn", {
        get: function () {
            return this.getStringAttribute('amazon_side_asn');
        },
        set: function (value) {
            this._amazonSideAsn = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnGateway.prototype.resetAmazonSideAsn = function () {
        this._amazonSideAsn = undefined;
    };
    Object.defineProperty(VpnGateway.prototype, "amazonSideAsnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._amazonSideAsn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnGateway.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnGateway.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnGateway.prototype.resetAvailabilityZone = function () {
        this._availabilityZone = undefined;
    };
    Object.defineProperty(VpnGateway.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnGateway.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnGateway.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnGateway.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(VpnGateway.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnGateway.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnGateway.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(VpnGateway.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnGateway.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnGateway.prototype.resetVpcId = function () {
        this._vpcId = undefined;
    };
    Object.defineProperty(VpnGateway.prototype, "vpcIdInput", {
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
    VpnGateway.prototype.synthesizeAttributes = function () {
        return {
            amazon_side_asn: cdktf.stringToTerraform(this._amazonSideAsn),
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_id: cdktf.stringToTerraform(this._vpcId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    VpnGateway.tfResourceType = "aws_vpn_gateway";
    return VpnGateway;
}(cdktf.TerraformResource));
exports.VpnGateway = VpnGateway;
