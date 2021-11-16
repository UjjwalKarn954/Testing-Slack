"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53_zone_association.html
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
exports.Route53ZoneAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_zone_association.html aws_route53_zone_association}
*/
var Route53ZoneAssociation = /** @class */ (function (_super) {
    __extends(Route53ZoneAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_zone_association.html aws_route53_zone_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ZoneAssociationConfig
    */
    function Route53ZoneAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53_zone_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._vpcId = config.vpcId;
        _this._vpcRegion = config.vpcRegion;
        _this._zoneId = config.zoneId;
        return _this;
    }
    Object.defineProperty(Route53ZoneAssociation.prototype, "id", {
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
    Object.defineProperty(Route53ZoneAssociation.prototype, "owningAccount", {
        // owning_account - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owning_account');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ZoneAssociation.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ZoneAssociation.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ZoneAssociation.prototype, "vpcRegion", {
        get: function () {
            return this.getStringAttribute('vpc_region');
        },
        set: function (value) {
            this._vpcRegion = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ZoneAssociation.prototype.resetVpcRegion = function () {
        this._vpcRegion = undefined;
    };
    Object.defineProperty(Route53ZoneAssociation.prototype, "vpcRegionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcRegion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ZoneAssociation.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ZoneAssociation.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Route53ZoneAssociation.prototype.synthesizeAttributes = function () {
        return {
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            vpc_region: cdktf.stringToTerraform(this._vpcRegion),
            zone_id: cdktf.stringToTerraform(this._zoneId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53ZoneAssociation.tfResourceType = "aws_route53_zone_association";
    return Route53ZoneAssociation;
}(cdktf.TerraformResource));
exports.Route53ZoneAssociation = Route53ZoneAssociation;
