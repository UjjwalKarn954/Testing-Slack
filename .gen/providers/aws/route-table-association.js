"use strict";
// https://www.terraform.io/docs/providers/aws/r/route_table_association.html
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
exports.RouteTableAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route_table_association.html aws_route_table_association}
*/
var RouteTableAssociation = /** @class */ (function (_super) {
    __extends(RouteTableAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route_table_association.html aws_route_table_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RouteTableAssociationConfig
    */
    function RouteTableAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route_table_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._gatewayId = config.gatewayId;
        _this._routeTableId = config.routeTableId;
        _this._subnetId = config.subnetId;
        return _this;
    }
    Object.defineProperty(RouteTableAssociation.prototype, "gatewayId", {
        get: function () {
            return this.getStringAttribute('gateway_id');
        },
        set: function (value) {
            this._gatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    RouteTableAssociation.prototype.resetGatewayId = function () {
        this._gatewayId = undefined;
    };
    Object.defineProperty(RouteTableAssociation.prototype, "gatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RouteTableAssociation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RouteTableAssociation.prototype, "routeTableId", {
        get: function () {
            return this.getStringAttribute('route_table_id');
        },
        set: function (value) {
            this._routeTableId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RouteTableAssociation.prototype, "routeTableIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routeTableId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RouteTableAssociation.prototype, "subnetId", {
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        set: function (value) {
            this._subnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    RouteTableAssociation.prototype.resetSubnetId = function () {
        this._subnetId = undefined;
    };
    Object.defineProperty(RouteTableAssociation.prototype, "subnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    RouteTableAssociation.prototype.synthesizeAttributes = function () {
        return {
            gateway_id: cdktf.stringToTerraform(this._gatewayId),
            route_table_id: cdktf.stringToTerraform(this._routeTableId),
            subnet_id: cdktf.stringToTerraform(this._subnetId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    RouteTableAssociation.tfResourceType = "aws_route_table_association";
    return RouteTableAssociation;
}(cdktf.TerraformResource));
exports.RouteTableAssociation = RouteTableAssociation;
