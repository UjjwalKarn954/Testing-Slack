"use strict";
// https://www.terraform.io/docs/providers/aws/d/neptune_engine_version.html
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
exports.DataAwsNeptuneEngineVersion = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version.html aws_neptune_engine_version}
*/
var DataAwsNeptuneEngineVersion = /** @class */ (function (_super) {
    __extends(DataAwsNeptuneEngineVersion, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version.html aws_neptune_engine_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNeptuneEngineVersionConfig = {}
    */
    function DataAwsNeptuneEngineVersion(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_neptune_engine_version',
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
    Object.defineProperty(DataAwsNeptuneEngineVersion.prototype, "engine", {
        get: function () {
            return this.getStringAttribute('engine');
        },
        set: function (value) {
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsNeptuneEngineVersion.prototype.resetEngine = function () {
        this._engine = undefined;
    };
    Object.defineProperty(DataAwsNeptuneEngineVersion.prototype, "engineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNeptuneEngineVersion.prototype, "engineDescription", {
        // engine_description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine_description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNeptuneEngineVersion.prototype, "exportableLogTypes", {
        // exportable_log_types - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('exportable_log_types');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNeptuneEngineVersion.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNeptuneEngineVersion.prototype, "parameterGroupFamily", {
        get: function () {
            return this.getStringAttribute('parameter_group_family');
        },
        set: function (value) {
            this._parameterGroupFamily = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsNeptuneEngineVersion.prototype.resetParameterGroupFamily = function () {
        this._parameterGroupFamily = undefined;
    };
    Object.defineProperty(DataAwsNeptuneEngineVersion.prototype, "parameterGroupFamilyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameterGroupFamily;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNeptuneEngineVersion.prototype, "preferredVersions", {
        get: function () {
            return this.getListAttribute('preferred_versions');
        },
        set: function (value) {
            this._preferredVersions = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsNeptuneEngineVersion.prototype.resetPreferredVersions = function () {
        this._preferredVersions = undefined;
    };
    Object.defineProperty(DataAwsNeptuneEngineVersion.prototype, "preferredVersionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredVersions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNeptuneEngineVersion.prototype, "supportedTimezones", {
        // supported_timezones - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('supported_timezones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNeptuneEngineVersion.prototype, "supportsLogExportsToCloudwatch", {
        // supports_log_exports_to_cloudwatch - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('supports_log_exports_to_cloudwatch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNeptuneEngineVersion.prototype, "supportsReadReplica", {
        // supports_read_replica - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('supports_read_replica');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNeptuneEngineVersion.prototype, "validUpgradeTargets", {
        // valid_upgrade_targets - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('valid_upgrade_targets');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNeptuneEngineVersion.prototype, "version", {
        get: function () {
            return this.getStringAttribute('version');
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsNeptuneEngineVersion.prototype.resetVersion = function () {
        this._version = undefined;
    };
    Object.defineProperty(DataAwsNeptuneEngineVersion.prototype, "versionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNeptuneEngineVersion.prototype, "versionDescription", {
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
    DataAwsNeptuneEngineVersion.prototype.synthesizeAttributes = function () {
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
    DataAwsNeptuneEngineVersion.tfResourceType = "aws_neptune_engine_version";
    return DataAwsNeptuneEngineVersion;
}(cdktf.TerraformDataSource));
exports.DataAwsNeptuneEngineVersion = DataAwsNeptuneEngineVersion;
