"use strict";
// https://www.terraform.io/docs/providers/aws/d/db_instance.html
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
exports.DataAwsDbInstance = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_instance.html aws_db_instance}
*/
var DataAwsDbInstance = /** @class */ (function (_super) {
    __extends(DataAwsDbInstance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_instance.html aws_db_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDbInstanceConfig
    */
    function DataAwsDbInstance(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_db_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._dbInstanceIdentifier = config.dbInstanceIdentifier;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsDbInstance.prototype, "address", {
        // ==========
        // ATTRIBUTES
        // ==========
        // address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "allocatedStorage", {
        // allocated_storage - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('allocated_storage');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "autoMinorVersionUpgrade", {
        // auto_minor_version_upgrade - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('auto_minor_version_upgrade');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "availabilityZone", {
        // availability_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "backupRetentionPeriod", {
        // backup_retention_period - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('backup_retention_period');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "caCertIdentifier", {
        // ca_cert_identifier - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ca_cert_identifier');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "dbClusterIdentifier", {
        // db_cluster_identifier - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('db_cluster_identifier');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "dbInstanceArn", {
        // db_instance_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('db_instance_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "dbInstanceClass", {
        // db_instance_class - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('db_instance_class');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "dbInstanceIdentifier", {
        get: function () {
            return this.getStringAttribute('db_instance_identifier');
        },
        set: function (value) {
            this._dbInstanceIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "dbInstanceIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbInstanceIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "dbInstancePort", {
        // db_instance_port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('db_instance_port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "dbName", {
        // db_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('db_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "dbParameterGroups", {
        // db_parameter_groups - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('db_parameter_groups');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "dbSecurityGroups", {
        // db_security_groups - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('db_security_groups');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "dbSubnetGroup", {
        // db_subnet_group - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('db_subnet_group');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "enabledCloudwatchLogsExports", {
        // enabled_cloudwatch_logs_exports - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('enabled_cloudwatch_logs_exports');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "engine", {
        // engine - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "engineVersion", {
        // engine_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "hostedZoneId", {
        // hosted_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hosted_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "iops", {
        // iops - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('iops');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "licenseModel", {
        // license_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('license_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "masterUsername", {
        // master_username - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('master_username');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "monitoringInterval", {
        // monitoring_interval - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('monitoring_interval');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "monitoringRoleArn", {
        // monitoring_role_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('monitoring_role_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "multiAz", {
        // multi_az - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('multi_az');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "optionGroupMemberships", {
        // option_group_memberships - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('option_group_memberships');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "preferredBackupWindow", {
        // preferred_backup_window - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preferred_backup_window');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "preferredMaintenanceWindow", {
        // preferred_maintenance_window - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preferred_maintenance_window');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "publiclyAccessible", {
        // publicly_accessible - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('publicly_accessible');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "replicateSourceDb", {
        // replicate_source_db - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('replicate_source_db');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "resourceId", {
        // resource_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "storageEncrypted", {
        // storage_encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('storage_encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "storageType", {
        // storage_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('storage_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDbInstance.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsDbInstance.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "timezone", {
        // timezone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('timezone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbInstance.prototype, "vpcSecurityGroups", {
        // vpc_security_groups - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('vpc_security_groups');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsDbInstance.prototype.synthesizeAttributes = function () {
        return {
            db_instance_identifier: cdktf.stringToTerraform(this._dbInstanceIdentifier),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsDbInstance.tfResourceType = "aws_db_instance";
    return DataAwsDbInstance;
}(cdktf.TerraformDataSource));
exports.DataAwsDbInstance = DataAwsDbInstance;
