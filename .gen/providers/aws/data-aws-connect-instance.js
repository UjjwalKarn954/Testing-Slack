"use strict";
// https://www.terraform.io/docs/providers/aws/d/connect_instance.html
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
exports.DataAwsConnectInstance = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_instance.html aws_connect_instance}
*/
var DataAwsConnectInstance = /** @class */ (function (_super) {
    __extends(DataAwsConnectInstance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/connect_instance.html aws_connect_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsConnectInstanceConfig = {}
    */
    function DataAwsConnectInstance(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        _this._instanceAlias = config.instanceAlias;
        _this._instanceId = config.instanceId;
        return _this;
    }
    Object.defineProperty(DataAwsConnectInstance.prototype, "arn", {
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
    Object.defineProperty(DataAwsConnectInstance.prototype, "autoResolveBestVoicesEnabled", {
        // auto_resolve_best_voices_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('auto_resolve_best_voices_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsConnectInstance.prototype, "contactFlowLogsEnabled", {
        // contact_flow_logs_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('contact_flow_logs_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsConnectInstance.prototype, "contactLensEnabled", {
        // contact_lens_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('contact_lens_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsConnectInstance.prototype, "createdTime", {
        // created_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsConnectInstance.prototype, "earlyMediaEnabled", {
        // early_media_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('early_media_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsConnectInstance.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsConnectInstance.prototype, "identityManagementType", {
        // identity_management_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_management_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsConnectInstance.prototype, "inboundCallsEnabled", {
        // inbound_calls_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('inbound_calls_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsConnectInstance.prototype, "instanceAlias", {
        get: function () {
            return this.getStringAttribute('instance_alias');
        },
        set: function (value) {
            this._instanceAlias = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsConnectInstance.prototype.resetInstanceAlias = function () {
        this._instanceAlias = undefined;
    };
    Object.defineProperty(DataAwsConnectInstance.prototype, "instanceAliasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceAlias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsConnectInstance.prototype, "instanceId", {
        get: function () {
            return this.getStringAttribute('instance_id');
        },
        set: function (value) {
            this._instanceId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsConnectInstance.prototype.resetInstanceId = function () {
        this._instanceId = undefined;
    };
    Object.defineProperty(DataAwsConnectInstance.prototype, "instanceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsConnectInstance.prototype, "outboundCallsEnabled", {
        // outbound_calls_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('outbound_calls_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsConnectInstance.prototype, "serviceRole", {
        // service_role - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_role');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsConnectInstance.prototype, "status", {
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
    DataAwsConnectInstance.prototype.synthesizeAttributes = function () {
        return {
            instance_alias: cdktf.stringToTerraform(this._instanceAlias),
            instance_id: cdktf.stringToTerraform(this._instanceId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsConnectInstance.tfResourceType = "aws_connect_instance";
    return DataAwsConnectInstance;
}(cdktf.TerraformDataSource));
exports.DataAwsConnectInstance = DataAwsConnectInstance;
