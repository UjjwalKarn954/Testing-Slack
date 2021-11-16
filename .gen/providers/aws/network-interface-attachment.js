"use strict";
// https://www.terraform.io/docs/providers/aws/r/network_interface_attachment.html
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
exports.NetworkInterfaceAttachmentA = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_interface_attachment.html aws_network_interface_attachment}
*/
var NetworkInterfaceAttachmentA = /** @class */ (function (_super) {
    __extends(NetworkInterfaceAttachmentA, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_interface_attachment.html aws_network_interface_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkInterfaceAttachmentAConfig
    */
    function NetworkInterfaceAttachmentA(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_network_interface_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._deviceIndex = config.deviceIndex;
        _this._instanceId = config.instanceId;
        _this._networkInterfaceId = config.networkInterfaceId;
        return _this;
    }
    Object.defineProperty(NetworkInterfaceAttachmentA.prototype, "attachmentId", {
        // ==========
        // ATTRIBUTES
        // ==========
        // attachment_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('attachment_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterfaceAttachmentA.prototype, "deviceIndex", {
        get: function () {
            return this.getNumberAttribute('device_index');
        },
        set: function (value) {
            this._deviceIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterfaceAttachmentA.prototype, "deviceIndexInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deviceIndex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterfaceAttachmentA.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterfaceAttachmentA.prototype, "instanceId", {
        get: function () {
            return this.getStringAttribute('instance_id');
        },
        set: function (value) {
            this._instanceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterfaceAttachmentA.prototype, "instanceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterfaceAttachmentA.prototype, "networkInterfaceId", {
        get: function () {
            return this.getStringAttribute('network_interface_id');
        },
        set: function (value) {
            this._networkInterfaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterfaceAttachmentA.prototype, "networkInterfaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkInterfaceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterfaceAttachmentA.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    NetworkInterfaceAttachmentA.prototype.synthesizeAttributes = function () {
        return {
            device_index: cdktf.numberToTerraform(this._deviceIndex),
            instance_id: cdktf.stringToTerraform(this._instanceId),
            network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    NetworkInterfaceAttachmentA.tfResourceType = "aws_network_interface_attachment";
    return NetworkInterfaceAttachmentA;
}(cdktf.TerraformResource));
exports.NetworkInterfaceAttachmentA = NetworkInterfaceAttachmentA;
