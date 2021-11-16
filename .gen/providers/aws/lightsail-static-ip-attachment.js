"use strict";
// https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip_attachment.html
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
exports.LightsailStaticIpAttachment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip_attachment.html aws_lightsail_static_ip_attachment}
*/
var LightsailStaticIpAttachment = /** @class */ (function (_super) {
    __extends(LightsailStaticIpAttachment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip_attachment.html aws_lightsail_static_ip_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailStaticIpAttachmentConfig
    */
    function LightsailStaticIpAttachment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lightsail_static_ip_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._instanceName = config.instanceName;
        _this._staticIpName = config.staticIpName;
        return _this;
    }
    Object.defineProperty(LightsailStaticIpAttachment.prototype, "id", {
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
    Object.defineProperty(LightsailStaticIpAttachment.prototype, "instanceName", {
        get: function () {
            return this.getStringAttribute('instance_name');
        },
        set: function (value) {
            this._instanceName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailStaticIpAttachment.prototype, "instanceNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailStaticIpAttachment.prototype, "ipAddress", {
        // ip_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailStaticIpAttachment.prototype, "staticIpName", {
        get: function () {
            return this.getStringAttribute('static_ip_name');
        },
        set: function (value) {
            this._staticIpName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailStaticIpAttachment.prototype, "staticIpNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._staticIpName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LightsailStaticIpAttachment.prototype.synthesizeAttributes = function () {
        return {
            instance_name: cdktf.stringToTerraform(this._instanceName),
            static_ip_name: cdktf.stringToTerraform(this._staticIpName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LightsailStaticIpAttachment.tfResourceType = "aws_lightsail_static_ip_attachment";
    return LightsailStaticIpAttachment;
}(cdktf.TerraformResource));
exports.LightsailStaticIpAttachment = LightsailStaticIpAttachment;
