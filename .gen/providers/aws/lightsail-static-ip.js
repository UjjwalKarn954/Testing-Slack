"use strict";
// https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip.html
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
exports.LightsailStaticIp = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip.html aws_lightsail_static_ip}
*/
var LightsailStaticIp = /** @class */ (function (_super) {
    __extends(LightsailStaticIp, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip.html aws_lightsail_static_ip} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailStaticIpConfig
    */
    function LightsailStaticIp(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lightsail_static_ip',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        return _this;
    }
    Object.defineProperty(LightsailStaticIp.prototype, "arn", {
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
    Object.defineProperty(LightsailStaticIp.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailStaticIp.prototype, "ipAddress", {
        // ip_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailStaticIp.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailStaticIp.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailStaticIp.prototype, "supportCode", {
        // support_code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('support_code');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LightsailStaticIp.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LightsailStaticIp.tfResourceType = "aws_lightsail_static_ip";
    return LightsailStaticIp;
}(cdktf.TerraformResource));
exports.LightsailStaticIp = LightsailStaticIp;
