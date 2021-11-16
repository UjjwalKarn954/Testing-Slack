"use strict";
// https://www.terraform.io/docs/providers/aws/r/connect_instance.html
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
exports.ConnectInstance = void 0;
var cdktf = require("cdktf");
function connectInstanceTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html aws_connect_instance}
*/
var ConnectInstance = /** @class */ (function (_super) {
    __extends(ConnectInstance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html aws_connect_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectInstanceConfig
    */
    function ConnectInstance(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_connect_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._autoResolveBestVoicesEnabled = config.autoResolveBestVoicesEnabled;
        _this._contactFlowLogsEnabled = config.contactFlowLogsEnabled;
        _this._contactLensEnabled = config.contactLensEnabled;
        _this._directoryId = config.directoryId;
        _this._earlyMediaEnabled = config.earlyMediaEnabled;
        _this._identityManagementType = config.identityManagementType;
        _this._inboundCallsEnabled = config.inboundCallsEnabled;
        _this._instanceAlias = config.instanceAlias;
        _this._outboundCallsEnabled = config.outboundCallsEnabled;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(ConnectInstance.prototype, "arn", {
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
    Object.defineProperty(ConnectInstance.prototype, "autoResolveBestVoicesEnabled", {
        get: function () {
            return this.getBooleanAttribute('auto_resolve_best_voices_enabled');
        },
        set: function (value) {
            this._autoResolveBestVoicesEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectInstance.prototype.resetAutoResolveBestVoicesEnabled = function () {
        this._autoResolveBestVoicesEnabled = undefined;
    };
    Object.defineProperty(ConnectInstance.prototype, "autoResolveBestVoicesEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoResolveBestVoicesEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectInstance.prototype, "contactFlowLogsEnabled", {
        get: function () {
            return this.getBooleanAttribute('contact_flow_logs_enabled');
        },
        set: function (value) {
            this._contactFlowLogsEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectInstance.prototype.resetContactFlowLogsEnabled = function () {
        this._contactFlowLogsEnabled = undefined;
    };
    Object.defineProperty(ConnectInstance.prototype, "contactFlowLogsEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contactFlowLogsEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectInstance.prototype, "contactLensEnabled", {
        get: function () {
            return this.getBooleanAttribute('contact_lens_enabled');
        },
        set: function (value) {
            this._contactLensEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectInstance.prototype.resetContactLensEnabled = function () {
        this._contactLensEnabled = undefined;
    };
    Object.defineProperty(ConnectInstance.prototype, "contactLensEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contactLensEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectInstance.prototype, "createdTime", {
        // created_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectInstance.prototype, "directoryId", {
        get: function () {
            return this.getStringAttribute('directory_id');
        },
        set: function (value) {
            this._directoryId = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectInstance.prototype.resetDirectoryId = function () {
        this._directoryId = undefined;
    };
    Object.defineProperty(ConnectInstance.prototype, "directoryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._directoryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectInstance.prototype, "earlyMediaEnabled", {
        get: function () {
            return this.getBooleanAttribute('early_media_enabled');
        },
        set: function (value) {
            this._earlyMediaEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectInstance.prototype.resetEarlyMediaEnabled = function () {
        this._earlyMediaEnabled = undefined;
    };
    Object.defineProperty(ConnectInstance.prototype, "earlyMediaEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._earlyMediaEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectInstance.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectInstance.prototype, "identityManagementType", {
        get: function () {
            return this.getStringAttribute('identity_management_type');
        },
        set: function (value) {
            this._identityManagementType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectInstance.prototype, "identityManagementTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityManagementType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectInstance.prototype, "inboundCallsEnabled", {
        get: function () {
            return this.getBooleanAttribute('inbound_calls_enabled');
        },
        set: function (value) {
            this._inboundCallsEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectInstance.prototype, "inboundCallsEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inboundCallsEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectInstance.prototype, "instanceAlias", {
        get: function () {
            return this.getStringAttribute('instance_alias');
        },
        set: function (value) {
            this._instanceAlias = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectInstance.prototype.resetInstanceAlias = function () {
        this._instanceAlias = undefined;
    };
    Object.defineProperty(ConnectInstance.prototype, "instanceAliasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceAlias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectInstance.prototype, "outboundCallsEnabled", {
        get: function () {
            return this.getBooleanAttribute('outbound_calls_enabled');
        },
        set: function (value) {
            this._outboundCallsEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectInstance.prototype, "outboundCallsEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._outboundCallsEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectInstance.prototype, "serviceRole", {
        // service_role - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_role');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectInstance.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectInstance.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectInstance.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(ConnectInstance.prototype, "timeoutsInput", {
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
    ConnectInstance.prototype.synthesizeAttributes = function () {
        return {
            auto_resolve_best_voices_enabled: cdktf.booleanToTerraform(this._autoResolveBestVoicesEnabled),
            contact_flow_logs_enabled: cdktf.booleanToTerraform(this._contactFlowLogsEnabled),
            contact_lens_enabled: cdktf.booleanToTerraform(this._contactLensEnabled),
            directory_id: cdktf.stringToTerraform(this._directoryId),
            early_media_enabled: cdktf.booleanToTerraform(this._earlyMediaEnabled),
            identity_management_type: cdktf.stringToTerraform(this._identityManagementType),
            inbound_calls_enabled: cdktf.booleanToTerraform(this._inboundCallsEnabled),
            instance_alias: cdktf.stringToTerraform(this._instanceAlias),
            outbound_calls_enabled: cdktf.booleanToTerraform(this._outboundCallsEnabled),
            timeouts: connectInstanceTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ConnectInstance.tfResourceType = "aws_connect_instance";
    return ConnectInstance;
}(cdktf.TerraformResource));
exports.ConnectInstance = ConnectInstance;
