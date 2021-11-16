"use strict";
// https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html
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
exports.GlobalacceleratorListener = void 0;
var cdktf = require("cdktf");
function globalacceleratorListenerPortRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from_port: cdktf.numberToTerraform(struct.fromPort),
        to_port: cdktf.numberToTerraform(struct.toPort)
    };
}
function globalacceleratorListenerTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html aws_globalaccelerator_listener}
*/
var GlobalacceleratorListener = /** @class */ (function (_super) {
    __extends(GlobalacceleratorListener, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html aws_globalaccelerator_listener} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlobalacceleratorListenerConfig
    */
    function GlobalacceleratorListener(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_globalaccelerator_listener',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._acceleratorArn = config.acceleratorArn;
        _this._clientAffinity = config.clientAffinity;
        _this._protocol = config.protocol;
        _this._portRange = config.portRange;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(GlobalacceleratorListener.prototype, "acceleratorArn", {
        get: function () {
            return this.getStringAttribute('accelerator_arn');
        },
        set: function (value) {
            this._acceleratorArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorListener.prototype, "acceleratorArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acceleratorArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorListener.prototype, "clientAffinity", {
        get: function () {
            return this.getStringAttribute('client_affinity');
        },
        set: function (value) {
            this._clientAffinity = value;
        },
        enumerable: false,
        configurable: true
    });
    GlobalacceleratorListener.prototype.resetClientAffinity = function () {
        this._clientAffinity = undefined;
    };
    Object.defineProperty(GlobalacceleratorListener.prototype, "clientAffinityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientAffinity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorListener.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorListener.prototype, "protocol", {
        get: function () {
            return this.getStringAttribute('protocol');
        },
        set: function (value) {
            this._protocol = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorListener.prototype, "protocolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protocol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorListener.prototype, "portRange", {
        get: function () {
            return this.interpolationForAttribute('port_range');
        },
        set: function (value) {
            this._portRange = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorListener.prototype, "portRangeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._portRange;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorListener.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    GlobalacceleratorListener.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(GlobalacceleratorListener.prototype, "timeoutsInput", {
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
    GlobalacceleratorListener.prototype.synthesizeAttributes = function () {
        return {
            accelerator_arn: cdktf.stringToTerraform(this._acceleratorArn),
            client_affinity: cdktf.stringToTerraform(this._clientAffinity),
            protocol: cdktf.stringToTerraform(this._protocol),
            port_range: cdktf.listMapper(globalacceleratorListenerPortRangeToTerraform)(this._portRange),
            timeouts: globalacceleratorListenerTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GlobalacceleratorListener.tfResourceType = "aws_globalaccelerator_listener";
    return GlobalacceleratorListener;
}(cdktf.TerraformResource));
exports.GlobalacceleratorListener = GlobalacceleratorListener;
