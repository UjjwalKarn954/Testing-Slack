"use strict";
// https://www.terraform.io/docs/providers/aws/r/customer_gateway.html
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
exports.CustomerGateway = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/customer_gateway.html aws_customer_gateway}
*/
var CustomerGateway = /** @class */ (function (_super) {
    __extends(CustomerGateway, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/customer_gateway.html aws_customer_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CustomerGatewayConfig
    */
    function CustomerGateway(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_customer_gateway',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._bgpAsn = config.bgpAsn;
        _this._deviceName = config.deviceName;
        _this._ipAddress = config.ipAddress;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._type = config.type;
        return _this;
    }
    Object.defineProperty(CustomerGateway.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerGateway.prototype, "bgpAsn", {
        get: function () {
            return this.getStringAttribute('bgp_asn');
        },
        set: function (value) {
            this._bgpAsn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerGateway.prototype, "bgpAsnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bgpAsn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerGateway.prototype, "deviceName", {
        get: function () {
            return this.getStringAttribute('device_name');
        },
        set: function (value) {
            this._deviceName = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomerGateway.prototype.resetDeviceName = function () {
        this._deviceName = undefined;
    };
    Object.defineProperty(CustomerGateway.prototype, "deviceNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deviceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerGateway.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerGateway.prototype, "ipAddress", {
        get: function () {
            return this.getStringAttribute('ip_address');
        },
        set: function (value) {
            this._ipAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerGateway.prototype, "ipAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerGateway.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomerGateway.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CustomerGateway.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerGateway.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomerGateway.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CustomerGateway.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerGateway.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerGateway.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CustomerGateway.prototype.synthesizeAttributes = function () {
        return {
            bgp_asn: cdktf.stringToTerraform(this._bgpAsn),
            device_name: cdktf.stringToTerraform(this._deviceName),
            ip_address: cdktf.stringToTerraform(this._ipAddress),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            type: cdktf.stringToTerraform(this._type)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CustomerGateway.tfResourceType = "aws_customer_gateway";
    return CustomerGateway;
}(cdktf.TerraformResource));
exports.CustomerGateway = CustomerGateway;
