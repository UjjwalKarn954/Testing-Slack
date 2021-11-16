"use strict";
// https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html
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
exports.RdsClusterInstance = void 0;
var cdktf = require("cdktf");
function rdsClusterInstanceTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html aws_rds_cluster_instance}
*/
var RdsClusterInstance = /** @class */ (function (_super) {
    __extends(RdsClusterInstance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html aws_rds_cluster_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterInstanceConfig
    */
    function RdsClusterInstance(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_rds_cluster_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._applyImmediately = config.applyImmediately;
        _this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
        _this._availabilityZone = config.availabilityZone;
        _this._caCertIdentifier = config.caCertIdentifier;
        _this._clusterIdentifier = config.clusterIdentifier;
        _this._copyTagsToSnapshot = config.copyTagsToSnapshot;
        _this._dbParameterGroupName = config.dbParameterGroupName;
        _this._dbSubnetGroupName = config.dbSubnetGroupName;
        _this._engine = config.engine;
        _this._engineVersion = config.engineVersion;
        _this._identifier = config.identifier;
        _this._identifierPrefix = config.identifierPrefix;
        _this._instanceClass = config.instanceClass;
        _this._monitoringInterval = config.monitoringInterval;
        _this._monitoringRoleArn = config.monitoringRoleArn;
        _this._performanceInsightsEnabled = config.performanceInsightsEnabled;
        _this._performanceInsightsKmsKeyId = config.performanceInsightsKmsKeyId;
        _this._performanceInsightsRetentionPeriod = config.performanceInsightsRetentionPeriod;
        _this._preferredBackupWindow = config.preferredBackupWindow;
        _this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        _this._promotionTier = config.promotionTier;
        _this._publiclyAccessible = config.publiclyAccessible;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(RdsClusterInstance.prototype, "applyImmediately", {
        get: function () {
            return this.getBooleanAttribute('apply_immediately');
        },
        set: function (value) {
            this._applyImmediately = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetApplyImmediately = function () {
        this._applyImmediately = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "applyImmediatelyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applyImmediately;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "autoMinorVersionUpgrade", {
        get: function () {
            return this.getBooleanAttribute('auto_minor_version_upgrade');
        },
        set: function (value) {
            this._autoMinorVersionUpgrade = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetAutoMinorVersionUpgrade = function () {
        this._autoMinorVersionUpgrade = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "autoMinorVersionUpgradeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoMinorVersionUpgrade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetAvailabilityZone = function () {
        this._availabilityZone = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "caCertIdentifier", {
        get: function () {
            return this.getStringAttribute('ca_cert_identifier');
        },
        set: function (value) {
            this._caCertIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetCaCertIdentifier = function () {
        this._caCertIdentifier = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "caCertIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._caCertIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "clusterIdentifier", {
        get: function () {
            return this.getStringAttribute('cluster_identifier');
        },
        set: function (value) {
            this._clusterIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "clusterIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "copyTagsToSnapshot", {
        get: function () {
            return this.getBooleanAttribute('copy_tags_to_snapshot');
        },
        set: function (value) {
            this._copyTagsToSnapshot = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetCopyTagsToSnapshot = function () {
        this._copyTagsToSnapshot = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "copyTagsToSnapshotInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._copyTagsToSnapshot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "dbParameterGroupName", {
        get: function () {
            return this.getStringAttribute('db_parameter_group_name');
        },
        set: function (value) {
            this._dbParameterGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetDbParameterGroupName = function () {
        this._dbParameterGroupName = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "dbParameterGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbParameterGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "dbSubnetGroupName", {
        get: function () {
            return this.getStringAttribute('db_subnet_group_name');
        },
        set: function (value) {
            this._dbSubnetGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetDbSubnetGroupName = function () {
        this._dbSubnetGroupName = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "dbSubnetGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbSubnetGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "dbiResourceId", {
        // dbi_resource_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dbi_resource_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "engine", {
        get: function () {
            return this.getStringAttribute('engine');
        },
        set: function (value) {
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetEngine = function () {
        this._engine = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "engineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "engineVersion", {
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        set: function (value) {
            this._engineVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetEngineVersion = function () {
        this._engineVersion = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "engineVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engineVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "engineVersionActual", {
        // engine_version_actual - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine_version_actual');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "identifier", {
        get: function () {
            return this.getStringAttribute('identifier');
        },
        set: function (value) {
            this._identifier = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetIdentifier = function () {
        this._identifier = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "identifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "identifierPrefix", {
        get: function () {
            return this.getStringAttribute('identifier_prefix');
        },
        set: function (value) {
            this._identifierPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetIdentifierPrefix = function () {
        this._identifierPrefix = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "identifierPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identifierPrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "instanceClass", {
        get: function () {
            return this.getStringAttribute('instance_class');
        },
        set: function (value) {
            this._instanceClass = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "instanceClassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "monitoringInterval", {
        get: function () {
            return this.getNumberAttribute('monitoring_interval');
        },
        set: function (value) {
            this._monitoringInterval = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetMonitoringInterval = function () {
        this._monitoringInterval = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "monitoringIntervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._monitoringInterval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "monitoringRoleArn", {
        get: function () {
            return this.getStringAttribute('monitoring_role_arn');
        },
        set: function (value) {
            this._monitoringRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetMonitoringRoleArn = function () {
        this._monitoringRoleArn = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "monitoringRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._monitoringRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "performanceInsightsEnabled", {
        get: function () {
            return this.getBooleanAttribute('performance_insights_enabled');
        },
        set: function (value) {
            this._performanceInsightsEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetPerformanceInsightsEnabled = function () {
        this._performanceInsightsEnabled = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "performanceInsightsEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._performanceInsightsEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "performanceInsightsKmsKeyId", {
        get: function () {
            return this.getStringAttribute('performance_insights_kms_key_id');
        },
        set: function (value) {
            this._performanceInsightsKmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetPerformanceInsightsKmsKeyId = function () {
        this._performanceInsightsKmsKeyId = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "performanceInsightsKmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._performanceInsightsKmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "performanceInsightsRetentionPeriod", {
        get: function () {
            return this.getNumberAttribute('performance_insights_retention_period');
        },
        set: function (value) {
            this._performanceInsightsRetentionPeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetPerformanceInsightsRetentionPeriod = function () {
        this._performanceInsightsRetentionPeriod = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "performanceInsightsRetentionPeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._performanceInsightsRetentionPeriod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "preferredBackupWindow", {
        get: function () {
            return this.getStringAttribute('preferred_backup_window');
        },
        set: function (value) {
            this._preferredBackupWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetPreferredBackupWindow = function () {
        this._preferredBackupWindow = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "preferredBackupWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredBackupWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "preferredMaintenanceWindow", {
        get: function () {
            return this.getStringAttribute('preferred_maintenance_window');
        },
        set: function (value) {
            this._preferredMaintenanceWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetPreferredMaintenanceWindow = function () {
        this._preferredMaintenanceWindow = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "preferredMaintenanceWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredMaintenanceWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "promotionTier", {
        get: function () {
            return this.getNumberAttribute('promotion_tier');
        },
        set: function (value) {
            this._promotionTier = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetPromotionTier = function () {
        this._promotionTier = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "promotionTierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._promotionTier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "publiclyAccessible", {
        get: function () {
            return this.getBooleanAttribute('publicly_accessible');
        },
        set: function (value) {
            this._publiclyAccessible = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetPubliclyAccessible = function () {
        this._publiclyAccessible = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "publiclyAccessibleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publiclyAccessible;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "storageEncrypted", {
        // storage_encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('storage_encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "writer", {
        // writer - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('writer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterInstance.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterInstance.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(RdsClusterInstance.prototype, "timeoutsInput", {
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
    RdsClusterInstance.prototype.synthesizeAttributes = function () {
        return {
            apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
            auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            ca_cert_identifier: cdktf.stringToTerraform(this._caCertIdentifier),
            cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
            copy_tags_to_snapshot: cdktf.booleanToTerraform(this._copyTagsToSnapshot),
            db_parameter_group_name: cdktf.stringToTerraform(this._dbParameterGroupName),
            db_subnet_group_name: cdktf.stringToTerraform(this._dbSubnetGroupName),
            engine: cdktf.stringToTerraform(this._engine),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            identifier: cdktf.stringToTerraform(this._identifier),
            identifier_prefix: cdktf.stringToTerraform(this._identifierPrefix),
            instance_class: cdktf.stringToTerraform(this._instanceClass),
            monitoring_interval: cdktf.numberToTerraform(this._monitoringInterval),
            monitoring_role_arn: cdktf.stringToTerraform(this._monitoringRoleArn),
            performance_insights_enabled: cdktf.booleanToTerraform(this._performanceInsightsEnabled),
            performance_insights_kms_key_id: cdktf.stringToTerraform(this._performanceInsightsKmsKeyId),
            performance_insights_retention_period: cdktf.numberToTerraform(this._performanceInsightsRetentionPeriod),
            preferred_backup_window: cdktf.stringToTerraform(this._preferredBackupWindow),
            preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
            promotion_tier: cdktf.numberToTerraform(this._promotionTier),
            publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeouts: rdsClusterInstanceTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    RdsClusterInstance.tfResourceType = "aws_rds_cluster_instance";
    return RdsClusterInstance;
}(cdktf.TerraformResource));
exports.RdsClusterInstance = RdsClusterInstance;
