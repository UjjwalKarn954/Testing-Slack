"use strict";
// https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html
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
exports.DmsReplicationInstance = void 0;
var cdktf = require("cdktf");
function dmsReplicationInstanceTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html aws_dms_replication_instance}
*/
var DmsReplicationInstance = /** @class */ (function (_super) {
    __extends(DmsReplicationInstance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html aws_dms_replication_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsReplicationInstanceConfig
    */
    function DmsReplicationInstance(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dms_replication_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._allocatedStorage = config.allocatedStorage;
        _this._allowMajorVersionUpgrade = config.allowMajorVersionUpgrade;
        _this._applyImmediately = config.applyImmediately;
        _this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
        _this._availabilityZone = config.availabilityZone;
        _this._engineVersion = config.engineVersion;
        _this._kmsKeyArn = config.kmsKeyArn;
        _this._multiAz = config.multiAz;
        _this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        _this._publiclyAccessible = config.publiclyAccessible;
        _this._replicationInstanceClass = config.replicationInstanceClass;
        _this._replicationInstanceId = config.replicationInstanceId;
        _this._replicationSubnetGroupId = config.replicationSubnetGroupId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DmsReplicationInstance.prototype, "allocatedStorage", {
        get: function () {
            return this.getNumberAttribute('allocated_storage');
        },
        set: function (value) {
            this._allocatedStorage = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationInstance.prototype.resetAllocatedStorage = function () {
        this._allocatedStorage = undefined;
    };
    Object.defineProperty(DmsReplicationInstance.prototype, "allocatedStorageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allocatedStorage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "allowMajorVersionUpgrade", {
        get: function () {
            return this.getBooleanAttribute('allow_major_version_upgrade');
        },
        set: function (value) {
            this._allowMajorVersionUpgrade = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationInstance.prototype.resetAllowMajorVersionUpgrade = function () {
        this._allowMajorVersionUpgrade = undefined;
    };
    Object.defineProperty(DmsReplicationInstance.prototype, "allowMajorVersionUpgradeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowMajorVersionUpgrade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "applyImmediately", {
        get: function () {
            return this.getBooleanAttribute('apply_immediately');
        },
        set: function (value) {
            this._applyImmediately = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationInstance.prototype.resetApplyImmediately = function () {
        this._applyImmediately = undefined;
    };
    Object.defineProperty(DmsReplicationInstance.prototype, "applyImmediatelyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applyImmediately;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "autoMinorVersionUpgrade", {
        get: function () {
            return this.getBooleanAttribute('auto_minor_version_upgrade');
        },
        set: function (value) {
            this._autoMinorVersionUpgrade = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationInstance.prototype.resetAutoMinorVersionUpgrade = function () {
        this._autoMinorVersionUpgrade = undefined;
    };
    Object.defineProperty(DmsReplicationInstance.prototype, "autoMinorVersionUpgradeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoMinorVersionUpgrade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationInstance.prototype.resetAvailabilityZone = function () {
        this._availabilityZone = undefined;
    };
    Object.defineProperty(DmsReplicationInstance.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "engineVersion", {
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        set: function (value) {
            this._engineVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationInstance.prototype.resetEngineVersion = function () {
        this._engineVersion = undefined;
    };
    Object.defineProperty(DmsReplicationInstance.prototype, "engineVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engineVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "kmsKeyArn", {
        get: function () {
            return this.getStringAttribute('kms_key_arn');
        },
        set: function (value) {
            this._kmsKeyArn = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationInstance.prototype.resetKmsKeyArn = function () {
        this._kmsKeyArn = undefined;
    };
    Object.defineProperty(DmsReplicationInstance.prototype, "kmsKeyArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "multiAz", {
        get: function () {
            return this.getBooleanAttribute('multi_az');
        },
        set: function (value) {
            this._multiAz = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationInstance.prototype.resetMultiAz = function () {
        this._multiAz = undefined;
    };
    Object.defineProperty(DmsReplicationInstance.prototype, "multiAzInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._multiAz;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "preferredMaintenanceWindow", {
        get: function () {
            return this.getStringAttribute('preferred_maintenance_window');
        },
        set: function (value) {
            this._preferredMaintenanceWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationInstance.prototype.resetPreferredMaintenanceWindow = function () {
        this._preferredMaintenanceWindow = undefined;
    };
    Object.defineProperty(DmsReplicationInstance.prototype, "preferredMaintenanceWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredMaintenanceWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "publiclyAccessible", {
        get: function () {
            return this.getBooleanAttribute('publicly_accessible');
        },
        set: function (value) {
            this._publiclyAccessible = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationInstance.prototype.resetPubliclyAccessible = function () {
        this._publiclyAccessible = undefined;
    };
    Object.defineProperty(DmsReplicationInstance.prototype, "publiclyAccessibleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publiclyAccessible;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "replicationInstanceArn", {
        // replication_instance_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('replication_instance_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "replicationInstanceClass", {
        get: function () {
            return this.getStringAttribute('replication_instance_class');
        },
        set: function (value) {
            this._replicationInstanceClass = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "replicationInstanceClassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicationInstanceClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "replicationInstanceId", {
        get: function () {
            return this.getStringAttribute('replication_instance_id');
        },
        set: function (value) {
            this._replicationInstanceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "replicationInstanceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicationInstanceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "replicationInstancePrivateIps", {
        // replication_instance_private_ips - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('replication_instance_private_ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "replicationInstancePublicIps", {
        // replication_instance_public_ips - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('replication_instance_public_ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "replicationSubnetGroupId", {
        get: function () {
            return this.getStringAttribute('replication_subnet_group_id');
        },
        set: function (value) {
            this._replicationSubnetGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationInstance.prototype.resetReplicationSubnetGroupId = function () {
        this._replicationSubnetGroupId = undefined;
    };
    Object.defineProperty(DmsReplicationInstance.prototype, "replicationSubnetGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicationSubnetGroupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationInstance.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DmsReplicationInstance.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationInstance.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DmsReplicationInstance.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "vpcSecurityGroupIds", {
        get: function () {
            return this.getListAttribute('vpc_security_group_ids');
        },
        set: function (value) {
            this._vpcSecurityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationInstance.prototype.resetVpcSecurityGroupIds = function () {
        this._vpcSecurityGroupIds = undefined;
    };
    Object.defineProperty(DmsReplicationInstance.prototype, "vpcSecurityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcSecurityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationInstance.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationInstance.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DmsReplicationInstance.prototype, "timeoutsInput", {
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
    DmsReplicationInstance.prototype.synthesizeAttributes = function () {
        return {
            allocated_storage: cdktf.numberToTerraform(this._allocatedStorage),
            allow_major_version_upgrade: cdktf.booleanToTerraform(this._allowMajorVersionUpgrade),
            apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
            auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
            multi_az: cdktf.booleanToTerraform(this._multiAz),
            preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
            publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
            replication_instance_class: cdktf.stringToTerraform(this._replicationInstanceClass),
            replication_instance_id: cdktf.stringToTerraform(this._replicationInstanceId),
            replication_subnet_group_id: cdktf.stringToTerraform(this._replicationSubnetGroupId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
            timeouts: dmsReplicationInstanceTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DmsReplicationInstance.tfResourceType = "aws_dms_replication_instance";
    return DmsReplicationInstance;
}(cdktf.TerraformResource));
exports.DmsReplicationInstance = DmsReplicationInstance;
