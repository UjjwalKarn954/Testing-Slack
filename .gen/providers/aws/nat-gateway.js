"use strict";
// https://www.terraform.io/docs/providers/aws/r/nat_gateway.html
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
exports.NatGateway = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/nat_gateway.html aws_nat_gateway}
*/
var NatGateway = /** @class */ (function (_super) {
    __extends(NatGateway, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/nat_gateway.html aws_nat_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NatGatewayConfig
    */
    function NatGateway(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_nat_gateway',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._allocationId = config.allocationId;
        _this._connectivityType = config.connectivityType;
        _this._subnetId = config.subnetId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(NatGateway.prototype, "allocationId", {
        get: function () {
            return this.getStringAttribute('allocation_id');
        },
        set: function (value) {
            this._allocationId = value;
        },
        enumerable: false,
        configurable: true
    });
    NatGateway.prototype.resetAllocationId = function () {
        this._allocationId = undefined;
    };
    Object.defineProperty(NatGateway.prototype, "allocationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allocationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NatGateway.prototype, "connectivityType", {
        get: function () {
            return this.getStringAttribute('connectivity_type');
        },
        set: function (value) {
            this._connectivityType = value;
        },
        enumerable: false,
        configurable: true
    });
    NatGateway.prototype.resetConnectivityType = function () {
        this._connectivityType = undefined;
    };
    Object.defineProperty(NatGateway.prototype, "connectivityTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectivityType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NatGateway.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NatGateway.prototype, "networkInterfaceId", {
        // network_interface_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_interface_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NatGateway.prototype, "privateIp", {
        // private_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NatGateway.prototype, "publicIp", {
        // public_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NatGateway.prototype, "subnetId", {
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        set: function (value) {
            this._subnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NatGateway.prototype, "subnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NatGateway.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    NatGateway.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(NatGateway.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NatGateway.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    NatGateway.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(NatGateway.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    NatGateway.prototype.synthesizeAttributes = function () {
        return {
            allocation_id: cdktf.stringToTerraform(this._allocationId),
            connectivity_type: cdktf.stringToTerraform(this._connectivityType),
            subnet_id: cdktf.stringToTerraform(this._subnetId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    NatGateway.tfResourceType = "aws_nat_gateway";
    return NatGateway;
}(cdktf.TerraformResource));
exports.NatGateway = NatGateway;
