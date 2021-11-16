"use strict";
// https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html
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
exports.AthenaWorkgroup = void 0;
var cdktf = require("cdktf");
function athenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        encryption_option: cdktf.stringToTerraform(struct.encryptionOption),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn)
    };
}
function athenaWorkgroupConfigurationResultConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        output_location: cdktf.stringToTerraform(struct.outputLocation),
        encryption_configuration: cdktf.listMapper(athenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationToTerraform)(struct.encryptionConfiguration)
    };
}
function athenaWorkgroupConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bytes_scanned_cutoff_per_query: cdktf.numberToTerraform(struct.bytesScannedCutoffPerQuery),
        enforce_workgroup_configuration: cdktf.booleanToTerraform(struct.enforceWorkgroupConfiguration),
        publish_cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct.publishCloudwatchMetricsEnabled),
        requester_pays_enabled: cdktf.booleanToTerraform(struct.requesterPaysEnabled),
        result_configuration: cdktf.listMapper(athenaWorkgroupConfigurationResultConfigurationToTerraform)(struct.resultConfiguration)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html aws_athena_workgroup}
*/
var AthenaWorkgroup = /** @class */ (function (_super) {
    __extends(AthenaWorkgroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html aws_athena_workgroup} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AthenaWorkgroupConfig
    */
    function AthenaWorkgroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_athena_workgroup',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._forceDestroy = config.forceDestroy;
        _this._name = config.name;
        _this._state = config.state;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._configuration = config.configuration;
        return _this;
    }
    Object.defineProperty(AthenaWorkgroup.prototype, "arn", {
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
    Object.defineProperty(AthenaWorkgroup.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AthenaWorkgroup.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AthenaWorkgroup.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaWorkgroup.prototype, "forceDestroy", {
        get: function () {
            return this.getBooleanAttribute('force_destroy');
        },
        set: function (value) {
            this._forceDestroy = value;
        },
        enumerable: false,
        configurable: true
    });
    AthenaWorkgroup.prototype.resetForceDestroy = function () {
        this._forceDestroy = undefined;
    };
    Object.defineProperty(AthenaWorkgroup.prototype, "forceDestroyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceDestroy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaWorkgroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaWorkgroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaWorkgroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaWorkgroup.prototype, "state", {
        get: function () {
            return this.getStringAttribute('state');
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    AthenaWorkgroup.prototype.resetState = function () {
        this._state = undefined;
    };
    Object.defineProperty(AthenaWorkgroup.prototype, "stateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaWorkgroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AthenaWorkgroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AthenaWorkgroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaWorkgroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AthenaWorkgroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AthenaWorkgroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaWorkgroup.prototype, "configuration", {
        get: function () {
            return this.interpolationForAttribute('configuration');
        },
        set: function (value) {
            this._configuration = value;
        },
        enumerable: false,
        configurable: true
    });
    AthenaWorkgroup.prototype.resetConfiguration = function () {
        this._configuration = undefined;
    };
    Object.defineProperty(AthenaWorkgroup.prototype, "configurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configuration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AthenaWorkgroup.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
            name: cdktf.stringToTerraform(this._name),
            state: cdktf.stringToTerraform(this._state),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            configuration: cdktf.listMapper(athenaWorkgroupConfigurationToTerraform)(this._configuration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AthenaWorkgroup.tfResourceType = "aws_athena_workgroup";
    return AthenaWorkgroup;
}(cdktf.TerraformResource));
exports.AthenaWorkgroup = AthenaWorkgroup;
