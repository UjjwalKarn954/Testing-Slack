"use strict";
// https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html
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
exports.SesConfigurationSet = void 0;
var cdktf = require("cdktf");
function sesConfigurationSetDeliveryOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        tls_policy: cdktf.stringToTerraform(struct.tlsPolicy)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html aws_ses_configuration_set}
*/
var SesConfigurationSet = /** @class */ (function (_super) {
    __extends(SesConfigurationSet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html aws_ses_configuration_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesConfigurationSetConfig
    */
    function SesConfigurationSet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ses_configuration_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._reputationMetricsEnabled = config.reputationMetricsEnabled;
        _this._sendingEnabled = config.sendingEnabled;
        _this._deliveryOptions = config.deliveryOptions;
        return _this;
    }
    Object.defineProperty(SesConfigurationSet.prototype, "arn", {
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
    Object.defineProperty(SesConfigurationSet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesConfigurationSet.prototype, "lastFreshStart", {
        // last_fresh_start - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_fresh_start');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesConfigurationSet.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesConfigurationSet.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesConfigurationSet.prototype, "reputationMetricsEnabled", {
        get: function () {
            return this.getBooleanAttribute('reputation_metrics_enabled');
        },
        set: function (value) {
            this._reputationMetricsEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    SesConfigurationSet.prototype.resetReputationMetricsEnabled = function () {
        this._reputationMetricsEnabled = undefined;
    };
    Object.defineProperty(SesConfigurationSet.prototype, "reputationMetricsEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reputationMetricsEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesConfigurationSet.prototype, "sendingEnabled", {
        get: function () {
            return this.getBooleanAttribute('sending_enabled');
        },
        set: function (value) {
            this._sendingEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    SesConfigurationSet.prototype.resetSendingEnabled = function () {
        this._sendingEnabled = undefined;
    };
    Object.defineProperty(SesConfigurationSet.prototype, "sendingEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sendingEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesConfigurationSet.prototype, "deliveryOptions", {
        get: function () {
            return this.interpolationForAttribute('delivery_options');
        },
        set: function (value) {
            this._deliveryOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    SesConfigurationSet.prototype.resetDeliveryOptions = function () {
        this._deliveryOptions = undefined;
    };
    Object.defineProperty(SesConfigurationSet.prototype, "deliveryOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deliveryOptions;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SesConfigurationSet.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            reputation_metrics_enabled: cdktf.booleanToTerraform(this._reputationMetricsEnabled),
            sending_enabled: cdktf.booleanToTerraform(this._sendingEnabled),
            delivery_options: cdktf.listMapper(sesConfigurationSetDeliveryOptionsToTerraform)(this._deliveryOptions)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SesConfigurationSet.tfResourceType = "aws_ses_configuration_set";
    return SesConfigurationSet;
}(cdktf.TerraformResource));
exports.SesConfigurationSet = SesConfigurationSet;
