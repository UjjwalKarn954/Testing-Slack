"use strict";
// https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html
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
exports.SesEventDestination = void 0;
var cdktf = require("cdktf");
function sesEventDestinationCloudwatchDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        default_value: cdktf.stringToTerraform(struct.defaultValue),
        dimension_name: cdktf.stringToTerraform(struct.dimensionName),
        value_source: cdktf.stringToTerraform(struct.valueSource)
    };
}
function sesEventDestinationKinesisDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        stream_arn: cdktf.stringToTerraform(struct.streamArn)
    };
}
function sesEventDestinationSnsDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        topic_arn: cdktf.stringToTerraform(struct.topicArn)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html aws_ses_event_destination}
*/
var SesEventDestination = /** @class */ (function (_super) {
    __extends(SesEventDestination, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html aws_ses_event_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesEventDestinationConfig
    */
    function SesEventDestination(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ses_event_destination',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._configurationSetName = config.configurationSetName;
        _this._enabled = config.enabled;
        _this._matchingTypes = config.matchingTypes;
        _this._name = config.name;
        _this._cloudwatchDestination = config.cloudwatchDestination;
        _this._kinesisDestination = config.kinesisDestination;
        _this._snsDestination = config.snsDestination;
        return _this;
    }
    Object.defineProperty(SesEventDestination.prototype, "arn", {
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
    Object.defineProperty(SesEventDestination.prototype, "configurationSetName", {
        get: function () {
            return this.getStringAttribute('configuration_set_name');
        },
        set: function (value) {
            this._configurationSetName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesEventDestination.prototype, "configurationSetNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configurationSetName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesEventDestination.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    SesEventDestination.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(SesEventDestination.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesEventDestination.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesEventDestination.prototype, "matchingTypes", {
        get: function () {
            return this.getListAttribute('matching_types');
        },
        set: function (value) {
            this._matchingTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesEventDestination.prototype, "matchingTypesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._matchingTypes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesEventDestination.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesEventDestination.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesEventDestination.prototype, "cloudwatchDestination", {
        get: function () {
            return this.interpolationForAttribute('cloudwatch_destination');
        },
        set: function (value) {
            this._cloudwatchDestination = value;
        },
        enumerable: false,
        configurable: true
    });
    SesEventDestination.prototype.resetCloudwatchDestination = function () {
        this._cloudwatchDestination = undefined;
    };
    Object.defineProperty(SesEventDestination.prototype, "cloudwatchDestinationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudwatchDestination;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesEventDestination.prototype, "kinesisDestination", {
        get: function () {
            return this.interpolationForAttribute('kinesis_destination');
        },
        set: function (value) {
            this._kinesisDestination = value;
        },
        enumerable: false,
        configurable: true
    });
    SesEventDestination.prototype.resetKinesisDestination = function () {
        this._kinesisDestination = undefined;
    };
    Object.defineProperty(SesEventDestination.prototype, "kinesisDestinationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kinesisDestination;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesEventDestination.prototype, "snsDestination", {
        get: function () {
            return this.interpolationForAttribute('sns_destination');
        },
        set: function (value) {
            this._snsDestination = value;
        },
        enumerable: false,
        configurable: true
    });
    SesEventDestination.prototype.resetSnsDestination = function () {
        this._snsDestination = undefined;
    };
    Object.defineProperty(SesEventDestination.prototype, "snsDestinationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snsDestination;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SesEventDestination.prototype.synthesizeAttributes = function () {
        return {
            configuration_set_name: cdktf.stringToTerraform(this._configurationSetName),
            enabled: cdktf.booleanToTerraform(this._enabled),
            matching_types: cdktf.listMapper(cdktf.stringToTerraform)(this._matchingTypes),
            name: cdktf.stringToTerraform(this._name),
            cloudwatch_destination: cdktf.listMapper(sesEventDestinationCloudwatchDestinationToTerraform)(this._cloudwatchDestination),
            kinesis_destination: cdktf.listMapper(sesEventDestinationKinesisDestinationToTerraform)(this._kinesisDestination),
            sns_destination: cdktf.listMapper(sesEventDestinationSnsDestinationToTerraform)(this._snsDestination)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SesEventDestination.tfResourceType = "aws_ses_event_destination";
    return SesEventDestination;
}(cdktf.TerraformResource));
exports.SesEventDestination = SesEventDestination;
