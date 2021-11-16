"use strict";
// https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html
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
exports.DataAwsRdsOrderableDbInstance = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html aws_rds_orderable_db_instance}
*/
var DataAwsRdsOrderableDbInstance = /** @class */ (function (_super) {
    __extends(DataAwsRdsOrderableDbInstance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html aws_rds_orderable_db_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRdsOrderableDbInstanceConfig
    */
    function DataAwsRdsOrderableDbInstance(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_rds_orderable_db_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._availabilityZoneGroup = config.availabilityZoneGroup;
        _this._engine = config.engine;
        _this._engineVersion = config.engineVersion;
        _this._instanceClass = config.instanceClass;
        _this._licenseModel = config.licenseModel;
        _this._preferredEngineVersions = config.preferredEngineVersions;
        _this._preferredInstanceClasses = config.preferredInstanceClasses;
        _this._storageType = config.storageType;
        _this._supportsEnhancedMonitoring = config.supportsEnhancedMonitoring;
        _this._supportsGlobalDatabases = config.supportsGlobalDatabases;
        _this._supportsIamDatabaseAuthentication = config.supportsIamDatabaseAuthentication;
        _this._supportsIops = config.supportsIops;
        _this._supportsKerberosAuthentication = config.supportsKerberosAuthentication;
        _this._supportsPerformanceInsights = config.supportsPerformanceInsights;
        _this._supportsStorageAutoscaling = config.supportsStorageAutoscaling;
        _this._supportsStorageEncryption = config.supportsStorageEncryption;
        _this._vpc = config.vpc;
        return _this;
    }
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "availabilityZoneGroup", {
        get: function () {
            return this.getStringAttribute('availability_zone_group');
        },
        set: function (value) {
            this._availabilityZoneGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsOrderableDbInstance.prototype.resetAvailabilityZoneGroup = function () {
        this._availabilityZoneGroup = undefined;
    };
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "availabilityZoneGroupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZoneGroup;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "availabilityZones", {
        // availability_zones - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('availability_zones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "engine", {
        get: function () {
            return this.getStringAttribute('engine');
        },
        set: function (value) {
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "engineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "engineVersion", {
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        set: function (value) {
            this._engineVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsOrderableDbInstance.prototype.resetEngineVersion = function () {
        this._engineVersion = undefined;
    };
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "engineVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engineVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "instanceClass", {
        get: function () {
            return this.getStringAttribute('instance_class');
        },
        set: function (value) {
            this._instanceClass = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsOrderableDbInstance.prototype.resetInstanceClass = function () {
        this._instanceClass = undefined;
    };
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "instanceClassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "licenseModel", {
        get: function () {
            return this.getStringAttribute('license_model');
        },
        set: function (value) {
            this._licenseModel = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsOrderableDbInstance.prototype.resetLicenseModel = function () {
        this._licenseModel = undefined;
    };
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "licenseModelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._licenseModel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "maxIopsPerDbInstance", {
        // max_iops_per_db_instance - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_iops_per_db_instance');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "maxIopsPerGib", {
        // max_iops_per_gib - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_iops_per_gib');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "maxStorageSize", {
        // max_storage_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_storage_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "minIopsPerDbInstance", {
        // min_iops_per_db_instance - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('min_iops_per_db_instance');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "minIopsPerGib", {
        // min_iops_per_gib - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('min_iops_per_gib');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "minStorageSize", {
        // min_storage_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('min_storage_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "multiAzCapable", {
        // multi_az_capable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('multi_az_capable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "outpostCapable", {
        // outpost_capable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('outpost_capable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "preferredEngineVersions", {
        get: function () {
            return this.getListAttribute('preferred_engine_versions');
        },
        set: function (value) {
            this._preferredEngineVersions = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsOrderableDbInstance.prototype.resetPreferredEngineVersions = function () {
        this._preferredEngineVersions = undefined;
    };
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "preferredEngineVersionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredEngineVersions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "preferredInstanceClasses", {
        get: function () {
            return this.getListAttribute('preferred_instance_classes');
        },
        set: function (value) {
            this._preferredInstanceClasses = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsOrderableDbInstance.prototype.resetPreferredInstanceClasses = function () {
        this._preferredInstanceClasses = undefined;
    };
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "preferredInstanceClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredInstanceClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "readReplicaCapable", {
        // read_replica_capable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('read_replica_capable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "storageType", {
        get: function () {
            return this.getStringAttribute('storage_type');
        },
        set: function (value) {
            this._storageType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsOrderableDbInstance.prototype.resetStorageType = function () {
        this._storageType = undefined;
    };
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "storageTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "supportedEngineModes", {
        // supported_engine_modes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('supported_engine_modes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "supportsEnhancedMonitoring", {
        get: function () {
            return this.getBooleanAttribute('supports_enhanced_monitoring');
        },
        set: function (value) {
            this._supportsEnhancedMonitoring = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsOrderableDbInstance.prototype.resetSupportsEnhancedMonitoring = function () {
        this._supportsEnhancedMonitoring = undefined;
    };
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "supportsEnhancedMonitoringInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._supportsEnhancedMonitoring;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "supportsGlobalDatabases", {
        get: function () {
            return this.getBooleanAttribute('supports_global_databases');
        },
        set: function (value) {
            this._supportsGlobalDatabases = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsOrderableDbInstance.prototype.resetSupportsGlobalDatabases = function () {
        this._supportsGlobalDatabases = undefined;
    };
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "supportsGlobalDatabasesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._supportsGlobalDatabases;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "supportsIamDatabaseAuthentication", {
        get: function () {
            return this.getBooleanAttribute('supports_iam_database_authentication');
        },
        set: function (value) {
            this._supportsIamDatabaseAuthentication = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsOrderableDbInstance.prototype.resetSupportsIamDatabaseAuthentication = function () {
        this._supportsIamDatabaseAuthentication = undefined;
    };
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "supportsIamDatabaseAuthenticationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._supportsIamDatabaseAuthentication;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "supportsIops", {
        get: function () {
            return this.getBooleanAttribute('supports_iops');
        },
        set: function (value) {
            this._supportsIops = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsOrderableDbInstance.prototype.resetSupportsIops = function () {
        this._supportsIops = undefined;
    };
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "supportsIopsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._supportsIops;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "supportsKerberosAuthentication", {
        get: function () {
            return this.getBooleanAttribute('supports_kerberos_authentication');
        },
        set: function (value) {
            this._supportsKerberosAuthentication = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsOrderableDbInstance.prototype.resetSupportsKerberosAuthentication = function () {
        this._supportsKerberosAuthentication = undefined;
    };
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "supportsKerberosAuthenticationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._supportsKerberosAuthentication;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "supportsPerformanceInsights", {
        get: function () {
            return this.getBooleanAttribute('supports_performance_insights');
        },
        set: function (value) {
            this._supportsPerformanceInsights = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsOrderableDbInstance.prototype.resetSupportsPerformanceInsights = function () {
        this._supportsPerformanceInsights = undefined;
    };
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "supportsPerformanceInsightsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._supportsPerformanceInsights;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "supportsStorageAutoscaling", {
        get: function () {
            return this.getBooleanAttribute('supports_storage_autoscaling');
        },
        set: function (value) {
            this._supportsStorageAutoscaling = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsOrderableDbInstance.prototype.resetSupportsStorageAutoscaling = function () {
        this._supportsStorageAutoscaling = undefined;
    };
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "supportsStorageAutoscalingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._supportsStorageAutoscaling;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "supportsStorageEncryption", {
        get: function () {
            return this.getBooleanAttribute('supports_storage_encryption');
        },
        set: function (value) {
            this._supportsStorageEncryption = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsOrderableDbInstance.prototype.resetSupportsStorageEncryption = function () {
        this._supportsStorageEncryption = undefined;
    };
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "supportsStorageEncryptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._supportsStorageEncryption;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "vpc", {
        get: function () {
            return this.getBooleanAttribute('vpc');
        },
        set: function (value) {
            this._vpc = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsOrderableDbInstance.prototype.resetVpc = function () {
        this._vpc = undefined;
    };
    Object.defineProperty(DataAwsRdsOrderableDbInstance.prototype, "vpcInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpc;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsRdsOrderableDbInstance.prototype.synthesizeAttributes = function () {
        return {
            availability_zone_group: cdktf.stringToTerraform(this._availabilityZoneGroup),
            engine: cdktf.stringToTerraform(this._engine),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            instance_class: cdktf.stringToTerraform(this._instanceClass),
            license_model: cdktf.stringToTerraform(this._licenseModel),
            preferred_engine_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredEngineVersions),
            preferred_instance_classes: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredInstanceClasses),
            storage_type: cdktf.stringToTerraform(this._storageType),
            supports_enhanced_monitoring: cdktf.booleanToTerraform(this._supportsEnhancedMonitoring),
            supports_global_databases: cdktf.booleanToTerraform(this._supportsGlobalDatabases),
            supports_iam_database_authentication: cdktf.booleanToTerraform(this._supportsIamDatabaseAuthentication),
            supports_iops: cdktf.booleanToTerraform(this._supportsIops),
            supports_kerberos_authentication: cdktf.booleanToTerraform(this._supportsKerberosAuthentication),
            supports_performance_insights: cdktf.booleanToTerraform(this._supportsPerformanceInsights),
            supports_storage_autoscaling: cdktf.booleanToTerraform(this._supportsStorageAutoscaling),
            supports_storage_encryption: cdktf.booleanToTerraform(this._supportsStorageEncryption),
            vpc: cdktf.booleanToTerraform(this._vpc)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsRdsOrderableDbInstance.tfResourceType = "aws_rds_orderable_db_instance";
    return DataAwsRdsOrderableDbInstance;
}(cdktf.TerraformDataSource));
exports.DataAwsRdsOrderableDbInstance = DataAwsRdsOrderableDbInstance;
