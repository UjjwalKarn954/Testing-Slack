"use strict";
// https://www.terraform.io/docs/providers/aws/d/rds_engine_version.html
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
exports.DataAwsRdsEngineVersion = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version.html aws_rds_engine_version}
*/
var DataAwsRdsEngineVersion = /** @class */ (function (_super) {
    __extends(DataAwsRdsEngineVersion, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version.html aws_rds_engine_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRdsEngineVersionConfig
    */
    function DataAwsRdsEngineVersion(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_rds_engine_version',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._engine = config.engine;
        _this._parameterGroupFamily = config.parameterGroupFamily;
        _this._preferredVersions = config.preferredVersions;
        _this._version = config.version;
        return _this;
    }
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "defaultCharacterSet", {
        // ==========
        // ATTRIBUTES
        // ==========
        // default_character_set - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_character_set');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "engine", {
        get: function () {
            return this.getStringAttribute('engine');
        },
        set: function (value) {
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "engineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "engineDescription", {
        // engine_description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine_description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "exportableLogTypes", {
        // exportable_log_types - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('exportable_log_types');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "parameterGroupFamily", {
        get: function () {
            return this.getStringAttribute('parameter_group_family');
        },
        set: function (value) {
            this._parameterGroupFamily = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsEngineVersion.prototype.resetParameterGroupFamily = function () {
        this._parameterGroupFamily = undefined;
    };
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "parameterGroupFamilyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameterGroupFamily;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "preferredVersions", {
        get: function () {
            return this.getListAttribute('preferred_versions');
        },
        set: function (value) {
            this._preferredVersions = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsEngineVersion.prototype.resetPreferredVersions = function () {
        this._preferredVersions = undefined;
    };
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "preferredVersionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredVersions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "supportedCharacterSets", {
        // supported_character_sets - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('supported_character_sets');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "supportedFeatureNames", {
        // supported_feature_names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('supported_feature_names');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "supportedModes", {
        // supported_modes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('supported_modes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "supportedTimezones", {
        // supported_timezones - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('supported_timezones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "supportsGlobalDatabases", {
        // supports_global_databases - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('supports_global_databases');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "supportsLogExportsToCloudwatch", {
        // supports_log_exports_to_cloudwatch - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('supports_log_exports_to_cloudwatch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "supportsParallelQuery", {
        // supports_parallel_query - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('supports_parallel_query');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "supportsReadReplica", {
        // supports_read_replica - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('supports_read_replica');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "validUpgradeTargets", {
        // valid_upgrade_targets - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('valid_upgrade_targets');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "version", {
        get: function () {
            return this.getStringAttribute('version');
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsEngineVersion.prototype.resetVersion = function () {
        this._version = undefined;
    };
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "versionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsEngineVersion.prototype, "versionDescription", {
        // version_description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version_description');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsRdsEngineVersion.prototype.synthesizeAttributes = function () {
        return {
            engine: cdktf.stringToTerraform(this._engine),
            parameter_group_family: cdktf.stringToTerraform(this._parameterGroupFamily),
            preferred_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredVersions),
            version: cdktf.stringToTerraform(this._version)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsRdsEngineVersion.tfResourceType = "aws_rds_engine_version";
    return DataAwsRdsEngineVersion;
}(cdktf.TerraformDataSource));
exports.DataAwsRdsEngineVersion = DataAwsRdsEngineVersion;
