"use strict";
// https://www.terraform.io/docs/providers/aws/r/network_interface_sg_attachment.html
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
exports.NetworkInterfaceSgAttachment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_interface_sg_attachment.html aws_network_interface_sg_attachment}
*/
var NetworkInterfaceSgAttachment = /** @class */ (function (_super) {
    __extends(NetworkInterfaceSgAttachment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_interface_sg_attachment.html aws_network_interface_sg_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkInterfaceSgAttachmentConfig
    */
    function NetworkInterfaceSgAttachment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_network_interface_sg_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._networkInterfaceId = config.networkInterfaceId;
        _this._securityGroupId = config.securityGroupId;
        return _this;
    }
    Object.defineProperty(NetworkInterfaceSgAttachment.prototype, "id", {
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
    Object.defineProperty(NetworkInterfaceSgAttachment.prototype, "networkInterfaceId", {
        get: function () {
            return this.getStringAttribute('network_interface_id');
        },
        set: function (value) {
            this._networkInterfaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterfaceSgAttachment.prototype, "networkInterfaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkInterfaceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterfaceSgAttachment.prototype, "securityGroupId", {
        get: function () {
            return this.getStringAttribute('security_group_id');
        },
        set: function (value) {
            this._securityGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterfaceSgAttachment.prototype, "securityGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    NetworkInterfaceSgAttachment.prototype.synthesizeAttributes = function () {
        return {
            network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
            security_group_id: cdktf.stringToTerraform(this._securityGroupId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    NetworkInterfaceSgAttachment.tfResourceType = "aws_network_interface_sg_attachment";
    return NetworkInterfaceSgAttachment;
}(cdktf.TerraformResource));
exports.NetworkInterfaceSgAttachment = NetworkInterfaceSgAttachment;
