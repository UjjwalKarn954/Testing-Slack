"use strict";
// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_route_table_association.html
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
exports.VpcEndpointRouteTableAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_route_table_association.html aws_vpc_endpoint_route_table_association}
*/
var VpcEndpointRouteTableAssociation = /** @class */ (function (_super) {
    __extends(VpcEndpointRouteTableAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_route_table_association.html aws_vpc_endpoint_route_table_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointRouteTableAssociationConfig
    */
    function VpcEndpointRouteTableAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpc_endpoint_route_table_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._routeTableId = config.routeTableId;
        _this._vpcEndpointId = config.vpcEndpointId;
        return _this;
    }
    Object.defineProperty(VpcEndpointRouteTableAssociation.prototype, "id", {
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
    Object.defineProperty(VpcEndpointRouteTableAssociation.prototype, "routeTableId", {
        get: function () {
            return this.getStringAttribute('route_table_id');
        },
        set: function (value) {
            this._routeTableId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointRouteTableAssociation.prototype, "routeTableIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routeTableId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointRouteTableAssociation.prototype, "vpcEndpointId", {
        get: function () {
            return this.getStringAttribute('vpc_endpoint_id');
        },
        set: function (value) {
            this._vpcEndpointId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointRouteTableAssociation.prototype, "vpcEndpointIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcEndpointId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    VpcEndpointRouteTableAssociation.prototype.synthesizeAttributes = function () {
        return {
            route_table_id: cdktf.stringToTerraform(this._routeTableId),
            vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    VpcEndpointRouteTableAssociation.tfResourceType = "aws_vpc_endpoint_route_table_association";
    return VpcEndpointRouteTableAssociation;
}(cdktf.TerraformResource));
exports.VpcEndpointRouteTableAssociation = VpcEndpointRouteTableAssociation;
