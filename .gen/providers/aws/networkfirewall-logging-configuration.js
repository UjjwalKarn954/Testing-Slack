"use strict";
// https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html
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
exports.NetworkfirewallLoggingConfiguration = void 0;
var cdktf = require("cdktf");
function networkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        log_destination: cdktf.hashMapper(cdktf.anyToTerraform)(struct.logDestination),
        log_destination_type: cdktf.stringToTerraform(struct.logDestinationType),
        log_type: cdktf.stringToTerraform(struct.logType)
    };
}
function networkfirewallLoggingConfigurationLoggingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        log_destination_config: cdktf.listMapper(networkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigToTerraform)(struct.logDestinationConfig)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html aws_networkfirewall_logging_configuration}
*/
var NetworkfirewallLoggingConfiguration = /** @class */ (function (_super) {
    __extends(NetworkfirewallLoggingConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html aws_networkfirewall_logging_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallLoggingConfigurationConfig
    */
    function NetworkfirewallLoggingConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_networkfirewall_logging_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._firewallArn = config.firewallArn;
        _this._loggingConfiguration = config.loggingConfiguration;
        return _this;
    }
    Object.defineProperty(NetworkfirewallLoggingConfiguration.prototype, "firewallArn", {
        get: function () {
            return this.getStringAttribute('firewall_arn');
        },
        set: function (value) {
            this._firewallArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallLoggingConfiguration.prototype, "firewallArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._firewallArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallLoggingConfiguration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallLoggingConfiguration.prototype, "loggingConfiguration", {
        get: function () {
            return this.interpolationForAttribute('logging_configuration');
        },
        set: function (value) {
            this._loggingConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallLoggingConfiguration.prototype, "loggingConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loggingConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    NetworkfirewallLoggingConfiguration.prototype.synthesizeAttributes = function () {
        return {
            firewall_arn: cdktf.stringToTerraform(this._firewallArn),
            logging_configuration: cdktf.listMapper(networkfirewallLoggingConfigurationLoggingConfigurationToTerraform)(this._loggingConfiguration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    NetworkfirewallLoggingConfiguration.tfResourceType = "aws_networkfirewall_logging_configuration";
    return NetworkfirewallLoggingConfiguration;
}(cdktf.TerraformResource));
exports.NetworkfirewallLoggingConfiguration = NetworkfirewallLoggingConfiguration;
