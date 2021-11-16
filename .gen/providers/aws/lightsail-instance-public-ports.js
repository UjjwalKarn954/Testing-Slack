"use strict";
// https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html
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
exports.LightsailInstancePublicPorts = void 0;
var cdktf = require("cdktf");
function lightsailInstancePublicPortsPortInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct.cidrs),
        from_port: cdktf.numberToTerraform(struct.fromPort),
        protocol: cdktf.stringToTerraform(struct.protocol),
        to_port: cdktf.numberToTerraform(struct.toPort)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html aws_lightsail_instance_public_ports}
*/
var LightsailInstancePublicPorts = /** @class */ (function (_super) {
    __extends(LightsailInstancePublicPorts, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html aws_lightsail_instance_public_ports} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailInstancePublicPortsConfig
    */
    function LightsailInstancePublicPorts(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lightsail_instance_public_ports',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._instanceName = config.instanceName;
        _this._portInfo = config.portInfo;
        return _this;
    }
    Object.defineProperty(LightsailInstancePublicPorts.prototype, "id", {
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
    Object.defineProperty(LightsailInstancePublicPorts.prototype, "instanceName", {
        get: function () {
            return this.getStringAttribute('instance_name');
        },
        set: function (value) {
            this._instanceName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstancePublicPorts.prototype, "instanceNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstancePublicPorts.prototype, "portInfo", {
        get: function () {
            return this.interpolationForAttribute('port_info');
        },
        set: function (value) {
            this._portInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstancePublicPorts.prototype, "portInfoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._portInfo;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LightsailInstancePublicPorts.prototype.synthesizeAttributes = function () {
        return {
            instance_name: cdktf.stringToTerraform(this._instanceName),
            port_info: cdktf.listMapper(lightsailInstancePublicPortsPortInfoToTerraform)(this._portInfo)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LightsailInstancePublicPorts.tfResourceType = "aws_lightsail_instance_public_ports";
    return LightsailInstancePublicPorts;
}(cdktf.TerraformResource));
exports.LightsailInstancePublicPorts = LightsailInstancePublicPorts;
