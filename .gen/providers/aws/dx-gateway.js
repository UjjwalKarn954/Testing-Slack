"use strict";
// https://www.terraform.io/docs/providers/aws/r/dx_gateway.html
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
exports.DxGateway = void 0;
var cdktf = require("cdktf");
function dxGatewayTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html aws_dx_gateway}
*/
var DxGateway = /** @class */ (function (_super) {
    __extends(DxGateway, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html aws_dx_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxGatewayConfig
    */
    function DxGateway(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dx_gateway',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._amazonSideAsn = config.amazonSideAsn;
        _this._name = config.name;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DxGateway.prototype, "amazonSideAsn", {
        get: function () {
            return this.getStringAttribute('amazon_side_asn');
        },
        set: function (value) {
            this._amazonSideAsn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGateway.prototype, "amazonSideAsnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._amazonSideAsn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGateway.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGateway.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGateway.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGateway.prototype, "ownerAccountId", {
        // owner_account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGateway.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DxGateway.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DxGateway.prototype, "timeoutsInput", {
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
    DxGateway.prototype.synthesizeAttributes = function () {
        return {
            amazon_side_asn: cdktf.stringToTerraform(this._amazonSideAsn),
            name: cdktf.stringToTerraform(this._name),
            timeouts: dxGatewayTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DxGateway.tfResourceType = "aws_dx_gateway";
    return DxGateway;
}(cdktf.TerraformResource));
exports.DxGateway = DxGateway;
