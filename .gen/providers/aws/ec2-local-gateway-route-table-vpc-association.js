"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html
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
exports.Ec2LocalGatewayRouteTableVpcAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html aws_ec2_local_gateway_route_table_vpc_association}
*/
var Ec2LocalGatewayRouteTableVpcAssociation = /** @class */ (function (_super) {
    __extends(Ec2LocalGatewayRouteTableVpcAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html aws_ec2_local_gateway_route_table_vpc_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2LocalGatewayRouteTableVpcAssociationConfig
    */
    function Ec2LocalGatewayRouteTableVpcAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_local_gateway_route_table_vpc_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._localGatewayRouteTableId = config.localGatewayRouteTableId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpcId = config.vpcId;
        return _this;
    }
    Object.defineProperty(Ec2LocalGatewayRouteTableVpcAssociation.prototype, "id", {
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
    Object.defineProperty(Ec2LocalGatewayRouteTableVpcAssociation.prototype, "localGatewayId", {
        // local_gateway_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('local_gateway_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2LocalGatewayRouteTableVpcAssociation.prototype, "localGatewayRouteTableId", {
        get: function () {
            return this.getStringAttribute('local_gateway_route_table_id');
        },
        set: function (value) {
            this._localGatewayRouteTableId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2LocalGatewayRouteTableVpcAssociation.prototype, "localGatewayRouteTableIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._localGatewayRouteTableId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2LocalGatewayRouteTableVpcAssociation.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2LocalGatewayRouteTableVpcAssociation.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Ec2LocalGatewayRouteTableVpcAssociation.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2LocalGatewayRouteTableVpcAssociation.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2LocalGatewayRouteTableVpcAssociation.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Ec2LocalGatewayRouteTableVpcAssociation.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2LocalGatewayRouteTableVpcAssociation.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2LocalGatewayRouteTableVpcAssociation.prototype, "vpcIdInput", {
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
    Ec2LocalGatewayRouteTableVpcAssociation.prototype.synthesizeAttributes = function () {
        return {
            local_gateway_route_table_id: cdktf.stringToTerraform(this._localGatewayRouteTableId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_id: cdktf.stringToTerraform(this._vpcId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2LocalGatewayRouteTableVpcAssociation.tfResourceType = "aws_ec2_local_gateway_route_table_vpc_association";
    return Ec2LocalGatewayRouteTableVpcAssociation;
}(cdktf.TerraformResource));
exports.Ec2LocalGatewayRouteTableVpcAssociation = Ec2LocalGatewayRouteTableVpcAssociation;
